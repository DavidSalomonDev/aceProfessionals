import React from 'react'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';


export const PopUpForm = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        // emailjs.send("service_ggy36e6", "template_817ivy8", e.target, "user_qcVEGAk66Pd4cuX7BrWOi")
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });;
        // e.target.reset()
        props.setshowModal(false)
        
    }

    return (
        <form id="form" className=" m-auto my-8" onSubmit={handleSubmit(onSubmit)}>
        <div data-aos-duration="1000" data-aos="fade-up" className="md:w-1/2 w-11/12 m-auto">
            <div>
                <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="" name="from_name" ref={register({ required: true })} />
                {errors.from_name && errors.from_name.type === "required" && <span class="error">This is required</span>}
            </div>
            <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" name="to_name" ref={register({ required: true ,  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} />
                {errors.to_name && errors.to_name.type === "required" && (<span  class="error" >This is required</span>)}
                {errors.to_name && errors.to_name.type === "pattern" && (<span  class="error" >Invalid Email</span>)}
            </div>
            <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">Phone No.</span>
                <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number" name="phoneNo" ref={register({ required: true, maxLength: 11, minLength: 10 })} />
                {errors.phoneNo && errors.phoneNo.type === "required" && <span class="error">This is required</span>}
                {errors.phoneNo && errors.phoneNo.type === "maxLength" && <span class="error">Invalid No.</span>}
                {errors.phoneNo && errors.phoneNo.type === "minLength" && <span class="error">Invalid No.</span>}
            </div>

            <div className="mt-8 ">
                <button type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Register
                 </button>
            </div>
        </div>
    </form>
    )
}
