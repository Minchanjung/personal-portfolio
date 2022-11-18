import React from "react";
import "../styles/About.css";
import jsIcon from "../imgs/icons/js-icon.png";
import htmlIcon from "../imgs/icons/html5-logo-31813.png";
import cssIcon from "../imgs/icons/html5-logo-31821.png";

const About = () => {
    return (
        <div className="aboutContainer">
            <h2 className="aboutMeHeader"><span>01.</span>About Me</h2>
            <div className="splitAbout">
                <div className="aboutMeContentContainer">
                    <div className="aboutMeContent"><span>Hello!</span> My name is Minchan and I'm a web developer with a passion for front end development and design.</div>
                    <p className="aboutMeContent2">
                        I have been Web Devoloping since 2019 after coming across a basic coding course online, ever since then i have fallen in love. 
                        I started spending all my free time playing around with code, it started with HTML and CSS then moving onto Javascript. 
                    </p>

                    <p className="aboutMeContent3">
                        I have had the oppurtunity to work with clients and make their digital vision come true by making accessible and inclusive digital products. 
                        I am constantly striving to improve myself in the rapidly changing field that is web development.

                    </p>
                </div>
                <div className="aboutMeImageContainer">

                </div>
            </div>
            <div className="technologiesContainer">
                <h2 className="technologiesHeader">Some technologies I've worked with</h2>
                <div className="iconsContainer">
                    <div className="icon">
                        <img src={jsIcon} className="iconImg" alt=""></img>
                    </div>
                    <div className="icon">
                        <img src={htmlIcon} className="iconImg" alt=""></img>
                    </div>
                    <div className="icon">
                        <img src={cssIcon} className="iconImg" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;