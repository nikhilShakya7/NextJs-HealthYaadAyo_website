import React from "react";

const Button = ({ label }: { label: string }) => {
  return (
    <button className="relative z-0 mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-[#7131A3] text-white font-medium text-xs xs:text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
      {label}
    </button>
  );
};

export default Button;
