import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import "./Post.css";

const Post = props => {
  const [wasLiked, setWasLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const { postId, accessToken } = props;

  async function likedPost() {
    setWasLiked(!wasLiked);
    try {
      const response = await axios.post("/posts/like", {
        postId,
        accessToken
      });
      setLikesCount(response.data.likesCount);
    } catch (excep) {
      console.log(excep);
    }
  }

  return (
    <Row>
      <Col md={12} className="postContainer">
        <Row>
          <Col md={12} className="postHeader">
            <h6>Roberta Santos</h6>
            <span>Desenvolvedora .Net</span>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="postBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            malesuada purus. Sed egestas purus quis quam sollicitudin, quis
            sagittis nunc laoreet. <br />
            <br />
            Nunc semper pharetra magna ut eleifend. Nulla dictum hendrerit dui
            eu finibus. Suspendisse condimentum risus eget ultricies dictum.
            <br />
            <br /> Proin porttitor placerat faucibus. Cras finibus tortor vitae
            nunc convallis dapibus. Interdum et malesuada fames ac ante ipsum
            primis in.
          </Col>
        </Row>
        <Row>
          <Col md={12} className="postFooter">
            <FontAwesomeIcon
              icon={faThumbsUp}
              color={wasLiked ? "#ec407a" : "#fff0"}
              className={wasLiked ? "iconBorder" : "iconBorderActive"}
              size="lg"
              onClick={() => likedPost()}
            />
            <span>{likesCount}</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Post;
