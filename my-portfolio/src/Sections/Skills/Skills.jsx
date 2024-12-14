import React, { Suspense } from 'react'
import { Card } from '../../Components/Card/Card'
import { Cards } from '../../Components/Cards/Cards'
import images from '../../../assets/images'
import './Skills.scss'

export const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills--container">
        <Cards>
          <Card skill="Next JS" imgSrc={images.nextJS} />
          <Card skill="Zustand" imgSrc={images.zustand} />
          <Card skill="Tailwind" imgSrc={images.tailwind} />
          <Card skill="React Native" imgSrc={images.react} />
          <Card skill="Zod" imgSrc={images.zod} />
          <Card skill="Cypress" imgSrc={images.cypressLogo} />
          <Card skill="Typescript" imgSrc={images.typescript} />
          <Card skill="Express" imgSrc={images.expressJs} />
          <Card skill="MySql" imgSrc={images.mysql} />
          <Card skill="Prisma" imgSrc={images.prisma} />
          <Card skill="Jest" imgSrc={images.jest} />
        </Cards>
      </div>
    </div>
  );
}
