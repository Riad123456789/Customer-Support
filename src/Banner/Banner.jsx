import React from 'react'

const Banner = () => {
  return (
    <div className='bg-gray-200'>
      <div className='max-w-7xl mx-auto py-16'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='flex-1  bg-linear-to-r from-[#632EE3] to-[#9F62F2] h-52 rounded-md  text-white '>
            <div className='h-full flex justify-between items-center'>
              <img
                className='h-full object-contain '
                src='./public/vector1.png'
                alt=''
              />

              <div className='text-center'>
                <p className='text-lg font-medium'>In-Progress</p>
                <p className='text-5xl font-semibold mt-2'>0</p>
              </div>
              <img
                className='h-full object-contain scale-x-[-1]'
                src='./public/vector1.png'
                alt=''
              />
            </div>
          </div>

          <div className='flex-1  bg-linear-to-r from-[#54CF68] to-[#00827A] h-52 rounded-md text-white '>
            <div className='h-full flex justify-between items-center'>
              <img
                className='h-full object-contain '
                src='./public/vector1.png'
                alt=''
              />
              <div className='text-center'>
                <p className='text-lg font-medium'>Resolved</p>
                <p className='text-5xl font-semibold mt-2'>0</p>
              </div>
              <img
                className='h-full object-contain scale-x-[-1]'
                src='./public/vector1.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
