import React from 'react'
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';

function ProjectCard({ IsVisibleRef, ProjectRef, LoadedState, setLoadedState, ProjectName, ProjectLink, ProjectSRC, ButtonText, PageLink, LinkTo }) {
    return (
        <div className={`delay-800ms duration-1000 ease-in-out bg-[#d9d9d9] mt-10 md:mt-20 lg:mt-28 px-3 py-5 md:px-8 rounded-sm md:rounded-xl h-auto 
            ${IsVisibleRef && LoadedState ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} 
            ref={ProjectRef}
        >
            {!PageLink ? (
                <>
                <div>
                    <Image 
                        height={2000}  
                        width={2000} 
                        src={ProjectSRC} 
                        alt="UntamedE" 
                        className='mt-0 md:mt-5 w-full h-full object-cover ' 
                        onLoad={()=> setLoadedState(true)}
                    /> 
                </div>
                </>
            ) : (
                <Link href={LinkTo}>
                    <div>
                        <Image 
                            height={2000}  
                            width={2000} 
                            src={ProjectSRC} 
                            alt="UntamedE" 
                            className='mt-0 md:mt-5 w-full h-full object-cover cursor-pointer' 
                            onLoad={()=> setLoadedState(true)}
                        /> 
                    </div>
                </Link>
            )}

            <div className='flex justify-between items-center mt-5'>
                <p className='text-[#1f1b1b] text-base md:text-lg lg:text-2xl font-semibold'>
                    {ProjectName}
                </p>
                <button className='flex text-xs md:text-sm xl:text-base text-white items-center px-5 py-3 md:px-8 lg:px-10 md:py-4 lg:py-5 bg-primary hover:bg-hoverprimary font-semibold cursor-pointer' 
                    onClick={() => window.open(`${ProjectLink}`, '_blank')}
                >
                    {ButtonText}
                    <span className='mx-1 md:mx-3'>
                        <FiExternalLink />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard
