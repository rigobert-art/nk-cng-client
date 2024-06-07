import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/profile.jpg';
import { FiClipboard, FiEye, FiEyeOff, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface NavItem {
    name: string;
    icon: JSX.Element;
    link: string;
}

const Header: React.FC = () => {
    const first_name = "John"; // Placeholder for first name
    const loan_balance = "2000000"; // Placeholder for loan balance

    const nav: NavItem[] = [
        { name: 'Apply Loan', icon: <FiClipboard />, link: "/loans" },
        { name: 'Pay Loan', icon: <FiEye />, link: "/pay" },
        { name: 'Agreement', icon: <FiEye />, link: "/contract" }
    ];

    const [currentCard, setCurrentCard] = useState(0);
    const [showAmounts, setShowAmounts] = useState(true);

    const handleNextCard = () => {
        setCurrentCard((prevCard) => (prevCard + 1) % cardDetails.length);
    };

    const handlePrevCard = () => {
        setCurrentCard((prevCard) => (prevCard - 1 + cardDetails.length) % cardDetails.length);
    };

    const toggleShowAmounts = () => {
        setShowAmounts(!showAmounts);
    };

    const cardDetails = [
        { label: 'Total Loan', amount: loan_balance },
        { label: 'Total Balance', amount: loan_balance },
        { label: 'Monthly Amount', amount: loan_balance }
    ];

    return (
        <header className="max-w-screen-full mx-auto bg-green-700 text-white overflow-hidden h-[360px] md:h-[230px] px-6 sm:px-8 md:px-12 font-serif lg:px-24">
            <div className="lg:px-8 font-bold m-4">
                <div className='flex justify-between mb-6 items-center'>
                    <div>
                        <p>Welcome,</p>
                        <span>{first_name}</span>
                    </div>
                    <div className='md:flex space-x-4 items-center'>
                        <nav className='hidden md:flex gap-x-2 items-center'>
                            {nav.map((item, key) => (
                                <Link key={key} to={item.link} className="items-center mt-2">
                                    <p className="ml-2">{item.name}</p>
                                </Link>
                            ))}
                        </nav>
                        <img src={profileImage} alt="profile" className="rounded-full object-center bg-yellow-300 w-8 h-8 md:w-12 md:h-12" />
                    </div>
                </div>
                <div className='relative flex flex-col md:flex-row gap-x-4 justify-center'>
                    <FiArrowLeft onClick={handlePrevCard} className='md:hidden absolute left-2 w-6 h-6 cursor-pointer' />
                    {cardDetails.map((card, index) => (
                        <div key={index} className={`${currentCard === index ? 'block' : 'hidden'} md:flex border-[1px] rounded-lg items-center justify-center bg-green-600 shadow-md px-4 py-2 w-full md:w-auto`}>
                            <div className='px-4 py-2'>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-600 text-center">
                                        {card.label}
                                    </p>
                                    <button onClick={toggleShowAmounts} className="ml-2">
                                        {showAmounts ? <FiEyeOff className="inline" /> : <FiEye className="inline" />}
                                    </button>
                                </div>
                                <p className='text-3xl text-center mt-4'>
                                    {showAmounts ? `TZS ${card.amount}` : '****'}
                                </p>
                                <div className='mt-8 md:hidden border-[1px] mb-12'></div>
                                <div className="flex md:hidden flex-wrap justify-center gap-x-8">
                                    {nav.map((item, key) => (
                                        <Link key={key} to={item.link} className="text-center text-gray-600">
                                            <button className='bg-orange-400 px-2 py-2 rounded-md'>
                                                {item.icon}
                                            </button>
                                            <p className="text-xs mt-[4px]">{item.name}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <FiArrowRight onClick={handleNextCard} className='md:hidden absolute right-2 w-6 h-6 cursor-pointer' />
                </div>
            </div>
        </header>
    );
};

export default Header;
