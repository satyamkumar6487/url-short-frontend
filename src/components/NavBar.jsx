import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white font-bold text-xl">
        Linklytics
      </div>

      {/* Links */}
      <div className="flex space-x-6 text-white font-medium">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/about" className="hover:text-gray-200">About</Link>
      </div>

      {/* Signup Button */}
      <div>
        <Link
          to="/register"
          className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          SignUp
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
