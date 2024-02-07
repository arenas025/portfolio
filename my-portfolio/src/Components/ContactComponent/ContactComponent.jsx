import React from 'react'
import "./ContactComponent.scss"

export const ContactComponent = ({iconName, backgroundColor, iconColor, linkTo}) => {
  return (
    <a href={linkTo} target='_blank'>
      <div style={{ backgroundColor }} className="iconContainer">
        <ion-icon size={40} style={{ color: iconColor,fontSize:"20px" }} name={iconName}></ion-icon>
      </div>
    </a>
  );
}