import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="w-full h-screen flex flex-col overflow-hidden items-center justify-center px-4">
      <div className="lg:w-[600px] mx-auto justify-center items-center text-center">
        <div className="mb-8 text-nowrap text-left">
          <h1 className="text-2xl text-[#72c053] font-extrabold mb-6">NK's CNG Automotive Loan!</h1>
          <p className="text-sm font-serif text-gray-900 text-wrap mb-8">
            Loan provided by NK CNG Automotive Limited to help you do conversion of
            your car from fuel to CNG gas.

          </p>
        </div>

        <div className='flex justify-center gap-x-8'>
          <div>

            <Link to="/details" className="bg-[#72c053] text-white rounded-md shadow-lg px-[48px] py-[12px] text-lg font-bold">
              Welcome
            </Link>
          </div>

          <div className=''>
            <Link
              to="/login"
              title="Login"
              className="py-[12px] px-[32px] rounded-lg border-[#72c053] border-2 text-lg font-bold shadow-lg"
              role="button"
            >
              Log In
            </Link>
          </div>
        </div>

      </div>
      <div className='mt-12 bg-[#72c053] shadow-lg rounded-3xl'>
        <img src={require("../../assets/gas.png")} alt="welcome" className="w-full h-full object-center px-8 py-8" />
      </div>
    </section>
  );
};
export default Welcome;