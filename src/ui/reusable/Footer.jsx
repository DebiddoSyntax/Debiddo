'use client'
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/functions/DarkModeContext";
import footer from '../../../public/footer.webp'
import footer2 from '../../../public/footer2.webp'



const Footer = () => {

    const { isDarkMode } = useDarkMode()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    const LogoSRC = () => {
		if (mounted && isDarkMode) {
			return '/LogoWhite.webp';
		} else {
			return '/LogoBlack.webp';
		}
	};

    
    return (
        <div className='bg-navbar-background pt-14 md:pt-20 pb-0 h-auto overflow-hidden' >
            <div className='px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-3 items-start mb-10 '>
                <div className='col-span-2 flex justify-start'>
                    <div className='h-7 md:h-8'>
                        {/* <Link href="/"> */}
                            <Image width={200} height={200} className="w-full h-full object-contain" src={LogoSRC()} alt="Logo" />
                        {/* </Link> */}
                    </div>
                </div>
                <div className='flex w-full items-start mt-5 md:mt-0'>
                    <ul className='mx-0 md:mx-0 lg:mx-10 mt-5 md:mt-0 text-sm md:text-lg'>
                        <li className=' font-semibold text-gray-500 ml-0 md:ml-5 mr-5 mb-5 mt-0'>
                            Pages
                        </li>

                        <Link href="/">
                            <li className=' font-medium text-primary hover:text-hoverprimary cursor-pointer ml-0 md:ml-5 mr-5 my-5'>
                                Home
                            </li>
                        </Link>

                        <Link href="projects">
                            <li className=' font-medium text-primary hover:text-hoverprimary cursor-pointer ml-0 md:ml-5 mr-5 my-5'>
                                Projects
                            </li>
                        </Link>

                        <Link href="about">
                            <li className=' font-medium text-primary hover:text-hoverprimary cursor-pointer ml-0 md:ml-5 mr-5 my-5'>
                                About
                            </li>
                        </Link>
                    </ul>

                    <ul className='mx-0 md:mx-0 lg:mx-10 mt-5 md:mt-0 text-sm md:text-lg'>
                        <li className=' font-semibold text-gray-500 mx-5 mb-5 mt-0'>
                            Socials
                        </li>

                        <li className='flex items-center font-medium text-primary hover:text-hoverprimary m-5 cursor-pointer' 
                            onClick={() => window.open('https://www.linkedin.com/in/debiddosyntax/', '_blank')}
                        >
                            LinkedIn
                            <span className='mx-1'>
                                <FiExternalLink />
                            </span>
                        </li>

                        <li className='flex items-center font-medium text-primary hover:text-hoverprimary m-5 cursor-pointer' 
                            onClick={() => window.open('https://github.com/DebiddoSyntax', '_blank')}
                        >
                            GitHub
                            <span className='mx-1'>
                                <FiExternalLink />
                            </span>
                        </li>

                        <li className='flex items-center font-medium text-primary hover:text-hoverprimary m-5 cursor-pointer' 
                            onClick={() => window.open('https://www.behance.net/Debiddddo', '_blank')}>
                            Behance
                            <span className='mx-1'>
                                <FiExternalLink />
                            </span>
                        </li>
                    </ul>
                </div>
                
            </div>

            <div className='mt-20 md:mt-32 xl:mt-56 mb-0 relative overflow-visible'>
                <Image 
                    src={isDarkMode ? footer : footer2} 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[150%] h-auto object-cover" 
                    alt="Footer" 
                />
            </div>
        </div>
    )
}

export default Footer