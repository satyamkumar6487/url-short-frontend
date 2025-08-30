import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-6 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Side - Copyright */}
        <p className="text-sm text-gray-500">
          © 2024 Linklytics. All rights reserved.
        </p>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-purple-600">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-500 hover:text-purple-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-500 hover:text-purple-600">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-500 hover:text-purple-600">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
