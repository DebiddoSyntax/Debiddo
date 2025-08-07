import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { FiExternalLink } from "react-icons/fi";
import filehome1 from "../../assets/filehome/Filehome.png"
import filehome2 from "../../assets/filehome/Filehome2.png"
import filehome3 from "../../assets/filehome/Filehome3.png"
import filehome4 from "../../assets/filehome/Filehome4.png"




function Aftrieuro() {

    const Files1Ref = useRef()
    const Files1RefisVisible = useIsVisible(Files1Ref, { once: true })
    const Files2Ref = useRef()
    const Files2RefisVisible = useIsVisible(Files2Ref, { once: true })
    const Files3Ref = useRef()
    const Files3RefisVisible = useIsVisible(Files3Ref, { once: true })
    const Files4Ref = useRef()
    const Files4RefisVisible = useIsVisible(Files4Ref, { once: true })
    // const FilesTitleRef = useRef()
    // const FilesTitleRefisVisible = useIsVisible(FilesTitleRef, { once: true })



  return (
    <div className='px-5 md:px-10 lg:px-20 py-20'>
        <div className='my-12 xl:my-20'>
            <h3 className='text-3xl md:text-4xl xl:text-6xl font-bold uppercase'>Aftrieuro Dynamics LTD</h3>
            <p className='mt-7 xl:mt-10 text-sm md:text-base xl:text-lg leading-6 md:leading-7 xl:leading-8 text-justify'>
                Aftrieuro Dynamics is a business consulting firm focused on helping companies expand into international markets, particularly across Africa and Europe. 
                Their services include market entry strategy, business expansion planning, cross-cultural management, and support with navigating regional regulations and compliance.
                The firm works closely with businesses looking to grow globally by providing localized expertise, strategic advice, and tailored solutions that align with cultural and legal requirements in various regions.
                Their goal is to bridge the gap between different business environments and help companies operate smoothly across borders.
            </p>
            <button className='mt-7 xl:mt-10 flex text-sm font-semibold items-center px-6 py-4 bg-primary hover:bg-[#46256A]' 
                onClick={() => window.open('https://aftrieurodynamics.com/', '_blank')}>
                View Live Website 
                <span className='mx-1 md:mx-3'>
                    <FiExternalLink />
                </span>
            </button>
        </div>

        <div className='h-full w-full'>

            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-10 '>
                <div className={`delay-800ms duration-1000 ease-in-out rounded-sm md:rounded-xl cursor-pointer h-auto ${Files1RefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={Files1Ref}>
                    <img src={filehome1} alt="Animedeb" className='w-full h-full object-fill ' />
                </div>
                <div className={`delay-800ms duration-1000 ease-in-out rounded-sm md:rounded-xl cursor-pointer h-auto ${Files2RefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={Files2Ref}>
                    <img src={filehome2} alt="Animedeb" className='w-full h-full object-fill ' />
                </div>
                <div className={`delay-800ms duration-1000 ease-in-out rounded-sm md:rounded-xl cursor-pointer h-auto ${Files3RefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={Files3Ref}>
                    <img src={filehome4} alt="Animedeb" className='w-full h-full object-fill ' />
                </div>
                <div className={`delay-800ms duration-1000 ease-in-out rounded-sm md:rounded-xl cursor-pointer h-auto ${Files4RefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={Files4Ref}>
                    <img src={filehome3} alt="Animedeb" className='w-full h-full object-fill ' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aftrieuro
