import React from "react";


const AdduserPackage = () => {
 
  return (
     <>
      <div className='font-extralight'>
        <p className='mb-2 mx-2 mt-4'>Add a user to package</p>
         <hr />
       <form className='mx-4 my-6 '>
        <div className='grid gap-2.5 '>
        <label  className='col-span-12 '>Package Name <span className=' text-red-600'>*</span></label>
         <select name="enter topic" id="topic" defaultValue="select" className='col-span-3 text-black rounded-md py-1.5 px-2 '>
            <option value="select" disabled>Enter Topic</option>
            <option value="first" >1</option>
           <option value="2">2</option>
       </select>
      <label className='col-span-12 '>User <span className=' text-red-600'>*</span></label>
       <select defaultValue="select" className='col-span-3 text-black rounded-md py-1.5 px-2'>
            <option value="select" disabled>Type user email/phone</option>
             <option value="1">1</option>
            <option value="2">2</option>
          </select>
         </div>
         <button className='my-16 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-2 '>Save</button>
        </form>
     </div>
    </>
  );
};

export default AdduserPackage;
