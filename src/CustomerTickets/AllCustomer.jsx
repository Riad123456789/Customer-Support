import React, { Suspense } from 'react'
import CoustomerData from './CoustomerData'

const FetchDataPromise = fetch('/FackData.json')
.then(res => res.json())


const AllCustomer = () => {
  return (
    <div className='bg-gray-200 px-3'>
      <div className='max-w-7xl mx-auto lg:flex justify-between gap-4 py-6 md:py-13 '>
        <div className='flex-2  '>
          <h1 className='font-semibold text-xl'>Customer Tickets</h1>
          <div>
            <Suspense fallback={"LOADING....."}>
                <CoustomerData FetchDataPromise={FetchDataPromise}></CoustomerData>
            </Suspense>
          </div>
        </div>
        <div className='flex-1 bg-amber-200'>c</div>
      </div>
    </div>
  )
}

export default AllCustomer
