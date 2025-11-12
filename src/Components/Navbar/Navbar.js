// src/Components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ scrolled, setIsMenuOpen, isMenuOpen }) {
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img
          src="/Logo.jpg"
          alt="Logo"
          className={`transition-all duration-300 ${scrolled ? "w-10 h-10" : "w-12 h-12"}`}
        />
        <h1
          className={`font-bold text-blue-700 transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          MVP Vishwakosha IAS Academy
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">

         <Link
          to="/"
          className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        {["Courses", "Toppers", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}

        {/* ✅ Settings Page Link */}
        <Link
          to="/settings"
          className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
        >
          Settings
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>

      {/* Register Button */}
      <button className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
        Register Now
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1.5 w-6 h-6 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`w-6 h-0.5 bg-blue-700 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-blue-700 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-blue-700 transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
    </div>
  );
}

export default Navbar;
