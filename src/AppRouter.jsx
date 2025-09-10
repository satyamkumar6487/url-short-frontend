import ShortenUrlPage from "./components/ShortenUrlPage"
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPAge from './components/AboutPAge'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import { Toaster } from 'react-hot-toast'
import Login from './components/Login'
import DashboardLayout from './components/dashboard/DashboardLayout'
import PrivateRoute from "./PrivateRoute"
const AppRouter = () => {
  return (
   <>
  <NavBar/>
  <Toaster position='top-center'/>
  <Routes>

<Route  path='/' element={<LandingPage/>}/>

<Route path='/about' element={<AboutPAge/>}/>
<Route path='/register' element={<PrivateRoute publicPage={true}><RegisterPage/></PrivateRoute>}/>
<Route path='/Login' element={<PrivateRoute publicPage={true}><Login/></PrivateRoute>}/>
<Route path='/dashboard' element={<PrivateRoute><DashboardLayout/></PrivateRoute>}/>

  </Routes>
  <Footer/>
  
</>

  )
}
 
export default AppRouter

export const SubDomainRouter = () => {

  return(

<Routes>

<Route  path='/:url' element={<ShortenUrlPage/>}/>



  </Routes>

  )
}