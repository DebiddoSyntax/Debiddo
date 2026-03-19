'use client'
import React from 'react'
import Image from 'next/image';
import ProjectButton from '../reusable/ProjectButton';
import relaychat from '@/assets/projects-thumbnails/relaychat.webp'
import VideoFile from '../reusable/VideoFile';


function Relaychat() {
    return (
        <div className='pt-20 pb-14'>
            <div className='px-5 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col justify-center items-center gap-6'>
                    <h1 className='mt-14 md:mt-16 xl:mt-20 text-xl md:text-2xl xl:text-3xl font-semibold leading-7 md:leading-8 xl:leading-12 font-clashdisplay w-full 2xl:w-[80%] mx-auto text-center'>
                        <span className='text-blue-700'>RelayChat,</span> a real-time messaging app with group chats, private conversations, WebRTC voice/video calls, and a personalized AI assistant (Sydney AI).
                    </h1>
                    <button className='rounded-xs font-semibold text-xs md:text-sm cursor-pointer px-4 md:px-5 py-4 md:py-5 text-white bg-blue-700 text-center mx-auto'
                        onClick={() => window.open('https://reelaychat.vercel.app/', '_blank')}
                    >
                        View live website
                    </button>
                    <div className={`delay-800ms duration-1000 ease-in-out bg-image-background mt-5 md:mt-8 px-3 py-5 md:py-8 md:px-8 rounded-sm md:rounded-xl h-auto w-full mx-auto`}>
                        <Image
                            src={relaychat}
                            height={2000}  
                            width={2000} 
                            alt="Hashtags Merch" 
                        />
                    </div>
                </div>

                <div className='mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='bg-navbar-background px-5 xl:px-10 py-5 xl:py-10'>
                        <p className='text-bse md:text-lg xl:text-xl font-semibold'>
                            Project Overview
                        </p>
                        <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                            RelayChat is a real-time messaging platform built for seamless communication across devices. It supports group chats, private conversations, and WebRTC-powered voice and video calls, making it easy for users to connect in different ways. 
                            The platform also includes Sydney AI, a personalized assistant that enhances chats with smart, contextual responses. 
                            Designed with a clean and responsive interface, RelayChat focuses on speed, reliability, and an intuitive user experience for both casual and collaborative use.
                        </p>
                    </div>

                    <div className='flex flex-col gap-7 bg-navbar-background px-5 xl:px-10 py-5 xl:py-10'>
                        <div>
                            <p className='text-bse md:text-lg xl:text-xl font-semibold'>
                                Project Goal
                            </p>
                            <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                                The goal of RelayChat is to deliver fast and seamless real-time communication while keeping interactions simple and engaging. 
                                The platform makes it easy for users to chat privately, connect in groups, and start voice or video calls, while Sydney AI enhances conversations with smart, contextual support. 
                                It’s built to ensure reliable messaging and a smooth experience across devices.
                            </p>
                        </div>

                        <div>
                            <p className='text-bse md:text-lg xl:text-xl font-semibold'>
                                Role
                            </p>
                            <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                                UX UI Design and Fullstack Development
                            </p>
                        </div>
                    </div>
                </div>

                <div className='mt-16 md:mt-20'>
                    <h2 className='text-lg md:text-xl text-blue-700 font-semibold'>
                        RESEARCH
                    </h2>
                    <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        The research behind RelayChat started with a simple question, why do some chat apps feel effortless while others feel frustrating after just a few minutes?
                    </p>
                    <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        Looking closely at how people actually communicate revealed a pattern. 
                        Conversations are quick, unpredictable, and often switch between text, voice, and video without warning. 
                        Users don’t want to think about the app, they just want it to work. 
                        When messages lag, calls take too long to connect, or the interface feels crowded, the experience breaks instantly.

                        Exploring different messaging platforms made this even clearer. 
                        The best ones stay out of the way. 
                        Clean layouts, fast message delivery, and simple navigation make conversations feel natural. 
                    </p>
                    <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        On the other hand, delays, cluttered screens, and too many steps to start a call create friction that users quickly notice.
                        These insights shaped RelayChat into something focused and intentional. 
                        Real-time performance became the priority, the interface was kept minimal, and switching between chats and calls was designed to feel instant. 
                        
                    </p>
                    <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        Sydney AI was designed as a dedicated, private chat for each user. 
                        It exists as its own space, giving users a direct and focused way to interact with AI whenever they need it.

                        In the end, the goal wasn’t just to build another chat app, but to create a space where communication feels natural, fast, and uninterrupted.
                    </p>
                   

                </div>


                <div className='mt-16 md:mt-20'>
                    <h2 className='text-lg md:text-xl text-blue-700 font-semibold'>
                        DESIGN
                    </h2>

                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8'>
                        <VideoFile title={'SIGNUP FLOW'} fileLink={'/Relaychat/signup.webm'} />
                        <VideoFile title={'CHAT FLOW'} fileLink={'/Relaychat/privatechat.webm'} />
                        <VideoFile title={'GROUP FLOW'} fileLink={'/Relaychat/groupchat.webm'} />
                        <VideoFile title={'SYDNEY AI FLOW'} fileLink={'/Relaychat/aichat.webm'} />
                        <VideoFile title={'PROFILE UPDATE FLOW'} fileLink={'/Relaychat/profileupdate.webm'} />
                    </div>
                </div>
            </div>
    

            <div className='px-5 md:px-10 lg:px-20'>
                <div className='mt-16 md:mt-20'>
                    <h2 className='text-lg md:text-xl text-blue-700 font-semibold'>
                        WHAT I LEARNT FROM BUILDING
                    </h2>
                    <div className='mt-5'>
                        <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                           Building RelayChat taught me how to balance real-time functionality with a clean, intuitive interface. 
                           I learned how critical it is for conversations, calls, and AI interactions to feel fast and effortless, while keeping the platform simple to navigate. 
                           Working on both the messaging features and the AI space helped me understand how different experiences coexist and how design choices in one area can impact the overall flow.
                        </p>
                        <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                            The project also strengthened my skills in managing real-time data, structuring chat histories, handling connection logic for calls, and designing responsive layouts that work smoothly across devices.
                            Ultimately, RelayChat reinforced the importance of reliability, speed, and thoughtful interactions in creating a messaging platform that feels seamless and engaging for every user.
                        </p>
                    </div>
                </div>


                <ProjectButton 
                    PrevProjectLink={'/hashtags'} 
                    PrevProjectName={'Hashtags Merch'} 
                    NextProject={false} 
                    PrevProject={true} 
                />
            </div>

        </div>
    )
}

export default Relaychat
