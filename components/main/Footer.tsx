import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#030014] text-gray-300 text-center py-4">
      <p className="text-lg mb-3">If you wanna contact me, join me on:</p>

      {/* Icônes cliquables */}
      <div className="flex justify-center gap-6">
        {/* Email */}
        <a
          href="mailto:treshlol202@gmail.com"
          className="text-gray-300 hover:text-indigo-400 transition transform hover:scale-110 duration-300"
        >
          <FaEnvelope size={26} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mehdi-dinari-b0487a2a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110 duration-300"
        >
          <FaLinkedin size={26} />
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-sm text-gray-500">
        &copy; Mehdi Dinari 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;