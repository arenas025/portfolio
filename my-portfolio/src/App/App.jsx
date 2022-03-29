import { useState } from 'react'
import { Topbar } from '../Components/Header/Topbar/Topbar'
import { Menu } from '../Components/Header/Menu/Menu'
import { Home } from '../Sections/Home/Home'
import { Skills } from '../Sections/Skills/Skills'
import useOnView from 'react-useonview'
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
