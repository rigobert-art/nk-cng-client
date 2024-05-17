import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { NavigationProvider } from '../context/NavProvider';
import BottomNavBar from '../components/BottomNav';
import { Payment } from '../pages/payment/upay/Payment';
import { Profile } from '../pages/profile/Profile';
import Home from '../pages/dashboard/udash/Home';
import Norifications from '../pages/notification/Notifications';

const MainLayout = () => {
  return (
    <div className='overflow-auto h-screen w-full'>
      <NavigationProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/notifications" element={<Norifications />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNavBar />
      </NavigationProvider>
    </div>
  )
}

export default MainLayout