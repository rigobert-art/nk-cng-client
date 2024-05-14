import React, { useState } from 'react';
import { MdPendingActions } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import Header from './Header';

const Home = () => {
  const [currentSkill, setCurrentSkill] = useState({ title: 'progress', percent: 10 });

  return (
    <>
      <Header />
      <main className='max-w-screen-xl mx-auto -mt-10 overflow-auto px-6 sm:px-8 md:px-12 font-serif lg:px-24'>
        <div className='my-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-blue-100 p-4 rounded-md shadow-lg flex flex-col items-center'>
              <p className='text-medium font-bold mb-8'>Total balance</p>
              <p className='text-3xl font-bold'>TSH 0</p>
            </div>
            <div className='bg-blue-100 p-4 rounded-md shadow-lg flex flex-col items-center'>
              <p className='text-medium font-bold mb-8'>Total paid</p>
              <p className='text-3xl font-bold'>TSH 0</p>
            </div>
            <div className='bg-blue-100 p-4 rounded-md shadow-lg flex flex-col items-center'>
              <p className='text-medium font-bold mb-2'>Total Cars</p>
              <p className='text-3xl font-bold'>1 Refill</p>
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <div className='flex items-center gap-x-2 text-center'>
            <h1 className='text-lg font-semibold'>Waiting Now</h1>
            <p className='bg-yellow-400 px-2 py-[1px] rounded-full text-sm'>1</p>
          </div>
          <div className='flex flex-col md:flex-row gap-6 mt-6'>
            <div className='border border-gray-300 rounded-md shadow-lg px-4 py-6 w-full md:w-1/2 h-42'>
              <div className='flex mb-8'>
                <div className='bg-red-200 rounded-full p-4 h-20 w-20 '>
                  <MdPendingActions size={56} />
                </div>
                <div className='ml-4 mx-auto'>
                  <h1 className='text-xl text-red-500 mb-2'>Pending Request ...</h1>
                  <p className='text-sm'>Please make sure the form is filled to step 3</p>
                </div>
              </div>
              <div className='flex items-center gap-x-2'>
                <div className='flex-grow h-2 bg-gray-300 rounded-md'>
                  <div
                    style={{ width: '100%' }}
                    className={`h-full ${80 < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
                  </div>
                </div>
                <p className='text-green-600 font-extrabold'>Complete</p>
              </div>
            </div>
            
            <div className='flex border border-gray-300 items-center rounded-md shadow-lg px-4 py-6 w-full md:w-1/2 h-42'>
              <div className='ml-4 mx-auto'>
                <h1 className='text-xl text-green-600 mb-2'>Payment Progress</h1>
                <p className='mt-2 text-md'>TSH 320,000</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <svg className="transform -rotate-90 w-40 h-40">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      stroke="currentColor"
                      strokeWidth="10%"
                      fill="transparent"
                      className="text-green-700"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      stroke="currentColor"
                      strokeWidth="10%"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 45}
                      strokeDashoffset={(2 * Math.PI * 45) * (1 - currentSkill.percent / 100)}
                      className="text-green-500"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xl lg:text-3xl">{`${currentSkill.percent}%`}</span>
                </div>
              </div>
            </div>
          </div>
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

export default Home;

