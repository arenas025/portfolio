import React, { useState } from 'react'
import useOnView from 'react-useonview'
import { ContainerCarousel } from '../../Components/ContainerCarousel/ContainerCarousel'
import './Portfolio.scss'

export const Portfolio = () => {
  const [visible, setVisible]=useState(false)
  const trigger = useOnView(() => setVisible(true));
  return (
    <div className='portfolio' id='portfolio'>
      <div className='portfolio--container'>
        <h1 className='portfolio--container__h1'>These are my projects</h1>
        <h2 className='portfolio--container__h2'>Scroll it!</h2>
        <ContainerCarousel/>
      </div>
    </div>
  )
}
