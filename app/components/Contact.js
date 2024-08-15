"use client"

import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation (you can add more robust validation)
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Send the message (replace with your actual email sending logic)
    try {
      // Example using a simple fetch request (replace with your preferred method)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        {submitted ? (
          <p className="text-gray-600">Thank you for your message! I will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-3 py-2"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded px-3 py-2 resize-none"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
