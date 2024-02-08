import React from 'react'
import './ExperienceCard.scss'

export const ExperienceCard = ({description, role, company, period, dates, stack}) => {


  return (
    <div className="experienceCard">
      <p className="experienceCard--role">{role}</p>
      <p className="experienceCard--company">{company}</p>
      <p className="experienceCard--period">
        {dates}
        <br />
        {period}
      </p>
      <p className="experienceCard--main">Main functions</p>
      <ul className="experienceCard--description">
        {description.map((item) => (
          <li key={item} className="experienceCard--description__item">{item}</li>
        ))}
      </ul>
      <p className="experienceCard--stack">Stack</p>
      <p className="experienceCard--stack__items">
        {stack}
      </p>
    </div>
  );
}
