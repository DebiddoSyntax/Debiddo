import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const About = () => {

    const { pathname } = useLocation();
    useEffect(() => {
       window.scrollTo(0,0);
    }, [pathname])

  return (
    <div>
        <div className='px-5 md:px-10 lg:px-20 pt-20 mb-20'>
            <div className='mt-16 mb-5'>
                <h1 className='text-[11vw] sm:text-[10.8vw] md:text-[11vw] lg:text-[10.5vw] font-rubik text-[#7777] font-extrabold'>DAVID MICHAEL</h1>
            </div>
            <div className='mt-0'>
                <h1 className='text-sm md:text-xl font-medium w-full md:w-[70%] leading-7 md:leading-10 '>I am a frontend developer with a background in UI/UX design, passionate about bridging design and development to create intuitive and visually compelling digital experiences. My design roots give me a strong eye for detail and user-centered thinking, while my skills in HTML, CSS, JavaScript, and React allow me to bring concepts to life on the web. I thrive on building responsive, user-friendly interfaces that make technology feel effortless and accessible. As I continue to grow in development, I'm excited to blend creativity with code to deliver impactful solutions.</h1>
            </div>
        </div>
        <div className='mt-20 p-20 bg-[#AF93C6] h-full w-full'>
            <h4 className='text-xl md:text-2xl font-bold text-primary text-center'>HOBBIES</h4>
            <p className='text-center text-lg md:text-2xl font-semibold mt-3'>Things I love to do with my free time</p>

            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 '>
                <div className='bg-primary px-5 md:px-8 lg:px-10 pt-16 md:pt-20 lg:pt-28 pb-5 md:pb-8 rounded-sm'>
                    <h5 className='text-2xl font-bold text-[#232026]'>ANIME</h5>
                    <p className='text-lg font-normal italic text-white mt-3'>I’m fluent in subtitles, my favorite anime is One Piece</p>
                </div>
                <div className='bg-primary px-5 md:px-8 lg:px-10 pt-16 md:pt-20 lg:pt-28 pb-5 md:pb-8 rounded-sm'>
                    <h5 className='text-2xl font-bold text-[#232026]'>GAMING</h5>
                    <p className='text-lg font-normal italic text-white mt-3'>Saving the virtual world one respawn at a time—call it my heroic duty.</p>
                </div>
                <div className='bg-primary px-5 md:px-8 lg:px-10 pt-16 md:pt-20 lg:pt-28 pb-5 md:pb-8 rounded-sm'>
                    <h5 className='text-2xl font-bold text-[#232026]'>FOOTBALL</h5>
                    <p className='text-lg font-normal italic text-white mt-3'>Football is my game—whether watching or playing, I’m all in.</p>
                </div>
                <div className='bg-primary px-5 md:px-8 lg:px-10 pt-16 md:pt-20 lg:pt-28 pb-5 md:pb-8 rounded-sm'>
                    <h5 className='text-2xl font-bold text-[#232026]'>FOOTBALL</h5>
                    <p className='text-lg font-normal italic text-white mt-3'>Football is my game—whether watching or playing, I’m all in.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About