import React from 'react'

const Package = () => {
  return (
    <>
    <div className='bg-background bg-center'>
    <div className='flex justify-end  mx-4 gap-2 '>
        <button className='border border-black  bg-white px-4 py-1'>Add package</button>
        <button className=' bg-gradient-to-r from-blue-900 to-fuchsia-600 px-4 py-1'>Add user to package</button>
    </div>
    <hr />
    <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-4 bg-black'>
             <p></p>
        </div>
        <div className='col-span-4 bg-black'>
             2
        </div>
        <div className='col-span-3 bg-black'>
             3
        </div>


    </div>
    </div>
    </>
  )
}

export default Package