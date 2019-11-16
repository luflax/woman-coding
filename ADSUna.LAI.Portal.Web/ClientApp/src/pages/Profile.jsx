import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./Profile.css";

const Profile = props => {
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
                  <span>{props.match.params.id}</span>
                </Col>
                <Col md={6}>
                  <label>Título do perfil:</label>
                  <span>Desenvolvedora .Net</span>
                </Col>
                <Col md={12}>
                  <label>Endereço:</label>
                  <span>Belo Horizonte, Brasil</span>
                </Col>
                <Col md={12}>
                  <label>Sobre você:</label>
                  <span>OKAMSODMOAMSDOASKDOAKSMDOASM</span>
                </Col>
                <Col md={12}>
                  <label>Suas habilidades:</label>
                  <span>OKAMSODMOAMSDOASKDOAKSMDOASM</span>
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
