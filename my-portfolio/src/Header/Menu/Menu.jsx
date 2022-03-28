import React from 'react'
import './Menu.scss'

export const Menu = ({active}) => {
  return (
    <div className={active?'menu active':'menu'}>
      <ul className='menu-info'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}
