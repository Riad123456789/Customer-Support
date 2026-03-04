import React from 'react'
import { GrStatusGoodSmall } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";

const Coustomer = ({ SingleData }) => {
  const { ticketNumber, title, description, priority, status, customer, date } =
    SingleData

  return (
    <div className='shadow-md rounded-sm bg-white px-4 py-4 space-y-3 cursor-pointer hover:bg-emerald-200'>
      <div className='flex justify-between'>
        <h1 className='text-base font-semibold'>{title}</h1>
       <div className='flex items-center justify-between gap-2 bg-[#64fa76] rounded-2xl px-4 '>
        <GrStatusGoodSmall color='green' />
         <p className='text-green-600  text-xs font-semibold '>{status}</p>
       </div>
      </div>
      <div>
        <p className='text-xs text-gray-600'>{description}</p>
      </div>
      <div className='flex justify-between items-center text-xs'>
        <div className='flex items-center gap-3'>
          <p>{ticketNumber}</p>
          <p className='uppercase text-red-500 font-semibold'>{priority} priority </p>
        </div>
        <div className='flex items-center gap-4'>
          <p>{customer}</p>
          <div className='flex items-center gap-1'>
            <CiCalendarDate  size={17}/>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coustomer
