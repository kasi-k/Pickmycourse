import React from 'react'
import { useState } from 'react';
import { FiShare2 } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Package = () => {
    const navigate= useNavigate();

    const handlePackage = ()=>{
        navigate ('/add_package');
    }
    const handleUserPackage = ()=>{
        navigate('/add_userPackage')
    }
  return (
    <>
    <div className=' font-poppins flex justify-end mx-4 gap-4 my-3 '>
        <button onClick={ handlePackage } className='  text-blue-950  bg-white px-4 py-1'>Add package</button>
        <button onClick={handleUserPackage} className=' bg-gradient-to-r from-blue-900 to-fuchsia-600 px-4 py-1'>Add user to package</button>
    </div>
    <hr />
    <div className=' grid  gap-4 my-6 mx-6 lg:grid-cols-12 md:grid-cols-10  '>
     <div className='col-span-3 bg-[#000928] '>
        <div className=' grid  justify-center  '>
             <p className=' text-center my-4'>Free</p>
             <p className=' bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-1.5 '>$ 0 / Month</p>
             </div>
             <div className=' font-extralight mx-4 my-6'>
             <p>Generate 1 free course </p>
               <p> Up to 5 subtopics </p>
               <p> AI Teacher</p>
               <p> Theory & Image course</p>
               </div>
                <p className=' float-end bg-white py-1  mx-1 mt-6 '>
                    <button className='  bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiShare2  /></button>
                    <button  className=' bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiCopy  /></button>
                    <button  className='bg-indigo-400 py-1 px-1 mx-2 rounded-sm'><FiEdit  /></button>
                    <button  className='bg-red-400 py-1 px-1 mx-2 rounded-sm'><RiDeleteBinLine /></button>
                </p>
               
        </div>
        <div className='col-span-3 bg-[#000928]  '>
        <div className=' grid  justify-center  '>
        <p className=' text-center my-4'>Basic</p>
             <p className=' bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-1.5 '>$ 1 / Month</p>
             </div>
             <div className='mx-4 my-6 font-extralight '>
             <p >Generate 3 courses/month </p>
             <p> Up to 10 subtopics</p>
             <p> AI Teacher</p>
             <p>Theory & Image Course</p>
             <p>Theory & Video Course</p>
             </div>
                <div className=' float-end  bg-white py-1 mx-1  '>
                    <button className='  bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiShare2  /></button>
                    <button  className=' bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiCopy  /></button>
                    <button  className='bg-indigo-400 py-1 px-1 mx-2 rounded-sm'><FiEdit  /></button>
                    <button  className='bg-red-400 py-1 px-1 mx-2 rounded-sm'><RiDeleteBinLine /></button>
                </div>
        </div>
        <div className='col-span-3 bg-[#000928]'>
        <div className=' grid  justify-center   '>
        <p className=' text-center my-4'>Basic</p>
             <p className='bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-1.5'>$ 5 / Month</p>
             </div>
             <div className=' font-extralight mx-4 my-6'>
             <p>Generate 10 courses/month </p>
             <p> Up to 10 subtopics</p>
             <p> AI Teacher</p>
             <p>Theory & Image Course</p>
             <p>Theory & Video Course</p>
             </div>
                <div className='  bg-white py-1 mx-1 float-end '>
                    <button className='  bg-slate-500 py-1 px-1 mx-1 rounded-sm'><FiShare2  /></button>
                    <button  className=' bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiCopy  /></button>
                    <button  className='bg-indigo-400 py-1 px-1 mx-2 rounded-sm'><FiEdit  /></button>
                    <button  className='bg-red-400 py-1 px-1 mx-2 rounded-sm'><RiDeleteBinLine /></button>
                </div>
        </div>
       </div>
    </>
  )
}

export default Package