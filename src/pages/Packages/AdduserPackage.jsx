import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";


const AdduserPackage = () => {
  const navigate=useNavigate()
  const redirectPackage=()=>{
    navigate('/packages')
  }
 
  return (
     <>
      <div className='font-extralight'>
        <p className='mb-2 mx-2 mt-4'>Add a user to package</p>
         <hr />
       <form className='mx-4 my-6 '>
        <div className='grid gap-2.5 '>
        <label  className='col-span-12 '>Package Name <span className=' text-red-600'>*</span></label>
        <div className="relative inline-block col-span-2 ">
              <select defaultValue="select" className=" w-full text-black px-2 py-1.5 outline-none rounded-md ">
                <option value="select" disabled>
                  Enter Topic
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>
      <label className='col-span-12 '>User <span className=' text-red-600'>*</span></label>
      <div className="relative inline-block col-span-2 ">
              <select defaultValue="select" className=" w-full text-black px-2 py-1.5 outline-none rounded-md ">
                <option value="select" disabled>
                  Type user email/phone
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>
         </div>
         <button onClick={redirectPackage} className='my-16 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-2 '>Save</button>
        </form>
     </div>
    </>
  );
};

export default AdduserPackage;
