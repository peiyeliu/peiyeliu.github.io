import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './css/Header.css';
const Header = () => {
    return (

        <Navbar id="my-nav-bar" bg="dark" variant="dark" expand="lg" sticky="top">
            <LinkContainer to="/" style={{ marginLeft: '15px' }}>
                <Navbar.Brand>Peiye Liu</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Info</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tech-stack">
                        <Nav.Link>Tech Stack</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects">
                        <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cp">
                        <Nav.Link>CP</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
