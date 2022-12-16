import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Landing.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__top">
                <div className="landing__header">
                    DERRYL SAYO
                </div>
                <div className="landing__nav">
                    <div className="landing__nav-item">
                        <HashLink smooth to={"/#about"}>About</HashLink>
                    </div>
                    <div className="landing__nav-item">
                        <HashLink smooth to={"/#projects"}>Projects</HashLink>
                    </div>
                    <div className="landing__nav-item">
                        <HashLink smooth to={"/#contact"}>Contact</HashLink>
                    </div>
                </div>
            </div>
            <div className="landing__bottom">
                <div>
                    <HashLink smooth to={"/#about"}>
                        <ExpandMoreIcon className="landing__bottom-down" style={{ width: "50px", height: "50px" }} />
                    </HashLink>
                </div>
            </div>
        </div>
    )
};