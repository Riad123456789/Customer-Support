import React, { Suspense, useState } from 'react'
import CoustomerData from './CoustomerData'
import TaskStatus from './TaskStatus'
import ResolvedTask from './ResolvedTask'
import Banner from '../Banner/Banner'

const FetchDataPromise = fetch('/FackData.json').then(res => res.json())
const AllCustomer = () => {
  const [Task, setTask] = useState([])
  const [Complete, setComplete] = useState([])

  const handleTask = data => {
    const isExist = Task.find(item => item.ticketNumber === data.ticketNumber)

    if (isExist) {
      alert('This ticket already exists!')
      return
    }
    setTask([...Task, data])
  }

  const handleComplete = data => {
    const newcomplete = [...Complete, data]
    setComplete(newcomplete)
  }

  return (
    <div>
      <Banner Task={Task} Complete={Complete}></Banner>
      <div className='bg-gray-200 px-3'>
        <div className='max-w-7xl mx-auto lg:flex justify-between gap-8 py-6 md:py-13 '>
          <div className='flex-3  mb-10 md:mb-0 bg'>
            <h1 className='font-semibold text-xl'>Customer Tickets</h1>
            <div>
              <Suspense fallback={'LOADING.....'}>
                <CoustomerData
                  handleTask={handleTask}
                  FetchDataPromise={FetchDataPromise}
                ></CoustomerData>
              </Suspense>
            </div>
          </div>
          <div className='flex-1  '>
            <TaskStatus
              Task={Task}
              handleComplete={handleComplete}
            ></TaskStatus>
            <ResolvedTask Complete={Complete}></ResolvedTask>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCustomer
