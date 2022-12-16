import React from "react";
import "./Contact.scss";

export const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact__title">
                Contact Me
            </div>
            <div className="contact__body">
                <div className="contact__body-entry">
                    <div className="contact__body-entry-name">
                        Email:
                    </div>
                    <div className="contact__body-entry-content">
                        derrylmsayo@gmail.com
                    </div>
                </div>
                <div className="contact__body-entry">
                    <div className="contact__body-entry-name">
                        GitHub:
                    </div>
                    <div className="contact__body-entry-content">
                        <a href="https://github.com/dmsayo">github.com/dmsayo</a>
                    </div>
                </div>
            </div>
        </div>
    )
};