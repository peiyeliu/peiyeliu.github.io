import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiPython,
    SiCplusplus,
    SiTypescript,
    SiMicrosoftazure,
    SiGooglecloud,
    SiAmazonaws,
    SiRedis,
    SiMongodb,
    SiMysql,
    SiAngular,
    SiDocker,
    SiKubernetes,
    SiJenkins, SiAnsible, SiTerraform
} from 'react-icons/si';
import './css/TechStack.css';
import {FaJava} from "react-icons/fa";

const TechStack = () => {
    return (
        <Container className="tech-stack">
            <div>
                <p>As an enthusiastic learner, I am always opening to new technologies.</p>
                <p>Tech stacks that I have been familiar with are listed here. Those techniques are learnt from coursework, previous work experiences, self-driven project, etc.</p>
                <p>Most of these tech stacks have been applied in my projects. See <b>Projects</b> section for more detail.</p>
            </div>
            <h2>Programming Language</h2>
            <Row>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <FaJava size={48} />
                    <p>Java</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiPython size={48} />
                    <p>Python</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiCplusplus size={48} />
                    <p>C++</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiTypescript size={48} />
                    <p>Typescript</p>
                </Col>
            </Row>

            <h2>Databases</h2>
            <Row>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiMysql size={48} />
                    <p>MySQL</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiRedis size={48} />
                    <p>Redis</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiMongodb size={48} />
                    <p>Mongodb</p>
                </Col>
            </Row>

            <h2>Cloud Services</h2>
            <Row>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiAmazonaws size={48} />
                    <p>Amazon AWS</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiGooglecloud size={48} />
                    <p>Google Cloud</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiMicrosoftazure size={48} />
                    <p>Azure</p>
                </Col>
            </Row>

            <h2>DevOps & CI/CD</h2>
            <Row>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiDocker size={48} />
                    <p>Docker</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiKubernetes size={48} />
                    <p>Kubernetes</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiJenkins size={48} />
                    <p>Jenkins</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiAnsible size={48} />
                    <p>Ansible</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiTerraform size={48} />
                    <p>Terraform</p>
                </Col>
            </Row>


            <h2>Front End</h2>
            <Row>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiJavascript size={48} />
                    <p>JavaScript</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiHtml5 size={48} />
                    <p>HTML5</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiCss3 size={48} />
                    <p>CSS3</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiReact size={48} />
                    <p>React</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <SiAngular size={48} />
                    <p>Angular</p>
                </Col>
            </Row>
        </Container>
    );
};

export default TechStack;
