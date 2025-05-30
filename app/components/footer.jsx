"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 flex flex-col items-center space-y-3">
      <div className="flex space-x-6 text-2xl">
        <a
          href="https://github.com/ailacqua"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/ailacqua"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="font-poppins text-sm select-none">
        &copy; {new Date().getFullYear()} Alex Ilacqua. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;