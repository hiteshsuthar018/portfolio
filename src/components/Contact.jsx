import React from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qbsvpxt", // Replace with your EmailJS service ID
        "template_d725txg", // Replace with your EmailJS template ID
        e.target,
        "fOa1u7KgEWWRqmXfy" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          toast.success("Message sent successfully! 🎉", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          toast.error("Failed to send the message. Please try again. ❌", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <div id="contact" className="min-h-screen text-white flex items-center justify-center">
      <div className="w-full max-w-[95vw] md:max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-16 p-6 sm:p-8 xl:p-0">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
              talk
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="text-3xl sm:text-4xl">📧</span>
              <span className="text-gray-300 text-lg sm:text-xl md:text-2xl">
                meenasuthar3000@gmail.com
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-3xl sm:text-4xl">📞</span>
              <span className="text-gray-300 text-lg sm:text-xl md:text-2xl">+91 9636355670</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-3xl sm:text-4xl">📍</span>
              <span className="text-gray-300 text-lg sm:text-xl md:text-2xl">India</span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center p-6 sm:p-8 rounded-xl shadow-lg bg-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white">
            Get in touch
          </h2>
          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-400 text-sm sm:text-base md:text-lg mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-gray-700 text-white rounded-lg p-4 outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-400 text-sm sm:text-base md:text-lg mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-gray-700 text-white rounded-lg p-4 outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-400 text-sm sm:text-base md:text-lg mb-2"
              >
                Write your message here
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                className="w-full bg-gray-700 text-white rounded-lg p-4 outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-full py-4 sm:py-6 px-6 bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 hover:bg-purple-700 text-white text-base sm:text-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
