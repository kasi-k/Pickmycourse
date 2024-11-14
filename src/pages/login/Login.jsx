import React from 'react';
import PMCLogo from '../../assets/PMC_logo.png';
import frame from "../../assets/backframe.png"
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate=useNavigate()
  const handleLogin=()=>{
    navigate('/dashboard')
  }
  return (
    <>
    <div className=" font-poppins flex justify-center h-screen items-center bg-[#300080] ">
    <div className=" relative w-96 mx-1  bg-[#200098]  shadow-lg border-x-2 border-violet-950  " >
       <img src={frame} alt="Image" className='absolute opacity-20 z-0' />
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
        <button onClick={handleLogin} className=' text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2 '>Login</button>
        </div>
        </div>
    </form>
    <p className="text-sm mt-10 text-center text-white font-extralight">&#169; PickMyCourse Developed with <span className="text-red-500">&#x2764;</span> by SeenIT Pty Ltd</p>
    </div>
    
    </div>
    </>
  )
}

export default Login