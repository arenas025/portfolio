import React, { useState }from 'react'
import { Cards } from '../../Components/Cards/Cards'
import { Card } from '../../Components/Card/Card'
import images from '../../assets/images'
import useOnView from 'react-useonview'
import './Skills.scss'

export const Skills = () => {
  const [visible, setVisible]=useState(false)
  const trigger = useOnView(() => setVisible(true));
  console.log(visible)
  return (
    <div ref={trigger} className='skills' id='skills'>
      <div className= {visible ?'skills--container':'skills--container noVisible'}>
        <h1 className='skills--title'>Skills</h1>
        <Cards>
          <Card skill='HTML' imgSrc={images.htmlImg}/>
          <Card skill='CSS' imgSrc={images.cssImg}/>
          <Card skill='Javascript' imgSrc={images.javascriptImg}/>
          <Card skill='React' imgSrc={images.reactImg}/>
          <Card skill='Typescript' imgSrc={images.typescriptImg}/>
          <Card skill='Webpack' imgSrc={images.webpackImg}/>
          <Card skill='Python' imgSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png'/>
          <Card skill='MySql' imgSrc='https://blog.artegrafico.net/wp-content/uploads/2019/10/mysql-logo.png'/>
        </Cards>
      </div>
    </div>
  )
}
