import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CardFlip from 'react-card-flip';
import './css/Info.css';
import uscLogo from './img/USC.png';
import fsuLogo from './img/FSU.png';
import nkuLogo from './img/NKU.jpeg';
import amznLogo from './img/amazon.png';
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";


const Info = () => {

    const [flipState, setFlipState] = useState({ 0: false, 1: false, 2: false, 3: false, 4: false});

    const educations = [
        {
            school: 'University of Southern California',
            degree: 'MS in Computer Science',
            year: '2020-2022',
            logo: uscLogo,
            backgroundColor: '#991B1E',
            color: 'white'
        },
        {
            school: 'Florida State University',
            degree: 'PhD in Chemistry',
            year: '2015-2020',
            logo: fsuLogo,
            backgroundColor: '#782F40',
            color: 'white'
        },
        {
            school: 'Nankai University',
            degree: 'Bachelor in Chemistry',
            year: '2011-2015',
            logo: nkuLogo,
            backgroundColor: '#701E5E',
            color: 'white'
        },
    ];



    const handleCardEnter = (index) => {
        setFlipState((prevState) => ({ ...prevState, [index]: true }));
    };

    const handleCardLeave = (index) => {
        setFlipState((prevState) => ({ ...prevState, [index]: false }));
    };


    const cardStyle = {
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const recentExperiences = [
        {
            companyName: 'Amazon',
            logo: amznLogo,
            jobTitle: 'Software Development Engineer Intern',
            time: 'May 2022 - Aug 2022',
            backgroundColor: '#232F3E',
            color: 'white',
            flipIndex: 3
        },
        {
            companyName: 'University of Southern California',
            logo: uscLogo,
            jobTitle: 'CSCI Course Grader',
            time: 'Feb 2021 - Dec 2021',
            backgroundColor: '#991B1E',
            color: 'white'
        }
    ];


    return (
        <Container className="info-container">
            <Row className="my-4">
                <Col xs={12} md={6} className="mb-4">
                    <Card className="h-100 no-border">
                        <Card.Body>
                            <Card.Text className="info-name">Peiye Liu</Card.Text>
                            <Card.Text className="info-role">Software Engineer</Card.Text>
                            <Card.Text className="info-role">CS Master at <a href="https://www.cs.usc.edu/">USC Viterbi</a></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} className="mb-4">
                    <Card className="h-100 no-border">
                        <Card.Body>
                            <Card.Title>Contact</Card.Title>
                            <p>
                                <a href="https://www.linkedin.com/in/peiye-liu/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={48} />
                                </a>
                                <span>&nbsp;</span>
                                <a href="https://github.com/peiyeliu" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={48} />
                                </a>
                                <span>&nbsp;</span>
                                <a href="mailto:peiyeliuchem@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <FaEnvelope size={48} />
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col xs={12} md={6} className="mb-4">
                    <Card className="h-100 no-border">
                        <Card.Body>
                            <Card.Title>Educations</Card.Title>
                            <p></p>
                            <p></p>
                            <Row>
                                {educations.map((education, index) => (
                                    <Col key={index} xs={12} sm={4} className="mb-4">
                                        <div onMouseLeave={() => handleCardLeave(index)}>
                                            <CardFlip isFlipped={flipState[index]} flipDirection="horizontal">
                                                <Card className="no-border"
                                                    style={cardStyle}
                                                    onMouseEnter={() => handleCardEnter(index)}
                                                >
                                                    <Card.Img
                                                        src={education.logo}
                                                        className="logo-img"
                                                    />
                                                </Card>
                                                <Card className="no-border"
                                                    style={{
                                                        ...cardStyle,
                                                        backgroundColor: education.backgroundColor,
                                                        color:education.color
                                                    }}
                                                >
                                                    <Card.Body>
                                                        <Card.Title>{education.school}</Card.Title>
                                                        <Card.Text>{education.degree}</Card.Text>
                                                        <Card.Text>{education.year}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </CardFlip>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>



                <Col xs={12} md={6} className="mb-4">
                    <Card className="h-100 no-border">
                        <Card.Body>
                            <Card.Title>Recent Work Experience</Card.Title>
                            <p></p>
                            <p></p>

                            <Row>
                                {recentExperiences.map((experience) => (
                                    <Col xs={12} sm={6} className="mb-4">
                                        <div onMouseLeave={() => handleCardLeave(experience.flipIndex)}>
                                            <CardFlip isFlipped={flipState[experience.flipIndex]} flipDirection="horizontal">
                                                <Card className="no-border"
                                                      style={cardStyle}
                                                      onMouseEnter={() => handleCardEnter(experience.flipIndex)}
                                                >
                                                    <Card.Img
                                                        src={experience.logo}
                                                        className="logo-img"
                                                    />
                                                </Card>
                                                <Card className="no-border"
                                                      style={{
                                                          ...cardStyle,
                                                          backgroundColor: experience.backgroundColor,
                                                          color:experience.color
                                                      }}
                                                >
                                                    <Card.Body>
                                                        <Card.Title>{experience.companyName}</Card.Title>
                                                        <Card.Text>{experience.jobTitle}</Card.Text>
                                                        <Card.Text>{experience.time}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </CardFlip>
                                        </div>
                                    </Col>
                                ))}
                            </Row>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Info;
