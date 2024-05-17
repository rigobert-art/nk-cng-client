import React from 'react'
import { Outlet } from 'react-router-dom';

import BottomNavBar from '../components/BottomNav';


const MainLayout = () => {
  return (
    <div className='overflow-auto h-screen w-full'>
        <Outlet/>
        <BottomNavBar />
     
    </div>
  )
}

export default MainLayout