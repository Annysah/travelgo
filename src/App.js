import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Offers from './components/Offers'

const App = () => {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Offers />
    </>
  )
}

export default App