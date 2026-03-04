import React, { use } from 'react'
import CoustomerCard from '../CoustomerCard'

const CoustomerData = ({ FetchDataPromise }) => {
  const Data = use(FetchDataPromise)

  return (
    <div>
      {Data.map(SingleData => (
        <CoustomerCard
          key={SingleData.ticketNumber}
          SingleData={SingleData}
        ></CoustomerCard>
      ))}
    </div>
  )
}

export default CoustomerData
