import React from 'react'
import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    return (
        <div className="testimonial">
            <Container>
                <h1 className="text-center">Testimonials</h1>
                <OwlCarousel mt={4}
                    className="owl-theme"
                    loop = {true}
                    margin={10}
                    nav = {false}
                    items={1}
                >
                    <div className="item"><p>
                        "Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque."
                        <br/>
                        <strong>john smith</strong>
                        </p>
                        
                        </div>
                    <div className="item">
                        <p>
                        "Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque."
                        <br/>
                        <strong>Roger Spear</strong>
                        </p>
                    </div>
                    <div className="item">
                        <p>
                        "Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque."
                        <br/>
                        <strong>Robert Algerio</strong>
                        </p>
                    </div>
                    <div className="item">
                        <p>
                        "Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque."
                        <br/>
                        <strong>Keyli Mecdonald</strong>
                        </p>
                    </div>
                    <div className="item">
                        <p>
                        "Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque."
                        <br/>
                        <strong>Angelo Aquista</strong>
                        </p>
                    </div>
                    <div className="item">
                        <p>
                        "Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque."
                        <br/>
                        <strong>ABC Grandstand</strong>
                        </p>
                    </div>
                    <div className="item">
                        <p>
                        "Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque."
                        <br/>
                        <strong>Kelsi Albrite</strong>
                        </p>
                    </div>
                </OwlCarousel>
            </Container>
        </div>
    )
}
export default Testimonial