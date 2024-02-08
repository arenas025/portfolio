import React from 'react'
import "./ContactComponent.scss"

export const ContactComponent = ({iconName, backgroundColor, iconColor, linkTo}) => {
  return (
    <a href={linkTo} target='_blank' aria-label='Here you can contact me!'>
      <div style={{ backgroundColor }} className="iconContainer">
        <ion-icon alt="logo" size={40} style={{ color: iconColor,fontSize:"20px" }} name={iconName}></ion-icon>
      </div>
    </a>
  );
}