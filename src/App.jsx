
import './App.css'
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPAge from './components/AboutPAge'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import { Toaster } from 'react-hot-toast'
import Login from './components/Login'
function App() {
 

  return (
    <>

  <Router>
  <NavBar/>
  <Toaster position='top-center'/>
  <Routes>

<Route  path='/' element={<LandingPage/>}/>

<Route path='/about' element={<AboutPAge/>}/>
<Route path='/register' element={<RegisterPage/>}/>
<Route path='/Login' element={<Login/>}/>

  </Routes>
  <Footer/>
  
  </Router>

  </>

  )
}

export default App
