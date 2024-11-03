import React, { useEffect, useRef } from 'react'
import crowdhelp from '../src/assets/Crowdhelp.png'
import HashtagSneaker from '../src/assets/HashtagsSneaker.png'
import Cryptofolio from '../src/assets/Cryptofolio.png'
import { FiExternalLink } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import { useIsVisible } from 'react-is-visible'


const Projects = () => {

    const { pathname } = useLocation();
    useEffect(() => {
       window.scrollTo(0,0);
    }, [pathname])

    const ProjectsRef = useRef()
    const DesignRef = useRef()
    const DevRef = useRef()
    const CrowdHelpRef = useRef()
    const HashtagsRef = useRef()
    const CryptoFRef = useRef()
    const HashtagsERef = useRef()
    const ProjectsRefisVisible = useIsVisible(ProjectsRef, { once: true })
    const DesignRefisVisible = useIsVisible(DesignRef, { once: true })
    const DevRefisVisible = useIsVisible(DevRef, { once: true })
    const CrowdHelpRefisVisible = useIsVisible(CrowdHelpRef, { once: true })
    const CryptoFRefisVisible = useIsVisible(CryptoFRef, { once: true })
    const HashtagsRefisVisible = useIsVisible(HashtagsRef, { once: true })
    const HashtagsERefisVisible = useIsVisible(HashtagsERef, { once: true })


    
    

    
    

  return (
    <div className='pt-10 md:pt-20 pb-52 lg:pb-80 px-5 md:px-10 lg:px-20'>
       
        <div className={`z-5 mt-24 mb-16 md:mb-24 duration-1000 delay-75 ease-in-out ${ProjectsRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} ref={ProjectsRef}>
            <h1 className='text-[11.5vw] sm:text-[11.5vw] md:text-[11.2vw] lg:text-[10.6vw] xl:text-[11.2vw] font-rubik text-[#7777] font-extrabold'>ALL PROJECTS</h1>
        </div>
        <div className={`mt-16 md:mt-24 mb-10 md:mb-14 duration-1000 delay-75 ease-in-out ${DesignRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} ref={DesignRef}>
            <h1 className='text-[40px] md:text-[64px] lg:text-[80px] font-rubik text-primary font-extrabold'>DESIGN</h1>
        </div>

        <div className={`delay-800ms duration-1000 ease-in-out bg-[#d9d9d9] mt-10 md:mt-20 lg:mt-28 p-5 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-14 pb-5 md:pb-8 lg:pb-10 rounded-sm md:rounded-xl cursor-pointer h-auto ${CrowdHelpRefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={CrowdHelpRef}>
            <img src={crowdhelp} alt="crowdhelp" className='w-full h-full object-cover '/>
            <div className='flex justify-between items-center mt-5'><p className='text-black text-lg md:xl lg:text-2xl font-semibold'></p><button className='flex text-sm md:text-lg items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary hover:bg-[#46256A]'>View on Behance <span className='mx-1 md:mx-3'><FiExternalLink /></span></button></div>
        </div>

        <div className={`bg-[#d9d9d9] mt-10 md:mt-20 lg:mt-28 p-5 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-14 pb-5 md:pb-8 lg:pb-10 rounded-sm md:rounded-xl cursor-pointer h-auto duration-1000 delay-75 ease-in-out ${CryptoFRefisVisible  ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={CryptoFRef} onClick={() => window.open('https://www.behance.net/gallery/143681909/Web3-case-study-%28CryptoFolio-Web-app%29', '_blank')}>
            <img src={Cryptofolio} alt="crowdhelp" className='w-full h-full object-cover '/>
            <div className='flex justify-between items-center mt-5'><p className='text-black text-lg md:xl lg:text-2xl font-semibold'></p><button className='flex text-sm md:text-lg items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary hover:bg-[#46256A]'>View on Behance <span className='mx-1 md:mx-3'><FiExternalLink /></span></button></div>
        </div>

        <div className={`bg-[#d9d9d9] mt-10 md:mt-20 lg:mt-28 p-5 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-14 pb-5 md:pb-8 lg:pb-10 rounded-sm md:rounded-xl cursor-pointer h-auto duration-1000 delay-75 ease-in-out ${HashtagsRefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={HashtagsRef} onClick={() => window.open('https://www.behance.net/gallery/138711137/Sneaker-store-mobile-app-UX-case-study', '_blank')}>
            <img src={HashtagSneaker} alt="crowdhelp" className='w-full h-full object-cover '/>
            <div className='flex justify-between items-center mt-5'><p className='text-black text-lg md:xl lg:text-2xl font-semibold'></p><button className='flex text-sm md:text-lg items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary hover:bg-[#46256A]'>View on Behance <span className='mx-1 md:mx-3'><FiExternalLink /></span></button></div>
        </div>

        <div className={`mt-16 md:mt-24 mb-10 md:mb-14 duration-1000 delay-75 ease-in-out ${DevRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} ref={DevRef}>
            <h1 className='text-[40px] md:text-[64px] lg:text-[80px] font-rubik text-primary font-extrabold'>DEVELOPMENT</h1>
        </div>

        <div className={`delay-800ms duration-1000 ease-in-out bg-[#d9d9d9] mt-10 md:mt-20 lg:mt-28 p-5 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-14 pb-5 md:pb-8 lg:pb-10 rounded-sm md:rounded-xl cursor-pointer h-auto ${HashtagsERefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={HashtagsERef}>
            <img src={crowdhelp} alt="crowdhelp" className='w-full h-full object-cover '/>
            <div className='flex justify-between items-center mt-5'><p className='text-black text-lg md:xl lg:text-2xl font-semibold'></p><button className='flex text-sm md:text-lg items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary hover:bg-[#46256A]'>View on Behance <span className='mx-1 md:mx-3'><FiExternalLink /></span></button></div>
        </div>


    </div>
  )
}

export default Projects