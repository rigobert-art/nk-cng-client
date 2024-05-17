import React from 'react';
import { FiCheckCircle, FiMapPin, FiPlusCircle } from 'react-icons/fi';
import {   GoogleMap } from '@react-google-maps/api';
const Map = () => {


  return (
    <section className="flex h-screen ml-20 w-full">
      {/* Second Sidebar */}
      <aside className="fixed w-96 border-r-2 bg-gray-50 h-full overflow-auto xs:w-full">
        <div className="mt-4 border-b-2 py-2 items-end relative border-gray-200 px-4">
          <FiPlusCircle className="w-8 h-8 mb-2 text-gray-400 justify-end" />
        </div>
        <div className="flex flex-col m-2 bg-white">
          <div className="border-2 rounded-md px-4 py-2">
            <div className="mb-4">
              <h2 className="text-lg font-bold">T 432 BCD</h2>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-green-600 font-base flex items-center gap-x-[2px]">
                <FiCheckCircle />
                Online
              </p>
              <p className="font-bold flex items-center gap-x-[2px]">
                <FiMapPin />
                Makumbusho
              </p>
            </div>
          </div>
          {/* Rest of the cards */}
        </div>
      </aside>

      {/* Main Body */}
      <section className="flex-1 bg-green-600 ml-[24rem] mr-4 w-full">
        <div className="container justify-center w-full h-full mt-20">
         
        </div>
      </section>
    </section>

  );
};

export default Map;
