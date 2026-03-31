import React from 'react';
import { IoPlayOutline } from 'react-icons/io5';

const HeroBody = () => {
  return (
    <div className=" px-16 mt-10">
      <div className=" flex items-center flex-row-reverse justify-between">
        <div>

        <img src="/assets/banner.png" className="max-w-sm rounded-lg shadow" />
        </div>
        <div >
          <h1 className="text-5xl font-bold leading-normal">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="py-6 text[18px]">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </p>
          {/* Btn section */}
          <div>
            <button  className="btn text-white py-6 px-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] mr-2">
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