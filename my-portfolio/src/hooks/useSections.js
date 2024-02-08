import { useState } from 'react';

export const useSections = ({ initialSections }) => {

  const [section, setIsSection] = useState( initialSections );

  const handleChangeSection = (sectionName) => {
    const newList = [...initialSections];
    const item = newList.find((item) => item.name === sectionName);
    item.isActive = true;
    setIsSection(newList);
  };

  return { section, handleChangeSection };
};



