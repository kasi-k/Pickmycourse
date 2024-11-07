import React from 'react'
import { useState } from 'react';
import { FiShare2 } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import AddPackage from './AddPackage';
import { useNavigate } from 'react-router-dom';

const Package = () => {
    const navigate= useNavigate;

    const handlePackage = ()=>{
        navigate ("/add_package");
    }
  return (
    <>
    <div className=' font-poppins flex justify-end  mx-4 gap-4 my-3 '>
        <button onClick={handlePackage} className='text-black bg-white px-4 py-1'>Add package</button>
        <button className=' bg-gradient-to-r from-blue-900 to-fuchsia-600 px-4 py-1'>Add user to package</button>
    </div>
    <hr />
    <div className=' grid grid-cols-12  gap-4 my-6 mx-6'>
     <div className='col-span-3 bg-slate-900 '>
        <div className=' grid  justify-center   '>
             <p className=' text-center my-4'>Free</p>
             <p className=' bg-gradient-to-r from-blue-900 to-fuchsia-600 px-14 py-1.5 '>$ 0 / Month</p>
             </div>
             <p className=' my-4 mx-4 py-1 '>Generate 1 free course <br />
                Up to 5 subtopics <br />
                AI Teacher <br />
                Theory & Image course</p>
                <p className=' float-end bg-white py-1 mt-8 mx-1 '>
                    <button className='  bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiShare2  /></button>
                    <button  className=' bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiCopy  /></button>
                    <button  className='bg-indigo-400 py-1 px-1 mx-2 rounded-sm'><FiEdit  /></button>
                    <button  className='bg-red-400 py-1 px-1 mx-2 rounded-sm'><RiDeleteBinLine /></button>
                </p>
               
        </div>
        <div className='col-span-3 bg-slate-900'>
        <div className=' grid  justify-center '>
        <p className=' text-center my-4'>Basic</p>
             <p className=' bg-gradient-to-r from-blue-900 to-fuchsia-600 px-14 py-1.5'>$ 1 / Month</p>
             </div>
             <p className=' my-6 mx-4'>Generate 3 courses/month <br />
                                      Up to 10 subtopics<br />
                                      AI Teacher<br />
                                      Theory & Image Course<br />
                                      Theory & Video Course</p>
                <p className=' float-end bg-white py-1  mx-1'>
                    <button className='  bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiShare2  /></button>
                    <button  className=' bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiCopy  /></button>
                    <button  className='bg-indigo-400 py-1 px-1 mx-2 rounded-sm'><FiEdit  /></button>
                    <button  className='bg-red-400 py-1 px-1 mx-2 rounded-sm'><RiDeleteBinLine /></button>
                </p>
        </div>
        <div className='col-span-3 bg-slate-900'>
        <div className=' grid  justify-center   '>
        <p className=' text-center my-4'>Basic</p>
             <p className=' bg-gradient-to-r from-blue-900 to-fuchsia-600 px-14 py-1.5'>$ 5 / Month</p>
             </div>
             <p className=' my-6 mx-4'>Generate 10 courses/month <br />
                                      Up to 10 subtopics<br />
                                      AI Teacher<br />
                                      Theory & Image Course<br />
                                      Theory & Video Course</p>
                <p className=' float-end bg-white py-1  mx-1'>
                    <button className='  bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiShare2  /></button>
                    <button  className=' bg-slate-500 py-1 px-1 mx-2 rounded-sm'><FiCopy  /></button>
                    <button  className='bg-indigo-400 py-1 px-1 mx-2 rounded-sm'><FiEdit  /></button>
                    <button  className='bg-red-400 py-1 px-1 mx-2 rounded-sm'><RiDeleteBinLine /></button>
                </p>
        </div>
       </div>
    </>
  )
}

export default Package