import React from 'react'
import './SelectorCards.scss'

export const SelectorCard = ({id}) => {
  return (
    <li className='selectorCard'>
        <a href={id} className='selectorCard__anchor'>
          <div className='selectorCard__anchor--div'></div>
        </a>
    </li>
  )
}
