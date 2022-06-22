import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Offers from './components/Offers'
import Tour from './components/Tour'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Offers />
        <Tour />
        <Testimonials />
    </>
  )
}

export default App