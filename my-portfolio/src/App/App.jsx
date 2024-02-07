import { MainCard } from '../Components/MainCard/MainCard';
import { Sections } from '../Components/Sections/Sections';
import './App.css';


function App() {
  // const [active, setActive] = useState(false)
  return (
    <div className="App">
      {/* <Menu active={active}/>
      <Topbar 
      active={active} 
      setActive={setActive}/>
      <Home/>
      <Skills/>
      <Portfolio/>
      <Contact/> */}
      <MainCard
        image={"../../assets/sin fondo blanca.png"}
        name={"Sergio Arenas"}
        description={`Software developer with 2+ years of experience. \n I am focused on delivering outstanding results and taking on challenging projects to encourage my professional growth.
        
        My approach is based on the philosophy of an eternal learner, always believing in the potential for continuous improvement. 
        `}
      />
      <Sections/>
    </div>
  );
}

export default App
