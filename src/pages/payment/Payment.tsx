import React, { useState } from 'react';
import { MdEdit } from "react-icons/md";
import { radios } from '../../constants/dummy';
import Header from './Header';

export const Payment: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [ amount, setAmount ] = useState<Number>(1)

  return (
    <>
      <Header />

      <main className="container flex flex-col mx-auto space-y-12 mb-12 overflow-auto font-serif">
        <div className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 mb-12">
          <ul className="flex justify-center item-center gap-x-4 mb-12">
            {radios.map((item, idx) => (
              <li key={idx}>
                <label htmlFor={item.name} className="block relative">
                  <input id={item.name} type="radio" defaultChecked={idx === 1} name="payment" className="sr-only peer" />
                  <div className="w-full flex gap-x-8 items-center px-4 lg:px-8 py-4 cursor-pointer rounded-lg border bg-white shadow-sm ring-red-600 peer-checked:ring-2 duration-200">
                    <div className="flex-none">{item.icon}</div>
                    <div>
                      <h3 className="leading-none text-gray-800 font-medium pr-3 text-medium hidden">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute top-5 right-4 flex-none flex items-center justify-center w-4 h-4 rounded-full border peer-checked:bg-indigo-600 text-white peer-checked:text-white duration-200">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 12 10">
                      <polyline fill="none" strokeWidth="2px" stroke="currentColor" strokeDasharray="16px" points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </div>
                </label>
              </li>
            ))}
          </ul>

          <div className="space-y-2 col-span-full lg:col-span-1 mb-2">
            <h1 className='justify-start mb-2 font-bold text-lg '>
              Add your personal Details
            </h1>
            <div className='flex justify-between items-center '>
              <p className='text-2xl '>TSH 2000</p>
              <button type='button' onClick={() => setShowModal(true)}>
                <p className='bg-gray-200 border-2 px-4 py-2 rounded-lg flex gap-x-1 items-center'><MdEdit />Edit</p>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="name" className="text-sm">Card Name</label>
              <input id="name" type="text" placeholder="" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-green-600 dark:border-gray-300" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="number" className="text-sm">Card Number</label>
              <input id="lastName" type="text" placeholder="" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-green-600 dark:border-gray-300" />
            </div>
            <div className="lg:col-span-full col-span-3">
              <label htmlFor="city" className="text-sm">Expire Date</label>
              <input id="city" type="text" placeholder="MM / YY" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-green-600 dark:border-gray-300" />
            </div>
            <div className="lg:col-span-full col-span-3">
              <label htmlFor="state" className="text-sm">Security Code</label>
              <input id="state" type="text" placeholder="" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-green-600 dark:border-gray-300" />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
              <input id="zip" type="text" placeholder="" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-green-600 dark:border-gray-300" />
            </div>
          </div>
          <button type="button" className="relative px-8 py-3 font-semibold bg-green-800 text-gray-200 rounded dark:bg-gray-800 dark:text-gray-100">Pay</button>
        </div>

        {showModal && (
          <section>
            <div className="w-32 py-2 ml-2 shadow-sm rounded-md bg-indigo-600 text-white mt-4 flex items-center justify-center">
              Click me
            </div>
            <div>
              <div className="fixed inset-0 w-full h-full bg-black opacity-40" />
              <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
                <div className="bg-white rounded-md shadow-lg px-4 py-6">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium text-gray-800 ">
                      Update amount
                    </p>
                    <div onClick={() => {
                      setShowModal(false)
                    }} className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative mt-2 max-w-xs text-gray-500">
                    <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                      &#x24;
                    </span>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center">
                      <select className="text-sm bg-transparent outline-none px-1 rounded-lg h-full">
                        <option>TSH</option>
                        <option>USD</option>
                        <option>EUR</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => setShowModal(false)} className="text-sm mt-3 py-2.5 px-8 flex-1 text-white bg-green-700 rounded-md outline-none ring-offset-2 ring-green-600 focus:ring-2">
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};


