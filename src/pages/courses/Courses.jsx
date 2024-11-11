import React from 'react'
import Pdf from '../../assets/pdf.png'
import Csv from '../../assets/csv.png'
import Excel from '../../assets/excel.png'
import { FaEye } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";


const Courses = () => {
  return (
    <>
    <div className='my-4 font-extralight overflow-auto'>
        <p className=' mx-2 my-8 float-left'>Courses</p>
       <div className=' mx-2 flex justify-end gap-6'>
       <button><img className='size-12' src={Pdf} alt="Pdf image" /></button> 
       <button> <img className='size-12' src={Csv} alt="csv image" /></button>
       <button><img  className='size-12' src={Excel} alt="excel image" /></button>
       </div>
    
    <table className=' border border-collapse border-slate-400 w-full'>
        <thead >
            <tr>
                <th className='p-2 font-extralight border border-slate-400'>user Id</th>
                <th  className='font-extralight border border-slate-400'>First Name</th>
                <th  className='font-extralight border border-slate-400'>last Name</th>
                <th  className='font-extralight border border-slate-400'>Email</th>
                <th  className='font-extralight border border-slate-400'>Phone</th>
                <th  className='font-extralight border border-slate-400'>Topic</th>
                <th  className='font-extralight border border-slate-400'>Type</th>
                <th  className='font-extralight border border-slate-400'>Date</th>
                <th  className='font-extralight border border-slate-400'>Action</th>
            </tr>
        </thead>
        <tbody >
            <tr className='  text-center'>
                <td className='border border-slate-400'>6694dwwqwsaa</td>
                <td className='border border-slate-400'>John </td>
                <td className='border border-slate-400'>Doe</td>
                <td className='border border-slate-400'>johndoe@gmail.com</td>
                <td className='border border-slate-400'>+91 98945452</td>
                <td className='border border-slate-400'>Topic name</td>
               <td className='border border-slate-400'> Video & Text</td>
               <td className='border border-slate-400'>22-05-1990</td>
               <td className='flex items-center justify-center my-1 '>
                <p  className=" cursor-pointer p-2  text-green-600 "><FaEye size={24} /></p>
                <p className="text-black p-1 ml-4 bg-red-700 rounded-full"><RiDeleteBin5Line size={20}/></p>
               </td>
            </tr>
        </tbody>
    </table>
    </div>
    </>
  )
}

export default Courses