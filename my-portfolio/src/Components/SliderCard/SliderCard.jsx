import React from 'react'
import './SliderCard.scss'

export const SliderCard = (props) => {
  return (
    <div className='sliderCard'>
        <ul className='sliderCard--list'>
            {props.children}
        </ul>
    </div>
  )
}
