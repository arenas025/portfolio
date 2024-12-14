import React, { useState } from 'react'
import images from '../../../assets/images'
import { CarouselCard } from '../CarouselCard/CarouselCard'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import './ContainerCarousel.scss'
import { useWidth } from '../../hooks/useWidth'

export const ContainerCarousel = () => {

const {width} = useWidth()

const projects = [
  {
    title: "El bunde distribuidora",
    urlProject: "https://elbundedistribuidora.com/",
    urlRepository: "https://github.com/Cesarleops/elbunde",
    imgProject: width < 600 ? images.bundeMobile : images.bunde,
  },
  {
    title: "IP Address tracker",
    urlProject: "https://ip-tracker-sa.netlify.app/",
    urlRepository: "https://github.com/arenas025/ip-tracker",
    imgProject: width < 600 ? images.ipTrackerMobile : images.ipTracker,
  },
  {
    title: "Art Gallery Slide",
    urlProject: "https://art-gallery-sa.netlify.app/",
    urlRepository: "https://github.com/arenas025/art-gallery",
    imgProject: width < 600 ? images.artGalleryMobile : images.artGallery,
  },
  {
    title: "Chat interface",
    urlProject: "https://arenas025.github.io/Chat-interface/",
    urlRepository: "https://github.com/arenas025/Chat-interface",
    imgProject: width < 600 ? images.chatInterfaceMobile : images.chatInterface,
  },
  {
    title: "Pokedux",
    urlProject: "https://pokedux123.netlify.app/",
    urlRepository: "https://github.com/arenas025/pokedux",
    imgProject: width < 600 ? images.pokeduxMobile : images.pokedux,
  },
  {
    title: "API Weather",
    urlProject: "https://how-is-the-weather123.netlify.app/",
    urlRepository: "https://github.com/arenas025/Api-weather",
    imgProject: width < 600 ? images.weatherMobile : images.weather,
  },
];

return (
  <div className="containerCarousel">
    <CarouselCard>
      {projects.map(({ imgProject, title, urlProject, urlRepository }, id) => (
        <ProjectCard
          id={id}
          key={id}
          imgProject={imgProject}
          title={title}
          urlProject={urlProject}
          urlRepository={urlRepository}
        />
      ))}
    </CarouselCard>
  </div>
);
}
