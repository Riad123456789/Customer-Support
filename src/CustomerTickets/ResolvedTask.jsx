import React from 'react'

const ResolvedTask = ({ Complete }) => {
  return (
    <div>
      <h1 className='text-lg font-semibold'>Resolved Task</h1>

      {Complete.length === 0 ? (
        <p className='text-xs font-normal text-gray-600 pt-1'>
          No resolved tasks yet.
        </p>
      ) : (
        <div className='space-y-3 pt-2'>
          {Complete.map((data) => (
            <div
              key={data.ticketNumber}
              className='bg-[#E0E7FF] p-3 rounded-md shadow'
            >
              <p className='font-semibold'>{data.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ResolvedTask