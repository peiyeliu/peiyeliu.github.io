import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './css/TechStack.css';

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
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                    <p>Java</p>
                </Col>

                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                    <p>Python</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                    <p>C++</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                    <p>Typescript</p>
                </Col>
            </Row>

            <h2>Databases</h2>
            <Row>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                    <p>MySQL</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" />
                    <p>Redis</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                    <p>Mongodb</p>
                </Col>
            </Row>

            <h2>Cloud Services</h2>
            <Row>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />
                    <p>Amazon AWS</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" />
                    <p>Google Cloud</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
                    <p>Azure</p>
                </Col>
            </Row>

            <h2>DevOps & CI/CD Tools</h2>
            <Row>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                    <p>Git</p>
                </Col>

                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                    <p>Docker</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" />
                    <p>Kubernetes</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" />
                    <p>Jenkins</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" />
                    <p>Ansible</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" />
                    <p>Terraform</p>
                </Col>
            </Row>

            <h2>Framework</h2>

            <Row>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                    <p>Django</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
                    <p>Spring</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                    <p>Flask</p>
                </Col>
            </Row>

            <h2>Front End</h2>
            <Row>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <p>JavaScript</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                    <p>HTML5</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                    <p>CSS3</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
                    <p>Bootstrap</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <p>React</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
                    <p>Angular</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2}>
                    <img alt="" className={'logo'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                    <p>nodejs</p>
                </Col>
            </Row>
        </Container>
    );
};

export default TechStack;
