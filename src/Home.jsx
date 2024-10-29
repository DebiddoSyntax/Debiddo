import React from 'react'
import crowdhelp from '../src/assets/Crowdhelp.png'
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import Skills from './Skills';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <div className='px-5 md:px-10 lg:px-20 pt-20 mb-20'>
            <div className='py-14 md:py-20'>
                <h1 className='text-2xl md:text-3xl lg:4xl font-medium w-full lg:w-[70%] leading-10 md:leading-[56px]'>Hey! welcome to <span className='font-bold text-primary'>DebiddoSyntax.</span> Bringing Visions to Life with Design & Development Magic.</h1>
            </div>

            <div className='mt-16 md:mt-24 lg:mt-32 mb-16 md:mb-24'>
                <h1 className='text-[8.3vw] sm:text-[8.3vw] md:text-[8.3vw] lg:text-[7.9vw] xl:text-[8.25vw] font-rubik text-[#7777] font-extrabold'>FEATURED PROJECT</h1>
            </div>

            <div className='bg-[#d9d9d9] mt-14 md:mt-20 lg:mt-28 p-5 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-14 pb-5 md:pb-8 lg:pb-10 rounded-lg md:rounded-xl cursor-pointer h-auto'>
            <img src={crowdhelp} alt="crowdhelp" className='w-full h-full object-cover '/>
            <div className='flex justify-between items-center mt-5'><p className='text-black text-lg md:xl lg:text-2xl font-semibold'></p><button className='flex text-sm md:text-lg items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary'>View on Behance <span className='mx-1 md:mx-3'><FiExternalLink /></span></button></div>
        </div>

            <div className='my-20 text-center'>
                <Link to="/projects"><button className='bg-primary py-5 px-14'>View all projects</button></Link>
            </div>
        </div>

        <Skills />
        <div className='flex justify-between items-center w-full px-5 md:px-10 lg:px-20 py-40'>
            <p>Download my resume</p> <button className='flex justify-between items-center py-3 px-5 bg-primary text-sm md:text-lg'>Download <HiOutlineArrowDownTray className='mx-3' /></button>
        </div>
    </div>
  )
}

export default Home