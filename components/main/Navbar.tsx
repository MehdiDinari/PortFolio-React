import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin,FaEnvelope } from "react-icons/fa"; // Import des icônes

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014cc] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        
        {/* Logo / Portfolio Name */}
        <a href="#about-me" className="flex flex-row items-center">
          <span className="font-bold ml-[8px] hidden md:block text-white text-lg tracking-wide">
            Portfolio
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex w-[500px] h-full items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 shadow-md">
            {["About me", "Skills", "Projects"].map((section, index) => (
              <a
                key={index}
                href={`#${section.toLowerCase().replace(" ", "-")}`}
                className="relative cursor-pointer group transition duration-300 ease-in-out"
              >
                <span className="group-hover:text-indigo-400 transition">
                  {section}
                </span>
                {/* Underline effect */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 items-center">
          {/* GitHub Icon */}
          <a
            href="https://github.com/MehdiDinari" // Remplace par ton GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition transform hover:scale-110 duration-300"
          >
            <FaGithub size={26} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/mehdi-dinari-b0487a2a9/" // Remplace par ton LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110 duration-300"
          >
            <FaLinkedin size={26} />
          </a>
         {/* Email */}
                <a
                  href="mailto:treshlol202@gmail.com"
                  className="text-gray-300 hover:text-indigo-400 transition transform hover:scale-110 duration-300"
                >
                  <FaEnvelope size={26} />
                </a>


        </div>
      </div>
    </div>
  );
};

export default Navbar;
