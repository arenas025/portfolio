import React, { useRef, useState } from 'react'
import './Card.scss'
import { LoadingImageComponent } from '../LoadingImageComponent/LoadingImageComponent'

export const Card = ({skill, imgSrc}) => {
  const [isOn,setIsOn]=useState(false)

  const [isLoaded, setIsLoaded] = useState(false)

  const myRef=useRef()
    return (
      <div
        ref={myRef}
        onMouseOver={() => setIsOn(true)}
        onMouseOut={() => setIsOn(false)}
        className={isOn ? "card dark" : "card"}
      >
      <LoadingImageComponent isLoaded={isLoaded}/>
        <img
          style={{ display: `${isLoaded ? "inline" : "none"}` }}
          onLoad={() => setIsLoaded(true)}
          src={imgSrc}
          alt={skill}
        />
        <h1>{skill}</h1>
      </div>
    );
}
