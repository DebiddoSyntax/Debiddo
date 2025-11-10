'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { HiOutlineX, HiOutlineMenuAlt3, HiChevronRight } from "react-icons/hi";
import { useDarkMode } from '@/functions/DarkModeContext';



const Navbar = () => {

	const pathname = usePathname()
	const { isDarkMode, toggleDarkMode } = useDarkMode()
	const [mounted, setMounted] = useState(false);
	const [nav, setNav] = useState(false); 

	const handleNav = () => { 
		setNav(!nav);
	};

	// nav scroll behaviour 
	const [navbarScroll, setNavbarScroll] = useState(false);


	//  effect for scroll event listerner 
	useEffect(() => {
		const handleNavScroll = () => {
			if(window.scrollY <= 80) {
				setNavbarScroll(false)
			} else {
				setNavbarScroll(true)
			}
		}

		handleNavScroll();
		window.addEventListener('scroll', handleNavScroll);
		return () => window.removeEventListener('scroll', handleNavScroll);
	}, []);



	useEffect(() => {
		setMounted(true);
	}, []);


	const LogoSRC = () => {
		if (mounted && isDarkMode) {
			return '/LogoWhite.png';
		} else {
			return '/LogoBlack.png';
		}
	};

	const getLinkClass = (path) => {
		return pathname === path 
		? 'text-primary' 
		: 'hover:text-primary'; 
	}; 

	return (
		<div className='fixed w-full z-10'>
			<header>
				<nav  className={`flex justify-between h-20 w-full bg-navbar-background px-5 md:px-10 lg:px-20 items-center border-b-0 ${navbarScroll && 'shadow-lg'}`}>
					<div className='h-7 md:h-8'>
						<Link href="/">
							<Image className="w-full h-full object-contain" height={200} width={200} src={LogoSRC()} alt="Logo" />
						</Link>
					</div>

					<ul className='flex justify-between items-center'>
						<div className={`flex text-2xl items-center bg-background p-2 mx-2 rounded-full cursor-pointer`} 
							onClick={toggleDarkMode}
						>
							{isDarkMode && mounted ? (
								<div className='text-base stroke-2 hover:text-primary cursor-pointer'>
									<MdDarkMode />
								</div>
							) : (
								<div className='text-base stroke-2 hover:text-primary cursor-pointer'>
									<MdLightMode />
								</div>
							)}
						</div>

						<li className={`hidden md:flex text-lg mx-5 p-3 cursor-pointer ${getLinkClass('/projects')}`}>
							<Link href="/projects">
								Projects
							</Link>
						</li>

						<li className={`hidden md:flex text-lg mx-5 p-3 cursor-pointer ${getLinkClass('/about')}`}>
							<Link href="/about">
								About
							</Link>
						</li>

						<Link href={'/contact'}>
							<button className='ml-5 mr-0 text-sm px-5 md:px-8 lg:px-10 py-3 bg-primary text-white hover:bg-hoverprimary rounded-sm font-semibold cursor-pointer'>
									Contact
							</button>
						</Link>

						<div className='flex text-2xl items-center ml-3 mr-0 md:hidden' onClick={handleNav}>
							{nav ? (
								<div className='text-[26px] stroke-2 hover:text-primary cursor-pointer'>
									<HiOutlineX />
								</div>
							) : (
								<div className='text-[26px] stroke-2 hover:text-primary cursor-pointer'>
									<HiOutlineMenuAlt3 />
								</div>
							)}
						</div>
					</ul>	
				</nav>

				

				{/* {nav && ( */}
					<div className={`${nav ? 'z-5 fixed w-full h-auto top-20 bg-background p-4 shadow-2xl ease-in-out duration-800 md:hidden' : 'hidden fixed -top-full'}`}>
						<ul className='flex flex-col justify-center'>
							<li className='p-5 text-center'>
								<Link href="/" className=' hover:text-primary w-auto' onClick={handleNav}>
									Home 
									{/* <span className='text-xl'>
										<HiChevronRight />
									</span> */}
								</Link>
							</li>

							<li className='p-5 text-center'>
								<Link href="/projects" className=' hover:text-primary' onClick={handleNav}>
									Projects
									{/* <span className='text-xl'>
										<HiChevronRight />
									</span> */}
								</Link>
							</li>

							<li className='p-5 text-center'>
								<Link href="/about" className=' hover:text-primary' onClick={handleNav}>
									About
									{/* <span className='text-xl'>
										<HiChevronRight />
									</span> */}
								</Link>
							</li>

						</ul>
					</div>
				{/* )} */}
			</header>
		</div>
	)
}

export default Navbar