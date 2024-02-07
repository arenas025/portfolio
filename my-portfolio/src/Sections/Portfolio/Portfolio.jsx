import React from 'react'
import { ContainerCarousel } from '../../Components/ContainerCarousel/ContainerCarousel'
import './Portfolio.scss'


export const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='portfolio--container'>
        <ContainerCarousel/>
      </div>
    </div>
  )
}
