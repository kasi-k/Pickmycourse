import React from 'react';
import PMCLogo from '../../assets/PMC_logo.png';
import { IoHeart } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import frame from "../../assets/backframe.png"


const Login = () => {
  return (
    <>
    <div className=" font-poppins flex justify-center h-screen items-center bg-background bg-center   ">
    <div className="relative w-1/4 h-fit bg-dark-blue shadow-lg border-x-2 border-violet-950 " >
       <img src={frame} alt="Image" className='absolute opacity-10 z-0' />
        <img src={PMCLogo} alt="Image" className=' mx-2 my-2 ' />
    <form className=''>
        <p className='text-center text-white' >Login</p>
        <div className='grid gap-3 mx-4 my-6 '>
        <label htmlFor="email" className='text-white'>Email <span className='text-red-600'>*</span></label>
        <input type="email" placeholder='Enter Email'required className='py-1.5 z-10  rounded-md text-center text-black'/>
        <label htmlFor="password" className='text-white'>Password <span className='text-red-600'>*</span></label>
        <input type="password" placeholder='Enter Password'required className='py-1.5  z-10 rounded-md text-center text-black' />
        <a href='/forgot_password' className='relative text-end text-white'> forgot Password?</a>
        <div className='flex justify-center  my-24'>
        <button className=' text-white bg-gradient-to-r from-blue-900 to-fuchsia-600 w-1/2 py-2 '>Login</button>
        </div>
        </div>
    </form>
    <p className='flex mx-3 text-sm text-white justify-evenly items-center my-1'><FaRegCopyright />PickMyCourse Developed with<IoHeart  className='text-red-600' />by SeenIT Pty Ltd</p>
    </div>
    
    </div>
    </>
  )
}

export default Login