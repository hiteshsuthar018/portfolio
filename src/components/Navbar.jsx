import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navItems = ["Home", "About", "Services", "Contact"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2 bg-gray-900 shadow-lg" : "py-4 bg-black"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
            <a href="#" className="hover:scale-105 transition-transform duration-300">
              Portfolio
            </a>
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="lg:hidden text-3xl text-white focus:outline-none transition-transform duration-300 hover:scale-110"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="animate-spin-in" />
            ) : (
              <FiMenu className="animate-pulse" />
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 xl:gap-8 text-lg items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white hover:text-fuchsia-400 px-4 py-2 transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="mailto:meenasuthar3000@gmail.com?subject=Let's Connect&body=Hi Meena,"
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-500 rounded-full group bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-400 hover:to-orange-400"
            >
              <span className="relative z-10">Connect with me</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full"></span>
            </a>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-3 py-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-white hover:bg-fuchsia-600 rounded-lg transition-all duration-300 hover:pl-6 hover:shadow-lg hover:shadow-fuchsia-500/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:meenasuthar3000@gmail.com?subject=Let's Connect&body=Hi Meena,"
                className="block px-4 py-3 mt-2 text-center text-white bg-gradient-to-r from-purple-700 to-pink-500 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect with me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;