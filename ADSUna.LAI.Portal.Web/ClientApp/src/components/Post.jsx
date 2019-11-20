import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faThumbsUp,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

import { deleteFromPostList } from "../actions";

import "./Post.css";

const Post = props => {
  const [wasLiked, setWasLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [lifeTime, setLifeTime] = useState("");
  const [authorization, setAuthorization] = useState({});

  const { postId, accessToken, userId } = props;

  function refreshLifeTime() {
    const milisegundos = new Date() - new Date(props.time);
    const dias = milisegundos / (60 * 60 * 24 * 1000);
    const horas = milisegundos / (60 * 60 * 1000);
    const minutos = milisegundos / (60 * 1000);

    let tempoFormatado =
      minutos < 1
        ? `Menos de um minuto atrás`
        : minutos < 60
        ? `${Math.floor(minutos)} minuto${
            Math.floor(minutos) != 1 ? "s" : ""
          } atrás`
        : horas < 60
        ? `${Math.floor(horas)} hora${Math.floor(horas) != 1 ? "s" : ""} atrás`
        : `${Math.floor(dias)} dia${Math.floor(dias) != 1 ? "s" : ""} atrás`;
    setLifeTime(tempoFormatado);
  }

  useEffect(() => {
    const authorizationItem = JSON.parse(localStorage.getItem("authorization"));
    setAuthorization(authorizationItem);

    refreshLifeTime();

    setLikesCount(props.likesCount);

    const doILikeIt =
      props.likes.filter(like => {
        return like.userId == authorizationItem.userId;
      }).length > 0;
    setWasLiked(doILikeIt);

    window.setInterval(
      function() {
        refreshLifeTime();
      }.bind(this),
      100
    );
  }, []);

  async function likedPost() {
    setWasLiked(!wasLiked);
    try {
      const response = await axios.post(
        `api/CommunityPost/${wasLiked ? "Un" : ""}LikePost`,
        {
          postId
        },
        {
          headers: {
            Authorization: "bearer " + authorization.accessToken
          }
        }
      );
      setLikesCount(response.data.likesCount);
    } catch (excep) {
      console.log(excep);
    }
  }

  async function deletedPost() {
    try {
      const response = await axios.delete(`/api/CommunityPost/${postId}`, {
        headers: {
          Authorization: "bearer " + authorization.accessToken
        }
      });

      props.deleteFromPostList(postId);
    } catch (excep) {
      console.log(excep);
    }
  }

  return (
    <Row>
      <Col md={12} className="postContainer">
        <Row>
          <Col md={12} className="postHeader">
            <Link to={`/community/profile/${userId}`}>
              <h6>{props.postedBy.fullName}</h6>
            </Link>
            <span>{props.postedBy.jobTitle}</span>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="postBody">
            {props.content}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="postFooter">
            <div>
              <FontAwesomeIcon
                icon={faThumbsUp}
                color={wasLiked ? "#ec407a" : "#fff0"}
                className={wasLiked ? "iconBorder" : "iconBorderActive"}
                size="lg"
                onClick={() => likedPost()}
              />
              <span>{likesCount}</span>
              <span className="postLifeTime">{lifeTime}</span>
            </div>
            <div>
              {props.userId == authorization.userId ? (
                <FontAwesomeIcon
                  icon={faTrash}
                  color={"#ccc"}
                  size="lg"
                  className="deletePostIcon"
                  onClick={() => deletedPost()}
                />
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteFromPostList }, dispatch);
};

export default connect(null, mapDispatchToProps)(Post);
