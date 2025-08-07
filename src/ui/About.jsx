import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'


const About = () => {


    const DavidRef = useRef()
    const DavidRefisVisible = useIsVisible(DavidRef, { once: true })
    const Hobbies1Ref = useRef()
    const Hobbies1RefisVisible = useIsVisible(Hobbies1Ref, { once: true })
    const Hobbies2Ref = useRef()
    const Hobbies2RefisVisible = useIsVisible(Hobbies2Ref, { once: true })
    const Hobbies3Ref = useRef()
    const Hobbies3RefisVisible = useIsVisible(Hobbies3Ref, { once: true })
    const Hobbies4Ref = useRef()
    const Hobbies4RefisVisible = useIsVisible(Hobbies4Ref, { once: true })
    const HobbiesTitleRef = useRef()
    const HobbiesTitleRefisVisible = useIsVisible(HobbiesTitleRef, { once: true })



  return (
    <div>
        <div className={`px-5 md:px-10 lg:px-20 pt-20 mb-20 delay-800ms duration-1000 ease-in-out ${DavidRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} ref={DavidRef}>
            <div className='mt-16 mb-5'>
                <h1 className='text-[11vw] sm:text-[10.5vw] md:text-[10.8vw] lg:text-[10.5vw] font-rubik text-[#7777] font-extrabold'>DAVID MICHAEL</h1>
            </div>
            <div className='mt-0'>
                <h1 className='text-sm md:text-xl font-medium w-full md:w-[70%] leading-7 md:leading-10 text-justify'>
                    I am a frontend developer with a background in UI/UX design, passionate about bridging design and development to create intuitive and visually compelling digital experiences. 
                    My design roots give me a strong eye for detail and user-centered thinking, while my skills in HTML, CSS, JavaScript, and React allow me to bring concepts to life on the web. 
                    I thrive on building responsive, user-friendly interfaces that make technology feel effortless and accessible. 
                    As I continue to grow in development, I'm excited to blend creativity with code to deliver impactful solutions.
                </h1>
            </div>
        </div>

        <div className='mt-20 py-14 md:py-20 px-5 md:px-10 lg:px-20 bg-[#AF93C6] h-full w-full'>
            <h4 className={`text-xl md:text-2xl font-bold text-primary text-center delay-800ms duration-1000 ease-in-out ${HobbiesTitleRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} ref={HobbiesTitleRef}>HOBBIES</h4>
            <p className={`text-center text-lg md:text-2xl font-semibold mt-3 delay-800ms duration-1000 ease-in-out ${HobbiesTitleRefisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`} ref={HobbiesTitleRef}>Things I love to do with my free time</p>

            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 '>
                <div className={`w-full bg-primary px-4 md:px-5 lg:px-8 pt-16 md:pt-20 lg:pt-28 pb-5 md:pb-8 rounded-sm delay-800ms duration-1000 ease-in-out ${Hobbies1RefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={Hobbies1Ref}>
                    <h5 className='text-2xl font-bold text-[#232026]'>ANIME</h5>
                    <p className='text-lg font-normal italic text-white mt-3'>Watching anime is one of my favourite things to do with my free time, my favorite anime is One Piece</p>
                </div>
                <div className={`bg-primary px-4 md:px-5 lg:px-8 pt-16 md:pt-20 lg:pt-28 pb-5 md:pb-8 rounded-sm delay-800ms duration-1000 ease-in-out ${Hobbies2RefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={Hobbies2Ref}>
                    <h5 className='text-2xl font-bold text-[#232026]'>GAMING</h5>
                    <p className='text-lg font-normal italic text-white mt-3'>I play a lot of games, my favourite is the god of war series.</p>
                </div>
                <div className={`bg-primary px-4 md:px-5 lg:px-8 pt-16 md:pt-20 lg:pt-28 pb-5 md:pb-8 rounded-sm delay-800ms duration-1000 ease-in-out ${Hobbies3RefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={Hobbies3Ref}>
                    <h5 className='text-2xl font-bold text-[#232026]'>FOOTBALL</h5>
                    <p className='text-lg font-normal italic text-white mt-3'>Football is my game, whether watching or playing, I’m all in.</p>
                </div>
                <div className={`bg-primary px-4 md:px-5 lg:px-8 pt-16 md:pt-20 lg:pt-28 pb-5 md:pb-8 rounded-sm delay-800ms duration-1000 ease-in-out ${Hobbies4RefisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} ref={Hobbies4Ref}>
                    <h5 className='text-2xl font-bold text-[#232026]'>FITNESS</h5>
                    <p className='text-lg font-normal italic text-white mt-3'>I love going to the gym whenever I can.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About