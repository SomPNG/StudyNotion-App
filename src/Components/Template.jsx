import React from 'react'
import { FcGoogle } from "react-icons/fc";
import Loginform from './Loginform';
import Signupform from './Signupform';
import frame from "../assets/frame.png"



const Template = ({title,desc1,desc2,formType,image,setIsLog}) => {
  return (
    <div className='flex py-12 mx-auto justify-between gap-x-12 gap-y-0 w-11/12  max-w-[1160px]'>
        <div className='w-[750px]'> 
            <h1 className='text-gray-200 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-gray-100'>{desc1}</span> <br />
                <span className='text-blue-300 italic '>{desc2}</span>
            </p>
            {formType === "signup" ? (<Signupform setIsLog={setIsLog}/>): (<Loginform setIsLog={setIsLog}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-gray-700 '></div>
                <p className='text-gray-700 font-medium leading-[1.375rem]'>Or</p>
                <div className='h-[1px] w-full bg-gray-700 '></div>
            </div>

            <button className='text-gray-100 w-full justify-center items-center rounded-[8px] font-medium border border-gray-700 px-[12px] py-[8px] gap-x-2 mt-6  flex'><FcGoogle/> Sign Up with Google</button>

        </div>

        <div className='relative w-11/12 w-max-[450px]'>
            <img src={frame} className='absolute -top-1 right-2'   loading='lazy' width={558} height={404}/>
            <img src={image} className='absolute -top-4 right-4' loading='lazy' width={558} height={490}/>
        </div>
    </div>
  )
}

export default Template