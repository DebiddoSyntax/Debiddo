import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom';

const Hashtags = () => {

    const { pathname } = useLocation();
    useEffect(() => {
       window.scrollTo(0,0);
    }, [pathname])

  return (
    <div className='pb-0 '>
        <div className='pt-14 md:pt-20 px-5 md:px-10 lg:px-20'>
            <div className='pt-20 '>
                <h1 className='text-2xl md:text-5xl font-bold text-center'>HASHTAGS MERCH STORE</h1>
                <p className='mt-2 md:mt-4 text-sm md:text-lg font-normal text-center'>E-commerce website for clothing store</p>
                <button type="button" className='mt-3 md:mt-5 px-7 md:px-10 py-3 md:py-5 text-sm md:text-lg bg-blue-700 mx-auto flex justify-between items-center rounded-sm' onClick={() => window.open('https://hashtagsmerch.netlify.app/', '_blank')}>View Live Website</button>
                <div className='my-10 md:my-20'><ReactPlayer url={'/Video/Hashvid.mp4'} width="100%" height="20%" playing={true} loop muted={true} playsinline/></div>
            </div>
        </div>
        <div className='bg-green-600 mt-10 py-14 px-5 md:px-10 lg:px-20'>
            <h3 className='text-2xl md:text-3xl font-semibold'>Project Overview</h3>
            <p className='text-sm md:text-lg font-normal leading-6 md:leading-8 text-justify mt-5'>Hashtags Merch is an online store designed to provide a smooth and enjoyable shopping experience for all users. Built with React and styled using Tailwind CSS, the project is both dynamic and responsive, delivering a streamlined eCommerce platform that aligns with the Hashtags brand identity. 
                The Navigation includes a responsive menu that adapts to different devices, along with a convenient search functionality to help users quickly locate specific items. 
            </p>
            <p className='text-sm md:text-lg font-normal leading-6 md:leading-8 mt-5 text-justify'>The Homepage serves as an inviting introduction to the brand, featuring best sellers product highlights to engage customers from the start, it also features a gallery that keeps users engaged. The store page features available products and can be filtered based on users specifics, custom dropdowns and checkboxes provide sorting and filtering options, making it easy to browse products by category, collection, and gender. The add to cart process is made seamless as visual feedbacks are utilized for every step completed. Each Product Page offers a detailed look at individual items, including options for selecting sizes and toggling between different product images, allowing users to fully explore each piece before adding it to their cart. In cart management, users can easily add items to their list, adjust quantities, and proceed to checkout. 
            </p>
        </div>
    </div>
  )
}

export default Hashtags