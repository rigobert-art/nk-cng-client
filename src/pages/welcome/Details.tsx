import React, { useState } from 'react'
import { plans } from '../../constants/dummy';
import { Link } from 'react-router-dom';

const Details = () => {
    const [active, setActive] = useState<'personal' | 'vehicle' | 'payment'>('personal');
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
                    <div className={`flex items-center mb-2 space-x-2 ${active === 'personal' ? 'font-bold border-b-4 border-red-200 mb-2' : 'text-gray-400'}`} onClick={() => setActive('personal')}>
                        <div className={`border-4 rounded-full px-2 ${active === 'personal' ? 'border-gray-800' : 'border-gray-400'}`}>
                            <p className='font-semibold'>1</p>
                        </div>
                        <div className='text-sm font-semibold'>Personal Details</div>
                    </div>

                    <div className={`flex items-center mb-2 space-x-2 ${active === 'vehicle' ? 'font-bold border-b-4 border-red-200 mb-2' : 'text-gray-400'}`} onClick={() => setActive('vehicle')}>
                        <div className={`border-4 rounded-full px-2 ${active === 'vehicle' ? 'border-gray-800' : 'border-gray-400'}`}>
                            <p className='font-semibold'>2</p>
                        </div>
                        <div className='text-sm font-semibold'>Vehicle Details</div>
                    </div>

                    <div className={`flex items-center mb-2 space-x-2 ${active === 'payment' ? 'font-bold border-b-4 border-red-200 mb-2' : 'text-gray-400'}`} onClick={() => setActive('payment')}>
                        <div className={`border-4 rounded-full px-2 ${active === 'payment' ? 'border-gray-800' : 'border-gray-400'}`}>
                            <p className='font-semibold'>3</p>
                        </div>
                        <div className='text-sm font-semibold'>Payment Details</div>
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
                                </div>


                            </div>

                            <button type="button" onClick={() => setActive('vehicle')} className="relative w-full bg-red-800 px-4 py-2 rounded-lg text-white font-bold">Next</button>
                        </form>
                    )}
                </>


            )}
            {active === 'vehicle' && (
                <form className='container flex flex-col mx-auto space-y-12 px-4 mb-12'>
                    <div className="grid grid-cols-4 gap-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-2">
                            <h1 className='mb-2 font-bold text-lg '>
                                Add your personal Details
                            </h1>
                            <p className='break-words text-medium'>
                                You can update your personal details after account creation</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-6">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstName" className="text-sm">Make</label>
                                <input id="firstName" type="text" placeholder="Example: Nissan" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastName" className="text-sm">Modal</label>
                                <input id="lastName" type="text" placeholder="Example: NP300" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Year</label>
                                <input id="email" type="email" placeholder="Example: 1998" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Number Plate</label>
                                <input id="address" type="text" placeholder="Example: T 432 DCD" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">Vin</label>
                                <input id="city" type="text" placeholder="" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">Color</label>
                                <input id="state" type="text" placeholder="" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Engine Capacity</label>
                                <input id="zip" type="text" placeholder="Example: 2000 cc" className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
                                <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
                                    <svg className="w-10 h-10 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your  file</span> or drag and drop your file here</p>
                                </label>
                                <input id="file" type="file" className="hidden" />
                            </div>

                        </div>


                    </div>
                    <button type="button" onClick={() => setActive('vehicle')} className="relative w-full bg-red-800 px-4 py-2 rounded-lg text-white font-bold">Next</button>

                </form>
            )}
            {active === 'payment' && (
                <section className='py-14'>
                    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                        <div className='relative max-w-xl mx-auto sm:text-center'>
                            <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                                Pricing for all sizes
                            </h3>
                            <div className='mt-3 max-w-xl'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                                </p>
                            </div>
                        </div>
                        <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                            {
                                plans.map((item, idx) => (
                                    <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                                        <div>
                                            <span className='text-indigo-600 font-medium'>
                                                {item.name}
                                            </span>
                                            <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                                Tsh {item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                            </div>
                                        </div>
                                        <ul className='py-8 space-y-3'>
                                            {
                                                item.features.map((featureItem, idx) => (
                                                    <li key={idx} className='flex items-center gap-5'>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='h-5 w-5 text-indigo-600'
                                                            viewBox='0 0 20 20'
                                                            fill='currentColor'>
                                                            <path
                                                                fill-rule='evenodd'
                                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                                clip-rule='evenodd'></path>
                                                        </svg>
                                                        {featureItem}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="flex-1 flex items-end">
                                            <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
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