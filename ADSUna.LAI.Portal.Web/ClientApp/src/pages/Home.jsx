import React, { Component } from 'react';
import { Col, Row, Carousel } from 'react-bootstrap';
import './Home.css';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <React.Fragment>
        <Carousel slide className={'carouselHome'} indicators={false} controls={false} interval={10000}>
            <Carousel.Item>
              <div className={'carouselOverlay'}></div>
              <img src={'/assets/images/lake.jpg'} alt='Home Image' className="img-responsive"></img>
              <Carousel.Caption>
                <h1>Primeiro slide</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nulla mi. In ligula metus, ornare quis tempor sit amet, euismod a odio. Vivamus et pharetra enim, vitae volutpat mauris. </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className={'carouselOverlay'}></div>
              <img src={'/assets/images/lake.jpg'} alt='Home Image' className="img-responsive"></img>
              <Carousel.Caption>
                <h1>Segundo slide</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nulla mi. In ligula metus, ornare quis tempor sit amet, euismod a odio. Vivamus et pharetra enim, vitae volutpat mauris. </p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        <Row className={'mt-4 mb-4'}>
          <Col sm={9} className={'mx-auto mt-4'}>
            <Row>
              <Col md={5}>
                <h3 className={'midTopicTitle'}>Quem somos?</h3>
                <p>Lorem ipsum dolor sit amvet, 
                  consectetur adipiscing elit. Ut ódio 
                  ipsum, vulputate at erat quis, suscipit 
                  congue elit. Vivamus ut sapien mattis, 
                  ultricies odio sit amet, condimentum odio.
                </p>
              </Col>
              <Col md={7}>
                <img src={'/assets/images/HomeImage.jpg'} className="img-fluid"></img>
              </Col>
            </Row>
          </Col>
          <Col sm={9} className={'mx-auto mt-4'}>
            <Row>
              <Col md={5}>
                <h3 className={'midTopicTitle'}>O que fazemos?</h3>
                <p>Lorem ipsum dolor sit amvet, 
                  consectetur adipiscing elit. Ut ódio 
                  ipsum, vulputate at erat quis, suscipit 
                  congue elit. Vivamus ut sapien mattis, 
                  ultricies odio sit amet, condimentum odio.
                </p>
              </Col>
              <Col md={7}>
                <img src={'/assets/images/HomeImage.jpg'} className="img-fluid"></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
