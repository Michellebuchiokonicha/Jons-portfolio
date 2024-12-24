"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        console.error('Error submitting form:', response.status);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <div id='contact' className="max-w-lg text-gray-300  min-h-screen mx-auto px-8 sm:px-4 items-center justify-center flex flex-col" ref={ref}>
      <motion.h1
        className="font-semibold sm:font-bold text-2xl sm:text-4xl mb-10"
        variants={textVariants}
        initial="hidden"
        animate={controls}
      >
        Contact <span className='font-normal'>Me</span>
      </motion.h1>

      {submissionSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-16 rounded-xl relative" role="alert">
          <strong className="font-bold">Success!</strong> Your message has been sent.
        </div>
      )}

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4 w-full"
        variants={formVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstName" className="font-semibold">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border border-[#122455] text-[#122455] rounded-xl w-full"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="lastName" className="font-semibold">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 border border-[#122455] rounded-xl w-[100%] text-[#122455]"
              required
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-[#122455] rounded-xl w-full text-[#122455]"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="company" className="font-semibold ">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="p-2 border border-[#122455] text-[#122455] rounded-xl w-full"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border border-[#122455] text-[#122455] rounded-xl w-full"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#122455] w-[100%] text-gray-300 py-2 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#122455]"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
