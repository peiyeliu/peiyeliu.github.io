import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import './css/Projects.css';
import projectData from "../ProjectData";
import {useNavigate} from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Selected Projects</h2>
            <p>My selected project will be presented here.</p>
            <p>See my <a href="https://github.com/peiyeliu/">Github page</a> for all my project repositories.</p>
            <Container className="projects">
                <Row>
                    {Object.entries(projectData).map(([projectId, project]) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={projectId} className="mb-4">
                            <Card
                                className="h-100 project-card"
                                onClick={() =>
                                    project.detailPage
                                        ? navigate(`/project-details/${projectId}`)
                                        : window.open(project.projectLink, '_blank')
                                }
                            >
                                <Card.Img variant="top" src={project.projectImg} />
                                <Card.Body>
                                    <Card.Title>{project.projectName}</Card.Title>
                                    <Card.Text>{project.projectDescription}</Card.Text>
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
