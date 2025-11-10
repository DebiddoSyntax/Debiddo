import React from 'react'
import Link from 'next/link'
import { FaLongArrowAltRight } from "react-icons/fa";

function ProjectButton({ NextProjectName, NextProjectLink, NextProject, PrevProjectName, PrevProjectLink, PrevProject }) {
    return (
        <div className={`mt-28 md:mt-28 xl:mt-40 flex ${PrevProject && !NextProject && 'justify-start'} ${!PrevProject && NextProject && 'justify-end'} justify-between items-center`}>
            {PrevProject && (
                <div className=''>
                    <Link href={PrevProjectLink}>
                        <button className='flex gap-3 items-center cursor-pointer'>
                            <FaLongArrowAltRight className='text-base rotate-180' />
                            <p className='text-base md:text-lg font-semibold'>{PrevProjectName}</p>
                        </button>
                    </Link>
                </div>
            )}

            {NextProject && (
                <div className=''>
                    <Link href={NextProjectLink}>
                        <button className='flex gap-3 items-center cursor-pointer'>
                            <p className='text-base md:text-lg font-semibold'>{NextProjectName}</p>
                            <FaLongArrowAltRight className='text-base' />
                        </button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default ProjectButton
