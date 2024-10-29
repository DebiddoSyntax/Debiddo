import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#252121] pt-10 pb-3 h-auto overflow-hidden' >
        <div className='px-20 flex w-full items-start'>
            <ul className='mx-10'>
                <li className='text-xl font-semibold text-white m-5'>Pages</li>
                <li className='text-xl font-medium text-primary m-5'>Projects</li>
                <li className='text-xl font-medium text-primary m-5'>About</li>
            </ul>
            <ul className='mx-10'>
                <li className='text-xl font-semibold text-white m-5'>Socials</li>
                <li className='text-xl font-medium text-primary m-5'>LinkedIn</li>
                <li className='text-xl font-medium text-primary m-5'>GitHub</li>
                <li className='text-xl font-medium text-primary m-5'>Behance</li>
            </ul>
        </div>
        <div>
            <p className='text-[11.5vw] font-rubik text-[#7777] font-extrabold rotate-6'>DEBIDDOSYNTAX</p>
        </div>
    </div>
  )
}

export default Footer