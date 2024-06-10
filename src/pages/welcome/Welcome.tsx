import React, { useState } from 'react';
import '../../assets/logo.png';

const images = [
  "https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png",
  "https://i.postimg.cc/Kj5vK5Pt/undraw_investing.png",
  "https://i.postimg.cc/BbYJ5kvM/undraw_savings.png"
];

const LoanManagementSystem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrevClick = () => {
  //   const newIndex = (currentIndex - 1 + images.length) % images.length;
  //   setCurrentIndex(newIndex);
  // };

  // const handleNextClick = () => {
  //   const newIndex = (currentIndex + 1) % images.length;
  //   setCurrentIndex(newIndex);
  // };

  return (
    <div className="bg-green-600 mx-auto h-screen">
      <header>
        <nav className="items-center pt-2 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
          <a href="javascript:void(0)">
            <img
              src={require("../../assets/logo.png")}
              width={120}
              height={50}
              alt="Company logo"
            />
          </a>
        </nav>
      </header>
      <section className="mt-12 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div id="default-carousel" className="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
          <div className="relative h-80 md:h-96" data-carousel-inner>
           
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                className="object-cover w-full h-full" alt="Slide 1"/>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">First Slide</span>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                className="object-cover w-full h-full" alt="Slide 2"/>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                className="object-cover w-full h-full" alt="Slide 3"/>
            </div>
          </div>
          {/* Slider indicators */}
          <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
            <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
            <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
            <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
          </div>
         {/* Slider controls */}
          <button type="button"
            className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
            data-carousel-prev>
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button type="button"
            className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
            data-carousel-next>
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="dark:text-white font-bold text-4xl xl:text-5xl">
            Simplified <span className="text-green-400">Loan Management</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Manage your loans effortlessly with our comprehensive loan management system. Keep track of all your financial details in one place.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a href="#" className="px-7 py-3 w-full dark:bg-white bg-green-600 text-white dark:text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
              Apply for a Loan
            </a>
            <a href="/login" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
              Login to your account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoanManagementSystem;
