import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/profile.jpg';
import { FiClipboard, FiEye, FiEyeOff, FiArrowLeft, FiArrowRight, FiCreditCard, FiMenu } from 'react-icons/fi';

interface NavItem {
    name: string;
    icon: JSX.Element;
    link: string;
}

const Header: React.FC = () => {

    const nav: NavItem[] = [
        { name: 'Pay Loan', icon: <FiCreditCard />, link: "/pay" },
        { name: 'More', icon: <FiMenu />, link: "/pay" },
    ];

  
    const [showAmounts, setShowAmounts] = useState(true);



    const toggleShowAmounts = () => {
        setShowAmounts(!showAmounts);
    };


    return (
        <header className=" mx-auto bg-[#72c053] text-white overflow-hidden h-[350px] md:h-[230px] px-6 sm:px-8 md:px-12 font-serif lg:px-24">
            <div className="lg:px-8 font-bold m-4">
                <div className='flex justify-between mb-6 items-center'>
                    <div>
                        <p className='text-lg'>Loans</p>
                       
                    </div>
                    <nav className='hidden md:flex gap-x-2 items-center'>
                        {nav.map((item, key) => (
                            <Link key={key} to={item.link} className="items-center mt-2">
                                <p className="ml-2">{item.name}</p>
                            </Link>
                        ))}
                    </nav>
                    
                </div>
                <div className='relative flex flex-col md:flex-row gap-x-4 justify-center'>
                    
                    <div className='md:flex border-[1px] md:border-none rounded-lg md:rounded-none items-center justify-center bg-green-600 md:bg-transparent shadow-md md:shadow-none px-4 py-2 w-full md:w-auto'>
                            <div className='px-4 py-2'>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-gray-600 text-center">
                                        Current Balance
                                    </p>
                                    <button onClick={toggleShowAmounts} className="ml-2">
                                        {showAmounts ? <FiEyeOff className="inline" /> : <FiEye className="inline" />}
                                    </button>
                                </div>
                                <p className='text-4xl text-center mt-8 mb-16'>
                                    TZS 0
                                </p>
                                
                            </div>
                        </div>
                    <div className="flex md:hidden flex-wrap justify-center gap-x-24 -mt-2">
                        {nav.map((item, key) => (
                            <Link key={key} to={item.link} className="text-center text-gray-600">
                                <button className='bg-white px-2 py-2 rounded-md'>
                                    {item.icon}
                                </button>
                                <p className="text-xs mt-[4px]">{item.name}</p>
                            </Link>
                        ))}
                    </div>
                 
                </div>
            </div>
        </header>
    );
};

export default Header;
