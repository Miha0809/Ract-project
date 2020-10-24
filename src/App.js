import React from 'react'
import './css/style.css'
import HomePage from './components/HomePage'
import Appartments from './components/Appartments'
import HowItWorks from './components/HowItWorks'
import Agents from './components/Agents'
import Contact from './components/Contact'
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <HomePage/>
      <Appartments/>
      <HowItWorks/>
      <Agents/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App