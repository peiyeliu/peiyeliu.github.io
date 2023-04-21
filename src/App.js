import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Info from './components/Info';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CP from './components/CP';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Info />} />
                    <Route path="/tech-stack" element={<TechStack />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/cp" element={<CP />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
