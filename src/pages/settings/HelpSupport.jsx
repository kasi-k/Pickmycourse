import React, { useState } from 'react'
import Category from './Category'
import Priority from './Priority'
import Status from './Status'
import AddCategory from './AddCategory'
import { FaCaretDown } from "react-icons/fa";


const HelpSupport = () => {
    const[activeTab,setActiveTab]=useState("tab1")
    const[addCategory,setAddCategory]=useState("")
  return (
    <div className='font-extralight bg-[#000928] h-56 mx-2 w-4/5'>
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
        <div className=''>
           <p className='text-sm mt-5' onClick={()=>setAddCategory("1")}> {activeTab==="tab1"?"Add Category":""}</p>
            <p className='text-sm 'onClick={()=>setAddCategory("2")}>{activeTab==="tab2"?"Add Priority":""}</p>
            <p className='text-sm mt-5'onClick={()=>setAddCategory("3")}>{activeTab==="tab3"?"Add Status":""}</p>
            </div>
         </div>
         <hr />
         {activeTab==="tab1"&&<Category />}
         {activeTab==="tab2"&&<Priority />}
         {activeTab==="tab3"&&<Status />}
         <div className='my-32'>
         {activeTab==="tab1"&&addCategory==="1"?<AddCategory title="Category"/>:activeTab==="tab2"&&addCategory==="2"?<AddCategory title="Priority"/>:activeTab==="tab3"&&addCategory==="3"?
         <div className='mx-4'>
           <p className="my-8">Add Status</p>
        <form className="grid gap-4 items-center my-4 ">
          <label htmlFor="">
            Status Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder=" Enter Name"
            className="rounded-md w-7/12 py-2 px-1 "
          />
            <label htmlFor="">
            Select Color <span className="text-red-600 ">*</span>
          </label>
          <div className="relative inline-block ">
              <select defaultValue="select" className=" w-7/12 text-black px-2 py-2 outline-none  rounded-md ">
                <option value="select" disabled>
                  Select Tax
                </option>
                <option value="" className='bg-yellow-800'></option>
                <option value="">Tax2</option>
                <option value="">Tax3</option>
              </select>
              <div className="absolute inset-y-0 right-[305px] flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>
          <div className="flex justify-center my-4 w-4/5">
            <button className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5  ">
              Save
            </button>
          </div>
        </form>
      </div>
  
         
         
        :"" }

         </div>
        
          
    </div>
  )
}

export default HelpSupport