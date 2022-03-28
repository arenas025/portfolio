import { useState } from 'react'
import { Topbar } from '../Header/Topbar/Topbar'
import { Menu } from '../Header/Menu/Menu'
import { Home } from '../Sections/Home/Home'
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
    </div>
  )
}

export default App
