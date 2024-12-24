"use client";

import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, } from "react-icons/fa";

const NewsletterSignup = () => {
  return (
    <section className="bg-gradient-to-b from-[#050E28] to-[#0f0f1a] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center rounded-xl bg-[#122455] shadow-lg py-12 px-8">
        {/* Header Section */}
        <h2 className="text-lg font-semibold text-gray-300 tracking-wider uppercase mb-4">
          Let’s Stay Connected
        </h2>
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://uk.linkedin.com/in/jonatayo"
             target="_blank"
            className="text-[#122455] bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://x.com/jonat_ayo" target="_blank"
            className="text-[#122455] bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
             href="https://www.instagram.com/ayodelejona/" target="_blank"
            className="text-[#122455] bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.youtube.com/@jonathanayodele" target="_blank"
            className="text-[#122455] bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <FaYoutube className="text-xl" />
          </a>
        </div>
        {/* Subscription Prompt */}
        <h3 className="text-xl text-red-200 font-medium mb-6">
          Subscribe to my weekly articles
        </h3>
        {/* Newsletter Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-md text-gray-900 outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#8B0000] text-white font-semibold rounded-md hover:bg-orange-600 shadow-lg transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
      {/* Footer Section */}
      <div className="mt-8 text-center text-gray-400">
        <p>Email: jonaayodele@gmail.com</p>
        <p>From my babygirl, Michelle Onyebuchi Okonicha</p>
        <p className="mt-4">&copy; Jonathan Ayodele - All rights reserved.</p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
