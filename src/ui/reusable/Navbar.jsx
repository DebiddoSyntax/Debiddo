import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineX, HiOutlineMenuAlt3, HiChevronRight } from "react-icons/hi";
import Logo from '../../assets/Logo.png'



const Navbar = () => {

  const [nav, setNav] = useState(false); 
  const handleNav = () => {
        setNav(!nav);
      };

  const location = useLocation()


  const getLinkClass = (path) => {
    return location.pathname === path 
      ? 'text-primary' 
      : 'hover:text-primary'; 
  }; 

  return (
    <div className='fixed w-full z-10'>
        <header>
          <nav  className='flex justify-between h-20 w-full bg-[#252121] px-5 md:px-10 lg:px-20 text-white items-center border-b-2'>
            {/* <Link to="/"><h1 className='font-lilita font-semibold text-xl md:text-2xl'>DEBIDDO</h1> </Link>  */}
            <div className='h-7 md:h-8'>
              <Link to="/"><img className="w-full h-full object-contain" src={Logo} alt="Logo" /></Link>
            </div>
            <ul className='flex justify-between items-center'>
              <Link to="/projects"><li className={`hidden md:flex text-lg mx-5 p-3 cursor-pointer ${getLinkClass('/projects')}`}>Projects</li></Link>
              <Link to="/about"><li className={`hidden md:flex text-lg mx-5 p-3 cursor-pointer ${getLinkClass('/about')}`}>About</li></Link>
              <Link to={'/contact'}>
                <button className='ml-5 mr-0 text-sm px-5 md:px-8 lg:px-10 py-3 bg-primary hover:bg-[#46256A] rounded-sm font-semibold' 
                  // onClick={()=> window.location.href='mailto:debiddosyntax@gmail.com?subject=Hello&body=Your%20message%20here'}
                >
                  Contact
                </button>
              </Link>
              <div className='flex text-2xl items-center ml-3 mr-0 md:hidden' onClick={handleNav}>
                {nav ? <div className='text-[26px] stroke-2 hover:text-blue-700'><HiOutlineX /></div> : <div className='text-[26px] stroke-2 hover:text-blue-700'><HiOutlineMenuAlt3 /></div>}
            </div>
            </ul>

            
          </nav>

         

            <div className={nav ? 'z-5 fixed top-[80px] w-full h-[100%] bg-[#04010A] p-4 shadow-xl ease-in-out duration-800 md:hidden' : 'fixed top-[-100%]'}>
              <ul className='py-4  bg-[#252121]'>
                <li className='p-5'>
                  <Link to="/" className='flex items-center justify-between hover:text-primary' onClick={handleNav}>HOME <span className='text-xl'><HiChevronRight /></span></Link>
                </li>
                <li className='p-5'>
                  <Link to="/projects" className='flex items-center justify-between hover:text-primary' onClick={handleNav}>PROJECTS <span className='text-xl'><HiChevronRight /></span></Link>
                </li>
                <li className='p-5'>
                  <Link to="/about" className='flex items-center justify-between hover:text-primary' onClick={handleNav}>ABOUT<span className='text-xl'><HiChevronRight /></span></Link>
                </li>
              </ul>
          </div>
        </header>
    </div>
  )
}

export default Navbar