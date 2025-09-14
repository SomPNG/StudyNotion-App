import React from 'react'
import { useState } from 'react';
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Zoom, Slide, toast} from 'react-toastify'



const Signupform = ({setIsLog}) => {

  const [formData , setFormData] = useState({firstName:"",lastName:"",profession:"student",email:"",crpassword:"",cfpassword:""});
  const [stdInsCheck,setStdInsCheck] = useState(true);
  function changeHandler(e){

      if (e.target.type === 'radio') {
        setStdInsCheck(e.target.value === 'student');
      }
      setFormData((prevFormData)=>(
          {
              ...prevFormData,
              [e.target.name] : e.target.value,
          }
      )
      )
  }

  const[passVisibility , setPassVisibility] = useState({isCrPaVi:false,isCfPaVi:false});

  function eyeHandler(field){
    if(field ==="crp"){
      setPassVisibility((prevPassVi)=>({
        ...prevPassVi,
        isCrPaVi : !passVisibility.isCrPaVi,
      }));
    }
    else if(field ==="cfp"){
      setPassVisibility((prevPassVi)=>({
        ...prevPassVi,
        isCfPaVi : !passVisibility.isCfPaVi,
      }));
    }
  }

  const navigate = useNavigate();
  function submitHandler(e){
      e.preventDefault()
      if(formData.crpassword === formData.cfpassword){
        toast.success("Account Created",{
                                      position:'top-center',
                                      autoClose:950,
                                      transition: Slide,
                                      theme: 'colored',
                                      hideProgressBar: true,
                                      style:{backgroundColor:'yellow', color:'black',width:'200px'},
                                  });
      navigate('/dashboard');
      setIsLog(true);
      }
      else{
        toast.error("Password do not match",{
                                      position:'top-center',
                                      autoClose:1000,
                                      transition: Zoom,
                                      theme: 'dark',
                                      hideProgressBar: true,
                                      style:{width:'230px'}
                                  });
      }
  }


  

  return (
    <form className='flex flex-col  w-full gap-y-4 mt-6' onSubmit={submitHandler} >
      
      <div className="flex gap-2 p-1 bg-gray-700 rounded-full w-fit">
        <label htmlFor="student" className="cursor-pointer">
          <input
            type="radio"
            name="profession"
            id="student"
            checked={stdInsCheck}
            onChange={changeHandler}
            value="student"
            className="peer hidden"
          />
          <div className="px-5 py-2 rounded-full text-sm font-medium border border-gray-500 
                  peer-checked:bg-yellow-400 peer-checked:text-black peer-checked:border-yellow-400 
                  transition-all duration-200 text-white">
            Student
          </div>
        </label>

        <label htmlFor="instructor" className="cursor-pointer">
          <input
            type="radio"
            name="profession"
            id="instructor"
            checked={!stdInsCheck}
            onChange={changeHandler}
            value="instructor"
            className="peer hidden"
          />
          <div className="px-5 py-2 rounded-full text-sm font-medium border border-gray-500 
                  peer-checked:bg-yellow-400 peer-checked:text-black peer-checked:border-yellow-400 
                  transition-all duration-200 text-white">
            Instructor
          </div>
        </label>
      </div>


      <div className='flex gap-x-4'>
        <label htmlFor="firstName" className='w-full'>
          <p className='text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]'>First Name<span className='text-red-600'>*</span></p> 
          
          <input type="text" className='bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]' id='firstName' name='firstName' onChange={changeHandler} value={formData.firstName} placeholder='Enter first name' required={true} />
        </label>
        
        <label htmlFor="lastName" className='w-full'>
          <p className='text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]'> Last Name <span className='text-red-600'>*</span></p>
          
          <input type="text" className='bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]' id='lastName' name='lastName' onChange={changeHandler} value={formData.lastName} placeholder='Enter last name' required={true} />
        </label>
      </div>

      <label htmlFor="email" className='w-full'>
        <p className='text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]'>Email Address<span className='text-red-600'>*</span></p>
        
        <input type="email" className='bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]' name="email" id="email" onChange={changeHandler} value={formData.email} placeholder='Enter email address' required={true} />
      </label>

      <div className='flex gap-x-4'>
        <label htmlFor="crpassword" className='w-full relative'>
          <p className='text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]'>Create Password<span className='text-red-600'>*</span></p>
          <input className='bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]' type={passVisibility.isCrPaVi ? ("text") : ("password")} name="crpassword" id="crpassword" onChange={changeHandler} value={formData.crpassword} placeholder='Enter Password'  required={true} />
          <button className='absolute right-3 top-[38px] text-[24px] text-[#afb2bf]' onClick={()=>{eyeHandler('crp')}} aria-label={passVisibility.isCrPaVi ? 'Hide password' : 'Show password'} type='button' > {passVisibility.isCrPaVi ? (<FaEye/>) : (<FaEyeSlash/>)}</button>
        </label>
          
          <label htmlFor="cfpassword" className='w-full relative'><p className='text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]'>Confirm Password<span className='text-red-600'>*</span></p>
            <input className='bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]' type={passVisibility.isCfPaVi ? ("text") : ("password")} name="cfpassword" id="cfpassword" onChange={changeHandler} value={formData.cfpassword} placeholder='Confirm Password'  required={true} />
            <button  className='absolute right-3 top-[38px] text-[24px] text-[#afb2bf]' onClick={()=>{eyeHandler('cfp')}} aria-label={passVisibility.isCfPaVi ? 'Hide password' : 'Show password'} type='button' > {passVisibility.isCfPaVi ? (<FaEye/>) : (<FaEyeSlash/>)}</button>
          </label>
          
      </div>

      <button type='submit'  className='bg-yellow-500 rounded-[8px] font-medium text-gray-900 px-[12px] py-[8px]'>Create Account</button>
    </form>
  )
}

export default Signupform