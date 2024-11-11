import React, { useState } from 'react'
import Pdf from "../../assets/pdf.png";
import Csv from "../../assets/csv.png";
import Excel from "../../assets/excel.png";
import Edit from "../../assets/pencil.png";
import DeleteModal from '../../components/DeleteModal';
import Delete from "../../assets/delete.png"
const User = ({onClose}) => {
    const[del,setDel]=useState(false)
   
  return (
    <>
    <div className="my-4 font-extralight">
    <div className="flex justify-between items-center my-3">
      <p className=" mx-2 mt-6">User</p>
      <div className="flex items-center mx-2 space-x-3 ">
        <button>
          <img className="lg:size-12 md:size-10 size-8" src={Pdf} alt="Pdf image" />
        </button>
        <button>
          {" "}
          <img className="lg:size-12 md:size-10 size-8" src={Csv} alt="csv image" />
        </button>
        <button>
          <img className="lg:size-12 md:size-10 size-8" src={Excel} alt="excel image" />
        </button>
        <button className='bg-white text-nowrap text-black lg:px-4 md:px-4 px-1  lg:py-1.5 md:py-1.5 py-1'>Bulk Upload</button>
        <button className='bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  text-nowrap lg:px-4 md:px-4 px-1 lg:py-1.5 md:py-1.5 py-1'>Add user</button>
      </div>
    </div>
    <div className="mx-1 overflow-auto no-scrollbar ">
      <table className=" border border-collapse  w-full">
        <thead className="text-slate-300">
          <tr>
            <th className="p-2 font-extralight border border-slate-400">
              User Id
            </th>
            <th className="font-extralight border border-slate-400 text-nowrap">
              First Name
            </th>
            <th className="font-extralight border border-slate-400 text-nowrap">
              Last Name
            </th>
            <th className="font-extralight border border-slate-400">
              Email
            </th>
            <th className="font-extralight border border-slate-400">
              Phone
            </th>
            <th className="font-extralight border border-slate-400">
              DOB
            </th>
            <th className="font-extralight border border-slate-400">
              Plan
            </th>
            <th className="font-extralight border border-slate-400">
             Courses
            </th>
            <th className="font-extralight border border-slate-400">
              Subscription Date
            </th>
            <th className="font-extralight border border-slate-400">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-slate-400 ">
          <tr className=" text-nowrap text-center ">
            <td className="border border-slate-400 ">6694dwwqwsaa</td>
            <td className="border border-slate-400 ">John </td>
            <td className="border border-slate-400 ">Doe</td>
            <td className="border border-slate-400">johndoe@gmail.com</td>
            <td className="border border-slate-400">+91 98945452</td>
            <td className="border border-slate-400">22-05-1990</td>
            <td className="border border-slate-400 px-2 "> Basic</td>
            <td className="border border-slate-400 ">2</td>
            <td className="border border-slate-400 ">22-05-1990</td>
            <td className="flex justify-evenly items-center my-1 w-72  ">
              <p className=" cursor-pointer p-2  text-green-600 ">
                <img className='size-8' src={Edit} alt="edit image" />
              </p>
               <p className="cursor-pointer size-9">
                   <img src={Delete} alt="delete image" />
                  </p>
            </td> 
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</>
  )
}

export default User