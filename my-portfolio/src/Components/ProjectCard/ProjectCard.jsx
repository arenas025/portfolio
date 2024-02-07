import React, { useState } from "react";

import "./ProjectCard.scss";

export const ProjectCard = ({
  title,
  imgProject,
  urlProject,
  urlRepository,
  id,
}) => { 

  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize",()=>{
    const width = window.innerWidth;
    setWidth(width);
  })



  return (
    <li id={id} className={`projectCard ${id} 
    }
    `}>
      <div className="projectCard--container">
        <img
          alt={title}
          className="projectCard--container__img"
          src={imgProject}
        />
        <h1 className="projectCard--container__h1">{title}</h1>
        <div className="projectCard--container__buttons">
          <button className="projectCard--container__buttons--goLive">
            <a target="_blank" href={urlProject}>
              Go live!
            </a>
          </button>
          <button className="projectCard--container__buttons--repository">
            <a target="_blank" href={urlRepository}>
              Repository
            </a>
          </button>
        </div>
      </div>
    </li>
  );
};
