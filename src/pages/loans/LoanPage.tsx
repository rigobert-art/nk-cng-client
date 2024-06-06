import React from 'react'

const LoanPage = () => {
  return (
      <main className='max-w-screen-xl mx-auto -mt-10 overflow-auto px-6 sm:px-8 md:px-12 font-serif lg:px-24'>
          <div className='my-6 rounded-md shadow-md bg-gray-100 mx-auto p-12'>
              <div className='flex flex-1 justify-between items-center mb-4'>
                  <div>
                      <p className='font-base text-sm text-gray-400'>Amount</p>
                      <p className='text-lg font-bold'>TZS 104,992,000</p>
                  </div>
                  <div className=''>
                      <p className='font-base text-sm text-gray-400'>Duration</p>
                      <p className='text-lg font-bold'>7 months</p>
                  </div>
                  <div></div>
              </div>

              <div className='flex flex-1 justify-between items-center mb-4'>
                  <div>
                      <p className='font-base text-sm text-gray-400'>Monthly Pament</p>
                      <p className='text-lg font-bold'>TZS 104,992,000</p>
                  </div>
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
                  <div>
                      <p className='font-base text-sm text-gray-400'>Payment day</p>
                      <p className='text-lg font-bold'>24/10/2024</p>
                  </div>
                  <div></div>
              </div>
              </div>
              </main>
  )
}

export default LoanPage