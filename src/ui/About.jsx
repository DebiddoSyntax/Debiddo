'use client'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import Image from 'next/image'
import David from '../assets/about/David.jpg'
import aftrieuroLogo from '@/assets/icons/aftrieuroLogo.webp'
import hashtagsLogo from '@/assets/icons/hashtagsLogo.webp'
import { LiaExternalLinkAltSolid } from "react-icons/lia";



const About = () => {


    const DavidRef = useRef()
    const DavidRefisVisible = useIsVisible(DavidRef, { once: true })
    const Hobbies1Ref = useRef()
    const Hobbies1RefisVisible = useIsVisible(Hobbies1Ref, { once: true })
    const Hobbies2Ref = useRef()
    const Hobbies2RefisVisible = useIsVisible(Hobbies2Ref, { once: true })
    const Hobbies3Ref = useRef()
    const Hobbies3RefisVisible = useIsVisible(Hobbies3Ref, { once: true })
    const Hobbies4Ref = useRef()
    const Hobbies4RefisVisible = useIsVisible(Hobbies4Ref, { once: true })
    const HobbiesTitleRef = useRef()
    const HobbiesTitleRefisVisible = useIsVisible(HobbiesTitleRef, { once: true })


    const hobbies = [
        { 
            name: 'ANIME',
            body: 'I’m a big anime fan, and One Piece is my go-to for epic adventures and laughs',
            ref: Hobbies1Ref,
            isVisible: Hobbies1RefisVisible 
        },
        { 
            name: 'GAMING',
            body: 'I love gaming, and nothing beats the epic battles of the God of War series.',
            ref: Hobbies2Ref,
            isVisible: Hobbies2RefisVisible 
        },
        { 
            name: 'FOOTBALL',
            body: 'I live for football, playing it or watching it, I never miss a moment.',
            ref: Hobbies3Ref,
            isVisible: Hobbies3RefisVisible 
        },
        { 
            name: 'FITNESS',
            body: 'Going to the gym is my go-to for energy and focus whenever I get the chance.',
            ref: Hobbies4Ref,
            isVisible: Hobbies4RefisVisible 
        },
    ]


    const experiences = [

        {
            name: 'Hashtags Merch',
            icon: hashtagsLogo,
            period: 'July, 2025 - Sept, 2025',
            text: `
                I led the end-to-end design and development of the Hashtags clothing brand website and admin dashboard as a full-stack developer. 
                Using React.js, Tailwind CSS, and a custom backend, I built reusable components and core e-commerce features like product display, search, filtering, and cart management with the React Context API. 
                I also developed backend logic for product, inventory, and order management, ensuring secure data flow and efficient performance across the platform.
            `
        },

        {
            name: 'Aftrieuro Dynamics Ltd',
            icon: aftrieuroLogo,
            period: 'April, 2025 - July, 2025',
            text: `
                Collaborated with the Aftrieuro Dynamics LTD team to build a scalable web consultation platform using React JS and TypeScript. 
                I developed reusable UI components, integrated real-time APIs integration, and implemented secure authentication. 
                Designed a custom booking calendar, improved accessibility, and optimized performance which reduced load times by 40%. 
                The platform’s responsive design and chat system boosted user engagement and overall experience.
            `
        },

    ]


    return (
        <div>
            <div
                className={`px-5 md:px-10 lg:px-5 pt-20 mb-20 delay-800ms duration-1000 ease-in-out flex justify-center w-full items-center 
                ${DavidRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} 
                ref={DavidRef}
            >
                <div className="mt-16 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-end justify-items-center mx-auto w-full md:w-full lg:w-[80%] xl:w-[70%] 2xl:w-[57%] max-w-7xl">
                    <div className="order-2 md:order-1 w-full h-full px-0 py-0 bg-navbar-background">
                        <div className="w-full h-[480px] sm:h-[620px] md:h-[480px] xl:h-[480px]">
                            <Image src={David} alt="David" className="w-full h-full object-fill" />
                        </div>
                    </div>

                 
                    <div className="order-1 md:order-2 col-span-1 md:col-span-1 lg:col-span-1 h-full flex flex-col justify-end w-full text-2xl md:text-4xl 2xl:text-4xl font-bold leading-8 md:leading-11 2xl:leading-11">
                        <h5 className="">
                            Hello there!
                        </h5>
                        <h5 className="mt-3 md:mt-5">
                            My name is David and I <span className="text-primary">design</span> and <span className="text-primary">build</span> user interfaces
                        </h5>
                    </div>
                
                </div>
            </div>

            <div className='px-5 md:px-10 lg:px-5'>
                <div className='mx-auto py-5 border-t-2 border-foreground-lower flex flex-col justify-items-center w-full md:w-full lg:w-[80%] xl:w-[70%] 2xl:w-[57%] max-w-7xl'>
                    <div className='flex justify-between'>
                        <h5 className='text-xl md:text-2xl font-semibold'>
                            Experience
                        </h5>
                        <div className='flex items-center gap-2 hover:text-hoverprimary text-base md:text-base font-semibold cursor-pointer'
                            onClick={() => window.open('https://drive.google.com/file/d/1LjZlBRrozfplZm_leH7jH0wajzTJCPcJ/view?usp=drive_link', '_blank')}
                        >
                            <p>resume</p>
                            <LiaExternalLinkAltSolid />
                        </div>
                    </div>

                    {experiences.map((exp, index)=> (
                        <div key={index} className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 items-start mx-auto'>
                            <div className='flex items-center gap-3 h-auto'>
                                <div className='bg-[#f2f2f2] h-auto p-2 rounded-xs'>
                                    <Image height={200}  width={200} src={exp.icon} alt={exp.name} className='object-cover w-7 md:w-6 h-7 md:h-6' />
                                </div>
                                <div>
                                    <p className='text-base lg:text-lg font-semibold'>{exp.name}</p>
                                    <p className='mt-1 text-sm lg:text-sm font-medium'>{exp.period}</p>
                                </div>
                            </div>
                            <p className='text-sm lg:text-base font-medium leading-7 lg:leading-8'>
                               {exp.text} 
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            <div className='mt-20 py-14 md:py-20 px-5 md:px-10 lg:px-20 bg-[#AF93C6] h-full w-full'>
                <h4 className={`text-lg md:text-xl xl:text-2xl font-semibold text-primary text-center delay-800ms duration-1000 ease-in-out 
                    ${HobbiesTitleRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} 
                    ref={HobbiesTitleRef}
                >
                    MY HOBBIES
                </h4>

                <p className={`text-center text-base md:text-lg xl:text-xl text-white font-semibold mt-1 delay-800ms duration-1000 ease-in-out 
                    ${HobbiesTitleRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} 
                    ref={HobbiesTitleRef}
                >
                    Things I love to do with my free time
                </p>

                <div className='mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-8 2xl:gap-10 mt-10 '>
                    {hobbies.map((hobby, index)=> (
                        <div key={index} className={`w-full bg-primary px-4 md:px-5 lg:px-8 py-5 md:py-6 xl:py-8 rounded-xs delay-800ms duration-1000 ease-in-out 
                            ${hobby.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} 
                            ref={hobby.ref}
                        >
                        <h5 className='text-base md:text-lg xl:text-xl font-bold text-[#232026]'>
                            {hobby.name}
                        </h5>
                        <p className='text-sm md:text-base xl:text-lg font-semibold italic text-white mt-1'>
                            {hobby.body}
                        </p>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default About