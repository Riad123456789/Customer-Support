import React from "react"
import CoustomerCard from "./CoustomerCard"

const CoustomerData = ({ customerData, handleTask }) => {

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-4">

      {customerData.map(SingleData => (
        <CoustomerCard
          key={SingleData.ticketNumber}
          SingleData={SingleData}
          handleTask={handleTask}
        />
      ))}

    </div>
  )
}

export default CoustomerData