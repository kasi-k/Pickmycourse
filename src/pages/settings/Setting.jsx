import React, { useState } from 'react'
import RolesPermission from './RolesPermission'
import Taxes from './Taxes'
import HelpSupport from './HelpSupport'

const Setting = () => {
    const[activeTab,setActiveTab]=useState("tab1")
  return (
    <>
    <div className='grid grid-cols-12 h-screen'>
    <div className='grid justify-center  col-span-3 border-r-[1px] '>
        <div className='my-6 space-y-2'>
        <p>Setting</p>
        <p  className={` cursor-pointer text-md w-60 pl-1 p-2 transition-all duration-700 hover:bg-gradient-to-r from-[#110038] to-[#08006B] font-extralight   ${
                        activeTab === "tab1"
                          ? "bg-gradient-to-r from-[#110038] to-[#08006B]  transition-all duration-500"
                          : " "
                      }`} onClick={() => setActiveTab("tab1")}>Roles & Permission
                      </p>
        <p className={` cursor-pointer text-md w-60 pl-1 p-2 transition-all duration-700 hover:bg-gradient-to-r from-[#110038] to-[#08006B] font-extralight   ${
                         activeTab === "tab2"
                          ? "bg-gradient-to-r from-[#110038] to-[#08006B]  transition-all duration-500"
                          : " "
                      }`} onClick={() => setActiveTab("tab2")}>Taxes
        
        </p>
        <p className={` cursor-pointer text-md w-60 pl-1 p-2 transition-all duration-700 hover:bg-gradient-to-r from-[#110038] to-[#08006B] font-extralight   ${
                         activeTab === "tab3"
                          ? "bg-gradient-to-r from-[#110038] to-[#08006B]  transition-all duration-500"
                          : " "
                      }`} onClick={() => setActiveTab("tab3")}>Help & Support
        </p>
        </div>
        </div>
        {activeTab ==="tab1" && <RolesPermission/>}
        {activeTab ==="tab2" && <Taxes/>}
        {activeTab ==="tab3" && <HelpSupport/>} 
        </div>
        </>
  )
}

export default Setting