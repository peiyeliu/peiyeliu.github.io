import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Info from './components/Info';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CP from './components/CP';
import ProjectDetails from "./components/ProjectDetails";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Info />} />
                    <Route path="/tech-stack" element={<TechStack />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/cp" element={<CP />} />
                    <Route path="/project-details/:projectId" element={<ProjectDetails />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
