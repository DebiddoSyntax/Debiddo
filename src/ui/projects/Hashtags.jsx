'use client'
import React from 'react'
import Image from 'next/image';
import ProjectButton from '../reusable/ProjectButton';
import HashtagsMerch from '@/assets/projects-thumbnails/HashtagsMerch.webp'
import VideoFile from '../reusable/VideoFile';


function Hashtags() {
    return (
        <div className='pt-20 pb-14'>
            <div className='px-5 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col justify-center items-center gap-6'>
                    <h1 className='mt-14 md:mt-16 xl:mt-20 text-xl md:text-2xl xl:text-3xl font-semibold leading-7 md:leading-8 xl:leading-12 font-clashdisplay w-full 2xl:w-[80%] mx-auto text-center'>
                        <span className='text-blue-700'>Hashtags Merch,</span> a clothing brand website with an admin dashboard for shopping streetwear and managing products, inventory, and orders.
                    </h1>
                    <button className='rounded-xs font-semibold text-xs md:text-sm cursor-pointer px-4 md:px-5 py-4 md:py-5 text-white bg-blue-700 text-center mx-auto'
                        onClick={() => window.open('https://hashtagsmerch.vercel.app/', '_blank')}
                    >
                        View live website
                    </button>
                    <div className={`delay-800ms duration-1000 ease-in-out bg-image-background mt-5 md:mt-8 px-3 py-5 md:py-8 md:px-8 rounded-sm md:rounded-xl h-auto w-full mx-auto`}>
                        <Image
                            src={HashtagsMerch}
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
                        <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                            Hashtags is a fashion brand website with an integrated admin dashboard, built to showcase and manage the brand’s growing collection of streetwear and modern apparel. 
                            The platform allows users to explore products, filter by collection, style, and other categories, allowing users enjoy a seamless shopping experience across all devices. 
                            The admin dashboard enables easy product management, order tracking, and inventory updates giving the brand full control over its online store operations while maintaining a clean, fashion-forward presentation.
                        </p>
                    </div>

                    <div className='flex flex-col gap-7 bg-navbar-background px-5 xl:px-10 py-5 xl:py-10'>
                        <div>
                            <p className='text-bse md:text-lg xl:text-xl font-semibold'>
                                Project Goal
                            </p>
                            <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                                The goal of Hashtags is to create a smooth and engaging online shopping experience while giving the brand full control over its store operations. 
                                The platform aims to make it easy for customers to browse, filter, and purchase products, and for administrators to manage inventory, track orders, and update collections effortlessly. 
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
                    <h2 className='text-lg md:text-xl text-blue-700 font-semibold'>
                        RESEARCH
                    </h2>
                    <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        The product research for Hashtags focused on understanding how users interact with online fashion stores and what features drive both engagement and trust. 
                        The goal was to design a platform that not only showcases products beautifully but also simplifies management for the brand’s team.
                        The research began by studying user behavior across various e-commerce platforms, especially clothing and lifestyle brands. 
                        Insights showed that users are most drawn to clean, image-driven layouts, quick navigation, and clear size and style options. 
                        Many shoppers also abandon carts due to slow load times or complex checkout flows, which guided the decision to keep the shopping process fast, minimal, and intuitive.
                    </p>
                    <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        On the admin side, research revealed a common pain point which include managing products and orders, as well as key revenue insight on completed orders. 
                        Hashtags addresses this by integrating an internal dashboard, allowing the brand to handle inventory updates, track sales, and manage new products and collections from one place.
                        Competitor analysis also highlighted the importance of responsive design and strong branding. 
                        Fashion buyers often browse on mobile, so ensuring a consistent and visually appealing experience across devices became a top priority.
                    </p>
                    <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                        Overall, the research shaped Hashtags into a dual-purpose platform: a visually engaging storefront for customers and an efficient management system for the brand bridging the gap between fashion presentation and operational control.
                    </p>

                </div>


                <div className='mt-16 md:mt-20'>
                    <h2 className='text-lg md:text-xl text-blue-700 font-semibold'>
                        DESIGN
                    </h2>

                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8'>
                        <VideoFile title={'HOME PAGE'} fileLink={'/HashtagsMerch/HomePage.webm'} />
                        <VideoFile title={'STORE PAGE'} fileLink={'/HashtagsMerch/Store.webm'} />
                        <VideoFile title={'SEARCH'} fileLink={'/HashtagsMerch/search.webm'} />
                        <VideoFile title={'PRODUCT PAGE'} fileLink={'/HashtagsMerch/productPage.webm'} />
                        <VideoFile title={'ADD TO CART FLOW'} fileLink={'/HashtagsMerch/AddtocartFlow.webm'} />
                        <VideoFile title={'CHECKOUT FLOW'} fileLink={'/HashtagsMerch/checkoutFlow.webm'} />
                    </div>
                </div>
            </div>

            <div className='px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:py-10 mt-10 md:mt-16 lg:mt-28 bg-navbar-background'>
                <h2 className='mt-5 text-lg md:text-xl text-blue-700 font-semibold'>
                    ADMIN
                </h2>
                <div className='mt-5 grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8'>
                    <VideoFile title={'DASHBOARD'} fileLink={'/HashtagsMerch/admin/adminPage.webm'} />
                    <VideoFile title={'ORDERS PAGE'} fileLink={'/HashtagsMerch/admin/ordersPage.webm'} />
                    <VideoFile title={'UPDATE ORDER'} fileLink={'/HashtagsMerch/admin/viewOrder.webm'} />
                    <VideoFile title={'PRODUCTS PAGE'} fileLink={'/HashtagsMerch/admin/productsPage.webm'} />
                    <VideoFile title={'ADD PRODUCT'} fileLink={'/HashtagsMerch/admin/addProduct.webm'} />
                    <VideoFile title={'UPDATE PRODUCT FLOW'} fileLink={'/HashtagsMerch/admin/updateProduct.webm'} />
                    <VideoFile title={'DELETE PRODUCT FLOW'} fileLink={'/HashtagsMerch/admin/deleteProduct.webm'} />
                    <VideoFile title={'USERS PAGE FLOW'} fileLink={'/HashtagsMerch/admin/userPage.webm'} />
                    <VideoFile title={'EDIT USER FLOW'} fileLink={'/HashtagsMerch/admin/editUser.webm'} />
                    <VideoFile title={'ADD USER FLOW'} fileLink={'/HashtagsMerch/admin/addUser.webm'} />
                </div>
            </div>
    

            <div className='px-5 md:px-10 lg:px-20'>
                <div className='mt-16 md:mt-20'>
                    <h2 className='text-lg md:text-xl text-blue-700 font-semibold'>
                        WHAT I LEARNT FROM BUILDING
                    </h2>
                    <div className='mt-5'>
                        <p className='mt-1 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                            Building Hashtags taught me how to balance visual design with practical functionality. 
                            I learned how important it is to create a smooth shopping flow that feels intuitive while keeping the operation simple for the brand to manage.
                            Working on both the storefront and the admin dashboard helped me understand how user's experience and admin efficiency are connected and how every change on one side affects the other. 
                            It also improved my skills in structuring product data, handling inventory logic, and designing responsive layouts that look great on any device.
                        </p>
                        <p className='mt-5 text-sm md:text-base xl:text-lg font-semibold xl:font-medium text-portfoliotext-lower leading-7 md:leading-8 xl:leading-8'>
                            Finally, the project reinforced the value of clean design, efficient data flow, and thoughtful user interactions in building a complete e-commerce experience.
                        </p>
                    </div>
                </div>


                <ProjectButton 
                    PrevProjectLink={'/aftrieuro'} 
                    PrevProjectName={'Aftrieuro'} 
                    NextProject={false} 
                    PrevProject={true} 
                />
            </div>

        </div>
    )
}

export default Hashtags
