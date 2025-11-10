'use client'
import React from 'react'
import ProjectButton from '../reusable/ProjectButton';
import aftrieuro from '@/assets/projects-thumbnails/aftrieuro.webp'
import Image from 'next/image';
import VideoFile from '../reusable/VideoFile';

function Aftrieuro() {
    return (
        <div className='px-5 md:px-10 lg:px-20 pt-20 pb-14'>
            <div className='w-full flex flex-col justify-center items-center gap-6'>
                <h1 className='mt-14 md:mt-16 xl:mt-20 text-xl md:text-2xl xl:text-3xl font-semibold leading-7 md:leading-8 xl:leading-12 font-clashdisplay w-full 2xl:w-[80%] mx-auto text-center'>
                    <span className='text-blue-700'>Aftrieuro,</span> a booking consultation platform that connects companies to Aftrieuro Dynamics' network of professional consultants.
                    {/* <span className='text-blue-700'>Aftrieuro,</span> a booking consultation platform that helps companies and businesses expand their operations into international markets, with a focus on Africa and Europe. */}
                </h1>
                <button className='rounded-xs font-semibold text-xs md:text-sm cursor-pointer px-4 md:px-5 py-4 md:py-5 text-white bg-blue-700 text-center mx-auto'
                    onClick={() => window.open('https://aftrieurodynamics.com/', '_blank')}
                >
                    View live website
                </button>
                <div className={`delay-800ms duration-1000 ease-in-out bg-image-background mt-5 md:mt-8 px-3 py-5 md:py-8 md:px-8 rounded-sm md:rounded-xl h-auto w-full mx-auto`}>
                    <Image
                        src={aftrieuro}
                        height={2000}  
                        width={2000} 
                        alt="Aftrieuro" 
                    />
                </div>
            </div>

            <div className='mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='bg-navbar-background px-5 xl:px-10 py-5 xl:py-10'>
                    <p className='text-bse md:text-lg xl:text-xl font-semibold'>
                        Project Overview
                    </p>
                    <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        Aftrieuro is a booking and consultation platform created to support companies aiming to expand into international markets, with a particular focus on Africa and Europe. 
                        The platform connects businesses with expert consultants who provide market insights, strategic advice, and tailored growth solutions. 
                        Through Aftrieuro, users can easily schedule consultations, manage appointments, and access resources that simplify cross-border expansion.
                    </p>
                </div>

                <div className='flex flex-col gap-7 bg-navbar-background px-5 xl:px-10 py-5 xl:py-10'>
                    <div>
                        <p className='text-bse md:text-lg xl:text-xl font-semibold'>
                            Project Goal
                        </p>
                        <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                            The goal is to make international business growth more accessible by combining expert guidance, regional knowledge, and a user-friendly digital experience.
                        </p>
                    </div>

                    <div>
                        <p className='text-bse md:text-lg xl:text-xl font-semibold'>
                            Role
                        </p>
                        <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                            UX UI Design and Frontend Development
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-16 md:mt-20'>
                <h2 className='text-base md:text-xl text-blue-700 font-semibold'>
                    RESEARCH
                </h2>
                <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                    The product research for Aftrieuro focused on understanding how users interact with digital consultation platforms and identifying the most effective ways to connect businesses with expert consultants in real time. 
                    Since the platform centers on booking consultations and facilitating direct communication, the research explored user expectations around usability, trust, and engagement. The key findings included:
                </p>

                <div className='mt-5'>
                    <h4 className='text-sm md:text-base xl:text-lg font-semibold xl:font-medium leading-7 md:leading-8 xl:leading-8'>
                        User Interaction Preferences
                    </h4>
                    <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        Many business owners prefer having flexible communication channels when engaging with consultants. 
                        Research showed that while scheduled video or voice calls remain essential for in-depth consultations, real-time chat offers a faster, more accessible way to ask follow-up questions or clarify details. 
                        This insight led to integrating both chat and call booking features into Aftrieuro to accommodate different communication needs.
                    </p>
                </div>

                <div className='mt-5'>
                    <h4 className='text-sm md:text-base xl:text-lg font-semibold xl:font-medium leading-7 md:leading-8 xl:leading-8'>
                        Booking Experience
                    </h4>
                    <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        Users expressed frustration with complicated booking processes on other platforms. 
                        They wanted a simple, intuitive flow from selecting a date to confirming the consultation booking. 
                        The research informed the design of a minimal, step-by-step booking interface that reduces friction and increases completion rates.
                    </p>
                </div>

                <div className='mt-5'>
                    <h4 className='text-sm md:text-base xl:text-lg font-semibold xl:font-medium leading-7 md:leading-8 xl:leading-8'>
                        Engagement and Retention
                    </h4>
                    <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        Studies of similar platforms revealed that platforms offering follow-up chat access after calls had higher retention rates. 
                        Aftrieuro adopted this insight, allowing users to maintain ongoing conversations with consultants, turning one-time sessions into longer-term relationships.
                    </p>
                </div>
            </div>


          


            <div className='mt-16 md:mt-20'>
                <h2 className='text-base md:text-xl text-blue-700 font-semibold'>
                    WHAT I DID
                </h2>
                <div className='mt-0'>
                    <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        For Aftrieuro, I designed and developed the platform’s core user experience from the consultation booking flow to the real-time chat interface. 
                        I focused on creating a smooth and intuitive process that allows users to easily schedule calls and connect with the consultant.
                    </p>
                    <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        On the frontend, I implemented the booking system, chat functionality, and responsive layout using modern web technologies to ensure the platform works seamlessly across devices. 
                        I also worked on UI design decisions such as typography, spacing, and color hierarchy to maintain a clean and professional look.
                    </p>
                </div>
            </div>


            <div className='mt-16 md:mt-20'>
                <h2 className='text-base md:text-xl text-blue-700 font-semibold'>
                    DESIGN
                </h2>
                <div className='grid grid-cols-1 2xl:grid-cols-2 gap-6 md:gap-8'>
                    <VideoFile title={'BOOKING FLOW'} fileLink={'/Aftrieuro/BookingFlow.webm'} />
                    <VideoFile title={'CHAT FLOW'} fileLink={'/Aftrieuro/ChatFlow.webm'} />
                </div>
            </div>


            <div className='mt-16 md:mt-20'>
                <h2 className='text-lg md:text-xl text-blue-700 font-semibold'>
                    WHAT I LEARNT FROM BUILDING
                </h2>
                <div className='mt-0'>
                    <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        Working on Aftrieuro showed me how small design decisions can completely shape user experience. I realized that users don’t just look for features they want clarity, trust, and flexibility. 
                        Designing around natural communication patterns, like quick chats and calls, helped me see how digital platforms can feel more personal and intuitive.
                    </p>
                    <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        Also, observing how people navigate the booking and chat systems taught me to simplify every interaction by removing unnecessary steps and emphasizing what truly matters. 
                        This project strengthened my ability to think from the user’s perspective and design with intention, not assumption.
                    </p>
                    <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        Finally, this project reinforced the importance of research-driven design. 
                        Every choice from the booking flow to the chat interface was shaped by user behavior and feedback, proving that good UX starts with listening and observing before building.
                    </p>
                </div>
            </div>


            <ProjectButton 
                NextProjectLink={'/hashtags'} 
                NextProjectName={'Hashtags Merch'} 
                NextProject={true} 
                PrevProject={false} 
            />
            

        </div>
    )
}

export default Aftrieuro
