import React from 'react'
import './CarouselCard.scss'

export const CarouselCard = (props) => {
  return (
    <div className='carouselCard'>
        <ul className='carouselCard--list'>
            {props.children}
        </ul>
    </div>
  )
}


{/* <div className='carouselCard'>
        <ul className='carouselCard--container'>
            <li id='1'>
                <div>
                    <h1>Hola</h1>
                </div>
            </li>
        </ul>
        <ul className='carouselCard--slider'>
            <li>
                <a href='#1'>1</a>
            </li>
        </ul>
    </div> */}