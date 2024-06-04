import React from 'react';
import axios from 'axios';
import { FiCheck } from 'react-icons/fi';
import { plans } from '../constants/dummy';

import { useAppContext } from '../../context/AppProvider';

const LoanSelection: React.FC = () => {
    const { isLoading, setIsLoading } = useAppContext();

    return (
        <section className='py-8'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>Types Available</h3>
                    <div className='mt-3 max-w-xl'><p>Types of loans offered by us.</p></div>
                </div>
                <div className='mt-8 space-y-4 justify-center gap-6 sm:grid sm:grid-cols-1 sm:space-y-0 lg:grid-cols-2'>
                    {plans.map((item, idx) => (
                        <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-lg border-2'>
                            <div>
                                <span className='text-green-600 font-medium'>{item.name}</span>
                                <div className='mt-4 text-gray-800 text-2xl font-semibold'>TZS {item.price}</div>
                            </div>
                            <ul className='py-8 space-y-3'>
                                {item.features.map((featureItem, featureIdx) => (
                                    <li key={featureIdx} className='flex text-sm items-center gap-5'>
                                        <FiCheck className='text-green-600 h-5 w-5' />
                                        {featureItem}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex-1 flex items-end">
                                <button
                                    onClick={() => (item.name)}
                                    className={`px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white ${isLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-500 active:bg-green-700'
                                        }`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Processing...' : 'Select'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* {error && <div className="mt-4 text-red-600 text-center">{error}</div>} */}
            </div>
        </section>
    );
};

export default LoanSelection;
