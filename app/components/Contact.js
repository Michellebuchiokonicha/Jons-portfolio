"use client"

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-lg mt-12 mx-auto p-4 items-center justify-center flex flex-col">
      <h1 className="font-bold text-4xl mb-10">Contact <span className='font-normal'>Me</span></h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <div className="flex flex-col space-y-2">
          <label htmlFor="firstName" className="font-semibold">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
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
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div> */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstName" className="font-semibold">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-xl w-[100%]"
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
              className="p-2 border border-gray-300 rounded-xl w-[100%]"
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
            className="p-2 border border-gray-300 rounded-xl w-[100%]"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="company" className="font-semibold">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-xl w-[100%]"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-xl w-[100%]"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 w-[100%] text-white py-2 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
