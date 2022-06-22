import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Offers from './components/Offers'
import Tour from './components/Tour'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Offers />
        <Tour />
        <Testimonials />
        <Download />
        <Footer />
    </>
  )
}

export default App