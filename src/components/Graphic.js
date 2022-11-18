import React from "react";
import "../styles/Graphic.css";

const Graphic = () => {
    return (
        <div className="graphic">
            <div className="bgGraphic">
                <div className="nameContainer">
                    <div className="name" id="nameTop">Minchan</div>
                    <div className="name" id="nameBottom">Jung</div>
                    <div className="name" id="devTop">Web</div>
                    <div className="name" id="devBottom">Developer</div>
                </div>
            </div>
        </div>
    )
}

export default Graphic;