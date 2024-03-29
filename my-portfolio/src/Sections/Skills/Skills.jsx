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
          <Card skill="Javascript" imgSrc={images.javascript} />
          <Card skill="Typescript" imgSrc={images.typescript} />
          <Card skill="React" imgSrc={images.react} />
          <Card skill="Tailwind" imgSrc={images.tailwind} />
          <Card skill="React Native" imgSrc={images.react} />
          <Card skill="SASS" imgSrc={images.sass} />
          <Card skill="NestJS" imgSrc={images.nest} />
          <Card skill="MySql" imgSrc={images.mysql} />
          <Card skill="Git" imgSrc={images.git} />
          <Card skill="Cypress" imgSrc={images.cypressLogo} />
        </Cards>
      </div>
    </div>
  );
}
