import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Navber = () => {
  return (
    <div className='bg-base-100 shadow-sm'>
      <div className='max-w-7xl mx-auto '>
        <div className='navbar p-0 py-3'>

          {/* Left Side */}
          <div className='navbar-start'>
            
            {/* Mobile Menu */}
            <div className='dropdown'>
              <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 p-5 shadow bg-base-100 bg w-52'>
                <li><a>Home</a></li>
                <li><a>FAQ</a></li>
                <li><a>Changelog</a></li>
                <li><a>Blog</a></li>
                <li><a>Download</a></li>
                <li><a>Contact</a></li>
                <li className='mt-2'>
                   <button className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
              <FaPlus />
              New Ticket
            </button>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <h1 className='text-base font-bold '>
              CS — Ticket System
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className='navbar-end hidden lg:flex items-center gap-10'>
            <div className='flex items-center gap-8'>
              <p className='cursor-pointer hover:text-primary'>Home</p>
              <p className='cursor-pointer hover:text-primary'>FAQ</p>
              <p className='cursor-pointer hover:text-primary'>Changelog</p>
              <p className='cursor-pointer hover:text-primary'>Blog</p>
              <p className='cursor-pointer hover:text-primary'>Download</p>
              <p className='cursor-pointer hover:text-primary'>Contact</p>
            </div>

            <button className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
              <FaPlus />
              New Ticket
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navber