import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Simulate server response when the server is not working
      if (email === 'support@gmail.com' && password === 'password') {
        login({
          token: 'default_token',
          id: 'default_id',
          name: 'Default User',
          email: 'default@example.com',
        });
        navigate('/home');
      } else {
        // Make the actual API call when the server is working
        const response = await axios.post('http://192.168.100.115:4000/api/v1/user/login', {
          email,
          password,
        });

        login({
          token: response.data.token,
          id: response.data._id,
          name: response.data.user.name,
          email: response.data.user.email,
        });

        navigate('/home');
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

      <div className='mb-6 text-3xl font-bold'>
        <h1>Sign in to Gas System</h1>
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
        {error && <p className='text- mb-2'>{error}</p>}
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
          <Link to="/details" className='text-blue-600 text-base font-medium pl-[1px]'>
            Create one
          </Link>

        </span>
      </div>


    </section>
  )
}

export default Login