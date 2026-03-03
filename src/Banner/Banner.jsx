import React from 'react'

const Banner = () => {
  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto py-10'>
        <div className='flex items-center justify-between gap-5 '>
          <div className=' flex-1 bg-amber-200 h-48 rounded-md flex items-center justify-center'>
            <div>
              <p>In-Progress</p>
              <p>0</p>
            </div>
          </div>
          <div className='flex-1 bg-amber-200 h-48 rounded-md flex items-center justify-center'>
            <div>
              <p>Resolved</p>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
