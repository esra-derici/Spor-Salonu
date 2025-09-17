import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Iletisim from './pages/Iletisim'
import Subeler from './pages/Subeler'

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/subeler' element={<Subeler />} />
        <Route path='/iletisim'  element={<Iletisim />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App

