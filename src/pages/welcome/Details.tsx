import React, { useState } from 'react'
import { plans } from '../../constants/dummy';
import { Link } from 'react-router-dom';

import { FiCheck, FiUploadCloud } from 'react-icons/fi';

const Details = () => {
    const [active, setActive] = useState<'personal' | 'other' | 'require'>('require');
    const [loading, setLoading] = useState(false);

    return (
        <section className='w-full items-center justify-center flex flex-col font-serif overflow-auto'>
            <Link to='/' className='absolute right-8 top-8'>
                <p>X</p>
            </Link>
            {loading ? (
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                </div>
            ) : (
                <div className='flex gap-x-2 lg:gap-x-12 items-center mb-12 border-b-2 mt-24 px-4'>
                        <div className={`flex items-center mb-2 space-x-2 ${active === 'require' ? 'font-bold mb-2' : 'text-gray-400'}`} onClick={() => setActive('require')}>
                        <div className={`border-4 rounded-full px-2 ${active === 'require' ? 'border-gray-800' : 'border-gray-400'}`}>
                            <p className='font-semibold'>3</p>
                        </div>
                        <div className='text-sm font-semibold'>Loans Details</div>
                    </div>

                    <div className={`flex items-center mb-2 space-x-2 ${active === 'personal' ? 'font-bold mb-2' : 'text-gray-400'}`} onClick={() => setActive('personal')}>
                        <div className={`border-4 rounded-full px-2 ${active === 'personal' ? 'border-gray-800' : 'border-gray-400'}`}>
                            <p className='font-semibold'>1</p>
                        </div>
                        <div className='text-sm font-semibold'>Personal Details</div>
                    </div>

                    <div className={`flex items-center mb-2 space-x-2 ${active === 'other' ? 'font-bold mb-2' : 'text-gray-400'}`} onClick={() => setActive('other')}>
                        <div className={`border-4 rounded-full px-2 ${active === 'other' ? 'border-gray-800' : 'border-gray-400'}`}>
                            <p className='font-semibold'>2</p>
                        </div>
                        <div className='text-sm font-semibold'>Other Details</div>
                    </div>

        
                </div>
            )}
            {active === 'personal' && (
                <>
                    {loading ? (
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                        </div>
                    ) : (
                        <form action="" className="container flex flex-col mx-auto space-y-12 mb-12 px-4">
                            <div className="grid grid-cols-4 gap-6  rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-2">
                                    <h1 className='mb-2 font-bold text-lg '>
                                        Add your personal Details
                                    </h1>
                                    <p className='break-words text-medium'>
                                        You can update your personal details after account creation</p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-6">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="firstName" className="text-sm">First name</label>
                                        <input id="firstName" type="text" placeholder="First name" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="lastName" className="text-sm">Last name</label>
                                        <input id="lastName" type="text" placeholder="Last name" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="email" className="text-sm">Email</label>
                                        <input id="email" type="email" placeholder="Email" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="email" className="text-sm">Phone</label>
                                            <input id="phone" type="phone" placeholder="+255712345678" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="text-sm">Address</label>
                                        <input id="address" type="text" placeholder="" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-2">
                                        <label htmlFor="city" className="text-sm">City</label>
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-2">
                                        <label htmlFor="state" className="text-sm">State / Province</label>
                                        <input id="state" type="text" placeholder="" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-2">
                                        <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                        <input id="zip" type="text" placeholder="" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                        <div className="col-span-full">
                                            <label htmlFor="bio" className="text-sm">Photo</label>
                                            <div className="flex items-center space-x-2">
                                                <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-300" />
                                                <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
                                            </div>
                                        </div>
                                        <div className="col-span-full mt-8">
                                            <button type="button" onClick={() => setActive('other')} className="relative w-full bg-green-800 px-4 py-2 rounded-lg text-white font-bold">Next</button>
                                        </div>
                                </div>


                            </div>

                            
                        </form>
                    )}
                </>


            )}
            
            {active === 'other' && (
                <form className='container flex flex-col mx-auto space-y-12 px-4 mb-12'>
                    <div className="grid grid-cols-4 gap-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-2">
                            <h1 className='mb-2 font-bold text-lg '>
                                Upload your attachment here
                            </h1>
                            <p className='break-words text-medium'>
                               You can upload relevant documents here
                            </p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-6">
                            
                            <div className="col-span-full h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
                                <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
                                   
                                    <FiUploadCloud stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-10 h-10 mx-auto" />
                                    <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your photo</span> or drag and drop your file here</p>
                                </label>
                                <input id="file" type="file" className="hidden" />
                            </div>
                            <div className="col-span-full h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
                                <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">

                                    <FiUploadCloud stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-10 h-10 mx-auto" />
                                    <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your  file</span> or drag and drop your file here</p>
                                </label>
                                <input id="file" type="file" className="hidden" />
                            </div>
                            <div className="col-span-full h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
                                <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">

                                    <FiUploadCloud stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-10 h-10 mx-auto" />
                                    <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your  file</span> or drag and drop your file here</p>
                                </label>
                                <input id="file" type="file" className="hidden" />
                            </div>

                        </div>


                    </div>
                    <button type="button" onClick={() => setActive('other')} className="relative w-full bg-green-800 px-4 py-2 rounded-lg text-white font-bold">Next</button>

                </form>
            )}


            {active === 'require' && (
                <section className='py-14'>
                    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                        <div className='relative max-w-xl mx-auto sm:text-center'>
                            <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                                Types Available
                            </h3>
                            <div className='mt-3 max-w-xl'>
                                <p>
                                    Types of loans offered by us.
                                </p>
                            </div>
                        </div>
                        <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                            {
                                plans.map((item, idx) => (
                                    <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                                        <div>
                                            <span className='text-green-600 font-medium'>
                                                {item.name}
                                            </span>
                                            <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                                TZS {item.price}
                                            </div>
                                        </div>
                                        <ul className='py-8 space-y-3'>
                                            {
                                                item.features.map((featureItem, idx) => (
                                                    <li key={idx} className='flex items-center gap-5'>
                                                        <FiCheck className='text-green-600 h-5 w-5' />
                                                        {featureItem}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="flex-1 flex items-end">
                                            <button
                                            onClick={() => setActive('personal')}
                                            className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-green-600 hover:bg-green-500 active:bg-green-700'>
                                                Get Started
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            )}
            <div>

            </div>

        </section>
    )
}

export default Details