import React ,{useEffect} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {

  useEffect(()=> {
    AOS.init();
  },[])

  return (
    <div>
      <Navbar/>
      <div className="container">
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
     
    </div>
  )
}

export default App;

