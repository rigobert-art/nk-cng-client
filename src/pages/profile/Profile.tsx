import React from 'react';
import { useAuth } from '../../context/AuthProvider';
import Header from './Header';
import { FiClipboard, FiEye, FiPaperclip, FiPhone } from 'react-icons/fi';
import { AiFillMoneyCollect, AiFillWallet } from 'react-icons/ai';

export const Profile = () => {
  const { login, logout } = useAuth();

  const list = [
    {
      id: 1,
      icon: <FiClipboard />,
      title: 'My Loan',
    },
    {
      id: 2,
      icon: <AiFillWallet />,
      title: 'My Bank Account',
    },
    {
      id: 3,
      icon: <AiFillMoneyCollect />,
      title: 'Liquidation',
    },
    {
      id: 4,
      icon: <FiPaperclip />,
      title: 'Letter from the Local Government',
    },
    {
      id: 5,
      icon: <FiPaperclip />,
      title: 'Letter from the Local Sponsor',
    },
    {
      id: 6,
      icon: <FiPhone />,
      title: 'Contact Support',
    },
    {
      id: 7,
      icon: <FiEye />,
      title: 'Reset Password',
    },
    // {
    //   id: 8,
    //   icon: <MdPayment />,
    //   title: '',
    // },
  ];

  return (
    <>
      <Header />
      <main className='max-w-screen-xl mx-auto mt-8 px-6 sm:px-8 md:px-12 lg:px-24'>
        {list.map((item, index) => (
          <div className='flex items-center text-md rounded-md border-[1px] mb-6 px-4 py-2 border-gray-300 text-green-800 ' key={index}>
            <div className='mr-8'>
              {item.icon}
            </div>
          
            <p>{item.title}</p>
          </div>
        ))}
        <div onClick={logout} className='mt-2 item-center rounded-md justify-center text-center bg-gray-600 py-2 text-white'>
          <span className='text-lg'>Logout</span>
        </div>
      </main>
    </>
  );
};
