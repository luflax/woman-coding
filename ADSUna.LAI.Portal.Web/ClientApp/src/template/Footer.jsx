import React from 'react'
import { Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFemale, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

import InputButtonIcon from '../components/InputButtonIcon'

import './Footer.css';

export default props => {
    return(
        <React.Fragment>
            <footer>
                <Row className='p-3'>
                    <Col md={4} sm={12} className='my-3'>
                        <FontAwesomeIcon icon={faFemale} size='2x' color='#EC407A'/>
                        <h3 className='ml-2'>Mulheres</h3>
                    </Col>
                    <Col md={4} sm={12} className='my-3'>
                        <h6>Assine nossa newsletter</h6>
                        <InputButtonIcon placeholder='digite seu email' icon={faArrowRight} 
                            onClick={e => e.preventDefault()} buttonRight={true} />
                    </Col>
                    <Col md={4} sm={12} className='my-3'>
                        <h6>Contato</h6>
                        
                        <FontAwesomeIcon icon={faFacebook} size='lg' className='contactIcon'/>
                        <FontAwesomeIcon icon={faTwitter} size='lg' className='contactIcon'/>
                        <FontAwesomeIcon icon={faInstagram} size='lg' className='contactIcon'/>
                    </Col>
                </Row>
            </footer>
        </React.Fragment>
    )
}