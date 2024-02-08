import React, { Suspense, useState } from 'react';
import { Portfolio } from '../../Sections/Portfolio/Portfolio';
import { Skills } from '../../Sections/Skills/Skills';
import { Experience } from '../Experience/Experience';
import { TabComponent } from '../TabComponent/TabComponent';
import './Sections.scss'
import { useSections } from '../../hooks/useSections';

export const Sections = () => {
    
    
    const initialSections = [
      {
        name: "Experience",
        isActive: false,
        component: <Experience />,
      },
      {
        name: "Projects",
        isActive: false,
        component: <Portfolio />,
      },
      {
        name: "Skills",
        isActive: false,
        component: <Skills />,
      },
    ];


const { handleChangeSection, section } = useSections({initialSections});

  return (
    <div className='sections'>
      <div className='sections--wrapper'>
        {section.map((item) => (
          <TabComponent
            key={item.name}
            onClick={() => {
              handleChangeSection(item.name);
            }}
            text={item.name}
            active={item.isActive}
          />
        ))}
      </div>
        <div>{section.map((item) => item.isActive && item.component)}</div>
    </div>
  );
}
