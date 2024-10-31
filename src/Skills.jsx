import React from 'react'
import css from '../src/assets/icons/css.png'
import react from '../src/assets/icons/react.png'
import html from '../src/assets/icons/html.png'
import figma from '../src/assets/icons/figma.png'
import javascript from '../src/assets/icons/javascrript.png'




const Skills = () => {
  return (
    <div className='text-center bg-[#04010A] px-5 md:px-10 lg:px-20 pt-14 pb-24 md:pt-20 md:pb-36 '>
        <h2 className='p-3 font-semibold text-2xl md:text-4xl'>My Skills</h2>
        <div className='text-center'><p className='p-3 font-normal text-sm md:text-lg'>Skilled in UX/UI Design, HTML, CSS, JavaScript, React.js, and React Native. I create engaging, responsive interfaces for web and mobile platforms.</p></div>
            <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 w-full gap-6 px-0 mt-10 md:mt-14'>
                <div className='flex flex-col py-5 px-10 md:py-10 md:px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className='w-10 h-10'><img src={figma} alt="" /></div>
                    <p className='mt-3'>Figma</p>
                </div>
                <div className='flex flex-col py-5 px-10 md:py-10 md:px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className='w-10 h-10'><img src={react} alt="" /></div>
                    <p className='mt-3'>React</p>
                </div>
                <div className='flex flex-col py-5 px-10 md:py-10 md:px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className='w-10 h-10'><img src={html} alt="" /></div>
                    <p className='mt-3'>HTML</p>
                </div>
                <div className='flex flex-col py-5 px-10 md:py-10 md:px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className='w-10 h-10'><img src={css} alt="" /></div>
                    <p className='mt-3'>CSS</p>
                </div>
                <div className='flex flex-col py-5 px-10 md:py-10 md:px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className='w-10 h-10'><img src={javascript} alt="" /></div>
                    <p className='mt-3'>JavaScript</p>
                </div>
                <div className='flex flex-col py-5 px-10 md:py-10 md:px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className='w-10 h-10'><img src={react} alt="" /></div>
                    <p className='mt-3'>Native</p>
                </div>
        </div>
    </div>
  )
}

export default Skills