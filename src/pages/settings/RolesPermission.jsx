import React, { useState } from 'react'
import SettingImage from '../../assets/setting.png'
import EditImage from '../../assets/edit.png'
import BinImage from "../../assets/bin.png"

const RolesPermission = () => {
    const[activeTab,setActiveTab]=useState("tab1")
  return (
    <>
    <div className='font-extralight '>
    <div className=' w-80 h-56 bg-[#000928] space-y-4 my-2 mx-4'>
        <div className='flex justify-between '>
        <p className='mx-2 my-1'>Roles</p>
        <p  className='mx-2 my-1'>Add Role</p>
        </div>
        <div className={` cursor-pointer flex justify-between items-center text-md  pl-1 p-2 transition-all duration-700 hover:bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] font-extralight   ${
                         activeTab === "tab1"
                          ? "text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  transition-all duration-500"
                          : " "
                      }`}>
            <p>Team Leader</p>
            <div className='flex mr-12 size-4 gap-2'>
               <img src={SettingImage} alt="Settings image" />
               <img src={EditImage} alt="Edit image" />
               <img src={BinImage} alt="Delete image" />
            </div>
        </div>
        <div className={` cursor-pointer flex justify-between items-center text-md  pl-1 p-2 transition-all duration-700 hover:bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] font-extralight   ${
                         activeTab === "tab2"
                          ? "text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  transition-all duration-500"
                          : " "
                      }`}>
            <p>Support Executive</p>
            <div className='flex mr-12 size-4 gap-2'>
               <img src={SettingImage} alt="Settings image" />
               <img src={EditImage} alt="Edit image" />
               <img src={BinImage} alt="Delete image" />
            </div>
        </div>
        <hr />
        </div>
    <div className=''>
        2
    </div>
    </div>
    </>
  )
}

export default RolesPermission