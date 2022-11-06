import React from "react";
import "./Topbar.scss";

export const Topbar = ({ active, setActive }) => {
    return (
        <div className={active ? "topbar active" : "topbar"}>
            <div className="topbar-left">
                <h1>Sergio Arenas</h1>
                <p>Eternal learner</p>
            </div>
            <div className="topbar-desktop-right">
                <ul className="topbar-desktop-right-list">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
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
    );
};
