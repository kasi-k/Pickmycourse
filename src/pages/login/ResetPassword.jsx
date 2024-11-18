import React from 'react'
import PMCLogo from '../../assets/PMC_logo.png';
import frame from "../../assets/backframe.png"
import { useNavigate } from 'react-router-dom'


const ResetPassword = () => {
    const navigate=useNavigate()
    const redirectLogin=()=>{
        navigate('/')
    }
  return (
    <>
    <div className=" font-poppins flex justify-center h-screen items-center bg-[#300080]   ">
    <div className="relative w-96 mx-1 bg-[#200098]  shadow-lg border-x-2 border-violet-950" >
        <img src={frame} alt="Image" className='absolute opacity-20 z-0' />
        <img src={PMCLogo} alt="Image" className='mx-2 my-2' />
         <p className='text-center text-white my-10' >Reset Password</p>
    <form>
        <div className='grid gap-3 mx-10 my-6 '>
        <label htmlFor="" className='text-white'>New Password <span className='text-red-600'>*</span></label>
        <input type="password" placeholder='Enter new password'required className='py-1.5 z-10  rounded-md text-center text-black '/>
        <label htmlFor="" className='text-white'>Confirm Password <span className='text-red-600'>*</span></label>
        <input type="password" placeholder='Enter confirm password'required className='py-1.5 z-10  rounded-md text-center text-black'/>
        
        <div className='flex justify-center  my-24'>
        <button onClick={redirectLogin} className=' text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2 '>Reset Password</button>
        </div>
        </div>
    </form>
    <p className="text-sm mt-10 text-center text-white font-extralight">&#169; PickMyCourse Developed with <span className="text-red-500">&#x2764;</span> by SeenIT Pty Ltd</p>
    </div>
    
    </div>
    </>
  )
}

export default ResetPassword