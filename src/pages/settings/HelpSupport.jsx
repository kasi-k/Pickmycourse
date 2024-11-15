import React, { useState } from 'react'
import Category from './Category'
import Priority from './Priority'
import Status from './Status'


const HelpSupport = () => {
    const[activeTab,setActiveTab]=useState("tab1")
  return (
    <div className='font-extralight bg-[#000928] h-56 mx-2'>
    <div className='flex justify-between my-4 mx-4'>
        <div className='flex gap-8 '>
            <p className={` cursor-pointer flex justify-between items-center text-md  transition-all duration-700  font-extralight   ${
                         activeTab === "tab1"
                          ? "text-blue-300  transition-all duration-500"
                          : " "
                      }`} onClick={()=>setActiveTab("tab1")}>Category</p>
            <p className={` cursor-pointer flex justify-between items-center text-md  transition-all duration-700  font-extralight   ${
                         activeTab === "tab2"
                          ? "text-blue-300  transition-all duration-500"
                          : " "
                      }`} onClick={()=>setActiveTab("tab2")}>Priority</p>
            <p className={` cursor-pointer flex justify-between items-center text-md  transition-all duration-700  font-extralight   ${
                         activeTab === "tab3"
                          ? "text-blue-300  transition-all duration-500"
                          : " "
                      }`} onClick={()=>setActiveTab("tab3")}>status</p>
        </div>
        <p className='text-sm mt-5'>Add {activeTab==="tab1"?"Category":activeTab==="tab2"?"Priority":"Status"}</p>
            
         </div>
         <hr />
         {activeTab==="tab1"&&<Category />}
         {activeTab==="tab2"&&<Priority />}
         {activeTab==="tab3"&&<Status />}
    
        
          
    </div>
  )
}

export default HelpSupport