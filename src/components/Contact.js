import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} />
            </a>
            <a href="mailto:your_email@example.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={32} />
            </a>
        </div>
    );
};

export default Contact;
