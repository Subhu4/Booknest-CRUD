import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-indigo-600 tracking-tight">
          BookNest
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-10 text-gray-700 font-semibold">
          <a href="#home" className="hover:text-indigo-600 transition duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-600 transition duration-300">
            About
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition duration-300">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-indigo-600">
            {/* You can add a hamburger icon here if you want */}
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
