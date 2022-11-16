import React from "react";
import '../styles/Header.css';

const Header = () => {

    const toggle = () => {
        
    }

    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <div className="logo"></div>
                <h1 className="logoName">Minchan Jung</h1>
            </div>
            <div className="headerRight">
                <ul className="headerLinks">
                    <li className="headerLink1">Projects</li>
                    <li classsName="headerLink2">Posts</li>
                    <li className="headerLink3">About</li>
                </ul>

                <div className="burgerMenu" onClick={toggle}>
                    <div className="burgerLine"></div>
                    <div className="burgerLine"></div>
                    <div className="burgerLine"></div>
                </div>
            </div>

            <ul className="burgerLinks">
                <li className="burgerLink1">Projects</li>
                <li classsName="burgerLink2">Posts</li>
                <li className="burgerLink3">About</li>
            </ul>
        </div>
    )
}

export default Header;