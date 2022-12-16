import React from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import "./Projects.scss"


export const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects__title">
                Projects
            </div>
            <ProjectCard title="title" imageUrl={""} description="This is the description" moreLink="#"/>
            <ProjectCard title="title" imageUrl={""} description="This is the description" moreLink="#"/>
            <ProjectCard title="title" imageUrl={""} description="This is the description" moreLink="#"/>
        </div>
    )
};