import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./MyProfile.css";

const MyProfile = props => {
  return (
    <div className="myProfileContainer">
      <main>
        <Container className="myProfileWidthLimiter">
          <Row>
            <Col
              md={12}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faUserCircle}
                color="#ec407a"
                size="10x"
                className="myProfilePhoto"
              />
              <Row className="profileDataContainer">
                <Col md={6}>
                  <label htmlFor="profileName">Nome completo:</label>
                  <input type="text" value="Roberta Santos" id="profileName" />
                </Col>
                <Col md={6}>
                  <label htmlFor="profileTitle">Título do perfil:</label>
                  <input
                    type="text"
                    value="Desenvolvedora .Net"
                    id="profileTitle"
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="profileAddress">Endereço:</label>
                  <input
                    type="text"
                    value="Belo Horizonte, Brasil"
                    id="profileAddress"
                    style={{ width: "300px" }}
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="profileAbout">Sobre você:</label>
                  <textarea id="profileAbout" cols="30" rows="4"></textarea>
                </Col>
                <Col md={12}>
                  <label htmlFor="profileDescription">Suas habilidades:</label>
                  <textarea
                    id="profileDescription"
                    cols="30"
                    rows="4"
                  ></textarea>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default MyProfile;
