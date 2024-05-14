import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="w-full h-screen flex flex-col overflow-hidden items-center justify-center px-4 font-serif">
      <div
        aria-hidden="true"
        className="absolute top-0 inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="absolute right-4 top-4 bg-red-900 rounded-xl flex justify-center items-center">
        <div className="relative inline-flex group">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <Link
            to="/login"
            title="Login"
                      className="relative inline-flex items-center justify-center px-4 py-2 text-md font-bold text-white transition-all duration-200 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Log In
          </Link>
        </div>
        </div>

      <div className="lg:w-[600px] mx-auto justify-center items-center text-center">
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold mb-4">Let's jump back in!</h1>
          <p className="text-sm font-bold text-gray-400 text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rem recusandae soluta voluptas
            distinctio dignissimos, fugit tempore consequuntur quae tenetur temporibus quasi voluptatibus! Eaque,
            placeat. Possimus corporis fuga harum dignissimos?
          </p>
        </div>

        <Link to="/details" className="bg-red-800 text-white rounded-md shadow-lg px-4 py-2">
          Welcome
        </Link>
      </div>
    </section>
  );
};
export default Welcome;