import React from 'react';
import './css/Footer.css';
import react_logo from './img/react_logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Personal webpage powered by React <img src={react_logo} style={{ width: 30, height: 30 }} alt={""}></img></p>
        </footer>
    );
};

export default Footer;
