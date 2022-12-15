import React from "react"
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
                        About
                    </div>
                    <div className="landing__nav-item">
                        Projects
                    </div>
                    <div className="landing__nav-item">
                        Contact
                    </div>
                </div>
            </div>
            <div className="landing__bottom">
                <div>
                    <ExpandMoreIcon style={{width: "50px", height: "50px"}}/>
                </div>
            </div>
        </div>
    )
};