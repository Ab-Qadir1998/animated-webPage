import React,{ useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Man from '../images/man.svg'
import Btn from './Btn'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
 useEffect(()=> {
        Aos.init({duration: 1000});
    });
    return (
        <div className="about">
            <Container>
                <h1 className="text-center">About Us</h1>
                <Row>
                    <Col md={6} data-aos="fade-left">
                        <img src={Man} alt="man" className="fix-size" />
                    </Col>

                    <Col md={6} data-aos="fade-right">
                       <div className="about-text">
                       <h4>Our Mission</h4>
                        <p>
                            Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.
                        </p>
                        <ul className="list-group">
                        <li className="list-group-item">Laborum enim quasi at modi</li>
                        <li className="list-group-item">Ad at tempore</li>
                        <li className="list-group-item">Labore quaerat esse</li>
                        </ul>
                        <Btn text="Learn More" className="btn"/>
                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About