import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer class="bg-[#0B1A2D] text-gray-300 py-12">
      <div class="max-w-6xl mx-auto px-4">
        {/* <!-- Top Section --> */}
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/*  Logo + Description  */}
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white">DigiTools</h2>
            <p class="mt-4 text-sm text-gray-400 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* <!-- Product --> */}
          <div>
            <h3 class="text-white font-semibold mb-4">Product</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Company --> */}
          <div>
            <h3 class="text-white font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Resources --> */}
          <div>
            <h3 class="text-white font-semibold mb-4">Resources</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-4">Social Links</h3>
            <div className="flex gap-5">
              <FaFacebook className="text-[30px]" />
              <FaInstagram className="text-[30px]" />
              <FaTwitter className="text-[30px]" />
            </div>
          </div>
        </div>

        {/* <!-- Bottom Section --> */}
        <div class="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" class="hover:text-white">
              Terms of Service
            </a>
            <a href="#" class="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;