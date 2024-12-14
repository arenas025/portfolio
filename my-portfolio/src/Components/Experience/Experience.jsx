import React from 'react'
import { ExperienceCard } from '../ExperiencieCard/ExperienceCard'
import './Experience.scss'

export const Experience = () => {

  const experience = [
    {
      description: [
        "Take designs uploaded to Figma in by the design team and convert them into dynamic and reusable React components",
        "Provide maintenance and optimization to the code and develop new features as required",
        "Do the backend-frontend integration through the API",
      ],
      role:"Jr Frontend Developer",
      company: "Umoob",
      dates:"Jan 2022 - May 2023",
      period:"(1 year - 5 months)",
      stack:"React, TypeScript, SASS, Scrum"
    },
    {
      description:[
          "Create and maintain a mobile app publicated on Google Play Store for the attendance tracking of personnel",
          "Development of an efficient database ensuring data integrity and security",
          "Development of a portal web for uploading files, and management of the company webpage",
        ],
        role:"Software Developer",
        company:"JMS Ingenieria SAS",
        dates:"Dic 2022 - Feb 2024",
        period:"(1 year - 2 months)",
        stack:"React Native, TypeScript, NextJS, NestJS, SQL, Tailwind"
    },
    {
      description:[
          "Create and maintain a mobile app publicated on Google Play Store for the attendance tracking of personnel",
          "Development of an efficient database ensuring data integrity and security",
          "Development of a portal web for uploading files, and management of the company webpage",
        ],
        role:"Fullstack Developer",
        company:"Cressco dev",
        dates:"Feb 2024 - Current",
        period:"",
        stack:"TypeScript, NextJS, Express, PostgreSQL, Tailwind"
    }
  ];



  return (
    <div id="experience" className="experience">
      {experience.map(({company,dates,description,period,role,stack}) => (
        <ExperienceCard
        key={company}
          description={description}
          role={role}
          company={company}
          dates={dates}
          period={period}
          stack={stack}
        />
      ))}
    </div>
  );
}
