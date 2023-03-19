import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <p>
                <span>Linkedin  </span>
                <a href="https://www.linkedin.com/in/peiye-liu/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} />
                </a>
            </p>
            <p>
                <span>Github  </span>
                <a href="https://github.com/peiyeliu" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} />
                </a>
            </p>
            <p>
                <span>Email  </span>
                <a href="mailto:peiyeliuchem@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={32} />
                </a>
            </p>
        </div>
    );
};

export default Contact;
