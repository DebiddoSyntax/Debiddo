import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed w-full'>
        <header>
          <nav  className='flex justify-between h-20 w-full bg-[#252121] px-5 md:px-10 lg:px-20 text-white items-center border-b-2'>
            <Link to="/"><h1 className='font-lilita font-normal text-xl md:text-2xl'>DEBIDDOSYNTAX</h1> </Link> 
            <ul className='flex justify-between items-center'>
              <Link to="/projects"><li className='hidden md:flex text-lg mx-5 p-3 cursor-pointer'>Projects</li></Link>
              <Link to="/about"><li className='hidden md:flex text-lg mx-5 p-3 cursor-pointer'>About</li></Link>
              <button className='mx-0 text-sm px-10 py-3 bg-primary'>Contact me</button>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default Navbar