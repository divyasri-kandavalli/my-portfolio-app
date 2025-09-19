import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from '../assets/images/Logo-3.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 mt-3">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={LogoImage}
            className="w-auto h-auto"
            alt="Logo"
          />
        </Link>

        {/* Hamburger Toggler for Mobile and Tablet */}
        <button
          className="lg:hidden text-black bg-gradient-to-r from-[#6cfcb5] to-[#F0FF6C] hover:bg-gradient-to-l p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Nav links (center) for large screens */}
        <div className="hidden lg:flex items-center">
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

        {/* Right Button for large screens */}
        <div className="hidden lg:flex">
          <button
            className="px-8 py-3 rounded-full font-medium text-black 
               bg-gradient-to-r from-[#6cfcb5] to-[#F0FF6C] 
               hover:bg-gradient-to-l 
               transition-all duration-900"
          >
            Download CV
          </button>
        </div>

        {/* Full-Screen Nav for Mobile and Tablet */}
        <div
          className={`fixed top-0 left-0 z-40 w-full h-screen py-6 overflow-y-auto transition-transform bg-gradient-to-r from-[#6cfcb5] to-[#F0FF6C] lg:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center pb-4 border-b border-[#88868677]">
            <div></div> {/* Empty div for spacing */}
            <button
              onClick={toggleMenu}
              className="text-white bg-[#163031]  rounded-lg px-[6px] py-[8px] w-[38px] mx-5 text-[22px] font-bold"
              aria-label="Close menu"
            >
             X
            </button>
          </div>
          <div className="py-4 overflow-y-auto flex flex-col items-center justify-center h-full">
            <ul className="space-y-4 font-medium text-center">
              <li>
                <Link
                  to="/"
                  className="block p-2 text-black text-lg rounded-lg hover:bg-[#2a5a57] hover:text-[#6cfcb5]"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block p-2 text-black text-lg rounded-lg hover:bg-[#2a5a57] hover:text-[#6cfcb5]"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block p-2 text-black text-lg rounded-lg hover:bg-[#2a5a57] hover:text-[#6cfcb5]"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block p-2 text-black text-lg rounded-lg hover:bg-[#2a5a57] hover:text-[#6cfcb5]"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/pages"
                  className="block p-2 text-black text-lg rounded-lg hover:bg-[#2a5a57] hover:text-[#6cfcb5]"
                  onClick={toggleMenu}
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block p-2 text-black text-lg rounded-lg hover:bg-[#2a5a57] hover:text-[#6cfcb5]"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <button
                  className="w-full p-2 text-black text-lg rounded-lg bg-white hover:bg-[#2a5a57] hover:text-[#6cfcb5]"
                  onClick={toggleMenu}
                >
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}