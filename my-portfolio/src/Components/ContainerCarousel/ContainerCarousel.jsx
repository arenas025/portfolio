import React from 'react'
import { CarouselCard } from '../CarouselCard/CarouselCard'
import { ProjectCard } from '../ProjectCard/ProjectCard'
// import { SliderCard } from '../SliderCard/SliderCard'
// import { SelectorCard } from '../SelectorCard/SelectorCard'
import images from '../../assets/images'
import './ContainerCarousel.scss'

export const ContainerCarousel = () => {
  return (
    <div className='containerCarousel'>
        <CarouselCard>
            <ProjectCard 
            id={1}
            title='Netflix clone'
            urlProject='https://netflix-clone321.netlify.app/'
            urlRepository='https://github.com/arenas025/Netflix_clone'
            imgProject={images.netflixImg}
            />
            <ProjectCard 
            id={2}
            title='Google clone'
            urlProject='https://arenas025.github.io/clon_google/'
            urlRepository='https://github.com/arenas025/clon_google'
            imgProject={images.googleImg}
            />
            <ProjectCard 
            id={3}
            title='Chat interface'
            urlProject='https://arenas025.github.io/Chat-interface/'
            urlRepository='https://github.com/arenas025/Chat-interface'
            imgProject={images.chatInterfaceImg}
            />
            <ProjectCard 
            id={4}
            title='Rick and Morty API'
            urlProject='https://spa-rickandmorty-vainilla.netlify.app/'
            urlRepository='https://github.com/arenas025/SPA-with-Vanilla-JS'
            imgProject={images.rickandmortyImg}
            />
            <ProjectCard 
            id={5}
            title='Techtrans'
            urlProject='https://techtrans1234.netlify.app/'
            urlRepository='https://github.com/arenas025/techtrans'
            imgProject={images.techtransImg}
            />
            <ProjectCard 
            id={6}
            title='API Weather'
            urlProject='https://how-is-the-weather123.netlify.app/'
            urlRepository='https://github.com/arenas025/Api-weather'
            imgProject={images.weatherImg}
            />
            <ProjectCard 
            id={7}
            title='Batabit'
            urlProject='https://arenas025.github.io/Batabit-project-frontend.github.io/'
            urlRepository='https://github.com/arenas025/Batabit-project-frontend.github.io'
            imgProject={images.batabitImg}
            />
            <ProjectCard
              id={8}
              title= 'E-commerce'
              urlProject={'https://ecommerce1005.netlify.app/'}
              urlRepository={'https://github.com/arenas025/e-commerce'}
              imgProject={images.ecommerce}
            />
        </CarouselCard>
    </div>
  )
}
