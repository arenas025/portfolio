import { useState } from 'react'
import { Menu } from '../Components/Header/Menu/Menu'
import { Topbar } from '../Components/Header/Topbar/Topbar'
import { Contact } from '../Sections/Contact/Contact'
import { Home } from '../Sections/Home/Home'
import { Portfolio } from '../Sections/Portfolio/Portfolio'
import { Skills } from '../Sections/Skills/Skills'
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
