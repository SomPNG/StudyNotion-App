import  {  useState } from 'react'
import React from 'react';
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {  Slide, toast} from 'react-toastify'
import { Link } from 'react-router-dom';


const Loginform = ({setIsLog}) => {
    const[isPassVisible, setPassVisibility] = useState(false);
    function eyeHandler(){
        isPassVisible ? (setPassVisibility(false)) : (setPassVisibility(true));
    }

    const [formData , setFormData] = useState({email:"",password:""});

    function changeHandler(e){
        setFormData((prevFormData)=>(
            {
                ...prevFormData,
                [e.target.name] : e.target.value,
            }
        )
        )
    }

    const navigate = useNavigate();

    function submitHandler(e){
        e.preventDefault()
        toast.success("Logged In",{
                                        position:'top-center',
                                        autoClose:950,
                                        transition: Slide,
                                        theme: 'colored',
                                        hideProgressBar: true,
                                        style:{backgroundColor:'yellow', color:'black',width:'170px'},
                                    });
        navigate('/dashboard');
        setIsLog(true);
    }

    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label htmlFor="email" className='w-full'>
                <p className='text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]'>Email Address<span className='text-red-600'>*</span></p>
                <input type="email" name="email" id="email" className='bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]' onChange={changeHandler} value={formData.email} placeholder='Enter email address' required={true} />
            </label>

            <label htmlFor="password" className='w-full relative'>
                <p className='text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]'>Password<span className='text-red-600'>*</span></p>
                <input type={isPassVisible ? ("text") : ("password")} name="password" id="password" className='bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]'  onChange={changeHandler} value={formData.password} placeholder='Enter Password'  required={true} />
                <button onClick={eyeHandler} className='absolute right-3 top-[38px] text-[24px] text-[#afb2bf]' aria-label={isPassVisible ? 'Hide password' : 'Show password'} type='button'> {isPassVisible ? (<FaEye/>) : (<FaEyeSlash/>)}</button>
            </label>
                
            <Link to="#">
                <p className='text-xs mt-1 text-blue-300 ml-auto max-w-max'>Forgot Password</p>
            </Link>
            
            <button type='submit' className='bg-yellow-500 rounded-[8px] font-medium text-gray-900 px-[12px] py-[8px]'>Sign In</button>
        </form>
    )
}

export default Loginform