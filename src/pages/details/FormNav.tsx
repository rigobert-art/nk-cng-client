import React from 'react';

interface FormNavigationProps {
    active: 'personal' | 'other' | 'require';
    setActive: React.Dispatch<React.SetStateAction<'personal' | 'other' | 'require'>>;
    loading: boolean;
}

const FormNavigation: React.FC<FormNavigationProps> = ({ active, setActive, loading }) => {
    return (
        <div className='flex gap-x-2 lg:gap-x-12 items-center mb-12 border-b-2 mt-24 px-4'>
            {['require', 'personal', 'other'].map((section, index) => (
                <div
                    key={section}
                    className={`flex items-center mb-2 space-x-2 ${active === section ? 'font-bold mb-2' : 'text-gray-400'}`}
                    onClick={() => setActive(section as 'personal' | 'other' | 'require')}
                >
                    <div className={`border-4 rounded-full px-2 ${active === section ? 'border-gray-800' : 'border-gray-400'}`}>
                        <p className='font-semibold'>{index + 1}</p>
                    </div>
                    <div className='text-sm font-semibold'>{section === 'require' ? 'Loans Details' : section === 'personal' ? 'Personal Details' : 'Other Details'}</div>
                </div>
            ))}
        </div>
    );
};

export default FormNavigation;
