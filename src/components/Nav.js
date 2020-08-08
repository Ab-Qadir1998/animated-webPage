import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Container} from 'react-bootstrap'
import '../App.css'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
        <Navbar.Brand href="#home">imagine</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#testimonial">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation