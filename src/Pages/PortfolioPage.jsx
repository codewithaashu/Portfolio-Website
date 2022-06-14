import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Portfolio from '../Components/Portfolio'

const PortfolioPage = () => {
  document.title ="Portfolio | Ashish Ranjan"
  return (
    <>
    <Header/>
    <Portfolio/>
    <Footer/>
    </>
  )
}

export default PortfolioPage