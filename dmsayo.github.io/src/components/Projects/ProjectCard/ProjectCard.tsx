import React from "react";
import "./ProjectCard.scss";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const ProjectCard = () => {
    return (
        <div className="project-card">
            <div className="project-card__title">
                Title
            </div>
            <div className="project-card__image">
                Image
            </div>
            <div className="project-card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla harum assumenda quae amet maxime animi sapiente numquam saepe deleniti sit at, suscipit corrupti eum nemo ipsam nobis tenetur, deserunt ratione consequatur odio beatae sunt sed consequuntur. Cupiditate placeat, tempora, iure ex architecto in dicta aut eum dolorem corporis consequuntur aliquam.
            </div>
            <div className="project-card__link">
                <div className="project-card__link-nav">
                Learn More <span style={{display: "flex", alignItems: "center"}}> <ChevronRightIcon /></span>
                </div>
              
            </div>
        </div>
    )
};