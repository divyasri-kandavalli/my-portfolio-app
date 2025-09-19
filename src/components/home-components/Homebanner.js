import React from 'react';
import mintBlob from '../../assets/images/Image-bg.png'; // Adjust the path to your mint blob image
import profileImage from '../../assets/images/vector-office-worker-with-laptop.png'; // Adjust the path to your profile image

export default function Homebanner() {
  return (
    <section className="max-w-[82rem] mx-auto text-white px-8 flex flex-col md:flex-row items-center justify-center gap-10 py-80">
      {/* Left Column - Text and Buttons */}
      <div className="md:w-1/2">
        <ul className="list-none mb-4">
          <li className="text-white flex items-center before:content-[''] before:w-3 before:h-3 before:mr-2 before:bg-gradient-to-r before:from-[#6cfcb5] before:to-[#F0FF6C] before:rounded-full text-[16px] font-medium leading-[1.4em]">
           Your Vision, My Coding Expertise
          </li>
        </ul>
        <h1 className="text-[72px] leading-[1.2em] font-semibold mb-4">
          I'm Divya, <br /> MERN stack dev <br /> based in HYD
        </h1>
        <p className="text-gray-300 mb-6">
          Hi, I'm Divya Sri, a passionate MERN Stack Developer based in Hyderabad. I specialize in building dynamic, scalable web applications that blend clean code with seamless user experiences, with a focus on turning ideas into impactful digital solutions.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-gradient-to-r from-[#6cfcb5] to-[#F0FF6C] text-black rounded-full hover:bg-gradient-to-l transition-all duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-[#1f3d3b] text-[#6cfcb5] rounded-full flex items-center hover:text-[#F0FF6C] transition-colors">
            <span className="mr-2">Watch Intro</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Column - Image and Details */}
      <div className="md:w-1/2 relative flex justify-end">
        <div className="relative">
          <img src={mintBlob} alt="Mint Blob Background" className="absolute top-0 left-0 w-auto h-auto  z-0" />
          <img src={profileImage} alt="Profile" className="relative z-10" />
        </div>
      </div>
    </section>
  );
}