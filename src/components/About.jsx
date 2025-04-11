import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

  return (
    <section 
      ref={ref}
      className="relative text-white py-20 px-8 sm:px-16 lg:px-24 xl:px-32 w-full overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-fuchsia-500 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-16 text-center tracking-tight"
      >
        About{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            me
          </span>
          <motion.span 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full transform -translate-y-2 origin-left"
          ></motion.span>
        </span>
      </motion.h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-16 items-center w-full max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center relative group"
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full max-w-xl transform transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-700 -rotate-6 scale-90 group-hover:scale-95"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
            I am an experienced <span className="text-white font-medium">US Accountant and Tax Associate</span> with over <span className="text-pink-400 font-bold">4 years</span> of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
            My passion for <span className="text-white font-medium">financial analysis</span> and <span className="text-white font-medium">tax compliance</span> is reflected in my extensive experience, as well as the enthusiasm and dedication I bring to ensuring accurate and efficient tax calculations for clients.
          </p>

          {/* Skill Bars */}
          <div className="space-y-8 pt-4">
            {[
              { skill: "Excel", width: "w-3/5", level: "Advanced" },
              { skill: "Drake", width: "w-4/5", level: "Expert" },
              { skill: "QuickBooks", width: "w-4/5", level: "Expert" },
              { skill: "Xero", width: "w-3/4", level: "Advanced" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg sm:text-xl lg:text-xl font-medium text-white">
                    {item.skill}
                  </span>
                  <span className="text-sm text-gray-400">{item.level}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-pink-500 to-orange-500 ${item.width} transition-all duration-1000 ease-out group-hover:brightness-110`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const [counted, setCounted] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setCounted(true);
      controls.start("visible");
    }
  }, [controls, inView]);

  const stats = [
    { value: 4, label: "YEARS OF EXPERIENCE" },
    { value: 90, label: "PROJECTS COMPLETED" },
    { value: 15, label: "HAPPY CLIENTS" },
  ];

  return (
    <section 
      ref={ref}
      className="relative text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-pink-500 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-orange-500 filter blur-3xl"></div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 md:gap-0">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: index * 0.2 }
              }
            }}
            className="flex items-center"
          >
            {/* Statistic Item */}
            <div className="flex flex-col items-center mx-4 md:mx-8 text-center group cursor-default">
              {/* Value with counting animation */}
              <motion.h3
                animate={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.5, delay: 0.8 + index * 0.2 }
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400"
              >
                {counted ? `${stat.value}+` : "0+"}
              </motion.h3>

              {/* Label */}
              <p className="text-xs md:text-sm lg:text-base text-gray-400 uppercase mt-2 md:mt-4 tracking-wider group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>
            </div>

            {/* Vertical Divider for Non-Last Items */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 mx-4 md:mx-8"></div>
            )}
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative text-white py-20 md:py-32 px-6 lg:px-16 xl:px-24 w-full bg-gradient-to-br from-black to-gray-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-orange-500 filter blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="mb-12 relative group flex flex-col items-center"
      >
        <div className="relative overflow-hidden rounded-full shadow-xl w-36 h-36 lg:w-48 lg:h-48 mx-auto border-4 border-white/10">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
        </div>
        <div className="absolute -inset-4 rounded-full border-2 border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-700 -z-10 group-hover:inset-0 group-hover:opacity-70"></div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-center"
      >
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
          Meena Suthar ACCA
        </span>
        <br /> 
        <span className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-300 mt-4 block">
          US Accountant & Tax Associate
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-300 mb-12 max-w-4xl mx-auto text-center"
      >
        I am a USA Accountant and Tax Associate from India with <span className="text-white font-medium">4 years</span> of experience working with multiple clients across various industries.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col lg:flex-row gap-6 justify-center w-full max-w-2xl mx-auto"
      >
        <a
          href="mailto:meenasuthar3000@gmail.com?subject=Let's Connect&body=Hi Meena,"
          className="relative px-8 py-4 lg:px-10 lg:py-5 rounded-full text-lg font-medium overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 group-hover:from-purple-500 group-hover:to-orange-400 transition-all duration-300"></span>
          <span className="absolute inset-0.5 rounded-full bg-black group-hover:bg-transparent transition-all duration-300"></span>
          <span className="relative z-10 flex items-center justify-center gap-2">
            Connect with me
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>

        <a
          href="https://drive.google.com/file/d/114LG2Bgadp7vNuX2Hcm2ArgV3efjqwYt/view?usp=drivesdk"
          className="relative px-8 py-4 lg:px-10 lg:py-5 rounded-full text-lg font-medium overflow-hidden group border border-white/20 hover:border-white/40 transition-all duration-300"
        >
          <span className="absolute inset-0 bg-white/5 group-hover:bg-white/10 backdrop-blur-sm transition-all duration-300"></span>
          <span className="relative z-10 flex items-center justify-center gap-2">
            My Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </span>
        </a>
      </motion.div>
      <AboutMe />
      <StatsSection />
    </section>
  );
};

export default About;