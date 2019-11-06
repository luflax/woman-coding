import React, { Component } from "react";
import { Col, Row, Carousel } from "react-bootstrap";
import "./Home.css";

export class Home extends Component {
  displayName = Home.name;

  render() {
    return (
      <React.Fragment>
        <Carousel
          slide
          className={"carouselHome"}
          indicators={false}
          controls={false}
          interval={1000}
        >
          <Carousel.Item>
            <div className={"carouselOverlay"}></div>
            <img
              src={"/assets/images/womancoding2.jpg"}
              alt="Home Image"
              className="img-responsive"
            ></img>
            <Carousel.Caption>
              <h1>Inspirar e engajar</h1>
              <p>
                Convidamos mulheres entusiastas e profissionais da área de
                desenvolvimento para fazer parte da comunidade Woman Coding,
                aqui é possivel adquirir muito conhecimento relativo ao mundo da
                programação e ficar sabendo de todas as novidades que estão
                rolando.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className={"mt-4 mb-4"}>
          <Col sm={9} className={"mx-auto mt-4"}>
            <Row>
              <Col md={5}>
                <h3 className={"midTopicTitle"}>Quem somos?</h3>
                <p>
                  A Woman Coding é uma comunidade de inclusão da mulher no mundo
                  da programação, nós divulgamos as profissionais mais
                  qualificadas para as principais empresas de tecnologia, além
                  de promover um amplo espaço de troca de conhecimentos para as
                  usuárias.
                </p>
              </Col>
              <Col md={7}>
                <img
                  src={"/assets/images/networking.png"}
                  className="img-fluid"
                ></img>
              </Col>
            </Row>
          </Col>
          <Col sm={9} className={"mx-auto mt-4"}>
            <Row>
              <Col md={5}>
                <h3 className={"midTopicTitle"}>O que fazemos?</h3>
                <p>
                  Acreditamos que o primeiro passo para inclusão da mulher nesse
                  universo é a construção de networking, para isso temos um blog
                  no qual qualquer candidata pode escrever seu post com assuntos
                  referentes a tecnologia e assim, além de compartilhar seu
                  conhecimento, fazer a divulgação de seu trabalho.
                </p>
              </Col>
              <Col md={7}>
                <img
                  src={"/assets/images/HomeImage.jpg"}
                  className="img-fluid"
                ></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
