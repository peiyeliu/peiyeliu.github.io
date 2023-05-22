import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import projectData from "../ProjectData";
import {useParams} from "react-router-dom";

const ProjectDetails = () => {
    const {projectId} = useParams();
    const project = projectData[projectId];

    if (!project) {
        return <div>Project not found.</div>;
    }
    return (
        <Container className="project-details">
            <h2>{project.projectName}</h2>

            {project.projectLink ?
                <div>
                    <h4>Source Code</h4>
                    <p><a href={project.projectLink} target="_blank" rel="noopener noreferrer">Source code Github Link</a></p>
                </div>
                : null
            }


            {project.projectDeployLink?
                <div>
                    <h4>Demo</h4>
                    <p>This project has been deployed on cloud, check the deployed link below:</p>
                    <p><a href={project.projectDeployLink} target="_blank" rel="noopener noreferrer">{project.projectName}</a></p>
                </div>
                 : null
            }


            {project.projectDescription?
                <div>
                    <h3>Description</h3>
                    <p>{project.projectDescription}</p>
                </div>
                 : null
            }

            {project.techStack?
                <div>
                    <h3>Tech Stack Used</h3>
                    <p>{project.techStack}</p>
                </div>
                : null
            }



            {project.systemDesignImage ?
                <div>
                    <h3>System Design</h3>
                    <img src={project.systemDesignImage} alt="System Design" width="100%"/>
                    {project.systemDesignDescription.description ?
                        <p>{project.systemDesignDescription.description}</p> : null
                    }

                    {project.systemDesignDescription.bulletpoints.map((bulletpoint) => (
                        <li>{bulletpoint}</li>
                    ))}
                </div>
                : null
            }

            <p></p>

            {project.features ?
                <div>
                    <h3>Features</h3>
                    <Row>
                        {project.features.map((feature, index) => (
                            <Col key={index} xs={12} md={3} className="mb-4">
                                <Card className="h-100">
                                    <Card.Img variant="top" src={feature.image}/>
                                    <Card.Body>
                                        <Card.Text>{feature.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                : null
            }
        </Container>
    );
};

export default ProjectDetails;
