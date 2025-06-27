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
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-md shadow-lg py-0"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between px-4 mt-0 container mx-auto">
        <div className="flex items-center gap-4 sm:gap-8 px-2 my-4">
          <div className="w-40 sm:w-64">
            <Image
              src="/images/logo.png"
              alt="Yaad Aayo Logo"
              width={250}
              height={123}
              priority
              className="w-[244px] h-auto"
            />
          </div>
          <nav className="hidden sm:flex gap-14 lg:gap-18 mx-8">
            {navLinks.map((text, i) => (
              <a
                key={i}
                href="#"
                className={`text-[23px] leading-[100%] tracking-[0] capitalize hover:text-purple-700 text-sm md:text-base whitespace-nowrap transition-colors duration-200 ${
                  isScrolled ? "text-gray-800" : "text-black"
                }`}
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {text}
              </a>
            ))}
          </nav>
        </div>

        {/* Login/Signup Button - Desktop */}
        <div className="hidden sm:block  bg-white text-purple-500 rounded-full px-4 py-2 lg:px-6 hover:bg-purple-50 transition-colors duration-200">
          <button className="text-purple-700 font-bold text-sm tracking-wide">
            LOGIN / SIGN UP
          </button>
        </div>

        {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
            <nav className="flex flex-col p-4">
              {navLinks.map((text, i) => (
                <a
                  key={i}
                  href="#"
                  className="py-3 px-4 text-black font-normal text-lg hover:text-purple-700 border-b border-gray-100"
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
      </div>
    </header>
  );
};

export default Header;
