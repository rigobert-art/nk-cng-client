import React from 'react';
import axios from 'axios';
import { FiCheck } from 'react-icons/fi';
import { plans } from '../../constants/dummy';

interface LoanSelectionProps {
    setActive: React.Dispatch<React.SetStateAction<'personal' | 'other' | 'require'>>;
}

const LoanSelection: React.FC<LoanSelectionProps> = ({ setActive }) => {
    const [selectedLoan, setSelectedLoan] = React.useState<string | null>(null);
    const handleSelectLoan = async (loanType: string) => {
        try {
            await axios.post('/api/select-loan', { loanType });
            setActive('personal');
        } catch (error) {
            console.error('Error selecting loan:', error);
        }
    };

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>Types Available</h3>
                    <div className='mt-3 max-w-xl'><p>Types of loans offered by us.</p></div>
                </div>
                <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-1 sm:space-y-0 lg:grid-cols-2'>
                    {plans.map((item, idx) => (
                        <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                            <div>
                                <span className='text-green-600 font-medium'>{item.name}</span>
                                <div className='mt-4 text-gray-800 text-3xl font-semibold'>TZS {item.price}</div>
                            </div>
                            <ul className='py-8 space-y-3'>
                                {item.features.map((featureItem, idx) => (
                                    <li key={idx} className='flex items-center gap-5'>
                                        <FiCheck className='text-green-600 h-5 w-5' />
                                        {featureItem}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex-1 flex items-end">
                                <button
                                    onClick={() => handleSelectLoan(item.name)}
                                    className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-green-600 hover:bg-green-500 active:bg-green-700'
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoanSelection;