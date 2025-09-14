import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import logo from "../assets/Logo.svg"
import { Bounce, Flip, Slide, toast, Zoom } from 'react-toastify'
const Navbar = ({isLog,setIsLog}) => {

    

    

    return (
        <div className='flex justify-between items-center w-11/12  max-w-[1160px] py-4 mx-auto'>
            <NavLink to="/">
                <img src={logo} loading='lazy' width={160} height={32}/>
            </NavLink>

            <ul className='flex text-white gap-x-6'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/">About</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
            </ul>

            <div className='text-white flex gap-x-4 items-center'>

                {
                    isLog ? (
                        <>
                            <NavLink to="/login">
                                <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700' onClick={()=>{
                                    setIsLog(false);
                                    toast.success("Logged Out",{
                                        position:'top-center',
                                        autoClose:950,
                                        transition: Slide,
                                        theme: 'colored',
                                        hideProgressBar: true,
                                        style:{backgroundColor:'yellow', color:'black',width:'170px'},
                                    });
                                }}>Log Out</button>
                            </NavLink>

                            <NavLink to="/dashboard">
                                <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700'>Dashboard</button>
                            </NavLink>
                        </>
                    ): (
                        <>
                            <NavLink to="/login">
                                <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700'>Log In</button>
                            </NavLink>

                            <NavLink to="/signup">
                                <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700'>Sign Up</button>
                            </NavLink>
                        </>
                    )
                }    
            </div>

        </div>
    )
}

export default Navbar