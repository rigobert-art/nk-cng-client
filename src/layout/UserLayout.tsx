import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

import BottomNavBar from '../components/BottomNav';
import { useAuth } from '../context/AuthProvider';


const MainLayout = () => {
  const { user } = useAuth();

  // if (!user || !user.token){
  //   return <Navigate to="/login" replace={true} />;
  // }
  return (
    <div className='overflow-auto h-screen w-full'>
        <Outlet/>
        <BottomNavBar />
     
    </div>
  )
}

export default MainLayout