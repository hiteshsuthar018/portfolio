import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navItems = ["Home", "About", "Services", "Contact"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-6 lg:px-48 shadow-md bg-black sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold ">Portfolio</div>

        {/* Hamburger menu for mobile */}
        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-12 text-xl items-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:cursor-pointer flex items-center justify-center hover:bg-fuchsia-600 h-12 text-center rounded-full px-6 transition-colors duration-300"
            >
              <a href={`#${item.toLowerCase()}`} className="">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex text-xl h-12 rounded-full px-6 items-center bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 text-white">
          <a href="mailto:meenasuthar3000@gmail.com?subject=Let's Connect&body=Hi Meena,">
            Connect with me
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden mt-4 space-y-4 text-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:cursor-pointer hover:bg-fuchsia-600 text-lg py-3 rounded-lg transition-colors duration-300"
            >
              <a href={`#${item.toLowerCase()}`} className="block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
