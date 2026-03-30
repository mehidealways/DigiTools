import React from 'react';
import { BsCart } from 'react-icons/bs';

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-[120px]" src="/public/assets/Logo.png" alt="" />
          </a>
        </div>
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

        <div className="navbar-end gap-4">
          <BsCart />
          <p>
            <a href="">Login</a>
          </p>
          <button className="btn py-6 px-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
