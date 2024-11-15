import React from 'react'

const Dashboard = () => {
  return (
    <div className=' font-extralight  space-y-4 mx-4 my-8'>
      <div className='grid grid-cols-12 gap-2  '>
        <div className='bg-[#000928]  drop-shadow-2xl col-span-3'>
            <p className='mx-2 my-1 text-base'>Total Courses Generated</p>
            <p className='text-end pt-8 text-4xl mx-2'>38</p>
            <button className=' bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5'>View</button>
        </div>
        <div className='bg-[#000928] col-span-3 drop-shadow-2xl '>
        <p className='mx-2 my-1 text-base'>Total Number Of Users</p>
            <p className='text-end pt-8 text-4xl mx-2'>38</p>
            <button className=' bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5'>View</button>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-2'>
        <div className='bg-[#000928] col-span-3 drop-shadow-2xl'>
        <p className='mx-2 my-1 text-base'>Revenue Generated</p>
            <p className='text-end pt-8 text-4xl mx-2'>$3800000</p>
            <button className=' bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5'>View</button>
        </div>
        <div className='bg-[#000928] col-span-3 drop-shadow-2xl'>
        <p className='mx-2 my-1 text-base'>Recurring Revenue</p>
            <p className='text-end pt-8 text-4xl mx-2'>$380000</p>
            <button className=' bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5'>View</button>
        </div>
      </div>

    </div>

  )
}

export default Dashboard