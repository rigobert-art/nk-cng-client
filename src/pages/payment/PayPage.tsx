import React, { useState } from 'react';
import { MdEdit } from "react-icons/md";
import { radios } from '../../constants/dummy';
import Header from './Header';
import { useAuth } from '../../context/AuthProvider';
import { useAppContext } from '../../context/AppProvider';
import axios from "axios"

const PayPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(500);
  const { user } = useAuth();

  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [expire, setExpire] = useState<string>("");
  const [security, setSecurity] = useState<string>("");

  const { isLoading, setIsLoading, isError, setIsError } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const database = { userId: user?.id, name, number, expire, security, amount };
    setIsLoading(false);
    setIsError(false)
    // payLoan(database);
    // sendSMS("+255755481857", `UNALIPA KIWANGO CHA TZS ${amount}` )
    setShowModal(false);

  }

  const handleAmountChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    // sendSMS("+255755481857", `UNALIPA KIWANGO CHA TZS ${amount}`)

    try{
        const response = await axios.post("http://127.0.0.1:4000/api/v1/payment/make", 
        {
          name, number, expire, security
        })
        
      setIsLoading(true)
    }catch{

    }
  }

  const isFormValid = name && number && expire && security

  return (
    <>
      <Header />
      <main className="container flex flex-col mx-auto space-y-12 mb-12 overflow-auto font-serif">
        <div className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 mb-12">
          <ul className="flex justify-center items-center gap-x-4 mb-12">
            {radios.map((item, idx) => (
              <li key={idx}>
                <label htmlFor={item.name} className="block relative">
                  <input
                    id={item.name}
                    type="radio"
                    defaultChecked={idx === 1}
                    name="payment"
                    className="sr-only peer"
                  />
                  <div
                    className="w-full flex gap-x-8 items-center px-4 lg:px-8 py-4 cursor-pointer rounded-lg border bg-white shadow-sm ring-red-600 peer-checked:ring-2 duration-200"
                  >
                    <div className="flex-none">{item.icon}</div>
                    <div>
                      <h3 className="leading-none text-gray-800 font-medium pr-3 text-medium hidden">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                  <div
                    className="absolute top-5 right-4 flex-none flex items-center justify-center w-4 h-4 rounded-full border peer-checked:bg-indigo-600 text-white peer-checked:text-white duration-200"
                  >
                    <svg className="w-2.5 h-2.5" viewBox="0 0 12 10">
                      <polyline
                        fill="none"
                        strokeWidth="2px"
                        stroke="currentColor"
                        strokeDasharray="16px"
                        points="1.5 6 4.5 9 10.5 1"
                      ></polyline>
                    </svg>
                  </div>
                </label>
              </li>
            ))}
          </ul>
          <div className="space-y-2 col-span-full lg:col-span-1 mb-2">
            <h1 className='justify-start mb-2 font-bold text-lg '>
              Add your payment deetails
            </h1>
            <div className='flex justify-between items-center '>
              <p className='text-2xl '>TZS {amount}</p>
              <button type='button' onClick={() => setShowModal(true)}>
                <p className='bg-gray-200 border-2 px-4 py-2 rounded-lg flex gap-x-1 items-center'><MdEdit />Edit</p>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-full lg:col-span-3">
            <div>
              <label htmlFor="name" className="text-sm">
                Card Holder Name
                <span className='text-red-500'>*</span>
              </label>

              <input
                id="name"
                type="text"
                placeholder=""
                required
                autoCapitalize='true'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-green-600 dark:border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="number" className="text-sm">
                Card Number
                <span className='text-red-500'>*</span>
              </label>
              <input
                id="number"
                type="text"
                placeholder=""
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-green-600 dark:border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="expireDate" className="text-sm">
                Expire Date
                <span className='text-red-500'>*</span>
              </label>
              <input
                id="expireDate"
                type="text"
                placeholder="MM / YY"
                autoComplete="cc-number"
                value={expire}
                onChange={(e) => setExpire(e.target.value)}
                className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-green-600 dark:border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="securityCode" className="text-sm">
                Security Code
              </label>
              <input
                id="securityCode"
                type="text"
                value={security}
                autoComplete="cc-csc"
                onChange={(e) => setSecurity(e.target.value)}
                placeholder=""
                className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-green-600 dark:border-gray-300"
              />
            </div>

          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`relative px-8 py-3 font-semibold rounded ${isFormValid ? 'bg-green-800 text-gray-200' : 'bg-gray-400 text-gray-500 cursor-not-allowed'}`}
          >
            Pay
          </button>
        </div>
        {
          showModal && (
            <section>
              <div className="w-32 py-2 ml-2 shadow-sm rounded-md bg-green-600 text-white mt-4 flex items-center justify-center">
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
                      <div onClick={() => setShowModal(false)} className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.

293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-700">
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
      </main>
    </>
  );
};

export default PayPage;