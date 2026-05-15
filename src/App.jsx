import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Service from './Components/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
    
     <Routes>
      <Route path='/signup' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/LogIn' element={<SignUp/>}/>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
