import React from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import "./Projects.scss"

export const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__title">
                Projects
            </div>
            <ProjectCard />
        </div>
    )
};