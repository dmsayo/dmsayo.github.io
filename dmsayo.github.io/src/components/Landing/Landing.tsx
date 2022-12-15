import React from "react"
import "./Landing.scss";
import profilePicture from "../Landing/img/pfp_3.jpg";

export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing_text">
                <div className="landing__header">
                    Derryl Sayo
                </div>
                <div className="landing__description">
                    My name is Derryl Sayo
                </div>
            </div>
            <div className="landing__image">
                <img src={profilePicture} alt="" />
            </div>
        </div>
    )
};