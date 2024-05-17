import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';
import { useAppContext } from '../../context/AppProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setIsLoggedIn } = useAppContext();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Simulate server response when the server is not working
      if (email === 'admin@gmail.com' && password === 'password') {
        login({
          token: 'token_ui_nnsdknksjdfno',
          id: '1',
          username: 'Default User',
          phone: "default_phone",
          email: 'default@example.com',
        });
        setIsLoggedIn(true);
        navigate('/admin/overview');
      } else {
        // Make the actual API call when the server is working
        const response = await axios.post('http://192.168.100.115:4000/api/v1/user/login', {
          email,
          password,
        });

        login({
          token: response.data.token,
          id: response.data._id,
          username: response.data.user.name,
          phone: response.data.user.phone,
          email: response.data.user.email,
        });
        setIsLoggedIn(true);
        navigate('/admin/overview');
      }
    } catch (error) {
      setError('Invalid email or password');
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='max-w-md font-serif mx-auto h-screen flex flex-col items-center justify-center px-4'>
      <div>
        <img src={require("../../assets/logo.png")} alt='logo' className='w-32 h-32 absolute left-4 top-4 object-cover'/>
      </div>

      <div className='mb-6 text-5xl font-sans text-[#72c053] font-extrabold'>
        <h1>Loan Management System</h1>
      </div>

      <button type='button' className='flex w-full justify-center border lg:w-[400px] py-2 px-8 rounded-md mb-4'>
        <FcGoogle size="22px" />
        <p className=' px-2 font-bold'>Continue with Google </p>

      </button>
      <p className='mb-4'>Or</p>
      <form onSubmit={handleSubmit} className='w-full mb-4 px-2' >

        <div className="mb-4">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email or phone number"
            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required

          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        </div>
        {error && <p className='text-red-600 mb-2'>{error}</p>}
        <button
          type='submit'
          className='w-full items-center bg-[#72c053] text-white lg:w-[400px] py-2 rounded-md text-lg font-bold shadow-lg'
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Log In'}
        </button>

      </form>
      <div className='flex flex-col mt-6 text-blue-600 justify-center items-center'>
        <Link to="/reset" className='text-blue mb-2'>Reset Password</Link>
        <span className='text-gray-400'>
          No account?
          <Link to="/register" className='text-blue-600 text-base font-medium pl-[1px]'>
            Create one
          </Link>

        </span>
      </div>


    </section>
  )
}

export default Login