import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { plans } from '../../constants/dummy';
import FormNavigation from './FormNav';
import PersonalDetailsForm from './PersonalDetails';
import OtherDetailsForm from './OtherDetails';
import { FiCheck } from 'react-icons/fi';
import LoanSelection from './Selection';

const Details: React.FC = () => {
    const [active, setActive] = useState<'personal' | 'other' | 'require'>('require');
    const [loading, setLoading] = useState(false);

    return (
        <section className='w-full items-center justify-center flex flex-col font-serif overflow-auto'>
            <Link to='/' className='absolute right-8 top-8'><p>X</p></Link>
            {loading ? (
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-600"></div>
                </div>
            ) : (
                <FormNavigation active={active} setActive={setActive} loading={loading} />
            )}
            {active === 'require' && <LoanSelection setActive={setActive} /> }
            {active === 'personal' && <PersonalDetailsForm setActive={setActive} />}
            {active === 'other' && <OtherDetailsForm setActive={setActive} />}
        </section>
    );
};

export default Details;
