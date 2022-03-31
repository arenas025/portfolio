import { useState } from 'react'
import { Topbar } from '../Components/Header/Topbar/Topbar'
import { Menu } from '../Components/Header/Menu/Menu'
import { Home } from '../Sections/Home/Home'
import { Skills } from '../Sections/Skills/Skills'
import { Portfolio } from '../Sections/Portfolio/Portfolio'
import { Contact } from '../Sections/Contact/Contact'
import './App.css'

function App() {
  const [active, setActive] = useState(false)
  
  return (
    <div className="App">
      <Menu active={active}/>
      <Topbar 
      active={active} 
      setActive={setActive}/>
      <Home/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
