import { useRef } from 'react'
import css from '../../../src/assets/icons/css.webp'
import react from '../../../src/assets/icons/react.webp'
import html from '../../../src/assets/icons/html.webp'
import figma from '../../../src/assets/icons/figma.webp'
import javascript from '../../../src/assets/icons/javascrript.webp'
import { useIsVisible } from 'react-is-visible'
import Image from 'next/image'




const Skills = () => {

    const skillSet = [ 
        { name: 'CSS', icon: css },
        { name: 'HTML', icon: html },
        { name: 'Figma', icon: figma },
        { name: 'React', icon: react },
        { name: 'Native', icon: react },
        { name: 'Javascript', icon: javascript },
    ]

    const sortedSkillSet = skillSet.sort((a,b)=> b.name - a.name)

    const SkillsRef = useRef()
    const SkillsRefisVisible = useIsVisible(SkillsRef, { once: true })

    return (
        <div className='text-center bg-navbar-background px-5 md:px-10 lg:px-20 pt-10 pb-20 md:pt-20 md:pb-36 '>
            <h2 className={`px-3 font-semibold text-xl md:text-2xl delay-800ms duration-1000 ease-in-out 
                ${SkillsRefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} 
                ref={SkillsRef}
            >
                My Skills
            </h2>

            <div className={`text-center delay-800ms duration-1000 ease-in-out 
                ${SkillsRefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} 
                ref={SkillsRef}
            >
                <p className='mt-3 px-3 font-normal text-sm md:text-lg'>
                    Skilled in product design and frontend development. I create engaging, responsive interfaces for web and mobile platforms.
                </p>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 w-full gap-6 px-0 mt-10 md:mt-14 font-semibold text-xs md:text-sm '>
                {sortedSkillSet.map((skill, index)=> (
                    <div key={index} className={`flex flex-col py-5 px-10 md:py-10 md:px-16 my-auto border-2 border-primary items-center text-center delay-800ms duration-1000 ease-in-out 
                        ${SkillsRefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} 
                        ref={SkillsRef}
                    >
                        <div className='bg-white p-3 rounded-sm'>
                            <div className='w-5 md:w-8 h-5 md:h-8'>
                                <Image height={200}  width={200} src={skill.icon} alt="" className='object-cover' />
                            </div>
                        </div>
                        <p className='mt-3'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills