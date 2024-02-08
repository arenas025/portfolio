import React, { useState } from 'react'
import images from '../../../assets/images'
import { CarouselCard } from '../CarouselCard/CarouselCard'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import './ContainerCarousel.scss'
import { useWidth } from '../../hooks/useWidth'

export const ContainerCarousel = () => {

const {width} = useWidth()






  return (
    <div className="containerCarousel">
      <CarouselCard>
        <ProjectCard
          id={1}
          title="IP Address tracker"
          urlProject={"https://ip-tracker-sa.netlify.app/"}
          urlRepository={"https://github.com/arenas025/ip-tracker"}
          imgProject={width < 600 ? images.ipTrackerMobile : images.ipTracker}
        />
        <ProjectCard
          id={2}
          title="Art Gallery Slide"
          urlProject={"https://art-gallery-sa.netlify.app/"}
          urlRepository={"https://github.com/arenas025/art-gallery"}
          imgProject={width < 600 ? images.artGalleryMobile : images.artGallery}
        />
        <ProjectCard
          id={9}
          title="Pokedux"
          urlProject={"https://pokedux123.netlify.app/"}
          urlRepository={"https://github.com/arenas025/pokedux"}
          imgProject={width < 600 ? images.pokeduxMobile : images.pokedux}
        />
        <ProjectCard
          id={6}
          title="API Weather"
          urlProject="https://how-is-the-weather123.netlify.app/"
          urlRepository="https://github.com/arenas025/Api-weather"
          imgProject={width < 600 ? images.weatherMobile : images.weather}
        />
        <ProjectCard
          id={3}
          title="Chat interface"
          urlProject="https://arenas025.github.io/Chat-interface/"
          urlRepository="https://github.com/arenas025/Chat-interface"
          imgProject={
            width < 600 ? images.chatInterfaceMobile : images.chatInterface
          }
        />
        <ProjectCard
          id={7}
          title="Batabit"
          urlProject="https://arenas025.github.io/Batabit-project-frontend.github.io/"
          urlRepository="https://github.com/arenas025/Batabit-project-frontend.github.io"
          imgProject={width < 600 ? images.batabitMobile : images.batabit}
        />
      </CarouselCard>
    </div>
  );
}
