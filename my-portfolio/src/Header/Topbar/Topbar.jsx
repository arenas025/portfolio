import React from 'react'
import './Topbar.scss'

export const Topbar = ({active,setActive}) => {

return (
    <div className={active?'topbar active':'topbar'}>
        <div className='topbar-left'>
            <h1>Sergio Arenas</h1>
            <p>Eternal learner</p>
        </div>
        <div className='topbar-right'>
            <div className='topbar-right-menu' onClick={()=>
                setActive(!active)
            }>    
                <div className='topbar-right-menu-line1'></div>
                <div className='topbar-right-menu-line2'></div>
                <div className='topbar-right-menu-line3'></div>
            </div>
        </div>
    </div>
)
}
