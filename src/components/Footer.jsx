import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

  return (
    <footer 
      ref={ref}
      className="relative text-white py-16 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-orange-500 filter blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Section */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-3xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-transparent bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text">M</span>
              eena
            </motion.h1>
            <motion.p 
              className="text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              US Accountant & Tax Associate
            </motion.p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center lg:items-end space-y-4"
          >
            <h3 className="text-lg font-medium">Connect with me</h3>
            <div className="flex space-x-6">
              <motion.a
                href="https://www.linkedin.com/in/meena-suthar-63a75a175/"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
              <motion.a
                href="mailto:meenasuthar3000@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-700 my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>© {new Date().getFullYear()} Meena Suthar. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed with ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


