import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Projects from './projects';
import About from './about';

const App = () => {
  return (
    <Router>
        <div className='bg-[#141313] text-white overscroll-none'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        <Footer />
        </div>
    </Router>
  )
}

export default App