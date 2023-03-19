import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {BrowserRouter as Router, Link, Outlet, Route, Routes} from 'react-router-dom';
import Info from './Info';
import TechStack from './TechStack';
import Projects from './Projects';
import Contact from './Contact';
import CP from "./CP";

const Header = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <LinkContainer to="/">
                    <Navbar.Brand>Your Name</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Info</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cp">
                            <Nav.Link>CP</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/tech-stack">
                            <Nav.Link>Tech Stack</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <Routes>
                    <Route path="/" element={<Info />} />
                    {/*<Route path="/tech-stack" element={<TechStack />} />*/}
                    {/*<Route path="/projects" element={<Projects />} />*/}
                    {/*<Route path="/contact" element={<Contact />} />*/}
                    <Route path="/cp" element={CP} />
            </Routes>


        </Router>
    );
};

export default Header;
