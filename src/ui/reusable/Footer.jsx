import { Link } from 'react-router-dom'
import { FiExternalLink } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='bg-[#252121] pt-14 md:pt-20 pb-3 h-auto overflow-hidden' >
        <div className='px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-3 mb-10 '>
             <div className='col-span-2'>
                <Link to="/"><h1 className='font-lilita font-normal text-xl md:text-2xl'>DEBIDDO</h1> </Link> 
            </div>
            <div className='flex w-full items-start mt-5 md:mt-0'>
                <ul className='mx-0 md:mx-0 lg:mx-10 mt-5 md:mt-0 text-sm md:text-lg'>
                    <li className=' font-semibold text-gray-500 ml-0 md:ml-5 mr-5 mb-5 mt-0'>Pages</li>
                    <Link to="/"><li className=' font-medium text-primary hover:text-[#46256A] cursor-pointer ml-0 md:ml-5 mr-5 my-5'>Home</li></Link>
                    <Link to="projects"><li className=' font-medium text-primary hover:text-[#46256A] cursor-pointer ml-0 md:ml-5 mr-5 my-5'>Projects</li></Link>
                    <Link to="about"><li className=' font-medium text-primary hover:text-[#46256A] cursor-pointer ml-0 md:ml-5 mr-5 my-5'>About</li></Link>
                </ul>
                <ul className='mx-0 md:mx-0 lg:mx-10 mt-5 md:mt-0 text-sm md:text-lg'>
                    <li className=' font-semibold text-gray-500 mx-5 mb-5 mt-0'>Socials</li>
                    <li className='flex items-center font-medium text-primary hover:text-[#46256A] m-5 cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/debiddosyntax/', '_blank')}>LinkedIn<span className='mx-1'><FiExternalLink /></span></li>
                    <li className='flex items-center font-medium text-primary hover:text-[#46256A] m-5 cursor-pointer' onClick={() => window.open('https://github.com/DebiddoSyntax', '_blank')}>GitHub<span className='mx-1'><FiExternalLink /></span></li>
                    <li className='flex items-center font-medium text-primary hover:text-[#46256A] m-5 cursor-pointer' onClick={() => window.open('https://www.behance.net/Debiddddo', '_blank')}>Behance<span className='mx-1'><FiExternalLink /></span></li>
                </ul>
            </div>
            
        </div>
        <div className='mt-10 md:mt-20'>
            <p className='text-[11.5vw] font-rubik text-[#7777] font-extrabold rotate-6'>DEBIDDOSYNTAX</p>
        </div>
    </div>
  )
}

export default Footer