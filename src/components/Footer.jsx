import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold">
            Ale
            <span className="text-transparent bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text">X</span>
          </h1>
          <p className="text-gray-300 mt-2">
          I'm Meena Suthar, US Accountant & Tax Associate</p>
        </div>

        
      </div>

      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p className="mb-4 md:mb-0">
          © All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/meena-suthar-63a75a175/" className="hover:text-white transition">
            linkedin
          </a>
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;
