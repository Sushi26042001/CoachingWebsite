// src/Components/Navbar/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ scrolled, setIsMenuOpen, isMenuOpen }) {
  const [authMenuOpen, setAuthMenuOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // "signin" | "signup"
  const authRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (authRef.current && !authRef.current.contains(e.target)) {
        setAuthMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/Logo.jpg"
            alt="Logo"
            className={`transition-all duration-300 ${
              scrolled ? "w-14 h-14" : "w-16 h-16"
            }`}
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

          {/* Home */}
          <Link
            to="/"
            className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Other Links */}
          {["Courses", "Brochure", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Settings */}
          <Link
            to="/settings"
            className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
          >
            Settings
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </nav>

        {/* Auth Menu Icon */}
        <div ref={authRef} className="relative hidden md:block">
          <button
            onClick={() => setAuthMenuOpen(!authMenuOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center space-y-1 rounded-md border border-blue-200 hover:bg-blue-50 transition"
          >
            <span className="w-5 h-0.5 bg-blue-700"></span>
            <span className="w-5 h-0.5 bg-blue-700"></span>
            <span className="w-5 h-0.5 bg-blue-700"></span>
          </button>

          {authMenuOpen && (
            <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border">
              <button
                onClick={() => {
                  setModalType("signin");
                  setAuthMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-sm hover:bg-blue-50"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setModalType("signup");
                  setAuthMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-sm hover:bg-blue-50"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 w-6 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-blue-700 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-blue-700 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-blue-700 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* ================= MODAL ================= */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setModalType(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-br from-sky-100 to-blue-200 py-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md">
                <span className="text-2xl">↗</span>
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-800">
                {modalType === "signin" ? "Sign in with email" : "Sign up with email"}
              </h2>
              <p className="text-sm text-gray-600 mt-1 text-center px-6">
                Make a new account to bring your learning journey together. For free.
              </p>
            </div>

            <div className="p-6 space-y-4">
              {modalType === "signup" && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border bg-gray-50 px-11 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute left-4 top-3.5 text-gray-400">👤</span>
                </div>
              )}

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border bg-gray-50 px-11 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute left-4 top-3.5 text-gray-400">✉️</span>
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border bg-gray-50 px-11 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute left-4 top-3.5 text-gray-400">🔒</span>
                <span className="absolute right-4 top-3.5 text-gray-400 cursor-pointer">
                  👁
                </span>
              </div>

              {modalType === "signin" && (
                <div className="text-right text-sm">
                  <button className="text-blue-600 hover:underline">
                    Forgot password?
                  </button>
                </div>
              )}

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:opacity-90 transition">
                {modalType === "signin" ? "Get Started" : "Create Account"}
              </button>

              <p className="text-center text-sm text-gray-600">
                {modalType === "signin" ? (
                  <>
                    Don’t have an account?{" "}
                    <button
                      onClick={() => setModalType("signup")}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setModalType("signin")}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Sign In
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
