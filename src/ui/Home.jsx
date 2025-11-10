"use client"
import { useRef, useState} from 'react'
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import Skills from './reusable/Skills';
import Link from 'next/link';
import { useIsVisible } from 'react-is-visible'
import hashtags from '../../src/assets/projects-thumbnails/HashtagsMerch.webp'
import { CgPerformance } from "react-icons/cg";
import { FaRegFileCode } from "react-icons/fa6";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdOutlinePerson3 } from "react-icons/md";
import ProjectCard from './reusable/ProjectCard';
import Lottie from "lottie-react";
import animationData from "../../public/background.json";
// import ParticlesContainer from './reusable/Particles';


// hero section expertise data 
const HeroExpertise = [
    { 
        heading: 'User Centered Design', 
        body: 'Every layout, flow, and interaction is shaped by real user goals, creating products that feel intuitive, helpful, and human.',
        icon: MdOutlinePerson3
    },
    { 
        heading: 'Design Systems & Consistency', 
        body: 'Build scalable UI systems that maintain visual harmony, streamline development, and ensure brand consistency across products.',
        icon: SiMaterialdesignicons
    },
    { 
        heading: 'Frontend Implementation', 
        body: 'Bridge design and development by coding pixel-perfect interfaces using React, Tailwind, and modern JavaScript practices.',
        icon: FaRegFileCode
    },
    { 
        heading: 'Performance-Driven Design', 
        body: 'Balance beauty with speed. Optimize visuals, animations, and code for smooth, responsive experiences on any device.',
        icon: CgPerformance
    },
]


const Home = () => {

    // refs 
    const WelcomeRef = useRef()
    const FeaturedRef = useRef()
    const homeERef = useRef()

    // IntersectionObserver useIsVisible
    const WelcomeRefisVisible = useIsVisible(WelcomeRef, { once: true })
    const FeaturedRefisVisible = useIsVisible(FeaturedRef, { once: true })
    const homeERefisVisible = useIsVisible(homeERef, { once: true })

    // image loaded state 
    const [homeELoaded, setHomeELoaded] = useState(false)


    return (
        <div>
            {/* hero section  */}
            <div className='relative bg-navbar-background min-h-[800px] h-full px-5 md:px-10 lg:px-20 pt-20 pb-0 md:pb-20 mb-0'>
                <div className='absolute top-5 sm:top-20 md:top-20 2xl:top-5 left-0 w-full h-full z-0'>
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        className="w-full h-[70%] md:h-[60%] sm:h-[50%] lg:h-[60%] xl:h-[50%] 2xl:h-[90%] object-cover"
                    />
                    {/* <ParticlesContainer /> */}
                </div>
                <div className={`py-14 md:py-20 delay-800ms duration-1000 ease-in-out h-full 
                    ${WelcomeRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} 
                    ref={WelcomeRef}
                >
                    <h1 className='text-xl md:text-3xl xl:text-4xl font-semibold w-full lg:w-[80%] leading-8 md:leading-12 xl:leading-14'>
                        Hi there! welcome to <span className='font-bold text-primary w-full'> DebiddoSyntax. </span> I bring visions to life with design and development magic.
                    </h1>

                    <div className='mt-20 md:mt-24 xl:mt-32 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 w-full items-start gap-6 md:gap-10 2xl:gap-20'>
                        {HeroExpertise.map((val, index)=> (
                            <div key={index} className='flex flex-col gap-2 md:gap-3 items-start'>
                                {<val.icon className={`${val.icon == MdOutlinePerson3 ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} text-blue-700 stroke-[-10]`} />}
                                <p className='text-base md:text-lg font-semibold'>
                                    {val.heading}
                                </p>
                                <p className='text-sm md:text-base font-semibold text-portfoliotext text-left'>
                                    {val.body}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={() => window.open('https://cal.com/david-michael-zutofh/debiddo', '_blank')}
                        className='cursor-pointer mt-20 md:mt-24 xl:mt-48 w-52 lg:w-64 text-base lg:text-lg px-5 md:px-8 lg:px-10 py-4 md:py-5 bg-primary text-white hover:bg-hoverprimary rounded-sm font-semibold'>
                        Schedule a call
                    </button>
                </div>
            </div>

            {/* featured project  */}
            <div className='px-5 md:px-10 lg:px-20 pt-10 md:pt-16 xl:pt-20 pb-0 md:pb-5 mb-20'>
                <div className={`mt-10 md:mt-24 lg:mt-32 mb-10 md:mb-24 delay-800ms duration-1000 ease-in-out 
                    ${FeaturedRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} 
                    ref={FeaturedRef}
                >
                    {/* <h1 className='text-[8.3vw] sm:text-[8.3vw] md:text-[8.3vw] lg:text-[7.9vw] xl:text-[8.25vw] font-rubik text-[#7777] w-full font-extrabold'> */}
                    <h1 className='text-[7.5vw] sm:text-[7.9vw] md:text-[7.5vw] lg:text-[7.2vw] xl:text-[7.5vw] 2xl:text-[7.7vw] font-rubik text-bigtext w-full font-extrabold'>
                        FEATURED PROJECT
                    </h1>
                </div>
            
                {/* home card  */}
                <ProjectCard 
                    IsVisibleRef={homeERefisVisible} 
                    ProjectRef={homeERef} 
                    LoadedState={homeELoaded} 
                    setLoadedState={setHomeELoaded} 
                    ProjectName={'Hashtags Merch'} 
                    ProjectLink={'https://hashtagsmerch.vercel.app/'} 
                    ProjectSRC={hashtags} 
                    ButtonText={'View live website'}
                    PageLink={true} 
                    LinkTo={'/hashtags'}
                />

                <div className='my-16 md:my-20 xl:my-28 text-center'>
                    <Link href="/projects">
                        <button className={`cursor-pointer my-0 text-center bg-primary hover:bg-hoverprimary text-base md:text-lg font-semibold text-white py-4 px-14 rounded-sm delay-800ms duration-1000 ease-in-out  
                            ${homeELoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                        >
                            View all projects
                        </button>
                    </Link>
                </div>
            </div>
            
            {/* skills section  */}
            <Skills />

            {/* resume section  */}
            <div className='flex justify-between items-center w-full mt-0 py-20 md:py-32 xl:py-40'>
                <button className='flex justify-between items-center text-center mx-auto py-4 px-14 rounded-sm bg-primary hover:bg-hoverprimary text-base md:text-lg text-white font-semibold cursor-pointer' 
                    onClick={() => window.open('https://drive.google.com/file/d/1LjZlBRrozfplZm_leH7jH0wajzTJCPcJ/view?usp=drive_link', '_blank')}
                >
                    My Resume 
                    <HiOutlineArrowDownTray className='ml-3 mr-0 text-xl stroke-[3px]' />
                </button>
            </div>
        </div>
    )
}

export default Home