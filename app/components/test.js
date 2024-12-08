"use client";

import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is provided
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    // Logic for submitting the email (you can connect to a backend here)
    console.log('Email submitted:', email);

    // Simulate a successful subscription
    setMessage('Thank you for subscribing! You will receive weekly articles.');
    setEmail(''); // Reset email input
  };

  return (
    <section className="bg-gradient-to-b from-[#050E28] to-[#0f0f1a] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center rounded-lg bg-[#122455] shadow-lg py-12 px-8">
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
            href="https://web.facebook.com/jonat.ayo/?_rdc=1&_rdr#" target="_blank"
            className="text-[#122455] bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <FaFacebook className="text-xl" />
          </a>
        </div>
        {/* Subscription Prompt */}
        <h3 className="text-xl text-red-200 font-medium mb-6">
          Subscribe to my weekly articles
        </h3>
        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 rounded-md text-gray-900 outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-orange-600 shadow-lg transition-colors"
          >
            Subscribe
          </button>
        </form>
        
        {/* Display Subscription Message */}
        {message && (
          <p className="mt-4 text-lg text-yellow-400">{message}</p>
        )}
      </div>
      {/* Footer Section */}
      <div className="mt-8 text-center text-gray-400">
        <p>Address:</p>
        <p>2, Ikorodu Road, Ikorodu, Lagos, Nigeria</p>
        <p>Email: jonaayodele@gmail.com</p>
        <p>Phone: +234 8168042270</p>
        <p className="mt-4">&copy; Jonathan Ayodele - All rights reserved.</p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
