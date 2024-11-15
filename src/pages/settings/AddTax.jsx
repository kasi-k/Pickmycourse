import React from 'react'

const AddTax = () => {
  return (
    <div className='mx-3 '>
        <p>Add Tax</p>
        <form className='grid   gap-4 items-center my-4 '>
            <label htmlFor="">Tax Name <span className='text-red-600'>*</span></label>
             <input type="text" placeholder='select-tax' className='rounded-md w-96 py-1.5 px-1 ' />
             <label className='text-nowrap '>Tax Percentage  <span className='text-red-600'>*</span></label>
             <input type="text" placeholder='select tax' className='rounded-md w-96 py-1.5 px-1' />
             <div className='flex mx-32 my-2'>
             <button className='bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5  '>Save</button>
             </div>
             
        </form>
    </div>
  )
}

export default AddTax