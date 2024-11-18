import React, { useState } from 'react'
import SettingImage from '../../assets/setting.png'
import EditImage from '../../assets/edit.png'
import BinImage from "../../assets/bin.png"
import dashboard from "../../assets/dashboard.png";
import Package from "../../assets/money.png";
import course from "../../assets/course.png"
import subscribe from "../../assets/subscription.png"
import user from "../../assets/user.png"
import team from "../../assets/team.png"
import help from "../../assets/services.png"
import report from "../../assets/report.png"
import setting from "../../assets/settings.png"
import AddRole from './AddRole';
import { useNavigate } from 'react-router-dom';

const RolesPermission = () => {
    const[activeTab,setActiveTab]=useState("tab1")
      return (
    <>
    <div className='font-extralight grid grid-cols-9  '>
    <div className='  h-56 bg-[#000928] space-y-4 my-2 mx-4 col-span-4'>
        <div className='flex justify-between '>
        <p className='mx-2 mt-4'>Roles</p>
        <p onClick={()=>setActiveTab("tab3")} className='mx-2 mt-4'>Add Role</p>
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
    <div className=' font-extralight my-2 col-span-5 mr-6 bg-[#000928] '> 
        <p className='my-2 mx-2'>Permission</p>
        <hr />
        <div className=''> 
            <p className='flex items-center mt-2 mx-2 gap-4'> <img src={dashboard} alt="icon image" className='size-4 mx-2 ' />Dashboard</p>
            <p className='w-[300px] text-end'>View</p>
            <p className='flex justify-around items-center w-80 mb-2'> 
            <span class="text-sm mx-6 ">Total Courses Generated </span>
            <label class=" cursor-pointer">
             <input type="checkbox" class="hidden peer"/>
            <span class="w-3 h-3 border-[3px] border-white flex items-center peer-checked:bg-blue-800 peer-checked:border-blue-700 peer-checked:ring-2 peer-checked:ring-offset-2">
         </span>
</label></p>
            <hr />
            <p className='flex items-center mt-2 mx-2 gap-4'> <img src={Package} alt="icon image" className='size-4 mx-2 ' />Packages</p>
            <p className='flex justify-around items-center w-[338px] mb-2'> 
            <span class="text-sm mx-2 ">Can view packages </span>
            <label class=" cursor-pointer">
             <input type="checkbox" class="hidden peer"/>
            <span class="w-3 h-3 border-[3px] border-white flex items-center peer-checked:bg-blue-800 peer-checked:border-blue-700 peer-checked:ring-2 peer-checked:ring-offset-2">
         </span>
</label></p>
            <hr />
            <p className='flex items-center mt-2 mx-2 gap-4'> <img src={ course} alt="icon image" className='size-4 mx-2 ' />Courses</p>
            <p className='flex justify-around items-center w-[345px] mb-2'> 
            <span class="text-sm mx-2">Can view Courses</span>
            <label class=" cursor-pointer">
             <input type="checkbox" class="hidden peer"/>
            <span class="w-3 h-3 border-[3px] border-white flex items-center peer-checked:bg-blue-800 peer-checked:border-blue-700 peer-checked:ring-2 peer-checked:ring-offset-2">
         </span>
</label></p>
            <hr />
            <p className='flex items-center mt-2 mx-2 gap-4'> <img src={ subscribe} alt="icon image" className='size-4 mx-2 ' />Subscription</p>
            <p className='flex justify-around items-center w-[335px] mb-2'> 
            <span class="text-sm mx-6">Can View Subscriptions</span>
            <label class=" cursor-pointer">
             <input type="checkbox" class="hidden peer"/>
            <span class="w-3 h-3 border-[3px] border-white flex items-center peer-checked:bg-blue-800 peer-checked:border-blue-700 peer-checked:ring-2 peer-checked:ring-offset-2">
         </span>
</label></p>

            <hr />
            <div className='flex flex-col w-[360px]'>
            <p className='flex items-center mt-2 mx-2 gap-4'> <img src={user} alt="icon image" className='size-4 mx-2 ' />Users</p>
            <p className='flex items-center justify-around mb-2'> 
            <span class="text-sm ">Can view users</span> 
            <label class=" cursor-pointer ">
             <input type="checkbox" class="hidden peer"/>
            <span class="w-3 h-3 border-[3px] border-white flex items-center peer-checked:bg-blue-800 peer-checked:border-blue-700 peer-checked:ring-2 peer-checked:ring-offset-2">
         </span>
</label></p></div>
            
            <hr />

        </div>
     {/* {activeTab==="tab3"&&<AddRole/>}  */}
    </div>
    </div>
    
    </>
  )
}

export default RolesPermission