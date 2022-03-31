import React from 'react'
import { ContainerCarousel } from '../../Components/ContainerCarousel/ContainerCarousel'
import './Portfolio.scss'

export const Portfolio = () => {
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
