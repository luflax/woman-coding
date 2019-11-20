import React, { useState } from "react";
import axios from "axios";
import { toastr } from "react-redux-toastr";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../components/ButtonIcon";

import "./MyProfile.css";

const MyProfile = props => {
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [city, setCity] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [Abilities, setAbilities] = useState("");

  const tryUpdateProfile = async () => {
    const authorizationItem = JSON.parse(localStorage.getItem("authorization"));
    try {
      const response = await axios.put(
        `api/auth/updateUser/${authorizationItem.userId}`,
        {
          fullName,
          jobTitle,
          city,
          aboutMe,
          Abilities
        }
      );

      toastr.success("Perfil atualizado com sucesso", "");
    } catch (error) {
      toastr.error("Não foi possivel atualizar o perfil", error);
    }
  };

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
                  <input
                    type="text"
                    id="profileName"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <label htmlFor="profileTitle">Título do perfil:</label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={e => setJobTitle(e.target.value)}
                    id="profileTitle"
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="profileAddress">Cidade:</label>
                  <input
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    id="profileAddress"
                    style={{ width: "300px" }}
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="profileAbout">Sobre você:</label>
                  <textarea
                    id="profileAbout"
                    cols="30"
                    rows="4"
                    value={aboutMe}
                    onChange={e => setAboutMe(e.target.value)}
                  ></textarea>
                </Col>
                <Col md={12}>
                  <label htmlFor="profileDescription">Suas habilidades:</label>
                  <textarea
                    id="profileDescription"
                    cols="30"
                    rows="4"
                    value={Abilities}
                    onChange={e => setAbilities(e.target.value)}
                  ></textarea>
                </Col>

                <ButtonIcon
                  className="mt-3"
                  label="Atualizar perfil"
                  onClick={tryUpdateProfile}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default MyProfile;
