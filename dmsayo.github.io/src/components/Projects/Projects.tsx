import React from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import "./Projects.scss"


export const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects__title">
                Projects
            </div>
            <ProjectCard title="Odonata Keyboard Collection" imageUrl={""} description="The odonata ergonomic keyboard collection, designed from the ground up by Derryl Sayo" moreLink="https://github.com/dmsayo/odonata-keyboard-collection"/>
            <ProjectCard title="Apartment Database" imageUrl={""} description="A web application modelling an apartment management system written in PHP and using MySQL" moreLink="https://github.com/dmsayo/Apartment-Database"/>
            <ProjectCard title="Travel Journal" imageUrl={""} description="A desktop GUI application written in Java to blog your travels" moreLink="https://github.com/dmsayo/Travel-Log"/>
        </div>
    )
};