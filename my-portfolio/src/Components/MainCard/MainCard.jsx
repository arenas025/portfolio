import React from 'react'
import { ContactComponent } from '../ContactComponent/ContactComponent';
import "./MainCard.scss"
import images from '../../assets/images';

export const MainCard = ({name, description, image}) => {
  return (
    <div style={{width:"100vw", justifyContent:"center",
    display:'flex',position:'relative', alignItems:"center",height:"500px",  marginTop:50}}>
      <img
        style={{
          position: "absolute",
          zIndex: -1,
          left: "200px",
          width: 320,
          top: 0,
        }}
        src={images.dotsPattern}
      />

      <div className="mainCard">
        <img className="mainCard--image" src={image} />
        <div className="mainCard--info">
          <p className="mainCard--info__name">{name}</p>
          <p className="mainCard--info__description">{description}</p>
          <div className="mainCard--info__contact">
            <ContactComponent
              backgroundColor={"#FF4766"}
              iconColor={"white"}
              iconName={"logo-linkedin"}
            />
            <ContactComponent
              backgroundColor={"#FF4766"}
              iconColor={"white"}
              iconName={"logo-github"}
            />
            <ContactComponent
              backgroundColor={"#FF4766"}
              iconColor={"white"}
              iconName={"logo-instagram"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}