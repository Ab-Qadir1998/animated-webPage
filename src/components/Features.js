import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Features = () => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    });
    
    return (
        <div className="features" id="features">
            <div className="feature-text" data-aos="fade-up">
                <h1>Imagin Features</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea  quo cupiditate facere deleniti fuga officia.
                </p>

            </div>
            <div className="keys" data-aos="flip-up">
                <Container>
                    <Row className="text-center" >
                        <Col md={4} className="column">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Marketing Consulting</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="column">
                        <div className="card">
                                <div className="card-body">
                                    <h5>Market Analysis</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="column">
                        <div className="card">
                                <div className="card-body">
                                    <h5>Easy Purchase</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} className="column">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Free Updates</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="column">
                        <div className="card">
                                <div className="card-body">
                                    <h5>100% Satistified</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="column">
                        <div className="card">
                                <div className="card-body">
                                    <h5>Easy Plugin</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Features