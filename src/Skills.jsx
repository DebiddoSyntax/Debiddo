import React from 'react'
import css from '../src/assets/icons/css.png'
import react from '../src/assets/icons/react.png'
import html from '../src/assets/icons/html.png'
import javascript from '../src/assets/icons/javascrript.png'




const Skills = () => {
  return (
    <div className='text-center bg-[#04010A] px-5 md:px-10 lg:px-20 py-20'>
        <h2 className='p-3 font-semibold text-4xl'>My Skills</h2>
        <div className='text-center'><p className='p-3 font-normal text-lg'>Skilled in UX/UI Design, HTML, CSS, JavaScript, React.js, and React Native, I create engaging, responsive interfaces for web and mobile platforms.</p></div>
        <div  className='mx-auto'>
            <div className='flex mt-10 items-center justify-center'>
                <p className='px-10 py-3 bg-white mx-5 text-primary rounded-lg'>Design</p>
                <p className='px-10 py-3 bg-white mx-5 text-primary rounded-lg'>Front-End</p>
                <p className='px-10 py-3 bg-white mx-5 text-primary rounded-lg'>API</p>
                <p className='px-10 py-3 bg-white mx-5 text-primary rounded-lg'>Libraries</p>
                <p className='px-10 py-3 bg-white mx-5 text-primary rounded-lg'>Prototyping</p>
            </div>
            <div className='grid grid-cols-5 w-full gap-6 px-0 mt-20'>
                <div className='flex flex-col py-10 px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className=''><img src={react} alt="" /></div>
                    <p className='mt-3'>React</p>
                </div>
                <div className='flex flex-col py-10 px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className=''><img src={html} alt="" /></div>
                    <p className='mt-3'>HTML</p>
                </div>
                <div className='flex flex-col py-10 px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className=''><img src={css} alt="" /></div>
                    <p className='mt-3'>CSS</p>
                </div>
                <div className='flex flex-col py-10 px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className=''><img src={javascript} alt="" /></div>
                    <p className='mt-3'>JavaScript</p>
                </div>
                <div className='flex flex-col py-10 px-16 my-auto border-4 border-primary items-center text-center'>
                    <div className=''><img src={react} alt="" /></div>
                    <p className='mt-3 w-full'>Native</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills