import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import wordCloud from './img/wordcloud.jpg'
const Info = () => {
    return (
        <div className="info">
            <h1>Peiye Liu</h1>
            <h3>Software Engineer</h3>

            <h5>Education: </h5>
            <li><b>Master of Science in Computer Science, University of Southern California, 2020 - 2022</b></li>
            <li>PhD in Chemistry, Florida State University, 2015 - 2020</li>
            <li>Bachelor of Science in Chemistry, Nankai University, 2011 - 2015</li>

            <p></p>
            <h5>Most Recent Work Experience:</h5>
            <li>Software Development Engineer Intern, Amazon, May. 2022 - Aug. 2022</li>

            <img src={wordCloud} alt="my word cloud" style={{ width: '500px', height: 'auto' }}/>

            <h5>Contact</h5>
            <p>
                <a href="https://www.linkedin.com/in/peiye-liu/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} />
                </a>

                <a href="https://github.com/peiyeliu" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} />
                </a>

                <a href="mailto:peiyeliuchem@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={32} />
                </a>
            </p>
        </div>

    );
};

export default Info;
