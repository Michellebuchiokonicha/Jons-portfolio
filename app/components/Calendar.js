"use client"; 

import React from 'react';

const Calendar = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/your-username/15min', 
      });
    }
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div
        onClick={openCalendly}
        className="cursor-pointer bg-white p-12 px-12 md:px-19 rounded-xl shadow-lg border border-gray-300 flex items-center space-x-4"
      >
        <div className="text-center">
          <p className="text-xl font-bold">Book a 15-Minute Meeting</p>
          <p className="text-gray-600">Click to book a slot</p>
        </div>
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 19.879a3 3 0 004.242 0L12 18.243l2.637 2.636a3 3 0 004.242-4.242L12 10.757 5.121 17.636a3 3 0 000 4.243zM19 11a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
