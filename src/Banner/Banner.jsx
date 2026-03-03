import React from 'react'

const Banner = () => {
  return (
    <div className='bg-gray-200'>
      <div className='max-w-7xl mx-auto py-16'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
          <div className='flex-1 bg bg-[#422AD5] h-48 rounded-md flex items-center justify-center text-white shadow-lg'>
            <img className='' src="./public/vector1.png" alt="" />
            <img src="./public/vector1.png" alt="" />
           {/* <div className='text-center'>
              <p className='text-lg font-medium'>Resolved</p>
              <p className='text-4xl font-bold mt-2'>0</p>
            </div> */}
          </div>

          <div className='flex-1 bg-gradient-to-r from-[#54CF68] to-[#00827A] h-48 rounded-md flex items-center justify-center text-white shadow-lg  '>
                <img className='' src="./public/vector1.png" alt="" />
            <img src="./public/vector1.png" alt="" />
            {/* <div className='text-center'>
              <p className='text-lg font-medium'>Resolved</p>
              <p className='text-4xl font-bold mt-2'>0</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
