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
