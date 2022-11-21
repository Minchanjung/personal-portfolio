import React from "react";
import "../styles/Socials.css";
import insta from "../imgs/icons/icons8-instagram.svg";
import git from "../imgs/icons/icons8-github.svg";
import twitter from "../imgs/icons/icons8-twitter.svg";
import linked from "../imgs/icons/icons8-linkedin.svg";

const Socials = () => {
    return (
        <div>
            <div className="leftSide">
                <div className="instaIcon"><img src={insta} alt=""></img></div>
                <div className="gitIcon"><img src={git} alt=""></img></div>
                <div className="linkedIcon"><img src={linked} alt=""></img></div>
                <div className="twitterIcon"><img src={twitter} alt=""></img></div>
                <div className="leftLine"></div>
            </div>
            <div className="rightSide">
                <div className="rightEmail">minchanjung1@gmail.com</div>
                <div className="rightLine"></div>
            </div>
        </div>
    )
}

export default Socials;