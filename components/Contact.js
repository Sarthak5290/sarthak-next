"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, _subject, message } = event.target.elements;

    // Check if any field is empty and show a toast error
    if (!name.value || !email.value || !message.value) {
      toast.error("All fields are required!", {
        position: "bottom-right", // Positioning the toast at the bottom-right corner
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("_subject", _subject.value);
    formData.append("message", message.value);

    try {
      const response = await fetch("https://formspree.io/f/xkggjeyl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        toast.success("Message sent successfully!", {
          position: "bottom-right", // Positioning the toast at the bottom-right corner
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        event.target.reset();
      } else {
        setStatus("ERROR");
        toast.error("Failed to send the message. Please try again.", {
          position: "bottom-right", // Positioning the toast at the bottom-right corner
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("ERROR");
      toast.error("Failed to send the message. Please try again.", {
        position: "bottom-right", // Positioning the toast at the bottom-right corner
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const inputStyle =
    "shadow mb-4 appearance-none bg-gray-800/50 border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300";

  return (
    <div className="min-h-screen py-6 flex flex-col items-center justify-center sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full sm:w-4/5 lg:w-4/5"
      >
        <div className="relative px-6 py-8 shadow-lg sm:rounded-3xl sm:p-16 border border-gray-800">
          <div className="text-center pb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Get in Touch
            </h1>
            <p className="text-gray-400">
              Fill up the form below to send us a message.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="Your name"
                  name="name"
                  id="name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  className={inputStyle}
                  type="email"
                  placeholder="your@email.com"
                  name="email"
                  id="email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="What's this about?"
                  name="_subject"
                  id="subject"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="message"
                  className="-mt-5 pb-1 block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  className={`${inputStyle} h-36 resize-none`}
                  placeholder="Your message here..."
                  name="message"
                  id="message"
                />
              </div>
            </div>

            <div className="flex justify-between pt-4 sm:col-span-2">
              <button
                type="reset"
                className="px-6 py-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contact;
