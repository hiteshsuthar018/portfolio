
  import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
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

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

  return (
    <section 
      ref={ref}
      id="services"
      className="relative min-h-screen text-white py-20 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-gradient-to-br from-black to-gray-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-orange-500 filter blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 md:mb-20 text-center"
        >
          <span className="relative inline-block">
            My Services
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full transform -translate-y-1 origin-left"
            ></motion.span>
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative cursor-pointer bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-700 text-left transition-all duration-500 hover:shadow-xl hover:border-transparent hover:bg-gradient-to-br hover:from-purple-600/50 hover:via-pink-500/40 hover:to-gray-900/50 backdrop-blur-sm"
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
              <p className="text-sm md:text-base text-purple-400 flex items-center font-medium group hover:text-purple-300 transition-colors">
                Read More{" "}
                <span className="ml-2 transition-transform group-hover:translate-x-2">
                  →
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative bg-gray-900 rounded-2xl p-6 md:p-8 w-full max-w-md md:max-w-2xl text-left border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl md:text-3xl font-bold transition-colors"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-6">
              {selectedService.title}
            </h2>
            <ul className="text-sm md:text-base space-y-3 md:space-y-4 list-disc list-inside text-gray-300">
              {selectedService.description.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Services;