import { useEffect, useRef, useState} from 'react'
// import crowdhelp from '../../src/assets/Crowdhelp.webp'
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import Skills from './reusable/Skills';
import { Link, useLocation } from 'react-router-dom';
import { useIsVisible } from 'react-is-visible'
import Untamed from '../../src/assets/Untamed.webp'




const Home = () => {

    const { pathname } = useLocation();
    useEffect(() => {
       window.scrollTo(0,0);
    }, [pathname]);

    // const CrowdHelpRef = useRef()
    // const CrowdHelpRefisVisible = useIsVisible(CrowdHelpRef, { once: true })
    const WelcomeRef = useRef()
    const WelcomeRefisVisible = useIsVisible(WelcomeRef, { once: true })
    const FeaturedRef = useRef()
    const FeaturedRefisVisible = useIsVisible(FeaturedRef, { once: true })
    const UntamedERef = useRef()
    const UntamedERefisVisible = useIsVisible(UntamedERef, { once: true })

    const [untamedELoaded, setUntamedELoaded] = useState(false)
    // const [crowdhelpLoaded, setCrowdhelpLoaded] = useState(false)

  
   



  return (
    <div>
        <div className='px-5 md:px-10 lg:px-20 pt-20 pb-0 md:pb-5 mb-20'>
            <div className={`py-14 md:py-20 delay-800ms duration-1000 ease-in-out ${WelcomeRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} ref={WelcomeRef}>
                <h1 className='text-2xl md:text-3xl font-medium w-full lg:w-[70%] leading-10 md:leading-[56px]'>Hey! welcome to <span className='font-bold text-primary'>DebiddoSyntax.</span> Bringing Visions to Life with Design & Development Magic.</h1>
            </div>

            <div className={`mt-16 md:mt-24 lg:mt-32 mb-16 md:mb-24 delay-800ms duration-1000 ease-in-out ${FeaturedRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} ref={FeaturedRef}>
                <h1 className='text-[8.3vw] sm:text-[8.3vw] md:text-[8.3vw] lg:text-[7.9vw] xl:text-[8.25vw] font-rubik text-[#7777] font-extrabold'>FEATURED PROJECT</h1>
            </div>

            {/* <div className={`delay-800ms duration-1000 ease-in-out bg-[#d9d9d9] mt-10 md:mt-20 lg:mt-28 p-5 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-14 pb-5 md:pb-8 lg:pb-10 rounded-sm md:rounded-xl cursor-pointer h-auto ${CrowdHelpRefisVisible && crowdhelpLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={CrowdHelpRef} onClick={() => window.open('https://www.behance.net/gallery/211811185/CrowdHelp-Mobile-App', '_blank')}>
                <img src={crowdhelp} alt="crowdhelp" className='w-full h-full object-cover ' onLoad={()=> setCrowdhelpLoaded(true)}/>
                <div className='flex justify-between items-center mt-5'><p className='text-[#1f1b1b] text-lg md:text-xl lg:text-2xl font-semibold'>CrowdHelp</p><button className='flex text-sm md:text-lg items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary hover:bg-[#46256A]'>View on Behance <span className='mx-1 md:mx-3'><FiExternalLink /></span></button></div>
            </div> */}
        
            <div className={`delay-800ms duration-1000 ease-in-out bg-[#d9d9d9] mt-10 md:mt-20 lg:mt-28 p-5 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-14 pb-5 md:pb-8 lg:pb-10 rounded-sm md:rounded-xl cursor-pointer h-auto ${UntamedERefisVisible && untamedELoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={UntamedERef}>
                <img src={Untamed} alt="UntamedE" className='w-full h-full object-cover ' onLoad={()=> setUntamedELoaded(true)}/>
                <div className='flex justify-between items-center mt-5'><p className='text-[#1f1b1b] text-lg md:text-xl lg:text-2xl font-semibold'>Untamed Check</p><button className='flex text-sm md:text-lg items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary hover:bg-[#46256A]' onClick={() => window.open('https://untamedcheck.netlify.app/', '_blank')}>View Live Website <span className='mx-1 md:mx-3'><FiExternalLink /></span></button></div>
            </div>

            <div className='my-20 text-center'>
                <Link to="/projects"><button className={`bg-primary hover:bg-[#46256A] text-lg font-medium py-4 px-14 rounded-sm delay-800ms duration-1000 ease-in-out ${untamedELoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>View all projects</button></Link>
            </div>
        </div>

        <Skills />
        <div className='flex justify-between items-center w-full mt-10 py-40'>
            <button className='flex justify-between items-center text-center mx-auto py-4 px-14 rounded-sm bg-primary hover:bg-[#46256A] text-lg md:text-lg font-semibold' onClick={() => window.open('https://drive.google.com/file/d/1am0ryMQYsAXilu2Z6NE_F-PkdpEqMVVz/view?usp=drive_link', '_blank')}>My Resume <HiOutlineArrowDownTray className='ml-3 mr-0 text-xl stroke-[3px]' /></button>
        </div>
    </div>
  )
}

export default Home