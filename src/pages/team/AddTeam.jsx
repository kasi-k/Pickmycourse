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
        <div className='grid lg:grid-cols-12 md:grid-cols-10 mx-6 gap-6 '>
            <div className='grid col-span-3'>
            <label>First Name</label>
            <input type="text" placeholder='Enter First name' className='outline-none text-black rounded-md py-1.5 px-1 my-3 '/>
            </div>
            <div className='grid col-span-3'>
            <label >Last Name</label>
            <input type="text" placeholder='Enter Last name'className='outline-none text-black rounded-md py-1.5 px-1 my-3' />
            </div>
            <div className='grid col-span-3'>
            <label >Email</label>
            <input type="email" placeholder='Enter Email'className='outline-none text-black rounded-md py-1.5 px-1 my-3' />
            </div>
            </div>
            <div className='grid lg:grid-cols-12 md:grid-cols-10 mx-6 gap-6 my-5'>
              <div className='grid col-span-3'>
                <label>Phone</label>
                <input type="text"className='outline-none text-black rounded-md py-1.5 px-1 my-3'placeholder='Enter Mobile Number' />
                </div>
              <div className='grid col-span-3'>
                <label>Date Of Birth</label>
                <input type="date" className='outline-none text-black rounded-md py-1.5 px-1 my-3'/>
              </div>
              <div className='grid col-span-3'>
                <label>Designation<span className='text-red-600 '>*</span></label>
                <select defaultValue="select" className='outline-none text-black rounded-md py-1.5 px-1 my-3'>
                  <option value="select" disabled>Select Designation</option>
                  <option value="support">Support Executive</option>
                  <option value="executive">Executive</option>
                </select>
              </div>
             </div>
             <button className='lg:absolute bottom-10 mx-6   bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-16 py-2'>Save</button>
           </div>
      
    </>
  )
}

export default AddTeam