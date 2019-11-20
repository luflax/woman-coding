import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./Profile.css";

const Profile = props => {
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [city, setCity] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [abilities, setAbilities] = useState("");

  useEffect(() => {
    const authorizationItem = JSON.parse(localStorage.getItem("authorization"));
    axios
      .get(`/api/auth/getuser/${props.match.params.id}`, {
        headers: { Authorization: "bearer " + authorizationItem.accessToken }
      })
      .then(response => {
        const { fullName, jobTitle, city, aboutMe, abilities } = response.data;
        setFullName(fullName);
        setJobTitle(jobTitle);
        setCity(city);
        setAboutMe(aboutMe);
        setAbilities(abilities);
      });
  }, []);

  return (
    <div className="ProfileContainer">
      <main>
        <Container className="ProfileWidthLimiter">
          <Row>
            <Col
              md={12}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faUserCircle}
                color="#ec407a"
                size="10x"
                className="ProfilePhoto"
              />
              <Row className="profileDataContainer">
                <Col md={6}>
                  <label>Nome completo:</label>
                  <span>{fullName}</span>
                </Col>
                <Col md={6}>
                  <label>Título do perfil:</label>
                  <span>{jobTitle}</span>
                </Col>
                <Col md={12}>
                  <label>Cidade:</label>
                  <span>{city}</span>
                </Col>
                <Col md={12}>
                  <label>Sobre você:</label>
                  <span>{aboutMe}</span>
                </Col>
                <Col md={12}>
                  <label>Suas habilidades:</label>
                  <span>{abilities}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Profile;
