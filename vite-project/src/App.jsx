import React from 'react'
import Home from './Navbar/Home/Home'
import About from "./Navbar/About.jsx"
import Services from "./Navbar/Services.jsx"
import Academics from "./Navbar/Academics.jsx"
import Pro from "./Navbar/Pro.jsx"
import Industries from "./Navbar/Industries.jsx"
import Contact from "./Navbar/Contact.jsx"
import { Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
   {/* <Home/> */}
  
   <Routes>
    
   <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/service" element={<Services/>}/>
    <Route path='/Academia' element={<Academics/>}></Route>
    <Route path="/pro" element={<Pro/>}></Route>
    <Route path="/industries" element={<Industries/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
   </Routes>

<Footer/>
    </div>
  )
}

export default App
