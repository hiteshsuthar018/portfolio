import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
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

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qbsvpxt",
        "template_d725txg",
        e.target,
        "fOa1u7KgEWWRqmXfy"
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
    e.target.reset();
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

  return (
    <section 
      ref={ref}
      id="contact"
      className="relative min-h-screen text-white py-20 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-orange-500 filter blur-3xl"></div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full max-w-7xl mx-auto">
        {/* Left Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-8"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
                talk
              </span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full transform -translate-y-1 origin-left"
              ></motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300"
          >
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </motion.p>

          <motion.ul 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { icon: "📧", text: "meenasuthar3000@gmail.com" },
              { icon: "📞", text: "+91 9636355670" },
              { icon: "📍", text: "India" }
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-gray-300 text-lg md:text-xl group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative p-8 rounded-2xl shadow-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Get in touch
          </motion.h2>
          
          <form onSubmit={sendEmail} className="space-y-6">
            {[
              { id: "name", label: "Your Name", type: "text" },
              { id: "email", label: "Your Email", type: "email" },
              { id: "message", label: "Your Message", type: "textarea" }
            ].map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <label
                  htmlFor={field.id}
                  className="block text-gray-400 text-sm md:text-base mb-2"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows="5"
                    className="w-full bg-gray-700/50 text-white rounded-lg p-4 outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 border border-gray-600 hover:border-purple-400"
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    className="w-full bg-gray-700/50 text-white rounded-lg p-4 outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 border border-gray-600 hover:border-purple-400"
                    required
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium text-lg md:text-xl transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/30 hover:from-purple-500 hover:to-orange-400"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;