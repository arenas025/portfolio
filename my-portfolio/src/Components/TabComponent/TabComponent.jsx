import React from 'react'
import './TabComponent.scss'

export const TabComponent = ({text, active, onClick}) => {
  return (
    <div onClick={onClick} className={`tabComponent ${active && "active"} `}>
      <p className='tabComponent--text'>{text}</p>
    </div>
  )
}
