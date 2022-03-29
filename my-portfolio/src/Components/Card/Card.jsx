import React, {useRef,useState} from 'react'
import './Card.scss'

export const Card = ({skill, imgSrc}) => {
  const [isOn,setIsOn]=useState(false)

  const myRef=useRef()
    return (
    <div ref={myRef} onMouseOver={()=>setIsOn(true)} onMouseOut={()=>setIsOn(false)} className= {isOn ? 'card dark':'card'}>
      <img src={imgSrc}/>
      <h1>{skill}</h1>
    </div>
  )
}
