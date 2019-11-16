import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ButtonIcon from "../components/ButtonIcon";
import util from "../util";

import Post from "../components/Post";

import { addToPostList, changePostList } from "../actions";

import "./Feed.css";

const Feed = props => {
  const [postText, setPostText] = useState("");
  const [publishingPost, setPublishingPost] = useState(false);
  const [authorization, setAuthorization] = useState({});

  useEffect(() => {
    if (localStorage.getItem("authorization")) {
      const authorizationItem = JSON.parse(
        localStorage.getItem("authorization")
      );
      setAuthorization(authorizationItem);

      axios
        .get("/api/CommunityPost", {
          headers: { Authorization: "bearer " + authorizationItem.accessToken }
        })
        .then(response => {
          const toSortPostList = response.data;
          toSortPostList.sort((a, b) => {
            return new Date(b.postCreatedDate) - new Date(a.postCreatedDate);
          });
          props.changePostList(response.data);
        });
    } else {
      props.history.push("/login/");
    }
  }, []);

  function verifyKey(e) {
    if (e.key == "Enter" && !e.shiftKey) {
      publishPost();
    }
  }

  async function publishPost() {
    if (postText.length < 1) return;

    setPublishingPost(true);
    try {
      setPostText("");
      const response = await axios.post(
        "/api/CommunityPost",
        {
          postContent: postText,
          userId: authorization.userId,
          postCreatedDate: util.toISOLocal(new Date())
        },
        {
          headers: { Authorization: "bearer " + authorization.accessToken }
        }
      );
      props.addToPostList(response.data);
    } catch (excep) {
      console.log(excep);
    }
    setPublishingPost(false);
  }

  return (
    <div className="communityContainer">
      <main>
        <Container className="postsWidthLimiter">
          <Row>
            <Col md={12}>
              <Row>
                <Col md={12} className="newPostContainer">
                  <span>Escreva uma publicação:</span>
                  <textarea
                    rows="4"
                    placeholder="Oque você aprendeu hoje?"
                    value={postText}
                    spellCheck={false}
                    onChange={e => setPostText(e.target.value)}
                    onKeyDown={verifyKey}
                  ></textarea>
                  <ButtonIcon
                    label="Publicar"
                    icon={faShare}
                    className="alignSelfEnd"
                    small
                    onClick={e => publishPost()}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          {props.postList.map(post => {
            const {
              postId,
              postCreatedDate,
              postTitle,
              postContent,
              userId,
              postedBy
            } = post;
            return (
              <Post
                key={postId}
                postId={postId}
                content={postContent}
                time={postCreatedDate}
                authorization={authorization}
                userId={userId}
              />
            );
          })}
        </Container>
      </main>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changePostList, addToPostList }, dispatch);
};

const mapStateToProps = store => ({
  postList: store.communityState.postList
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Feed));
