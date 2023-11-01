import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import ServiceDetail from './components/ServiceDetail'
import WhoWeAre from './components/WhoWeAre'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <ServiceDetail />
      <WhoWeAre />
      <Contact />
      <Footer />
    </>
  )
}

export default App
