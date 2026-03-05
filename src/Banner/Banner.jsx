import React from 'react'

const Banner = ({Task , Complete}) => {
  return (
    <div className='bg-gray-200 w-fulla'>
      <div className='max-w-7xl mx-auto py-7 md:py-16 '>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 px-3'>
          <div className='flex-1  bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-full  md:h-52 rounded-md  text-white '>
            <div className='h-full flex justify-between items-center'>
              <img
                className='h-32 md:h-full  object-contain '
                src='/vector1.png'
                alt=''
              />

              <div className='text-center'>
                <p className='text-sm md:text-lg font-medium'>In-Progress</p>
                <p className='text-lg md:text-5xl font-semibold mt-2'>{Task.length}</p>
              </div>
              <img
                className='h-32 md:h-full object-contain scale-x-[-1] '
                src='/vector1.png'
                alt=''
              />
            </div>
          </div>

          <div className='flex-1  bg-linear-to-r from-[#54CF68] to-[#00827A] w-full  md:h-52 rounded-md text-white '>
            <div className='h-full flex justify-between items-center'>
              <img
                className='h-32 md:h-full object-contain '
                src='/vector1.png'
                alt=''
              />
              <div className='text-center'>
                <p className='text-sm  md:text-lg font-medium'>Resolved</p>
                <p className='text-lg md:text-5xl font-semibold mt-2'>{Complete.length}</p>
              </div>
              <img
                className='h-32 md:h-full object-contain scale-x-[-1]'
                src='/vector1.png'
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
