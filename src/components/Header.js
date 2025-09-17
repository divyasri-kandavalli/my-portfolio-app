import React from "react";
import { Link } from "react-router-dom";
import LogoImage from '../assets/images/Logo-3.png'
export default function Header() {
  return (
    <nav className=" fixed w-full z-20 top-0 start-0 mt-3">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto ">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={LogoImage}
            className=" w-auto h-auto"
            alt="Logo"
          />
        </Link>

        {/* Nav links (center) */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center space-x-6 bg-[#1f3d3b] px-8 py-3 rounded-full font-semibold text-white">
            <li>
              <Link
                to="/"
                className="hover:text-[#6cfcb5] transition-colors text-[#6cfcb5]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#6cfcb5] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[#6cfcb5] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-[#6cfcb5] transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/pages"
                className="hover:text-[#6cfcb5] transition-colors"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#6cfcb5] transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Button */}
        <div className="hidden md:flex">
          <button
            className="px-8 py-3 rounded-full font-medium text-black 
               bg-gradient-to-r from-[#6cfcb5] to-[#F0FF6C] 
               hover:bg-gradient-to-l 
               transition-all duration-900"
          >
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
}
