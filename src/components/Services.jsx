import React, { useState } from "react";

const Services = () => {
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
      

      const [selectedService, setSelectedService] = useState(null);

      const handleCardClick = (service) => {
        setSelectedService(service);
      };
    
      const closeModal = () => {
        setSelectedService(null);
      };
    
      return (
        <div id="services" className="min-h-screen text-white flex flex-col items-center py-10 px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-10 md:mb-20">
            <span className="relative">
              My Services
              <span className="absolute -bottom-1 left-0 w-1/4 h-1 bg-purple-500"></span>
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative cursor-pointer bg-black/30 rounded-xl p-6 md:p-8 border border-gray-700 text-left transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-transparent hover:bg-gradient-to-br hover:from-purple-600/50 hover:via-pink-500/40 hover:to-gray-900"
                onClick={() => handleCardClick(service)}
              >
                <div className="absolute -top-5 -left-5 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-lg font-bold shadow-md">
                  {service.id < 10 ? `0${service.id}` : service.id}
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
                  {service.title}
                </h2>
                <p className="text-sm md:text-lg leading-relaxed mb-6">{service.description[0]}</p>
                <p className="text-sm md:text-lg text-purple-400 flex items-center font-medium group hover:text-purple-500">
                  Read More{" "}
                  <span className="ml-2 transition-transform transform group-hover:translate-x-2">
                    →
                  </span>
                </p>
              </div>
            ))}
          </div>
    
          {/* Modal */}
          {selectedService && (
            <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
              <div className="bg-gray-900 rounded-2xl p-6 md:p-8 w-full max-w-md md:max-w-2xl text-left text-white relative">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl md:text-2xl font-bold"
                  onClick={closeModal}
                >
                  ×
                </button>
                <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
                  {selectedService.title}
                </h2>
                <ul className="text-sm md:text-lg space-y-2 md:space-y-4 list-disc list-inside">
                  {selectedService.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      );
    };

export default Services;
