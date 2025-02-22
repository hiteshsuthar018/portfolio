import React from "react";

const AboutMe = () => {
  return (
    <section className=" text-white py-20 px-8 sm:px-16 lg:px- flex flex-col items-center justify-center w-full">
      {/* Section Heading */}
      <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-16 text-center tracking-wide">
        About{" "}
        <span className="relative text-pink-500">
          me
          <span className="absolute bg-pink-500 h-2 w-14 rounded-full bottom-0 left-0 -z-10 transform translate-y-3"></span>
        </span>
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-16 items-center w-full max-w-[80vw] mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/profile.jpg" // Replace with your actual image path
            alt="Profile"
            className="rounded-lg w-full max-w-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-3/4">
          <p className="mb-8 text-lg sm:text-xl lg:text-2xl leading-loose">
            I am an experienced US Accountant and Tax associate with over a 4
            year of professional expertise in the field. Throughout my career, I
            have had the privilege of collaborating with prestigious
            organizations, contributing to their success and growth.
          </p>
          <p className="mb-12 text-lg sm:text-xl lg:text-2xl leading-loose">
            My passion for financial analysis and tax compliance is reflected in
            my extensive experience, as well as the enthusiasm and dedication I
            bring to ensuring accurate and efficient tax calculations for
            clients.
          </p>

          {/* Skill Bars */}
          <div className="space-y-8 ">
            {[
              { skill: "Excel", width: "w-3/5" },
              { skill: "Drake", width: "w-4/5" },
              { skill: "Quick Book", width: "w-4/5" },
              { skill: "Xero", width: "w-3/4" },
            ].map((item, index) => (
              <div
                key={index}
                className="hover:scale-105 cursor-pointer transition-transform duration-300"
              >
                <div className="flex justify-between ">
                  <span className="text-lg sm:text-xl lg:text-2xl">
                    {item.skill}
                  </span>
                </div>
                <div className=" rounded-full h-3 ">
                  <div
                    className={`bg-gradient-to-r from-pink-500  to-orange-500 h-3 rounded-full ${item.width} hover:opacity-75 transition-opacity duration-300`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "4+", label: "YEARS OF EXPERIENCE" },
    { value: "90+", label: "PROJECTS COMPLETED" },
    { value: "15+", label: "HAPPY CLIENTS" },
  ];

  return (
    <section className="text-white py-12 px-6 md:py-20 flex justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            {/* Statistic Item */}
            <div className="flex flex-col items-center mx-4 md:mx-8 text-center group cursor-pointer">
              {/* Value with Hover Effect */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-xs md:text-sm lg:text-lg text-gray-400 uppercase mt-2 md:mt-4 tracking-wider group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>
            </div>

            {/* Vertical Divider for Non-Last Items */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-[2px] h-16 md:h-20 bg-white mx-4 md:mx-8"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <>
      <section
        id="about"
        className=" text-white flex flex-col items-center justify-center text-center px-6 lg:px-48"
      >
        <div className="mb-8">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-36 h-36 lg:w-72 lg:h-72 rounded-full mx-auto object-cover"
          />
        </div>
        <h1 className="text-3xl lg:text-8xl font-bold leading-tight mb-4">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
            Meena Suthar ACCA
          </span>
          <br /> US Accountant & Tax Associate.
        </h1>
        <p className="text-lg lg:text-3xl lg:leading-10 mb-8">
          I am USA Accountant and Tax Associate from India with 4 years of
          experience with <br /> multiple clients.
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <a
            href="mailto:meenasuthar3000@gmail.com?subject=Let's Connect&body=Hi Meena,"
            className="lg:px-12 p-7 py-10 lg:w-72 rounded-full text-xl font-medium bg-gradient-to-r from-purple-700 to-orange-500 hover:opacity-90 transition"
          >
            Connect with me
          </a>
          <a
            href="https://drive.google.com/file/d/114LG2Bgadp7vNuX2Hcm2ArgV3efjqwYt/view?usp=drivesdk "
            className="lg:px-12 p-7 py-10 lg:w-72 rounded-full text-xl font-medium border border-white hover:bg-gray-800 transition"
          >
            My resume
          </a>
        </div>
      </section>
      <AboutMe />
      <StatsSection />
    </>
  );
};

export default About;
