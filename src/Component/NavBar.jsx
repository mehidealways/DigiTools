import React from 'react';
import { BsCart } from 'react-icons/bs';

const NavBar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a className="btn btn-ghost text-xl">
            <img className="w-24 sm:w-28" src="/assets/Logo.png" alt="logo" />
          </a>
        </div>

        {/* Center Menu (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-3 sm:gap-4">
          <BsCart className="cursor-pointer text-lg sm:text-xl" />

          <a href="#" className="text-sm sm:text-base">
            Login
          </a>

          <button className="text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-sm sm:text-base">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
