import React, { useState } from "react";
import { PopupModal } from "react-calendly";

function Calendar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center mx-16 mb-16">
       <div className="relative">
      {/* Button to open the Calendly popup */}
      {/* <button onClick={handleOpenModal}>Schedule a Meeting</button> */}

      <button
          className="cursor-pointer bg-white p-12 px-8 md:px-16 lg:px-24 md:px-19 rounded-xl shadow-lg border border-[#122455] flex items-center space-x-4"
          onClick={handleOpenModal}
        >
          <div className="text-center">
            <p className="text-xl font-bold">Book a 30-Minute Meeting</p>
            <p className="text-[#122455]">Click to book a slot</p>
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
        </button>

      {/* Calendly PopupModal */}
      {isOpen && (
        <PopupModal
          url="https://calendly.com/michelleokonicha/30min"
          rootElement={document.body}
          open={isOpen}
          onModalClose={handleCloseModal}
        />
      )}
    </div>
    </div>
  );
}

export default Calendar;
