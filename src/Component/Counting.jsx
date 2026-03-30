import React from 'react';

const Counting = () => {
  return (
    <div className="mt-12.5">
      <div className="bg-linear-to-r from-indigo-600 to-purple-600 px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          {/* Item 1 */}
          <div className="border-solid border-r border-white md:pr-6">
            <h2 className="text-4xl mb-2 font-bold text-white">50K+</h2>
            <p className="text-md text-white">Active Users</p>
          </div>

          {/* Item 2 */}
          <div className="border-solid border-r border-white md:px-6">
            <h2 className="text-4xl mb-2 font-bold text-white">200+</h2>
            <p className="text-md text-white">Premium Tools</p>
          </div>

          {/* Item 3 */}
          <div className="md:pl-6">
            <h2 className="text-4xl mb-2 font-bold text-white">4.9</h2>
            <p className="text-md text-white">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;