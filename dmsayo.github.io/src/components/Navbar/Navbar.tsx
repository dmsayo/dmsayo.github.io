import React from "react";
import "./Navbar.scss";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__badge">
                <HashLink smooth to={"/#"}>
                    Derryl Sayo
                </HashLink>
            </div>
            <div className="navbar__links">
                <div className="navbar__link-item">
                    <HashLink smooth to={"/#about"}>
                        About
                    </HashLink>
                </div>
                <div className="navbar__link-item">
                    <HashLink smooth to={"/#projects"}>
                        Projects
                    </HashLink>
                </div>
                <div className="navbar__link-item">
                    <HashLink smooth to={"/#contact"}>
                        Contact Me
                    </HashLink>
                </div>
            </div>
        </div>
    );
};
