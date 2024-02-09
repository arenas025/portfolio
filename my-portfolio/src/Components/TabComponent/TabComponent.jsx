import React from 'react'
import './TabComponent.scss'

export const TabComponent = ({text, active, onClick}) => {
  return (
    <div id={`tabComponent-${text}`} onClick={onClick} className={`tabComponent ${active && "active"} `}>
      <p className='tabComponent--text'>{text}</p>
    </div>
  )
}
