import React from "react";
import "./Navbar.scss";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__badge">
                Derryl Sayo
            </div>
            <div className="navbar__links">
                <div className="navbar__link-item">
                    About
                </div>
                <div className="navbar__link-item">
                    Project
                </div>
                <div className="navbar__link-item">
                    Contact
                </div>
            </div>
        </div>
    )
};