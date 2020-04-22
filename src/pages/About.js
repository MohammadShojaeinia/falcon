import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import aboutimg from '../Assets/aboutimg.jpg';

function About() {
    return (
        <div className="container">
            <h1>About Us </h1>
            <p>Falcon is an Onine Private Tutor finder platform. Which Helps the Students to find an best tutor in order to achive thier goals </p>

            <div>
                <img src={aboutimg} class="img-fluid" alt="Learning" />
            </div>
        </div>

    );
}

export default About;