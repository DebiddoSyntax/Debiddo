'use client'
import { useRef, useState } from 'react'
import { useIsVisible } from 'react-is-visible'
import crowdhelp from '../../src/assets/projects-thumbnails/Crowdhelp.webp'
import HashtagSneaker from '../../src/assets/projects-thumbnails/HashtagsSneaker.webp'
import Cryptofolio from '../../src/assets/projects-thumbnails/Cryptofolio.webp'
import Untamed from '../../src/assets/projects-thumbnails/Untamed.webp'
import Animedeb from '../../src/assets/projects-thumbnails/Animedeb.webp'
import aftrieuro from '../../src/assets/projects-thumbnails/aftrieuro.webp'
import hashtags from '../../src/assets/projects-thumbnails/HashtagsMerch.webp'
import ProjectCards from './reusable/ProjectCards'




const Projects = () => {

    // card refs 
    const ProjectsRef = useRef()
    const hashtagsMerchRef = useRef()
    const AftrieruroRef = useRef()
    const DesignRef = useRef()
    const DevRef = useRef()
    const CrowdHelpRef = useRef()
    const HashtagsRef = useRef()
    const CryptoFRef = useRef()
    const UntamedERef = useRef()
    const AnimedebRef = useRef()

    // IntersectionObserver useIsVisible 
    const ProjectsRefisVisible = useIsVisible(ProjectsRef, { once: true })
    const hashtagsMerchRefisVisible = useIsVisible(hashtagsMerchRef, { once: true })
    const AftrieruroRefisVisible = useIsVisible(AftrieruroRef, { once: true })
    const DesignRefisVisible = useIsVisible(DesignRef, { once: true })
    const DevRefisVisible = useIsVisible(DevRef, { once: true })
    const CrowdHelpRefisVisible = useIsVisible(CrowdHelpRef, { once: true })
    const CryptoFRefisVisible = useIsVisible(CryptoFRef, { once: true })
    const HashtagsRefisVisible = useIsVisible(HashtagsRef, { once: true })
    const UntamedERefisVisible = useIsVisible(UntamedERef, { once: true })
    const AnimedebRefisVisible = useIsVisible(AnimedebRef, { once: true })

    // image loaded state 
    const [hashtagsMerchLoaded, setHashtagsMerchLoaded] = useState(false)
    const [AftrieruroLoaded, setAftrieruroLoaded] = useState(false)
    const [crowdhelpLoaded, setCrowdhelpLoaded] = useState(false)
    const [cryptoFolioLoaded, setCryptoFolioLoaded] = useState(false)
    const [hashtagsLoaded, setHashtagsLoaded] = useState(false)
    const [UntamedELoaded, setUntamedELoaded] = useState(false)
    const [animedebLoaded, setAnimedebLoaded] = useState(false)

    


    

    return (
        <div className='pt-10 md:pt-20 pb-52 lg:pb-80 px-5 md:px-10 lg:px-20'>
        
            {/* <div className={`z-5 mt-24 mb-16 md:mb-24 duration-1000 delay-75 ease-in-out 
                ${ProjectsRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} 
                ref={ProjectsRef}
            >
                <h1 className='text-[1.6rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.4rem] xl:text-[5.5rem] 2xl:text-[6rem] 3xl:text-[12rem] text-center font-rubik text-bigtext font-extrabold'>
                    ALL PROJECTS
                </h1>
            </div> */}
            

            <div className={`mt-16 md:mt-24 mb-8 md:mb-10 duration-1000 delay-75 ease-in-out 
                ${DevRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} 
                ref={DevRef}
            >
                <h1 className='text-2xl sm:text-[40px] md:text-[56px] lg:text-[64px] font-rubik text-primary font-extrabold'>DEVELOPMENT</h1>
            </div>

          

            {/* cards  */}
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 2xl:gap-16'>

                <ProjectCards 
                    IsVisibleRef={hashtagsMerchRefisVisible} 
                    ProjectRef={hashtagsMerchRef} 
                    LoadedState={hashtagsMerchLoaded} 
                    setLoadedState={setHashtagsMerchLoaded} 
                    ProjectName={'Hashtags Merch'} 
                    ProjectLink={'https://hashtagsmerch.vercel.app/'} 
                    ProjectSRC={hashtags} 
                    ButtonText={'View live website'}
                    PageLink={true} 
                    LinkTo={'/hashtags'}
                />


                <ProjectCards 
                    IsVisibleRef={AftrieruroRefisVisible} 
                    ProjectRef={AftrieruroRef} 
                    LoadedState={AftrieruroLoaded} 
                    setLoadedState={setAftrieruroLoaded} 
                    ProjectName={'Aftrieuro Dynamics LTD'} 
                    ProjectLink={'https://aftrieurodynamics.com/'} 
                    ProjectSRC={aftrieuro} 
                    ButtonText={'View live website'}
                    PageLink={true} 
                    LinkTo={'/aftrieuro'}
                />


                {/* <ProjectCards 
                    IsVisibleRef={UntamedERefisVisible} 
                    ProjectRef={UntamedERef} 
                    LoadedState={UntamedELoaded} 
                    setLoadedState={setUntamedELoaded} 
                    ProjectName={'Untamed Check'} 
                    ProjectLink={'https://untamedcheck.netlify.app/'} 
                    ProjectSRC={Untamed} 
                    ButtonText={'View live website'}
                /> */}

                <ProjectCards 
                    IsVisibleRef={AnimedebRefisVisible} 
                    ProjectRef={AnimedebRef} 
                    LoadedState={animedebLoaded} 
                    setLoadedState={setAnimedebLoaded} 
                    ProjectName={'Animedeb'} 
                    ProjectLink={'https://animedeb.netlify.app/'} 
                    ProjectSRC={Animedeb} 
                    ButtonText={'View live website'}
                />

            </div>


            <div className={`mt-16 md:mt-24 mb-8 md:mb-10 duration-1000 delay-75 ease-in-out 
                ${DesignRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} 
                ref={DesignRef}
            >
                <h1 className='text-2xl sm:text-[40px] md:text-[56px] lg:text-[64px] font-rubik text-primary font-extrabold'>
                    DESIGN
                </h1>
            </div>


            {/* cards  */}
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-12 xl:gap-16'>

                <ProjectCards 
                    IsVisibleRef={CrowdHelpRefisVisible} 
                    ProjectRef={CrowdHelpRef} 
                    LoadedState={crowdhelpLoaded} 
                    setLoadedState={setCrowdhelpLoaded} 
                    ProjectName={'CrowdHelp'} 
                    ProjectLink={'https://www.behance.net/gallery/211811185/CrowdHelp-Mobile-App'} 
                    ProjectSRC={crowdhelp} 
                    ButtonText={'View on behance'}
                />

                <ProjectCards 
                    IsVisibleRef={CryptoFRefisVisible} 
                    ProjectRef={CryptoFRef} 
                    LoadedState={cryptoFolioLoaded} 
                    setLoadedState={setCryptoFolioLoaded} 
                    ProjectName={'CryptoFolio'} 
                    ProjectLink={'https://www.behance.net/gallery/143681909/Web3-case-study-%28CryptoFolio-Web-app%29'} 
                    ProjectSRC={Cryptofolio} 
                    ButtonText={'View on behance'}
                />

                <ProjectCards 
                    IsVisibleRef={HashtagsRefisVisible} 
                    ProjectRef={HashtagsRef} 
                    LoadedState={hashtagsLoaded} 
                    setLoadedState={setHashtagsLoaded} 
                    ProjectName={'Hashtags sneaker app'} 
                    ProjectLink={'https://www.behance.net/gallery/138711137/Sneaker-store-mobile-app-UX-case-study'} 
                    ProjectSRC={HashtagSneaker} 
                    ButtonText={'View on behance'}
                />

            </div>


        </div>
    )
}

export default Projects