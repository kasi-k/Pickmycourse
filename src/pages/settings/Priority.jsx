import React from 'react'
import EditImage from '../../assets/edit.png'
import BinImage from "../../assets/bin.png"

const Priority = () => {
  return (
    <div>
         <div className='flex justify-between mx-4 py-2 '>
            <p>High</p>
        <div className='flex mr-6 size-4 gap-2'>
               <img src={EditImage} alt="Edit image" />
               <img src={BinImage} alt="Delete image" />
            </div>
            </div>
            <hr />
            <div className='flex justify-between mx-4 py-2 '>
            <p>Medium</p>
        <div className='flex mr-6 size-4 gap-2'>
               <img src={EditImage} alt="Edit image" />
               <img src={BinImage} alt="Delete image" />
            </div>
            </div>
            <hr />
            <div className='flex justify-between mx-4 py-2'>
            <p>General</p>
        <div className='flex mr-6 size-4 gap-2'>
               <img src={EditImage} alt="Edit image" />
               <img src={BinImage} alt="Delete image" />
            </div>
            </div>
            <hr />
    </div>
  )
}

export default Priority