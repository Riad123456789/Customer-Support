import React, { useState } from 'react'
import { GrStatusGoodSmall } from 'react-icons/gr'
import { CiCalendarDate } from 'react-icons/ci'

const Coustomer = ({ SingleData, handleTask }) => {
  const { ticketNumber, title, description, priority, status, customer, date } =
    SingleData

  const [statues, setStatus] = useState(false)

  const HandleStatus = () => {
    setStatus(!statues)
    handleTask(SingleData)

  }

  return (
    <div
      onClick={HandleStatus}
      className='shadow-md rounded-sm bg-white px-2  md:px-4 py-4 space-y-3 cursor-pointer hover:bg-emerald-200'
    >
      <div className='flex justify-between'>
        <h1 className='text-xs md:text-base font-semibold'>{title}</h1>

        <div
          className={`flex items-center gap-2 ${
            statues ? 'bg-[#F8F3B9]' : 'bg-[#64fa76]'
          } rounded-2xl px-4 py-1`}
        >
          <GrStatusGoodSmall color={statues ? '#FEBB0C' : 'green'} />

          <p
            className={`${
              statues ? 'text-[#9C7700]' : 'text-green-600'
            } text-xs font-semibold`}
          >
            {statues ? 'In-Progress' : 'Open'}
          </p>
        </div>
      </div>

      <div>
        <p className='text-xs text-gray-600'>{description}</p>
      </div>

      <div className='flex justify-between items-center text-xs'>
        <div className='flex items-center gap-3'>
          <p>{ticketNumber}</p>
          <p className='uppercase text-red-500 font-semibold'>
            {priority} priority
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <p>{customer}</p>

          <div className='flex items-center gap-1'>
            <CiCalendarDate size={17} />
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coustomer