import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ViewLoan = () => {
    // Generate additional dummy loan history data
    const progress = 60; // Example progress percentage
    const loanHistory = [
        { date: '12/04/2024', amount: '104,992,000', status: 'Approved' },
        { date: '15/05/2024', amount: '99,000,000', status: 'Rejected' },
        { date: '20/06/2024', amount: '110,000,000', status: 'Approved' },
    ];

    return (
        <>
            <header className='mx-auto bg-green-700 text-white overflow-hidden h-[150px] md:h-[230px] px-6 sm:px-8 md:px-12 font-serif lg:px-2'>
                <div className='text-center pt-10 md:pt-20 gap-y-4'>
                    <p className='text-xs md:text-ellipsis md:text-sm font-bold text-gray-600'>NK CNG Automotive Loan</p>
                    <p className='text-4xl font-bold'>TZ 40,029.3</p>
                </div>
            </header>
            <main className='max-w-screen-xl mx-auto -mt-10 overflow-auto px-6 sm:px-8 md:px-12 font-serif lg:px-24'>
               
                    <div className='my-6 rounded-md shadow-md bg-gray-100 mx-auto p-12'>
                        <div className='flex flex-1 justify-between items-center mb-4'>
                            <div>
                                <p className='font-base text-sm text-gray-400'>Amount</p>
                                <p className='text-lg font-bold'>TZS 104,992,000</p>
                            </div>
                            <div className='border-[1px] border-gray-300 h-10'></div>
                            <div className=''>
                                <p className='font-base text-sm text-gray-400'>Duration</p>
                                <p className='text-lg font-bold'>7 months</p>
                            </div>
                            <div></div>
                        </div>

                        <div className='flex flex-1 justify-between items-center mb-4'>
                            <div>
                                <p className='font-base text-sm text-gray-400'>Monthly Payment</p>
                                <p className='text-lg font-bold'>TZS 104,992,000</p>
                            </div>
                            <div className='border-[1px] border-gray-300 h-10'></div>
                            <div>
                                <p className='font-base text-sm text-gray-400'>Payment day</p>
                                <p className='text-lg font-bold'>24/10/2024</p>
                            </div>
                            <div></div>
                        </div>

                        <div className='flex flex-1 justify-between items-center mb-2'>
                            <div>
                                <p className='font-base text-sm text-gray-400'>Balance</p>
                                <p className='text-lg font-bold'>TZS 104,992,000</p>
                            </div>
                            <div className='border-[1px] border-gray-300 h-10'></div>
                            <div>
                                <p className='font-base text-sm text-gray-400'>Payment day</p>
                                <p className='text-lg font-bold'>24/10/2024</p>
                            </div>
                            <div>

                            </div>
                        </div>
                   
                </div>

                {/* Progress bar */}
                <div className='mt-8 '>
                    <p className='text-sm md:text-base text-gray-400 mb-8'>Loan Status</p>
                    <div className='w-full bg-gray-300 h-4 rounded-md overflow-hidden'>
                        <div className='bg-green-500 h-full' style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                

                {/* Loan History */}
                <div className='mt-12'>
                    <p className='text-sm md:text-base text-gray-400 mb-4'>Loan History</p>
                    {loanHistory.map((item, index) => (
                        <div key={index} className='flex items-center px-4 py-4 rounded-md shadow-md border-[1px] border-gray-100 mb-4'>
                            {/* Loan status icon */}
                            <FiCheckCircle className='text-green-500 text-2xl mr-4' />
                            <div>
                                <p className='font-base text-base text-gray-400'>{item.date}</p>
                                <p className='text-sm font-bold'>{item.status}</p>
                            </div>
                            <div className='flex-grow'></div>
                            <p className='text-lg font-bold'>TZS {item.amount}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default ViewLoan;
