import React, { useState } from 'react'
import EditImage from '../../assets/edit.png'
import BinImage from "../../assets/bin.png"
import AddTax from './AddTax'

const Taxes = () => {
    const[addtaxmodal,setAddTaxModal]=useState(false)
  return (
    <>
    <div className='font-extralight '>
        <div className=' w-7/12 h-36  bg-[#000928] space-y-2 my-2 mx-4'>
        <div className='flex justify-between  '>
        <p className='mx-2 mt-1'>Taxes</p>
        <p onClick={()=>setAddTaxModal(true)} className='mx-2 mt-3 text-sm'>Add Tax</p>
        </div> 
        <hr />
        <div className='flex justify-between mx-2 '>
            <p>GST</p>
        <div className='flex mr-14 size-4 gap-2'>
            <p>18%</p>
               <img src={EditImage} alt="Edit image" />
               <img src={BinImage} alt="Delete image" />
            </div>
            </div>
            <hr />
        </div>
        <div className=' mx-2 my-20 '>
        {addtaxmodal&&<AddTax/>}
        </div>
    </div>
    
    </>
  )
}

export default Taxes