import React from 'react'
import { FaCaretDown } from "react-icons/fa";

const ViewTicket = () => {
  return (
    <div className='mx-4 flex justify-between  my-2 font-extralight'>
        <div >
        <p>John Doe</p>
        <p>Ticket No: 17896546</p>
        <p> Date : 15-Oct-2024</p>
        <p> Category : General</p>
        <p>Priority : Medium</p>
        <p>Attachments</p>
        <p>Description:</p>
        <p>Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose.  </p>
        <hr/>
        <form  className='grid '>
            <label>Add Reply</label>
            <textarea rows={8} placeholder='write Reply' className='rounded-3xl '></textarea>
            <div>
            <label htmlFor="">Attachments (you can select multiple files)</label>
            <input type="file" className='border bg-white text-black w-96 rounded-xl h-10 flex items-center' />
            <label htmlFor="">Ticket staus</label>
            </div>
        </form>
    </div>
    
    <div >
        <form  className='grid mx-2 my-2'>
            <label>Team Member <span className='text-red-600'>*</span></label>
            <div className="relative inline-block col-span-2 ">
              <select defaultValue="select" className=" w-full text-black px-16 py-1.5 outline-none rounded-md ">
                <option value="select" disabled>
                  Select team member
                </option>
                <option value="">Tax1</option>
                <option value="">Tax2</option>
                <option value="">Tax3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>
        </form>
    </div>
    <div>
    </div>
    </div>
  )
}

export default ViewTicket