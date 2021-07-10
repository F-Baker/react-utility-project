import React from 'react';

import profilePic from "../../../assets/images/profile.jpg";

import "../../_common/common.css";
import "./about.css";

const About = () => {
    return (
        <div className="home-section container-about">
            <img className="profile-picture-about" alt="" src={profilePic}/>
            <div className="about-text">
                <br/><span className="about-text-subtitle">Congrats on running this project!</span>
                <br/><br/>I'm currently looking for a backend development position in the Paris metro region.
                <br/><br/>Please have a look at my
                <a
                    href="https://drive.google.com/file/d/1Rlv3z9bt8tHdEP6XSptiUBKD1nj3sUyM/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"><span
                    className="about-cv">resume</span>
                </a>
            </div>
        </div>
    );
};

export default About;
