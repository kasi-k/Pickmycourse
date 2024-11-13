import React, { useState } from 'react'
import Pdf from "../../assets/pdf.png";
import Csv from "../../assets/csv.png";
import Excel from "../../assets/excel.png";
import Edit from "../../assets/pencil.png";
import DeleteModal from '../../components/DeleteModal';
import Delete from "../../assets/delete.png"
import { useNavigate } from 'react-router-dom';

const Team = () => {
    const[isDeleteModal,setIsDeleteModal,]=useState(false)
    const handleDeleteModal=()=>{
     setIsDeleteModal(true)
    }
    const handleCloseModal=()=>{
      setIsDeleteModal(false)
    }
     const navigate=useNavigate()
     const handleEditModal=()=>{
      navigate('/edit_team')
     }
     const handleAddTeamModal=()=>{
        navigate('/add_team')
     }
  return (
    <>
      <div className="font-extralight">
      <div className="flex justify-between items-center my-2 ">
        <p className=" mx-2 mt-6">User</p>
        <div className="flex items-center gap-3 mt-4">
          <button>
            <img className=" size-8" src={Pdf} alt="Pdf image" />
          </button>
          <button>
            {" "}
            <img className=" size-8" src={Csv} alt="csv image" />
          </button>
          <button>
            <img className=" size-8" src={Excel} alt="excel image" />
          </button>
          <div className=' flex mx-3 space-x-6'>
          <button className='bg-white text-nowrap text-black py-1 lg:px-4 md:px-4 px-1'>Bulk Upload</button>
          <button onClick={handleAddTeamModal} className='bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  text-nowrap py-1 lg:px-4 md:px-4 px-1  '>Add team</button>
          </div>
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
               Designation
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
              <td className="border border-slate-400 ">2</td>
              <td className="flex justify-around items-center my-1 w-72  ">
                <p onClick={handleEditModal} className=" cursor-pointer p-2  text-green-600 ">
                  <img className='size-8' src={Edit} alt="edit image" />
                </p>
                 <p onClick={handleDeleteModal} className="cursor-pointer size-9">
                     <img src={Delete} alt="delete image" />
                    </p>
              </td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {isDeleteModal&&<DeleteModal onClose={handleCloseModal} title="team"/>} 
    </>
  )
}

export default Team