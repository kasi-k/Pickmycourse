import React from 'react'

const Login = () => {
  return (
    <>
    <div className='flex justify-center h-screen bg-gradient-to-b from-indigo-700 to-fuchsia-600 items-center '>
    <div className=' w-1/4 h-[580px] bg-gradient-to-b from-indigo-900 via-indigo-600 to-indigo-900 shadow-md '>
        <p className=' text-center font-serif text-4xl font-bold my-6'><span className='text-sky-400'>Pick</span><span className='text-pink-500'>MyCourse</span></p>
    <form>
        <p className='text-center my-5 text-white' >Login</p>
        <div className='grid  gap-3 mx-4 '>
        <label htmlFor="email" className='text-white'>Email <span className='text-red-700'>*</span></label>
        <input type="email" placeholder='Enter Email'required className='py-2  rounded-md text-center'/>
        <label htmlFor="password" className='text-white'>Password <span className='text-red-700'>*</span></label>
        <input type="password" placeholder='Enter Password'required className='py-2  rounded-md text-center' />
        <a href="" className='flex justify-end text-white'> forgot Password?</a>
        <div className='flex justify-center my-8 '>
        <button className=' text-white bg-gradient-to-r from-blue-900 to-fuchsia-600 w-1/2 py-2 '>Login</button>
        </div>
        </div>
    </form>
    <p className='text-center text-white my-24'>@PickMyCourse Developed with by SeenIT Pty Ltd</p>
    </div>
    
    </div>
    </>
  )
}

export default Login