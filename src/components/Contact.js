import React, { useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Btns from './Btn'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    });
    return (
        <div className="contact" id="contact">
            <Container>
                <Row className="justify-content-md-center">
                <Col md={7}>
                    <Form className="form" data-aos="fade-up">
                        <Row>
                            <Col className="form-col">
                            <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col className="form-col">
                            <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-col">
                            <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email" />
                            </Col>
                        </Row>

                        <Row>
                            <Col className="form-col">
                            <Form.Label>Subject</Form.Label>
                                <Form.Control placeholder="Subject" />
                            </Col>
                        </Row>
                        
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" col="10"/>
                            </Form.Group>
                        <Btns text="Send Message"/>
                    </Form>
                </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact