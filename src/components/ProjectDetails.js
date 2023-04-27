import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import projectData from "../ProjectData";
import {useParams} from "react-router-dom";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectData[projectId];

    if (!project) {
        return <div>Project not found.</div>;
    }
    return (
        <Container className="project-details">
            <h2>{project.projectName}</h2>
            <p>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    {project.projectLink}
                </a>
            </p>
            <p>{project.projectDescription}</p>


            { project.systemDesignImage ?
                <div>
                    <h3>System Design</h3>
                    <img src={project.systemDesignImage} alt="System Design" width="100%" />
                    <p>{project.systemDesignDescription}</p>
                </div>
                : null
            }



            <h3>Features</h3>
            <Row>
                {project.features.map((feature, index) => (
                    <Col key={index} xs={12} md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={feature.image} />
                            <Card.Body>
                                <Card.Text>{feature.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProjectDetails;
