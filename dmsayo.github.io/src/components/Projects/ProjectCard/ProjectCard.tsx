import React from "react";
import "./ProjectCard.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import defaultImage from "../Images/home-background2.jpg";

type ProjectCardProps = {
    title: string;
    imageUrl: string;
    description: string;
    moreLink: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className="project-card__title">{props.title}</div>
            <div className="project-card__image">{/* <img src={props.imageUrl} alt="" /> */}</div>
            <div className="project-card__description">{props.description}</div>
            <div className="project-card__link">
                <div className="project-card__link-nav">
                    <a href={props.moreLink}>Learn More</a>{" "}
                    <span style={{ display: "flex", alignItems: "center" }}>
                        {" "}
                        <ChevronRightIcon />
                    </span>
                </div>
            </div>
        </div>
    );
};
