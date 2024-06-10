import React, { useState } from 'react';
import { MdPendingActions } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import Header from './Header';
import { useAuth } from '../../context/AuthProvider';
import { useAppContext } from '../../context/AppProvider';

const HomePage = () => {
  const [currentSkill, setCurrentSkill] = useState({ title: 'progress', percent: 10 });
  const [paymentHistory, setPaymentHistory] = useState([]);
  const { user } = useAuth();
  const { isLoading, setIsLoading, isError, setIsError  } = useAppContext();

  // Calculate the percentage of paid months
  const paidMonths = 0; // For example, assuming 3 months are paid
  const totalMonths = 1200000; // Total number of months
  const progressBarWidth = (paidMonths / totalMonths) * 100;

  return (
    <>
      <Header />
      <main className='max-w-screen-xl mx-auto -mt-10 overflow-auto px-6 sm:px-8 md:px-12 font-serif lg:px-24'>
        <div className='mt-12'>
          {/* Progress Bar */}
          <h1 className='text-lg font-semibold'>Loan Progress</h1>
          <div className="flex flex-col border-[1px] border-gray-200 rounded-lg p-4 mt-4">
            <button className='justify-end flex items-center border-[1px] px-4 py-2 text-green-500 w-fit rounded-lg mb-4 text-ellipsis text-xs'>
              <GiPayMoney className='inline-block mr-2' /> NK CNG AUTOMOTIVE LOAN
            </button>
            <div className='w-full mx-auto mt-2 mb-6'>
              <div className='justify-between items-center flex text-gray-300 text-[10px] font-medium mb-2'>
                {[1, 2, 3, 4, 5, 6, 7].map(month => <span key={month}>{month}</span>)}
                
              </div>
              <div className=" bg-gray-200 rounded-full h-4">
                <div className="bg-green-500 rounded-full h-4" style={{ width: `${progressBarWidth}%` }}></div>
              </div>
              <div className="mt-2 text-sm font-medium flex items-center justify-between"><p className='text-green-600'>
               TZS {paidMonths} Paid</p> <p className='text-gray-600'>TZS {totalMonths} Left</p></div>
            </div>
            <div className='flex items-center justify-between mb-4'>
              <div className='text-center'>
                <p className='text-[10px] font-medium text-gray-400'>INTEREST RATE</p>
                <h2 className='md:text-3xl text-sm text-green-600'> TSZ 0</h2>
              </div>
              <div className='border-r-2 border-gray-400'></div>

              <div className='text-center'>
                <p className='text-[10px] font-medium text-gray-400'>LOAN DURATION</p>
                <h2 className='md:text-3xl text-sm text-green-600'> 7 MONTHS</h2>
              </div>
              <div className='border-r-[12px] border-gray-400'></div>

              <div className='text-center'>
                <p className='text-[10px] font-medium text-gray-400'>LOAN AMOUNT</p>
                <h2 className='md:text-3xl text-green-600'> TSZ 1,240,000</h2>
              </div>
           

            </div>
            
          </div>

          {/* Payment History */}
          <div>
            <h1 className='text-lg font-semibold'>Payment History</h1>
            <div className='mt-4'>
              {isLoading ? (
                <p>Loading...</p>
              ) : paymentHistory.length > 0 ? (
                paymentHistory.map((payment, index) => (
                  <div key={index} className='flex items-center justify-between bg-gray-100 p-4 rounded-md mb-2'>
                    <div className='flex items-center'>
                      <div className='bg-green-100 rounded-full p-2'>
                        <GiPayMoney color='green' size={28} />
                      </div>
                      <div className='ml-4'>
                        <p className='font-bold text-green-700'>stutus</p>
                        <p className='text-sm text-gray-600'>date</p>
                      </div>
                    </div>
                    <div className='font-bold text-green-700'>amount</div>
                  </div>
                ))
              ) : (
                <div>
                  <p className='text-center justify-center text-gray-500'>No payment history available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage;
