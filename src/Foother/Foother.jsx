import React from 'react'

const Foother = () => {
  return (
    <div>
      <footer className='bg-black text-white pt-14 pb-7 px-3'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h1 className='text-2xl font-bold text-blue-500 mb-3'>
              CS — Ticket System
            </h1>
            <p className='text-xs text-gray-400 leading-6'>
              Your one-stop shop for all your fashion and lifestyle needs.
              Quality products, fast delivery, and excellent support.
            </p>
          </div>
          <div>
            <h2 className='font-semibold mb-3'>Quick Links</h2>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li className='hover:text-white cursor-pointer'>Home</li>
              <li className='hover:text-white cursor-pointer'>Products</li>
              <li className='hover:text-white cursor-pointer'>About</li>
              <li className='hover:text-white cursor-pointer'>Contact</li>
            </ul>
          </div>

          <div>
            <h2 className='font-semibold mb-3'>SUPPORT</h2>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li className='hover:text-white cursor-pointer'>FAQs</li>
              <li className='hover:text-white cursor-pointer'>Shipping</li>
              <li className='hover:text-white cursor-pointer'>Returns</li>
              <li className='hover:text-white cursor-pointer'>
                Privacy policy
              </li>
            </ul>
          </div>
          <div>
            <h2 className='font-semibold mb-3'>Subscribe</h2>
            <p className='text-sm text-gray-400 mb-4'>
              Subscribe to get special offers and updates.
            </p>
            <div className='space-y-3 md:space-y-0 md:flex md:gap-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full px-3 py-2 text-xs rounded-md text-black bg-white focus:outline-none'
              />
              <button className='w-full bg-blue-500 px-4 py-2 text-sm rounded-md hover:bg-blue-600 transition'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className='border-t-2 max-w-7xl mx-auto border-gray-600 my-7 ' />

        <div className='border-gray-700 max-w-7xl mx-auto'>
          <div className=''>
            <p className='text-sm text-gray-400 text-center'>
              © 2026 CS — Ticket System, inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Foother
