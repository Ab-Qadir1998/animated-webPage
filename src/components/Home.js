import React from 'react'
import { Container } from 'react-bootstrap'
import Btn from './Btn'
import useWebAnimations, { fadeInLeft } from "@wellyshen/use-web-animations";

const Home = () => {
    const {ref} = useWebAnimations({...fadeInLeft});
    return (
        <div className="hero" id="#home">
            <Container>
                <div className="hero-text" ref={ref}>
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