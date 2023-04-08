// TODO: selected projects page
import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import projectImage1 from './img/react_logo.svg';
import projectImage2 from './img/react_logo.svg';
import './css/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'moviedb-angular',
            description: 'This project used Angular as the front-end framework to display responsive web pages. Backend part was built using Node.js, Express, and Axios.',
            image: projectImage1,
            url: 'https://github.com/peiyeliu/moviedb-angular',
        },
        {
            title: 'moviedb-python-flask',
            description: 'A web technology project using Python Flask as the backend framework. User interface display and request handling were achieved in plain HTML, CSS, and JavaScript.',
            image: projectImage2,
            url: 'https://github.com/peiyeliu/moviedb-python-flask',
        },
        {
            title: 'personal web page',
            description: 'Personal web page powered by React and BootStrap',
            image: projectImage2,
            url: 'https://github.com/peiyeliu/peiyeliu.github.io',
        },
        {
            title: 'springboot project',
            description: 'online shopping web services develop under Java and Spring framework',
            image: projectImage2,
            url: 'https://github.com/peiyeliu/e-commerce-spike-springboot',
        }
    ];
    return (
        <div>
            <h2>Selected Projects</h2>
            <p>My selected project will be presented here.</p>
            <Container className="projects">
                <Row>
                    {projects.map((project, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                            <Card className="h-100 project-card" onClick={() => window.open(project.url, '_blank')}>
                                <Card.Img variant="top" src={project.image} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}


export default Projects;
