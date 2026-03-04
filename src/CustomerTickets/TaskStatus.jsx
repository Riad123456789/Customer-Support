import React from 'react'

const TaskStatus = ({ Task }) => {
  return (
    <div className='pb-6'>
      <h1 className='text-lg font-semibold pb-4'>Task Status</h1>

      {Task.length === 0 ? (
        <p className='text-xs font-normal text-gray-600 pt-2'>
          Select a ticket to add to Task Status
        </p>
      ) : (
        Task.map(data => (
          <div
            key={data.ticketNumber}
            className='bg-white p-2 py-3 rounded-sm shadow mb-3 space-y-3 '
          >
            <h1 className='font-semibold'>{data.title}</h1>
            <button className='btn bg-[#02A53B] btn-sm w-full'>Complete</button>
          </div>
        ))
      )}
    </div>
  )
}

export default TaskStatus
