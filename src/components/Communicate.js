import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Girl from '../images/girl.svg'
import Boy from '../images/boy.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import useWebAnimations from '@wellyshen/use-web-animations'

const Communicate = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });
    const { ref } = useWebAnimations({
        keyframes: [
            { transform: "translateY(0)" },
            { transform: "translateY(10px)" },
            { transform: "translateY(0)" }
        ],
        timing: {
            duration: 4000,
            iterations: Infinity,
            easing: "ease-in-out",
        }
    });
    return (
        <div className="communication">
            <Container>
                <Row>
                    <Col md={8} data-aos="fade-right" >
                        <img src={Girl} alt="girl" className="fix-size" ref={ref}/>
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

                    <Col md={8} data-aos="fade-left">
                        <img src={Boy} alt="Boy" className="fix-size" />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}


export default Communicate