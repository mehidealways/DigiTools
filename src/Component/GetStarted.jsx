import React from 'react';

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] mt-10 px-4 py-16 mb-10">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#101727]">
          Get Started in 3 Steps
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="p-6 border border-gray-200 shadow-md flex flex-col items-center text-center space-y-4 rounded-lg relative bg-white">
          <div className="w-10 h-10 flex justify-center items-center text-white text-sm font-semibold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute right-4 top-4">
            01
          </div>

          <img src="assets/user.png" alt="" className="w-16 md:w-20" />

          <h2 className="text-lg md:text-xl font-bold">Create Account</h2>

          <p className="text-sm text-gray-500">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 border border-gray-200 shadow-md flex flex-col items-center text-center space-y-4 rounded-lg relative bg-white">
          <div className="w-10 h-10 flex justify-center items-center text-white text-sm font-semibold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute right-4 top-4">
            02
          </div>

          <img src="assets/package.png" alt="" className="w-16 md:w-20" />

          <h2 className="text-lg md:text-xl font-bold">Choose Products</h2>

          <p className="text-sm text-gray-500">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 border border-gray-200 shadow-md flex flex-col items-center text-center space-y-4 rounded-lg relative bg-white">
          <div className="w-10 h-10 flex justify-center items-center text-white text-sm font-semibold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute right-4 top-4">
            03
          </div>

          <img src="assets/rocket.png" alt="" className="w-16 md:w-20" />

          <h2 className="text-lg md:text-xl font-bold">Start Creating</h2>

          <p className="text-sm text-gray-500">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
