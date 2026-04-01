import React from 'react';

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] mt-10 p-30 mb-20">
      <div className="text-center space-y-4">
        <h3 className="text-4xl font-bold text-[#101727]">
          Get Started in 3 Steps
        </h3>
        <p className="text-[18px] text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      {/* Card Section */}
      <div className="flex gap-5 mt-10">
        <div className="w-150 p-20 border border-gray-300 shadow flex items-center justify-between flex-col space-y-3 rounded-md text-center relative ">
          <div className="w-15 h-15 flex justify-center items-center text-white text[18px] font-semibold  rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute right-5 top-5 ">
            01
          </div>
          <img src="assets/user.png" alt="" className="w-20" />
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-md text-gray-400">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="w-150 p-20 border border-gray-300 shadow flex items-center justify-between flex-col space-y-3 rounded-md text-center relative">
          <div className="w-15 h-15 flex justify-center items-center text-white text[18px] font-semibold  rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute right-5 top-5 ">
            02
          </div>
          <img src="assets/package.png" alt="" className="w-20" />
          <h2 className="text-2xl font-bold">Choose Products</h2>
          <p className="text-md text-gray-400">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
        <div className="w-150 p-20 border border-gray-300 shadow flex items-center justify-between flex-col space-y-3 rounded-md text-center relative">
          <div className="w-15 h-15 flex justify-center items-center text-white text[18px] font-semibold  rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute right-5 top-5 ">
            03
          </div>
          <img src="assets/rocket.png" alt="" className="w-20" />
          <h2 className="text-2xl font-bold">Start Creating</h2>
          <p className="text-md text-gray-400">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;