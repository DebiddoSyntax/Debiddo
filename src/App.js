import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './ui/reusable/Navbar'
import Footer from './ui/reusable/Footer'
import Home from './ui/Home'
import Projects from "./ui/Projects"
import About from './ui/About';
import NotFound from './ui/reusable/NotFound'
// import Crowdhelp from './ui/projects/Crowdhelp'


const App = () => {
  return (
    <Router>
        <div className='bg-[#141313] text-white'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/about' element={<About />}></Route>
            {/* <Route path='/crowdhelp' element={<Crowdhelp />}></Route> */}
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        <Footer />
        </div>
    </Router>
  )
}

export default App