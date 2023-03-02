import React from "react";
import "./About.scss";
import profile from "./img/pfp_3.jpg";

export const About = () => {
    return (
        <div className="about" id="about">
            <div className="about__title">About Me</div>
            <div className="about__body">
                <div className="about__text">
                    I am a third year student at the University of British Columbia in Vancouver studying a combined
                    major in computer science and mathematics. I love learning about the different applications of
                    technology in our daily lives. In my free time I enjoy the outdoors and backpacking as well as
                    working on my own custom ergonomic mechanical keyboards. Feel free to take a look at my projects
                    listed below and contact me if you have any inquiries!
                </div>
                <div className="about__image">
                    <img src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};
