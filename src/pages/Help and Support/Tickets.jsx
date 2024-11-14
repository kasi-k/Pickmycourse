import React, { useState } from "react";
import Pdf from "../../assets/pdf.png";
import Csv from "../../assets/csv.png";
import Excel from "../../assets/excel.png";
import Delete from "../../assets/delete.png"
import Edit from "../../assets/pencil.png";
import DeleteModal from "../../components/DeleteModal";

const Tickets = () => {
    const[isDeleteModal,setIsDeleteModal,]=useState(false)
    const handleDeleteModal=()=>{
     setIsDeleteModal(true)
    }
    const handleCloseModal=()=>{
     setIsDeleteModal(false)
     }
  
  return (
    <>
    <div className=" font-extralight">
      <div className="flex justify-between items-center my-2">
        <p className=" mx-2 mt-6">Help and Support </p>
        <div className=" mx-2 flex gap-6 mt-4">
          <button>
            <img className="size-8" src={Pdf} alt="Pdf image" />
          </button>
          <button>
            {" "}
            <img className="size-8" src={Csv} alt="csv image" />
          </button>
          <button>
            <img className="size-8 " src={Excel} alt="excel image" />
          </button>
        </div>
      </div>
      <div className="mx-1 overflow-auto no-scrollbar  ">
        <table className=" border border-collapse   w-full">
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
                Ticket#
              </th>
              <th className="font-extralight border border-slate-400">
                Category
              </th>
              <th className="font-extralight border border-slate-400">
              Status
              </th>
              <th className="font-extralight border border-slate-400">
                Date
              </th>
              <th className="font-extralight border border-slate-400">
                Team Member
              </th>
              <th className="font-extralight border border-slate-400">
                Priority
              </th>
              <th className="font-extralight border border-slate-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-400 ">
            <tr className=" text-nowrap text-center ">
              <td className="border border-slate-400">6694dwwqwsaa</td>
              <td className="border border-slate-400 ">John </td>
              <td className="border border-slate-400 ">Doe</td>
              <td className="border border-slate-400">johndoe@gmail.com</td>
              <td className="border border-slate-400">+91 98945452</td>
              <td className="border border-slate-400">176355364</td>
              <td className="border border-slate-400">Test</td>
              <td className="border border-slate-400"> Open</td>
              <td className="border border-slate-400 text-slate-500 ">22-05-1990</td>
              <td className="border border-slate-400"> John</td>
              <td className="border border-slate-400"> Medium</td>
              <td className="flex items-center justify-evenly my-1 gap-2">
              <p className=" cursor-pointer  text-green-600 ">
                  <img className='lg:size-6 md:size-5 size-5' src={Edit} alt="edit image" />
                </p>
                <p onClick={handleDeleteModal} className="cursor-pointer lg:size-6 md:size-5 size-5">
                 <img src={Delete} alt="delete image" />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   {isDeleteModal&&<DeleteModal onClose={handleCloseModal} title="ticket"/>} 
  </>
  )
}

export default Tickets