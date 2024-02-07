import React, { Suspense, useState } from 'react';
import { Portfolio } from '../../Sections/Portfolio/Portfolio';
import { Skills } from '../../Sections/Skills/Skills';
import { Experience } from '../Experience/Experience';
import { TabComponent } from '../TabComponent/TabComponent';
import './Sections.scss'

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
      component: (
        <Suspense fallback={()=><p>Loading...</p>}>
          <Skills />
        </Suspense>
      ),
    },
  ];

  const [section, setIsSection] = useState(initialSections);

  const handleChangeSection = (sectionName) => {
    const newList = [...initialSections]
    const item = newList.find(item => item.name === sectionName)
    item.isActive = true
    setIsSection(newList)
  }

  return (
    <div className='sections'>
      <div className='sections--wrapper'>
        {section.map((item) => (
          <TabComponent
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
