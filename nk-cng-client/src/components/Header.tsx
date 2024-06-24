
// Header.js
import React, { useState } from 'react';
import { MdWbSunny, MdSettings, MdPayment, MdHelpOutline, MdBrightness4, MdBrightness7, MdDashboard } from "react-icons/md";
import { useNavigation } from '../context/NavProvider';

const Header = () => {
  const { showBottomNav, setShowBottomNav } = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Additional logic to switch dark mode theme if applicable
  };

  const toggleBottomNav = () => {
    setShowBottomNav(!showBottomNav);
  };

  return (
    <section className={`flex justify-between lg:px-12 items-center h-[260px] bg-gray-300`}>
      <div className=' lg:px-8 text-bold'>
        <div className='flex items-center gap-x-1 px-6'>
          <MdWbSunny size={22} />
          <p className='text-md'>Good Morning</p>
        </div>
        <p className='font-semibold text-2xl mt-2 px-6 '>Mr. Vicent Richard</p>
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
          <div className='border-2 p-1 border-gray-300 rounded-full '>
            <img src={require("../assets/profile.jpg")} alt="profile" width={66} height={66} className='rounded-full  object-center bg-yellow-300 w-24 h-24' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
