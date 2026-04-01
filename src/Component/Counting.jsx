import React from 'react';

const Counting = () => {
  return (
    <div className="mt-12">
      <div className="bg-linear-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-8">
          {/* Item 1 */}
          <div className="lg:border-r lg:border-white lg:pr-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold text-white">
              50K+
            </h2>
            <p className="text-sm sm:text-base text-white">Active Users</p>
          </div>

          {/* Item 2 */}
          <div className="lg:border-r lg:border-white lg:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold text-white">
              200+
            </h2>
            <p className="text-sm sm:text-base text-white">Premium Tools</p>
          </div>

          {/* Item 3 */}
          <div className="lg:pl-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold text-white">
              4.9
            </h2>
            <p className="text-sm sm:text-base text-white">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
