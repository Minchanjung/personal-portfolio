import React from "react";
import '../styles/Header.css';
import { useRef } from "react";

const Header = () => {
    const popupRef = useRef(null)

    const toggle = () => {
        if (popupRef.current.style.display === 'none') {
            popupRef.current.style.display = 'flex';
        } else {
            popupRef.current.style.display = 'none';
        }
        
    }

    return (
        <div>
            <div className="headerContainer">
                <div className="headerLeft">
                    <div className="logo"></div>
                    <h1 className="logoName">Minchan Jung</h1>
                </div>
                <div className="headerRight">
                    <ul className="headerLinks">
                        <li className="headerLink1"><a href="#section1">About</a></li>
                        <li className="headerLink2"><a href="#section2">Projects</a></li>
                        <li className="headerLink3"><a href="#section3">Contact</a></li>
                    </ul>

                    <div className="burgerMenu" onClick={toggle}>
                        <div className="burgerLine"></div>
                        <div className="burgerLine"></div>
                        <div className="burgerLine"></div>
                    </div>
                </div>
            </div>
                

            <ul ref={popupRef} className="burgerLinks" style={{display:'none'}}>
                <li className="burgerLink1">Projects</li>
                <li className="burgerLink2">Posts</li>
                <li className="burgerLink3">About</li>
            </ul>
        </div>
    )
}

export default Header;