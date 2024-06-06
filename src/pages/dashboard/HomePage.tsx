import React, { useState } from 'react';
import { MdPendingActions } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import Header from './Header';

const HomePage = () => {
  const [currentSkill, setCurrentSkill] = useState({ title: 'progress', percent: 10 });

  return (
    <>
      <Header />
      <main className='max-w-screen-xl mx-auto -mt-10 overflow-auto px-6 sm:px-8 md:px-12 font-serif lg:px-24'>
     
        <div className='mt-12'>
          </div>

        <div className='mt-12'>
          <h1 className='text-lg font-semibold'>Payment History</h1>
          <div className='mt-4'>
            <div className='flex items-center justify-between bg-gray-100 p-4 rounded-md mb-2'>
              <div className='flex items-center'>
                <div className='bg-green-100 rounded-full p-2'>
                  <GiPayMoney color='green' size={28} />
                </div>
                <div className='ml-4'>
                  <p className='font-bold text-green-700'>Paid</p>
                  <p className='text-sm text-gray-600'>Today . 12:03 AM</p>
                </div>
              </div>
              <div className='font-bold text-green-700'>TSH 230,000</div>
            </div>
            <div className='flex items-center justify-between bg-gray-100 p-4 rounded-md mb-2'>
              <div className='flex items-center'>
                <div className='bg-green-100 rounded-full p-2'>
                  <GiPayMoney color='green' size={28} />
                </div>
                <div className='ml-4'>
                  <p className='font-bold text-green-700'>Paid</p>
                  <p className='text-sm text-gray-600'>Today . 12:03 AM</p>
                </div>
              </div>
              <div className='font-bold text-green-700'>TSH 230,000</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage;

