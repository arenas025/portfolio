import React, { useState } from 'react'
import useOnView from 'react-useonview';

import './ProjectCard.scss'

export const ProjectCard = ({title,imgProject,urlProject,urlRepository,id}) => {


return (
    <li id={id} className={'projectCard '+id}>
        <div className= 'projectCard--container'>
            <img className='projectCard--container__img' src={imgProject}/>
            <h1 className='projectCard--container__h1'>{title}</h1>
            <div className='projectCard--container__buttons'>
                <button className='projectCard--container__buttons--goLive'>
                    <a href={urlProject}>Go live!</a>
                </button>
                <button className='projectCard--container__buttons--repository'>
                    <a href={urlRepository}>Repository</a>
                </button>
            </div>
        </div>
    </li>
)
}
