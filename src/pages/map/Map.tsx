import React from 'react';
import { FiCheckCircle, FiMapPin, FiPlusCircle } from 'react-icons/fi';
// import {
//   GoogleMap,
//   Marker,
//   useLoadScript,
//   InfoWindow,
//   DrawingManager
// } from '@react-google-maps/api';
const Map = () => {


  return (
    <section className='flex w-full'>
      {/* Sidebar */}
      <aside className=' w-72 border-r-2  h-screen overflow-auto'>
        <div className='mt-4 border-b-2 py-2 items-end relative  border-gray-200 px-4 '>
          <FiPlusCircle className='w-8 h-8 mb-2 text-gray-400 justify-end'/>
        </div>
        <div className='flex flex-col m-2'>
          <div className='border-2 rounded-md px-2 py-2'>
            <div className='mb-4'>
              <h2 className='text-lg font-bold'>T 432 BCD</h2>
            </div>
            <div className='flex justify-between mb-2'>
              <p className='text-green-600 font-base flex items-center gap-x-[2px] '>
                <FiCheckCircle />
                Online
              </p>
              <p className='font-bold flex items-center gap-x-[2px]'>
                <FiMapPin />
                Makumbusho
              </p>
            </div>
            
          </div>
        </div>
      </aside>

      {/* Main Body */}
    </section>
  );
};

export default Map;
