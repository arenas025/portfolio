import React, { useState } from 'react'
import { TabComponent } from '../TabComponent/TabComponent';
import { Experience } from '../Experience/Experience';

export const Sections = () => {

  const initialSections = [
    {
      name: "Experience",
      isActive: false,
      component:<Experience/>,
    },
    {
      name: "Projects",
      isActive: false,
      component: <div>Proyectos</div>,
    },
    {
      name: "Skills",
      isActive: false,
      component: <div>Skills</div>,
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
    <div
      style={{
        display: "flex",
        height: 100,
        width: "60%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
