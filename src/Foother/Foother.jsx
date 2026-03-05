import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Foother = () => {
  return (
    <div>
      <footer className='bg-black text-white pt-8 md:pt-14 pb-7 px-3'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8'>
          <div>
            <h1 className='text-2xl font-bold text-blue-500 mb-3'>
              CS — Ticket System
            </h1>
            <p className='text-xs text-gray-400 leading-6'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
          </div>
          <div>
            <h2 className='font-semibold mb-3'>Company</h2>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li className='hover:text-white cursor-pointer'>About Us</li>
              <li className='hover:text-white cursor-pointer'>Our Mission</li>
              <li className='hover:text-white cursor-pointer'>Contact Saled</li>
            </ul>
          </div>

          <div>
            <h2 className='font-semibold mb-3'>Services</h2>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li className='hover:text-white cursor-pointer'>
                Products & Services
              </li>
              <li className='hover:text-white cursor-pointer'>
                Customer Stories
              </li>
              <li className='hover:text-white cursor-pointer'>Download Apps</li>
            </ul>
          </div>

          <div>
            <h2 className='font-semibold mb-3'>Information</h2>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li className='hover:text-white cursor-pointer'>
                Privacy Policy
              </li>
              <li className='hover:text-white cursor-pointer'>
                Terms & Conditions
              </li>
              <li className='hover:text-white cursor-pointer'>Join Us</li>
            </ul>
          </div>
          <div>
            <h2 className='font-semibold mb-3'>Social Links</h2>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <FaXTwitter
                  className='bg-white rounded-full p-1'
                  size={22}
                  color='black'
                />
                <p className='text-xs'>@CS — Ticket System</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaFacebookF
                  className='bg-white rounded-full p-1'
                  size={22}
                  color='black'
                />
                <p className='text-xs'>@CS — Ticket System</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaLinkedinIn
                  className='bg-white rounded-full p-1'
                  size={22}
                  color='black'
                />
                <p className='text-xs'>@CS — Ticket System</p>
              </div>
              <div className='flex items-center gap-2'>
                <MdEmail
                  className='bg-white rounded-full p-1'
                  size={22}
                  color='black'
                />
                <p className='text-xs'>support@cst.com</p>
              </div>
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
