import React from 'react'
import { ContactComponent } from '../ContactComponent/ContactComponent';
import "./MainCard.scss"
import images from '../../assets/images';
import '../../_variables.scss'

export const MainCard = ({name, description, image}) => {
  return (
    <div
      className='container'
    >
      <img
      className='pattern'
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
              linkTo={"https://www.linkedin.com/in/sergio-arenas/"}
              iconName={"logo-linkedin"}
            />
            <ContactComponent
              backgroundColor={"#FF4766"}
              iconColor={"white"}
              linkTo={"https://github.com/arenas025"}
              iconName={"logo-github"}
            />
            <ContactComponent
              backgroundColor={"#FF4766"}
              iconColor={"white"}
              linkTo={"https://www.instagram.com/arenasergio/"}
              iconName={"logo-instagram"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}