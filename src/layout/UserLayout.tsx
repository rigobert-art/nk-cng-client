import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import BottomNavBar from '../components/BottomNav';
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';

const MainLayout: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

 
    const resendOTP = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/v1/user/resend-otp', { phone: user?.phone });

        if (response.data.message === 'OTP resent successfully') {
          navigate('/verify-otp');
        }
      } catch (error) {
        console.error('Error resending OTP:', error);
      }
    };

   
  

  if (!user || !user.token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (user && user.token && user.verified === false && user.phone) {
    resendOTP();
  }

  return (
    <div className='overflow-auto h-screen w-full'>
      <Outlet />
      <BottomNavBar />
    </div>
  );
};

export default MainLayout;
