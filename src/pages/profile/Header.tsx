import React from 'react';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import profileImage from '../../assets/profile.jpg';

const Header = () => {
    return (
        <section className='flex bg-green-600 text-white '>
            <div className='m-8 flex flex-col justify-between'>
                <div className='flex justify-between items-center mb-8'>
                    <div className='flex items-center'>
                        <p className='text-3xl font-bold mr-4'>My Account</p>
                        <img src={profileImage} alt="profile" className='rounded-full object-center bg-yellow-300 w-8 h-8' />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-between items-center mb-4'>
                        <p className='mr-4'>Show Dashboard Account Balances</p>
                        <FiToggleLeft />
                    </div>
                    <div className='flex space-x-24 items-center'>
                        <p className='mr-4'>Enable Notification</p>
                        <FiToggleRight className='w-6 h-6 text-orange-300 '/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
