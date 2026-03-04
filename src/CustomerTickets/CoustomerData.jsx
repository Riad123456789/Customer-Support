import React, { use } from 'react'
import CoustomerCard from './CoustomerCard'

const CoustomerData = ({ FetchDataPromise, handleTask }) => {
  const Data = use(FetchDataPromise)

  return (
    <div className='grid md:grid-cols-2 gap-6 mt-4 '>
      {Data.map(SingleData => (
        <CoustomerCard
          key={SingleData.ticketNumber}
          SingleData={SingleData}
          handleTask={handleTask}
        ></CoustomerCard>
      ))}
    </div>
  )
}

export default CoustomerData
