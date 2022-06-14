import React from 'react'
import Header from './Components/Header'
import "./App.css";
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
const App = () => {
  document.title="Home | Ashish Ranjan"
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App