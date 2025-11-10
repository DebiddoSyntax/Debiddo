import React from 'react'
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';

function ProjectCards({ IsVisibleRef, ProjectRef, LoadedState, setLoadedState, ProjectName, ProjectLink, ProjectSRC, ButtonText, PageLink, LinkTo }) {
    return (
        <div className={`delay-800ms duration-1000 ease-in-out bg-[#d9d9d9] px-3 py-5 md:px-5 rounded-sm md:rounded-sm h-auto 
            ${IsVisibleRef && LoadedState ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} 
            ref={ProjectRef}
        >
            {!PageLink ? (
                <>
                <div className='h-72 md:h-[420px] lg:h-[480px] xl:h-[420px]'>
                    <Image 
                        height={2000}  
                        width={2000} 
                        src={ProjectSRC} 
                        alt="UntamedE" 
                        className='mt-0 md:mt-0 w-full h-full object-fill ' 
                        onLoad={()=> setLoadedState(true)}
                    /> 
                </div>
                </>
            ) : (
                <Link href={LinkTo}>
                    <div className='h-72 md:h-[420px] lg:h-[480px] xl:h-[420px]'>
                        <Image 
                            height={2000}  
                            width={2000} 
                            src={ProjectSRC} 
                            alt="UntamedE" 
                            className='mt-0 md:mt-0 w-full h-full object-fill cursor-pointer' 
                            onLoad={()=> setLoadedState(true)}
                        /> 
                    </div>
                </Link>
            )}

            <div className='flex justify-between items-center mt-5'>
                <p className='text-[#1f1b1b] text-base md:text-base lg:text-lg font-semibold'>
                    {ProjectName}
                </p>
                <button className='flex text-xs md:text-sm xl:text-sm text-white items-center py-3 md:py-4 lg:py-4 px-5 md:px-5 lg:px-5 bg-primary hover:bg-hoverprimary font-semibold cursor-pointer' 
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

export default ProjectCards
