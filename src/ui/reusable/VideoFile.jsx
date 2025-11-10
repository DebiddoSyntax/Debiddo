import React from 'react'

function VideoFile({ title, fileLink }) {
    return (
        <div className='mt-5'>
            <h4 className='text-sm md:text-base font-semibold uppercase'>
                {title}
            </h4>

            <div className={`delay-800ms duration-1000 ease-in-out bg-[#d9d9d9] mt-5 md:mt-5 px-3 py-5 md:px-5 rounded-sm md:rounded-sm min-h-52 md:min-h-[420px] lg:min-h-40 2xl:min-h-[420px] h-auto`}>
                <video
                    className=''
                    // className='h-full w-full object-fill'
                    src={fileLink}
                    // poster="/poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>
        </div>
    )
}

export default VideoFile
