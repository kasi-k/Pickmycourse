import React, { useState } from "react";
import Pdf from "../../assets/pdf.png";
import Csv from "../../assets/csv.png";
import Excel from "../../assets/excel.png";
import { FaEye } from "react-icons/fa6";
import Delete from "../../assets/delete.png"
import DeleteModal from "../../components/DeleteModal";

const Courses = () => {
   const[isDeleteModal,setIsDeleteModal,]=useState(false)
   const handleDeleteModal=()=>{
    setIsDeleteModal(true)
   }
  return (
    <>
      <div className=" font-extralight">
        <div className="flex justify-between items-center my-2">
          <p className=" mx-2 mt-6">Courses</p>
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
                  Topic
                </th>
                <th className="font-extralight border border-slate-400">
                  Type
                </th>
                <th className="font-extralight border border-slate-400">
                  Date
                </th>
                <th className="font-extralight border border-slate-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-400 ">
              <tr className=" text-nowrap text-center">
                <td className="border border-slate-400">6694dwwqwsaa</td>
                <td className="border border-slate-400 ">John </td>
                <td className="border border-slate-400 ">Doe</td>
                <td className="border border-slate-400">johndoe@gmail.com</td>
                <td className="border border-slate-400">+91 98945452</td>
                <td className="border border-slate-400">Topic name</td>
                <td className="border border-slate-400"> Video & Text</td>
                <td className="border border-slate-400 text-slate-500 ">22-05-1990</td>
                <td className="flex items-center justify-evenly my-1 ">
                  <p className=" cursor-pointer p-2  text-green-600 ">
                    <FaEye size={24} />
                  </p>
                  <p onClick={handleDeleteModal} className="cursor-pointer size-6">
                   <img src={Delete} alt="delete image" />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
     {isDeleteModal&&<DeleteModal onClose={()=>setIsDeleteModal(false)}/>} 
    </>
  );
};

export default Courses;
