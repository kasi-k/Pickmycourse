import {React, useState} from 'react'
import { IoClose } from "react-icons/io5";
import Courses from '../pages/courses/Courses';

const DeleteModal = ({onClose,Children}) => {
  return (
    <>
    <div className=' font-extralight fixed inset-0 flex justify-center  items-center backdrop-blur-sm '>
        <div className='mx-2 bg-gradient-to-b from-[#110038] to-[#08006B] lg:w-2/5 md:w-2/4   h-96  '>
    <button onClick={onClose}  className='grid place-self-end'><IoClose className='size-[24px]' /></button>
    <div className='grid justify-center gap-6'>
        <p className='text-center my-6'>Delete course</p>
        <p className='h-40 '>Are you sure you want to delete this course</p>
        </div>
    <div className='flex justify-around'>
        <button className=' text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-4 py-2 '>Delete Account</button>
        <button className='text-black bg-white px-10 py-2'>Cancel</button>
        </div>
    </div>
    </div>
    {Children}
    </>
  )
}

export default DeleteModal