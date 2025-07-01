"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ["Find Doctors", "Video Consult", "Medicine", "Lab"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Logo + Nav */}
        <div className="flex items-center gap-4 sm:gap-10">
          {/* Logo */}
          <div className="w-36 sm:w-44 md:w-52">
            <Image
              src="/images/logo.png"
              alt="Yaad Aayo Logo"
              width={244}
              height={80}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-4 md:gap-8">
            {navLinks.map((text, i) => (
              <a
                key={i}
                href="#"
                className={`text-sm md:text-base lg:text-lg capitalize hover:text-purple-700 transition-colors duration-200 ${
                  isScrolled ? "text-gray-800" : "text-black"
                }`}
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {text}
              </a>
            ))}
          </nav>
        </div>

        {/* Desktop Button */}
        <div className="hidden sm:block">
          <button className="bg-white text-purple-700 font-bold text-sm tracking-wide rounded-full px-4 py-2 lg:px-6 hover:bg-purple-50 transition-colors duration-200">
            LOGIN / SIGN UP
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="sm:hidden focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes
              size={24}
              className={isScrolled ? "text-gray-800" : "text-purple-700"}
            />
          ) : (
            <FaBars
              size={24}
              className={isScrolled ? "text-gray-800" : "text-purple-700"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-md z-40">
          <nav className="flex flex-col p-4">
            {navLinks.map((text, i) => (
              <a
                key={i}
                href="#"
                className="py-3 px-4 text-black font-normal text-base hover:text-purple-700 border-b border-gray-200"
                style={{ fontFamily: "Raleway, sans-serif" }}
                onClick={() => setIsMenuOpen(false)}
              >
                {text}
              </a>
            ))}
            <div className="mt-4 border border-purple-500 text-purple-500 rounded-full px-4 py-2 hover:bg-purple-50 transition-colors duration-200 text-center">
              <button className="text-purple-700 font-bold text-sm tracking-wide">
                LOGIN / SIGN UP
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
