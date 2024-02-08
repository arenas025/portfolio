import React, { useState } from "react";

import "./ProjectCard.scss";
import { LoadingImageComponent } from "../LoadingImageComponent/LoadingImageComponent";

export const ProjectCard = ({
  title,
  imgProject,
  urlProject,
  urlRepository,
  id,
}) => { 

  const [isLoaded, setIsLoaded] = useState(false)


  return (
    <li id={id} className={`projectCard ${id}`}>
      <div className="projectCard--container">
        <LoadingImageComponent isLoaded={isLoaded} />
        <img
          loading="eager"
          onLoad={() => setIsLoaded(true)}
          alt={title}
          style={{ display: `${isLoaded ? "inline" : "none"}` }}
          className="projectCard--container__img"
          src={imgProject}
        />
        <h1 className="projectCard--container__h1">{title}</h1>
        <div className="projectCard--container__buttons">
          <button className="projectCard--container__buttons--goLive">
            <a
              target="_blank"
              aria-label="Botton to go live!"
              href={urlProject}
            >
              Go live!
            </a>
          </button>
          <button className="projectCard--container__buttons--repository">
            <a
              target="_blank"
              aria-label="Botton to go to the repository!"
              href={urlRepository}
            >
              Repository
            </a>
          </button>
        </div>
      </div>
    </li>
  );
};
