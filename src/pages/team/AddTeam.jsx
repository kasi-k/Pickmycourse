import React from 'react'
import Profile from "../../assets/profile.png"

const AddTeam = () => {
  return (
    <>
     <div className='font-extralight my-4'>
        <p className=' mx-2 text-lg '>Add Team</p>
        <hr />
        <div className='mx-12 my-6 space-y-1'>
        <img src={Profile} alt=" profile image" className='size-36' />
        <button className=' bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2'>Change Image</button>
        </div>
        <div className='grid grid-cols-12 mx-6 gap-6'>
            <div className='grid col-span-3'>
            <label>First Name</label>
            <input type="text" placeholder='Enter First name' className='outline-none border-white border rounded-md py-1 '/>
            </div>
            <div className='grid col-span-3'>
            <label >Last Name</label>
            <input type="text" placeholder='Enter Last name'className='outline-none border-white border rounded-md py-1' />
            </div>
            <div className='grid col-span-3'>
            <label >Email</label>
            <input type="email" placeholder='Enter Email'className='outline-none border-white border rounded-md py-1' />
            </div>
        </div>
        </div>

    </>
  )
}

export default AddTeam