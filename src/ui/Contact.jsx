import { useState } from 'react'
import { FaSquareCheck } from "react-icons/fa6";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import emailjs from '@emailjs/browser';



function Contact() {

    const [loading, setIsLoading] = useState(false)
    const [error, setError] = useState("");
    const [emailSent, setEmailSent] = useState(false);





    const schema = yup.object({
        first_name: yup.string().required("Enter your first name"),
        last_name: yup.string().required("Enter your last name"),
        email: yup.string().email("Kindly enter a valid email").required("Please enter your email"),
        message: yup.string().required("Enter your message"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const service_id = process.env.REACT_APP_EMAILJS_SERVICEID
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATEID
    const public_key = process.env.REACT_APP_EMAILJS_PUBLICKEY

    //contact 
    const onSubmit = async(data) => {
  
        try{
            setIsLoading(true)
            await emailjs.send( 
                service_id, template_id,
                {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    message: data.message,
                },
                public_key
            )

            // console.log(response)
            // if(response.status == true)
            setEmailSent(true)
        }catch(err){
            console.log("failed to contact", err)
            setError("Failed to contact")
        }finally{
            setIsLoading(false)
        }
    }


    return (
        <div className="py-20 text-white shadow-sm ">
            <div className={`bg-gray px-5 md:px-10 lg:px-20`}>

                {!emailSent ?
                (
                    <form onSubmit={handleSubmit(onSubmit)} className={`px-8 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 w-full md:w-[90%] lg:w-[70%] mx-auto`} >
                        <h3 className=" z-30 text-lg md:text-xl lg:text-2xl leading-[30px] md:leading-[40px] lg:leading-[52px] font-bold text-center">
                            Contact
                        </h3>
                        <p className="text-center text-xs md:text-sm lg:text-base text-gray-200 mt-3 w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
                            Have a question, idea, or project in mind? Just send me a message.
                        </p>

                        <div className='grid grid-cols-2 gap-5 mt-10 md:mt-12 lg:mt-14'>
                            {/* first name */}
                            <div className="flex flex-col items-start text-left w-full">
                                <label htmlFor="firstname" className="text-sm font-medium text-white mb-4 mr-4">First Name</label>
                                <input type="firstname"
                                    id="firstname"
                                    placeholder='Enter first name'
                                    className=" w-[100%] p-3 border-0 border-gray-300 rounded-md focus:outline-2 focus:border-0 focus:placeholder:opacity-0 focus:outline-none placeholder:text-sm md:placeholder:text-sm bg-[#7777]"
                                    {...register('first_name')}
                                />
                                <p className="text-red-700 text-sm mt-2">
                                    {errors.first_name?.message && String(errors.first_name.message)}
                                </p>



                            </div>

                            {/* last name  */}
                            <div className="flex flex-col items-start text-left w-full">
                                <label htmlFor="lastname" className="text-sm font-medium text-white mb-4 mr-4">Last Name</label>
                                <input type="lastname"
                                    id="lastname"
                                    placeholder='Enter last name'
                                    className=" w-[100%] p-3 border-0 border-gray-300 rounded-md focus:outline-2 focus:border-0 focus:placeholder:opacity-0 focus:outline-none placeholder:text-sm md:placeholder:text-sm bg-[#7777]"
                                    {...register('last_name')}
                                />
                                <p className="text-red-700 text-sm mt-2">
                                    {errors.last_name?.message && String(errors.last_name.message)}
                                </p>
                            </div>
                        </div>

                        <div className="mt-7 flex flex-col items-start text-left w-full">
                            <label htmlFor="lastname" className="text-sm font-medium text-white mb-4 mr-4">Email</label>
                            <input type="email"
                                id="email"
                                autoComplete='on'
                                placeholder='Enter your email'
                                className=" w-[100%] p-3 border-0 border-gray-300 rounded-md focus:outline-2 focus:border-0 focus:placeholder:opacity-0 focus:outline-none placeholder:text-sm md:placeholder:text-sm bg-[#7777]"
                                {...register('email')}
                            />
                            <p className="text-red-700 text-sm mt-2">
                                {errors.email?.message && String(errors.email.message)}
                            </p>
                        </div>

                        <div className="mt-7 flex flex-col items-start w-full">
                            <label htmlFor="message" className="mb-2 text-sm font-medium text-white">
                                Your Message
                            </label>
                            <div className="w-full">
                                <textarea
                                    id="message"
                                    placeholder="Message"
                                    className="w-full h-40 p-3 border-0 border-gray-300 rounded-md focus:border-primary focus:placeholder:opacity-0  focus:ring-primary focus:outline-none placeholder:text-sm resize-none bg-[#7777]"
                                    {...register('message')}
                                ></textarea>
                            </div>
                            <p className="text-red-700 text-sm mt-2">
                                {errors.message?.message && String(errors.message.message)}
                            </p>
                        </div>

                         {error && <p className="mt-5 text-red-500 text-sm text-center">{error}</p>}

                        <button type='submit' disabled={loading} className='mt-10 mx-auto bg-primary w-full py-4 rounded-md text-sm md:text-base text-center font-semibold text-white hover:bg-primary cursor-pointer'>
                            {loading ? "Submiting...." : "Submit Form"}
                        </button>


                    </form>
                ) : (
                    <div className='py-20 bg-gray flex items-center justify-center'>
                        <div className="mt-5 mx-auto text-center">
                            <h3 className="text-2xl md:text-2xl lg:text-3xl leading-[30px] md:leading-[40px] lg:leading-[52px] font-bold">
                                Sent
                            </h3>
                            <p className="mt-5 text-base text-gray-200 w-full">
                                Thank you for contacting me, I will get back to you soon.
                            </p>
                            <FaSquareCheck className='mt-5 text-primary text-4xl md:text-5xl mx-auto'/>
                        </div>
                    </div>
            )}

            </div>


        </div >
    )
}

export default Contact
