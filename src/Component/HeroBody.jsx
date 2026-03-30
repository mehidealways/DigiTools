import React from 'react';
import { IoPlayOutline } from 'react-icons/io5';

const HeroBody = () => {
  return (

      <div className=" px-16 mt-10">
        <div className=" flex items-center flex-row-reverse justify-between">
          <img
            src="/assets/banner.png"
            className="max-w-sm rounded-lg shadow"
          />
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div>
              <button className="btn text-white py-6 px-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] mr-2">
                Get Started
              </button>
              <button className="p-0.5  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full ">
                <span className="btn bg-base-100 text-black border-none rounded-full px-10 py-6 ">
                  <IoPlayOutline />
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
   
    
   
  );
};

export default HeroBody;