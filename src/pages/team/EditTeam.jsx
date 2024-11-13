import React from 'react'
import Profile from "../../assets/profile.png"

const EditTeam = () => {
  return (
    <>
    <div className='font-extralight my-4'>
        <p className=' mx-2 text-lg '>Edit Team</p>
        <hr />
        <div className='mx-2 my-4 space-y-1'>
        <button className=' float-end bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2'>Change Password</button>
        <div  className='mx-10 '>
        <img src={Profile} alt=" profile image" className='size-36' />
        <button className=' bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2'>Change Image</button>
        </div>
        </div>
        <div className='mx-2 '>
          <p className='my-2'>Personal Information</p>
          <hr />
          <div className='grid lg:grid-cols-12 my-6 mx-4 gap-4 text-slate-400'>
            <div className='col-span-3'>
                <div className='flex flex-col'>
            < label className='mb-6 '>First Name</label>
            <input type="text"  className=' outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28' />
            </div>
            <hr  className='lg:w-1/2 md:w-1/2 w-20'/>
            </div>
            <div className='col-span-3 '>
            <div className='flex flex-col'>
            <label className='mb-6 '>Last Name</label>
            <input type="text"  className=' outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28' />
            </div>
            <hr  className='lg:w-1/2 md:w-1/2 w-20'/>
            </div>
            <div className='col-span-3'>
                <div className='flex flex-col'>
            <label className='mb-6 '>Date Of Birth</label>
            <input type="date" className='outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28'/>
            </div>
            <hr  className='lg:w-1/2 md:w-1/2 w-28'/>
            </div>
            <div className='col-span-3'>
                <div className='flex flex-col'>
            <label className='mb-6 '>Designation</label>
            <input type="text" className='outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28'/>
            </div>
            <hr  className='lg:w-1/2 md:w-1/2 w-28'/>
            </div>
          </div>
          <p className='my-2'>Contact Information</p>
          <hr />
          <div className='grid lg:grid-cols-3 mx-2 my-8 gap-4'>
            <div>
                <div className='flex flex-col'>
                <label className='mb-6'>Email</label>
               <input type="email" className='bg-transparent outline-none lg:w-54 md:w-54 w-48'/>
               </div>
                <hr className='lg:w-54 md:w-54 w-48 mb-6' />
            </div>
            <div>
                <div className='flex flex-col'>
               <label className='mb-6'>Phone</label>
               <input type="tel" name="phone" id="phone" className='bg-transparent  outline-none lg:w-1/2 md:w-54 w-48' />
               </div>
                <hr className='lg:w-1/2 md:w-54 w-48 mb-6' />
            </div>
          </div>
          <button className=' mx-2 bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-16 py-2'>Save</button>
        </div>
    </div>
    </>
  )
}

export default EditTeam