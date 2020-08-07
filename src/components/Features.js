import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";
const Features = () => {
    const {ref} = useWebAnimations({...fadeInUp})
    return (
        <div className="features" id="features" ref={ref}>
            <div className="feature-text">
                <h1>Imagin Features</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea  quo cupiditate facere deleniti fuga officia.
                </p>

            </div>
            <div className="keys" >
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