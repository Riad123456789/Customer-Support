import React, { useEffect, useState } from 'react'
import CoustomerData from './CoustomerData'
import TaskStatus from './TaskStatus'
import ResolvedTask from './ResolvedTask'
import Banner from '../Banner/Banner'
import { toast } from 'react-toastify'

const FetchDataPromise = fetch('/FackData.json').then(res => res.json())

const AllCustomer = () => {
  const [Task, setTask] = useState([])
  const [Complete, setComplete] = useState([])
  const [customerData, setCustomerData] = useState([])

    const notify = () => toast.success("Task successfully added");
    const notify1 = () => toast.success("Task successfully completed");
    // const notify2 = () => toast.warning("Task already exists!");

  useEffect(() => {
    FetchDataPromise.then(data => {
      setCustomerData(data)
    })
  }, [])
  const handleTask = data => {
    const isExist = Task.some(item => item.ticketNumber === data.ticketNumber)

    if (isExist) {
      alert('This ticket already exists!')
      return
    }

    setTask(prev => [...prev, data])
    notify()
  }

  const handleComplete = data => {
    setTask(prev =>
      prev.filter(item => item.ticketNumber !== data.ticketNumber)
    )
    setComplete(prev => [...prev, data])
    setCustomerData(prev =>
      prev.filter(item => item.ticketNumber !== data.ticketNumber)
    )
    notify1()
  }

  return (
    <div>
      <Banner Task={Task} Complete={Complete} />

      <div className='bg-gray-200 px-3'>
        <div className='max-w-7xl mx-auto lg:flex justify-between gap-8 py-6'>
          <div className='flex-3 mb-10 md:mb-0'>
            <h1 className='font-semibold text-xl'>Customer Tickets</h1>
            <CoustomerData
              customerData={customerData}
              handleTask={handleTask}
            
            />
          </div>
          <div className='flex-1'>
            <TaskStatus Task={Task} handleComplete={handleComplete} />
            <ResolvedTask Complete={Complete} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCustomer
