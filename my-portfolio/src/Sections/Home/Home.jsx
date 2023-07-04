import { init } from 'ityped'
import React, { useEffect, useRef } from 'react'
import './Home.scss'

export const Home = () => {
    const myRef=useRef('')
    useEffect(()=>{
        init(myRef.current, { showCursor: false, strings: ['Frontend', 'Mobile', 'Developer!' ] })
    },[])
    
return (
    <div className='home' id='home'>
        <div className='home-fondo'>
        </div>
        <div className='home-text'>
                <p>Hi there, I'm </p>
                <p>Sergio Arenas</p>
                <span ref={myRef} ></span>
            </div>    
    </div>
)
}
