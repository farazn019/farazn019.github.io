import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export function NavigationBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>About Me</Nav.Link>
                    <Nav.Link>Work Experience</Nav.Link>
                    <Nav.Link>Resume</Nav.Link>
                    <Nav.Link>Side Projects</Nav.Link>
                    <Nav.Link>Contact Me</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
}