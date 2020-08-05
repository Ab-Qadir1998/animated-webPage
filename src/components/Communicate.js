import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Girl from '../images/girl.svg'
import Boy from '../images/boy.svg'

const Communicate = () => {
    return (
        <div className="communication">
            <Container>
                <Row>
                    <Col md={8}>
                        <img src={Girl} alt="girl" className="fix-size"/>
                    </Col>
                    <Col md={4}>
                        <div className="com-text">
                            <h2>
                            Communicate and gather feedback
                            </h2>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
                            </p>
                            <div className="com-box">
                            <h5>
                            Grey Simpson
                            </h5>
                            <p>
                                "
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                                "
                            </p>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="com-text">
                            <h2>
                            Communicate and gather feedback
                            </h2>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
                            </p>
                            <div className="com-box">
                            <h5>
                            Grey Simpson
                            </h5>
                            <p>
                                "
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                                "
                            </p>
                            </div>
                        </div>
                    </Col>

                    <Col md={8}>
                        <img src={Boy} alt="Boy" className="fix-size"/>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    )
}


export default Communicate