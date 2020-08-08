import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Btn from './Btn'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    });
    
    return (
        <div className="hero" id="#home">
            <Container>
                <div className="hero-text" data-aos="fade-right">
                    <h1>
                        Make Your Business <br /> More Profitable
                </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea  quo cupiditate facere deleniti fuga officia.
                </p>
                    <Btn text="Get Started" />
                </div>
                {/* hero-text  */}
            </Container>
        </div>
    )
}
export default Home