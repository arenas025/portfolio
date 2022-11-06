import React, { useState }from 'react'
import { Cards } from '../../Components/Cards/Cards'
import { Card } from '../../Components/Card/Card'
import images from '../../assets/images'
import useOnView from 'react-useonview'
import './Skills.scss'

export const Skills = () => {
  const [visible, setVisible]=useState(false)
  const trigger = useOnView(() => setVisible(true));
  return (
    <div ref={trigger} className='skills' id='skills'>
      <div className= {visible ?'skills--container':'skills--container noVisible'}>
        <h1 className='skills--title'>Skills</h1>
        <Cards>
          <Card skill='HTML' imgSrc={images.htmlImg}/>
          <Card skill='CSS' imgSrc={images.cssImg}/>
          <Card skill='SASS' imgSrc={images.sass}/>
          <Card skill='Javascript' imgSrc={images.javascriptImg}/>
          <Card skill='React' imgSrc={images.reactImg}/>
          <Card skill='Typescript' imgSrc={images.typescriptImg}/>
          <Card skill='Redux' imgSrc={images.redux}/>
          <Card skill='Git' imgSrc={images.gitImg}/>
          <Card skill='Vite' imgSrc='https://vitejs.dev/logo.svg'/>
        </Cards>
      </div>
    </div>
  )
}
