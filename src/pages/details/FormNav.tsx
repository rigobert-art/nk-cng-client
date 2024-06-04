import React from 'react';

interface FormNavigationProps {
    active: 'personal' | 'other' | 'require';
    setActive: React.Dispatch<React.SetStateAction<'personal' | 'other' | 'require'>>;
    loading: boolean;
}

const FormNavigation: React.FC<FormNavigationProps> = ({ active, setActive, loading }) => {
    const sections = [
        { id: 'require', label: 'Loans Details' },
        { id: 'personal', label: 'Personal Details' },
        { id: 'other', label: 'Other Details' }
    ];

    return (
        <div className='flex gap-x-2 lg:gap-x-12 items-center mb-12 border-b-2 mt-24 px-4'>
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    className={`flex items-center mb-2 space-x-2 cursor-pointer ${active === section.id ? 'font-bold text-gray-800' : 'text-gray-400'
                        }`}
                    onClick={() => !loading && setActive(section.id as 'personal' | 'other' | 'require')}
                >
                    <div className={`border-4 rounded-full px-2 ${active === section.id ? 'border-gray-800' : 'border-gray-400'
                        }`}>
                        <p className='font-semibold'>{index + 1}</p>
                    </div>
                    <div className='text-sm font-semibold'>{section.label}</div>
                </div>
            ))}
        </div>
    );
};

export default FormNavigation;
