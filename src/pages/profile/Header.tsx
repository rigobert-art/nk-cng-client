import React, { useState } from 'react';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import profileImage from '../../assets/profile.jpg';

const Header = () => {
    const [showBalances, setShowBalances] = useState(false);
    const [enableNotification, setEnableNotification] = useState(true);

    const handleToggleBalances = () => {
        setShowBalances(!showBalances);
    };

    const handleToggleNotification = () => {
        setEnableNotification(!enableNotification);
    };

    return (
        <section className='max-w-screen-full mx-auto bg-[#72c053] text-white overflow-hidden h-[180px] md:h-[230px] px-6 sm:px-8 md:px-12 lg:px-24'>
            <div className='m-8 flex flex-col'>
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex w-full justify-between items-center'>
                        <p className='text-3xl font-bold mr-4'>My Account</p>
                        <img src={profileImage} alt="profile" className='rounded-full object-center bg-yellow-300 w-12 h-12' />
                    </div>
                </div>

                <div className='flex flex-col justify-center md:mx-auto'>
                    <div className='flex items-center mb-4'>
                        <p className='mr-4 text-base'>Show Dashboard Account Balances</p>
                        <button onClick={handleToggleBalances}>
                            {showBalances ? <FiToggleLeft className='w-6 h-6' /> : <FiToggleRight className='w-6 h-6 text-orange-300' />}
                        </button>
                    </div>
                    <div className='flex items-center'>
                        <p className='mr-4 text-base'>Enable Notification</p>
                        <button onClick={handleToggleNotification}>
                            {enableNotification ? <FiToggleRight className='w-6 h-6 text-orange-300' /> : <FiToggleLeft className='w-6 h-6' />}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
