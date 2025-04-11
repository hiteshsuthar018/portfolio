import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMenu, FiX } from "react-icons/fi";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col gap-9 scroll-smooth text-white bg-black">
      <Navbar />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

const Navbar = () => {
  const navItems = ["Home", "About", "Services", "Contact"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? "py-2 bg-gray-900 shadow-lg" : "py-4 bg-black"
    }`}>
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
            <a href="#" className="hover:scale-105 transition-transform duration-300">
              Portfolio
            </a>
          </div>

          <button
            className="lg:hidden text-3xl text-white focus:outline-none transition-transform duration-300 hover:scale-110"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX className="animate-spin-in" /> : <FiMenu className="animate-pulse" />}
          </button>

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

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}>
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

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} id="about" className="relative py-20 md:py-32 px-6 lg:px-16 xl:px-24 w-full bg-gradient-to-br from-black to-gray-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-orange-500 filter blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={controls}
        className="mb-12 relative group flex flex-col items-center"
      >
        <div className="relative overflow-hidden rounded-full shadow-xl w-36 h-36 lg:w-48 lg:h-48 mx-auto border-4 border-white/10">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/400";
            }}
          />
        </div>
      </motion.div>

      <motion.h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-center">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
          Meena Suthar ACCA
        </span>
        <br /> 
        <span className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-300 mt-4 block">
          US Accountant & Tax Associate
        </span>
      </motion.h1>

      <motion.p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-300 mb-12 max-w-4xl mx-auto text-center">
        I am a USA Accountant and Tax Associate from India with <span className="text-white font-medium">4 years</span> of experience working with multiple clients across various industries.
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-6 justify-center w-full max-w-2xl mx-auto">
        <a
          href="mailto:meenasuthar3000@gmail.com?subject=Let's Connect&body=Hi Meena,"
          className="relative px-8 py-4 lg:px-10 lg:py-5 rounded-full text-lg font-medium overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 group-hover:from-purple-500 group-hover:to-orange-400 transition-all duration-300"></span>
          <span className="relative z-10 flex items-center justify-center gap-2">
            Connect with me
          </span>
        </a>

        <a
          href="https://drive.google.com/file/d/114LG2Bgadp7vNuX2Hcm2ArgV3efjqwYt/view?usp=drivesdk"
          className="relative px-8 py-4 lg:px-10 lg:py-5 rounded-full text-lg font-medium overflow-hidden group border border-white/20 hover:border-white/40 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            My Resume
          </span>
        </a>
      </div>
      
      <AboutMe />
      <StatsSection />
    </section>
  );
};

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section className="relative py-20 px-8 sm:px-16 lg:px-24 xl:px-32 w-full">
      <motion.h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-16 text-center tracking-tight">
        About{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            me
          </span>
        </span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-16 items-center w-full max-w-7xl mx-auto">
        <motion.div className="w-full lg:w-1/2 flex justify-center relative group">
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full max-w-xl transform transition-all duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2 space-y-8">
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
            I am an experienced <span className="text-white font-medium">US Accountant and Tax Associate</span> with over <span className="text-pink-400 font-bold">4 years</span> of professional expertise in the field.
          </p>
          
          <div className="space-y-8 pt-4">
            {[
              { skill: "Excel", width: "w-3/5", level: "Advanced" },
              { skill: "Drake", width: "w-4/5", level: "Expert" },
              { skill: "QuickBooks", width: "w-4/5", level: "Expert" },
              { skill: "Xero", width: "w-3/4", level: "Advanced" },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-lg sm:text-xl lg:text-xl font-medium text-white">
                    {item.skill}
                  </span>
                  <span className="text-sm text-gray-400">{item.level}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r from-pink-500 to-orange-500 ${item.width}`}></div>
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
    { value: 4, label: "YEARS OF EXPERIENCE" },
    { value: 90, label: "PROJECTS COMPLETED" },
    { value: 15, label: "HAPPY CLIENTS" },
  ];

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 md:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center mx-4 md:mx-8 text-center group">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                {stat.value}+
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-400 uppercase mt-2 md:mt-4 tracking-wider">
                {stat.label}
              </p>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 mx-4 md:mx-8"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const services = [
    {
      id: 1,
      title: "Tax Preparation",
      description: [
        "Preparation of individual tax returns (Form 1040) and foreign income exclusion (Form 2555).",
        "Handling business tax returns such as 1065 (Partnership), 1120 (C-Corp), 1120S (S-Corp), and 990 (Nonprofit).",
        "Strategic tax planning to optimize deductions and ensure compliance with U.S. tax laws.",
        "Assistance with tax audits and representation before tax authorities to resolve disputes.",
        "Evaluation of investment portfolios for tax-efficient growth strategies.",
        "Preparation of state tax returns and multi-state income allocation for individuals and businesses.",
        "Identification of eligible tax credits such as R&D, small business, and energy-efficient credits.",
        "Support with estimated tax calculations and quarterly payments for freelancers and contractors.",
      ],
    },
    {
      id: 2,
      title: "Payroll Services",
      description: [
        "Preparation of payroll tax filings, including 941 (Employer’s Quarterly Federal Tax Return) and NYS-45 (New York State filings).",
        "Proficiency in ADP payroll software for seamless payroll management.",
        "Handling gross-up calculations to provide accurate payroll outputs.",
        "Preparation and filing of year-end forms such as W-2s and 1099s for employees and contractors.",
        "Setting up direct deposits to streamline employee salary disbursements.",
        "Ensuring compliance with federal, state, and local payroll tax regulations.",
        "Managing garnishments, deductions, and benefits integrations into payroll systems.",
        "Developing detailed payroll reports for management insights and decision-making.",
      ],
    },
    {
      id: 3,
      title: "Sales & Use Tax",
      description: [
        "Accurate filing of sales and use tax returns.",
        "Ensuring compliance with state and local tax regulations.",
        "Support for businesses operating across multiple jurisdictions.",
        "Analysis of nexus to determine tax obligations across different states.",
        "Consultation on sales tax exemptions and how to properly apply them.",
        "Regular reviews of sales tax filings to identify discrepancies and avoid penalties.",
        "Preparation for audits by state or local authorities and providing representation.",
        "Assistance with registration and setup of sales tax accounts in new jurisdictions.",
      ],
    },
    {
      id: 4,
      title: "Accounting & Bookkeeping",
      description: [
        "Industry-specific expertise: Food Services, Real Estate, Social Media Influencers, and Healthcare.",
        "Categorization of income and expenses, recording general journal entries.",
        "Account reconciliation to ensure financial accuracy and clarity.",
        "Preparation of monthly, quarterly, and annual financial reports for business review.",
        "Cash flow management and forecasting for better financial planning.",
        "Support with accounts receivable and payable to ensure timely invoicing and payments.",
        "QuickBooks setup and training for small businesses to manage their books effectively.",
        "Maintaining compliance with accounting standards such as US GAAP and IFRS.",
      ],
    },
    {
      id: 5,
      title: "Financial Analysis",
      description: [
        "Adherence to US GAAP standards for comprehensive financial analysis.",
        "Review and interpretation of financial statements.",
        "Providing actionable recommendations to improve cash flow and reduce costs.",
        "Assessment of profitability and cost-efficiency across different business units.",
        "Developing financial models to evaluate business performance and growth potential.",
        "Forecasting revenue and expense trends to assist with budgeting and strategic planning.",
        "Analyzing key financial ratios to identify areas of improvement and growth opportunities.",
        "Preparing detailed investor reports and presentations to support fundraising efforts.",
      ],
    },
  ];


  const handleCardClick = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="services" className="relative min-h-screen py-20 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-gradient-to-br from-black to-gray-900">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 md:mb-20 text-center">
        My Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {services.map((service) => (
          <div 
            key={service.id}
            className="relative cursor-pointer bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            onClick={() => handleCardClick(service)}
          >
            <div className="absolute -top-5 -left-5 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-lg font-bold shadow-lg">
              {service.id < 10 ? `0${service.id}` : service.id}
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
              {service.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 text-gray-300">
              {service.description[0]}
            </p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="relative bg-gray-900 rounded-2xl p-6 md:p-8 w-full max-w-md md:max-w-2xl text-left border border-gray-700 shadow-2xl">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl md:text-3xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-6">
              {selectedService.title}
            </h2>
            <ul className="text-sm md:text-base space-y-3 md:space-y-4 list-disc list-inside text-gray-300">
              {selectedService.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_qbsvpxt", "template_d725txg", e.target, "fOa1u7KgEWWRqmXfy")
      .then(() => {
        toast.success("Message sent successfully! 🎉");
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
    e.target.reset();
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-900 to-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Let's talk
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            I'm currently available to take on new projects.
          </p>
          <ul className="space-y-6">
            {[
              { icon: "📧", text: "meenasuthar3000@gmail.com" },
              { icon: "📞", text: "+91 9636355670" },
              { icon: "📍", text: "India" }
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-gray-300 text-lg md:text-xl">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative p-8 rounded-2xl shadow-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Get in touch
          </h2>
          <form onSubmit={sendEmail} className="space-y-6">
            {[
              { id: "name", label: "Your Name", type: "text" },
              { id: "email", label: "Your Email", type: "email" },
              { id: "message", label: "Your Message", type: "textarea" }
            ].map((field) => (
              <div key={field.id}>
                <label className="block text-gray-400 text-sm md:text-base mb-2">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows="5"
                    className="w-full bg-gray-700/50 text-white rounded-lg p-4 outline-none focus:ring-2 focus:ring-purple-500 border border-gray-600"
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    className="w-full bg-gray-700/50 text-white rounded-lg p-4 outline-none focus:ring-2 focus:ring-purple-500 border border-gray-600"
                    required
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium text-lg md:text-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-3xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text">M</span>
              eena
            </h1>
            <p className="text-gray-300 mt-2">
              US Accountant & Tax Associate
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end space-y-4">
            <h3 className="text-lg font-medium">Connect with me</h3>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/meena-suthar-63a75a175/" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href="mailto:meenasuthar3000@gmail.com" className="text-gray-400 hover:text-white">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Meena Suthar. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default App;