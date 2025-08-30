
import './App.css'
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPAge from './components/AboutPAge'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
function App() {
 

  return (
    <>

  <Router>
  <NavBar/>
  <Routes>

<Route  path='/' element={<LandingPage/>}/>

<Route path='/about' element={<AboutPAge/>}/>

  </Routes>
  <Footer/>
  
  </Router>

  </>

  )
}

export default App
