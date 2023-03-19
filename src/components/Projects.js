// TODO: selected projects page
// import React from 'react';
// import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
// import projectImage1 from '../assets/project1.jpg'; // Replace with the path to your image
// import projectImage2 from '../assets/project2.jpg'; // Replace with the path to your image
//
//
// const Projects = () => {
//     const projects = [
//         {
//             title: 'Project 1',
//             description: 'Project 1 description',
//             image: projectImage1,
//             url: 'https://example.com/project1',
//         },
//         {
//             title: 'Project 2',
//             description: 'Project 2 description',
//             image: projectImage2,
//             url: 'https://example.com/project2',
//         },
//         // Add more projects here...
//     ];
//
//     return (
//         <Container className="projects">
//             <h2>Selected Projects</h2>
//             <Row>
//                 {projects.map((project, index) => (
//                     <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
//                         <Card className="h-100" onClick={() => window.open(project.url, '_blank')}>
//                             <Card.Img variant="top" src={project.image} />
//                             <Card.Body>
//                                 <Card.Title>{project.title}</Card.Title>
//                                 <Card.Text>{project.description}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// };
//
// export default Projects;
