import React, { useContext, useState } from 'react';
import { useAuth } from '../../context/AuthProvider';

import { MdAdd, MdDashboard, MdHelpOutline, MdPayment } from "react-icons/md";
import { FaSquareWhatsapp, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";


export const Profile = () => {
  const { login, logout } = useAuth();


  return (
    <>
      <Header />

      <main className='max-w-screen-xl mx-auto mt-8 px-6 sm:px-8 md:px-12 lg:px-24'>
        <div className=''>
          <div className='flex space-x-2 w-[900px] align-middle'>

            <MdAdd className='border-2 w-12 h-12 rounded-lg border-black bg-gray-400' />

            <div className='border-2 border-black bg-gray-100 w-72 rounded-md'></div>
            <div className='border-2 border-black bg-gray-100 w-72 rounded-md'></div>
            <div className='border-2 border-black bg-gray-100 w-72 rounded-md'></div>
            <div className='border-2 border-black bg-gray-100 w-72 rounded-md'></div>
            <div className='border-2 border-black bg-gray-100 w-72 rounded-md'></div>
          </div>

          <div className='mt-8 text-wrap mx-auto '>
            <h1 className='text-lg font-bold mb-2'>Invite a Friend</h1>
            <p className='text-xs'>Invite other users to earn your referral discounts upto 20%</p>
            <div className='mt-4 mb-4'>
              <input type='text' placeholder='https://example.to/uIsZL3QpbZ1' className='text-xs border-2 rounded-md px-4 py-2 w-full h-14' />
              <button type='button' className='bg-gray-200 px-4 py-2 rounded-md -ml-24 h-10'>
                <p className='font-bold text-xs'>Copy Link</p></button>
            </div>
            <p className='text-xs font-semibold'>Invite other users to earn your referral discounts upto 20%</p>

            <div className='mt-4 flex justify-between'>
              <p className='text-lg font-bold'>Invite via</p>
              <div className='flex  gap-x-2'>
                <FaSquareWhatsapp size={32} />
                <FaSquareFacebook size={32} />
                <FaSquareXTwitter size={32} />
              </div>

            </div>

          </div>

        </div>

      </main>
    </>
  );
};


const Header = () => {

  return (
    <section className='flex w-full justify-between lg:px-12 items-center h-[220px] bg-green-700 text-white font-serif'>
      <div className=' lg:px-8 text-bold px-6'>
        <div className='flex text-xs items-center gap-x-1'>
          <p className=''>@enocrunk </p>
          <p className='-mt-3 font-bold text-lg'>.</p>
          <p className='text-gray-300 font-semibold'>Registered Dec 2023</p>
        </div>
        <p className='font-bold text-lg mt-2 mb-6'>VINCENT RICHARD</p>

        <div className='flex gap-x-2 text-semibold'>
          <div className='flex gap-x-1 items-center text-xs'>
            <p className='text-gray-300'>0</p>
            <p className='text-gray-800 font-bold'>Balance</p>
          </div>

          <div className='flex gap-x-1 items-center text-semibold text-xs'>
            <p className='text-gray-300 '>0</p>
            <p className='text-gray-800 font-bold'>Paid</p>
          </div>

          <div className='flex gap-x-1 items-center text-xs'>
            <p className='text-gray-300 '>1</p>
            <p className='text-gray-800 font-bold'>Refills</p>
          </div>

        </div>

        <div className='border-2 w-32 rounded-md px-4 py-2 flex item-center object-fit gap-x-2 mt-4'>
          <MdAdd />
          <p className='font-bold text-sm'>Add Bio</p>
        </div>

        <div aria-hidden="true"
          className="absolute top-0 inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

      </div>
      <div>
        <div className='flex items-center px-4 gap-x-4 mt-8'>
          {/* Navigation Icons */}
          <div className=' hidden lg:flex gap-x-1 font-bold items-center text-base'>
            <MdDashboard size={24} />
            <p>Dashboard</p>
          </div>
          <div className='hidden lg:flex gap-x-1 font-bold items-center text-base'>
            <MdPayment size={24} />
            <p>Payment</p>
          </div>
          <div className='hidden lg:flex gap-x-1 font-bold items-center text-base'>
            <MdHelpOutline size={24} />
            <p>Support</p>
          </div>

          {/* Profile Image */}
          <div className='border-2 p-1 rounded-full mb-12 border-gray-300 '>
            <img src={require("../../assets/profile.jpg")} alt="profile" className='rounded-full object-center bg-yellow-300 w-18 h-18 ' />
          </div>
        </div>
      </div>
    </section>
  );
};