import React from 'react'

const AddPackage = () => {
  return (
    <>
    <div className='font-extralight'>
        <p className='my-2 mx-2 mt-4 '>Add a new package</p>
        <hr />
    <form className='mx-4 my-6 '>
        <div className='grid gap-2.5 '>
        <label className='col-span-12'>Package Name <span className=' text-red-600'>*</span></label>
        <input type="text" placeholder='Enter Topic' className='col-span-2 text-black rounded-md py-1.5 px-2'required />
        <label className='col-span-12'>Price <span className=' text-red-600'>*</span></label>
        <input type="text" placeholder='Enter Price' className='col-span-2 text-black rounded-md py-1.5 px-2'required />
        <label className='col-span-12'>No of Courses per month <span className=' text-red-600'>*</span></label>
        <input type="number"placeholder='00' className='col-span-2 text-black rounded-md py-1.5 px-2'required  />
        <label className='col-span-12'>Tax <span className=' text-red-600'>*</span></label>
        <select defaultValue="select" className='col-span-2 text-black rounded-md py-1.5 px-2 '>
            <option value="select" disabled>Select Tax</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <label className='col-span-12'>No of Subtopic <span className=' text-red-600'>*</span></label>
        <span className='col-span-12'>
        <input type="checkbox" />
        <label className=''>05</label> 
        </span>
        <span>
        <input type="checkbox" />
        <label htmlFor="">10</label>
        </span>
        <label className='col-span-12'>Course Type <span className=' text-red-600'>*</span></label>
        <span className='col-span-12'>
        <input type="checkbox" />
        <label className=''>Theory & Image Course</label> 
        </span>
        <span>
        <input type="checkbox" />
        <label htmlFor="">Theory & Video Course</label>
        </span>
    </div>
        <button className='my-6 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-2 '>Save</button>
    </form>
    
    </div>
    </>
  )
}

export default AddPackage