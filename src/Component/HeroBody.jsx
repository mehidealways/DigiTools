import { IoPlayOutline } from 'react-icons/io5';

const HeroBody = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-16 mt-10">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/assets/banner.png"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow"
            alt="banner"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="py-6 text-sm sm:text-base lg:text-[18px] text-gray-600">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="text-white px-6 py-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full sm:w-auto">
              Get Started
            </button>

            <button className="p-0.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2 bg-white text-black rounded-full px-6 py-3 w-full">
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
