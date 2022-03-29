import React from 'react'
import './Cards.scss'

export const Cards = (props) => {
  return (
    <div className='cards'>
        {props.children}
    </div>
  )
}
