import React, { useState } from "react";
import axios from "axios";
import { Nav, Navbar } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ButtonIcon from "../../components/ButtonIcon";

import Post from "../../components/Post";

import "./community.css";

const Community = props => {
  const accessToken = JSON.parse(localStorage.getItem("authorization"))
    .accessToken;
  const [postText, setPostText] = useState("");
  const [publishingPost, setPublishingPost] = useState(false);

  async function publishPost() {
    setPublishingPost(true);
    try {
      await axios.post("/posts", {
        postText,
        accessToken
      });
    } catch (excep) {
      console.log(excep);
    }
    setPublishingPost(false);
  }

  return (
    <div className="communityContainer">
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand>
          <Link to={"/community"}>
            <img
              src={"/assets/images/glassesWhite.png"}
              alt="Logo"
              className="logoImage"
            ></img>
            Woman Coding
          </Link>
        </Navbar.Brand>
        <FontAwesomeIcon
          className="userIcon"
          icon={faUserCircle}
          color="#fff"
          size="2x"
        />
      </Navbar>
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
                    onChange={e => setPostText(e.target.value)}
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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Container>
      </main>
    </div>
  );
};

export default Community;
