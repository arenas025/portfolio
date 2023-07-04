import React from "react";
import images from "../../assets/images";
import "./Contact.scss";

export const Contact = () => {

return (
<div className="contact" id="contact">
    <div className={"contact--container"}>
    <h1 className="contact--container__title">Get in touch!</h1>
    <div className="contact--container__info">
        <div className="contact--container__info--github">
        <a href="https://www.linkedin.com/in/sergio-arenas/">
            <img alt="linkedin-img" src={images.linkedin} />
        </a>
        </div>
        <div className="contact--container__info--linkedin">
        <a href="https://github.com/arenas025">
            <img alt="github-img" src={images.github} />
        </a>
        </div>
    </div>
    </div>
</div>
);
};
