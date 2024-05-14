import React, { useState } from 'react';
import { MdPayment, MdHelpOutline, MdDashboard, MdHome, MdNotifications } from "react-icons/md";
import { useNavigation } from '../../context/NavProvider';


export const Notifications = () => {
  return (
    <>
      <Header />
      <main className='max-w-screen-xl mx-auto mt-12 px-4 sm:px-8 md:px-12 lg:px-24 font-serif'>
        <div className='flex items-center gap-x-2 text-center'>
          <h1 className='text-lg font-semibold'>Notifications</h1>
          <p className='bg-yellow-400 px-2 py-[1px] rounded-full text-sm'>3</p>
        </div>

        <div className='flex space-x-2 text-wrap mt-6 px-2 py-2 rounded-lg bg-gray-100'>
          <div>
            <MdNotifications className='bg-gray-200 w-8 h-8 mt-2 p-1 rounded-lg ' />
          </div>
          <div>
            <strong className='text-sm mb-1'>Welcome to your notification center!</strong>
            <p className='text-xs text-gray-700'>The notification system notifies you of important events such as replies, mentions, update</p>
          </div>
        </div>

        <div className='flex space-x-2 text-wrap mt-6 px-2 py-2 rounded-lg bg-gray-100'>
          <div>
            <MdNotifications className='bg-gray-200 w-8 h-8 p-1 rounded-lg mt-2' />
          </div>
          <div>
            <strong className='text-sm mb-1'>Welcome to your notification center!</strong>
            <p className='text-xs text-gray-700'>The notification system notifies you of important events such as replies, mentions, update</p>
          </div>
        </div>


        <div className='flex space-x-2 text-wrap mt-6 px-2 py-2 rounded-lg bg-gray-100'>
          <div className=''>
            <MdNotifications className='bg-gray-200 w-8 h-8 p-1 rounded-lg mt-2' />
          </div>
          <div>
            <strong className='text-sm mb-1'>Welcome to your notification center!</strong>
            <p className='text-xs text-gray-700'>The notification system notifies you of important events such as replies, mentions, update</p>
          </div>
        </div>



      </main>

    </>
  )
}

export default Notifications

const Header = () => {
  // const { showBottomNav, setShowBottomNav } = useNavigation();
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  //   // Additional logic to switch dark mode theme if applicable
  // };

  // const toggleBottomNav = () => {
  //   setShowBottomNav(!showBottomNav);
  // };

  return (
    <section className={`flex justify-between lg:px-12 items-center h-[130px] bg-green-700 text-white font-serif`}>
      <div className=' lg:px-8 text-bold'>
        <div className='flex items-center gap-x-1 px-6'>
          <MdHome size={22} />
          <p className='text-md'>Home</p>
        </div>
        <p className='font-semibold text-3xl mt-2 px-6 '>Notifications</p>
      </div>
      <div aria-hidden="true"
        className="absolute top-0 inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div>
        {/* Dark Mode Toggle
        <button onClick={toggleDarkMode} className='focus:outline-none'>
          {isDarkMode ? <MdBrightness7 size={24} /> : <MdBrightness4 size={24} />}
        </button> */}


        <div className='flex items-center px-4 gap-x-4 mt-8'>

          {/* Navigation Icons */}
          <div className=' hidden lg:flex gap-x-1 font-bold items-center text-base'>
            <MdDashboard size={24} />
            <p>Dashboard</p>
          </div>
          <div className='hidden lg:flex gap-x-1 font-bold items-center text-base'>
            <MdPayment size={24} />
            <p>Payment</p>
          </div>
          <div className='hidden lg:flex gap-x-1 font-bold items-center text-base'>
            <MdHelpOutline size={24} />
            <p>Support</p>
          </div>

          {/* Profile Image */}
          <div className='border-2 p-1 border-gray-300 rounded-full mb-8'>
            <img src={require("../../assets/profile.jpg")} alt="profile" className='rounded-full object-center bg-yellow-300 w-20 h-20' />
          </div>
        </div>
      </div>
    </section>
  );
};
