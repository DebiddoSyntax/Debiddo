import React from 'react'
import crowdhelp from '../src/assets/Crowdhelp.png'
import HashtagSneaker from '../src/assets/HashtagsSneaker.png'
import { FiExternalLink } from "react-icons/fi";


const Projects = () => {
  return (
    <div className='pt-10 md:pt-20 pb-52 lg:pb-80 px-5 md:px-10 lg:px-20'>
        <div className='mt-24 mb-16 md:mb-24'>
            <h1 className='text-[11.5vw] sm:text-[11.5vw] md:text-[11.2vw] lg:text-[10.6vw] xl:text-[11.2vw] font-rubik text-[#7777] font-extrabold'>ALL PROJECTS</h1>
        </div>
        <div className='mt-16 md:mt-24 mb-10 md:mb-14'>
            <h1 className='text-[40px] md:text-[64px] lg:text-[80px] font-rubik text-primary font-extrabold'>DESIGN</h1>
        </div>

        <div className='bg-[#d9d9d9] mt-10 md:mt-20 lg:mt-28 p-5 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-14 pb-5 md:pb-8 lg:pb-10 rounded-lg md:rounded-xl cursor-pointer h-auto'>
            <img src={crowdhelp} alt="crowdhelp" className='w-full h-full object-cover '/>
            <div className='flex justify-between items-center mt-5'><p className='text-black text-lg md:xl lg:text-2xl font-semibold'></p><button className='flex text-sm md:text-lg items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary'>View on Behance <span className='mx-1 md:mx-3'><FiExternalLink /></span></button></div>
        </div>

        <div className='bg-[#d9d9d9] mt-14 md:mt-20 lg:mt-28 p-5 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-14 pb-5 md:pb-8 lg:pb-10 rounded-lg md:rounded-xl cursor-pointer h-auto'>
            <img src={HashtagSneaker} alt="crowdhelp" className='w-full h-full object-cover '/>
            <div className='flex justify-between items-center mt-5'><p className='text-black text-lg md:xl lg:text-2xl font-semibold'></p><button className='flex text-sm md:text-lg items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary'>View on Behance <span className='mx-1 md:mx-3'><FiExternalLink /></span></button></div>
        </div>

        <div className='mt-32 mb-10 md:mb-14'>
            <h1 className='text-[40px] md:text-[64px] lg:text-[80px] font-rubik text-primary font-extrabold'>DEVELOPMENT</h1>
        </div>

        <div className='bg-[#d9d9d9] mt-10 md:mt-20 lg:mt-28 p-5 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-14 pb-5 md:pb-8 lg:pb-10 rounded-lg md:rounded-xl cursor-pointer h-auto'>
            <img src={crowdhelp} alt="crowdhelp" className='w-full h-full object-cover '/>
            <div className='flex justify-between items-center mt-5'><p className='text-black text-lg md:xl lg:text-2xl font-semibold'></p><button className='flex text-sm md:text-lg items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary'>View on Behance <span className='mx-1 md:mx-3'><FiExternalLink /></span></button></div>
        </div>
</div>
  )
}

export default Projects