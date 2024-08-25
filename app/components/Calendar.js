// "use client"; 

// import React from 'react';

// const Calendar = () => {
//   const openCalendly = () => {
//     if (window.Calendly) {
//       window.Calendly.initPopupWidget({
//         url: 'https://calendly.com/michelleokonicha/30min', 
//       });
//     }
//   };

//   React.useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://assets.calendly.com/assets/external/widget.js';
//     script.async = true;
//     document.body.appendChild(script);
    
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="flex items-center justify-center mb-24 m-auto mt-0">
//       <div
//         onClick={openCalendly}
//         className="cursor-pointer bg-white p-12 px-24 md:px-19 rounded-xl shadow-lg border border-[#122455] flex items-center space-x-4"
//       >
//         <div className="text-center">
//           <p className="text-xl font-bold">Book a 30-Minute Meeting</p>
//           <p className="text-[#122455]">Click to book a slot</p>
//         </div>
//         <div className="flex-shrink-0">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6 text-blue-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5.121 19.879a3 3 0 004.242 0L12 18.243l2.637 2.636a3 3 0 004.242-4.242L12 10.757 5.121 17.636a3 3 0 000 4.243zM19 11a7 7 0 11-14 0 7 7 0 0114 0z"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

//  export default Calendar;

//  import React from "react";
// import { InlineWidget } from "react-calendly";

//  const Calendar = () => {
//    return (
//      <div className="">
//        <InlineWidget style="min-width:30px;height:70px" 
// // url="https://calendly.com/michelleokonicha/30min" 
//   url="https://calendly.com/michelleokonicha/30min?hide_event_type_details=1&hide_gdpr_banner=1"
// />
//      </div>
//    );
//  };
//  export default Calendar;

// import React, { useState } from "react";
// import { InlineWidget } from "react-calendly";
// import { Audio } from 'react-loader-spinner';

// const Calendar = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleCalendarVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="relative">
//         <button
//           onClick={toggleCalendarVisibility}
//           className="cursor-pointer bg-white p-12 px-24 md:px-19 rounded-xl shadow-lg border border-[#122455] flex items-center space-x-4"
//         >
//           <Audio
//   height="80"
//   width="80"
//   radius="9"
//   color="green"
//   ariaLabel="loading"
//   wrapperStyle
//   wrapperClass
// />
          
        //   <div className="text-center">
        //    <p className="text-xl font-bold">Book a 30-Minute Meeting</p>
        //    <p className="text-[#122455]">Click to book a slot</p>
        //   </div>
        //   <div className="flex-shrink-0">
        //    <svg
        //      xmlns="http://www.w3.org/2000/svg"
        //     className="w-6 h-6 text-blue-500"
        //      fill="none"
        //      viewBox="0 0 24 24"
        //      stroke="currentColor"
        //    >
        //      <path
        //        strokeLinecap="round"
        //       strokeLinejoin="round"
        //        strokeWidth="2"
        //       d="M5.121 19.879a3 3 0 004.242 0L12 18.243l2.637 2.636a3 3 0 004.242-4.242L12 10.757 5.121 17.636a3 3 0 000 4.243zM19 11a7 7 0 11-14 0 7 7 0 0114 0z"
        //      />
        //   </svg>
        //  </div>
        // </button>
        // {isVisible && (
          //  <div className="absolute top-full mt-2  bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            // <InlineWidget
            //   // styles={{ width: "100%", height: "100%" }}
            //   url="https://calendly.com/michelleokonicha/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            // />
          //  </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import { Audio } from "react-loader-spinner";

const Calendar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleCalendarVisibility = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setLoading(true);
    }
  };

  const handleCalendlyLoaded = () => {
    setLoading(false);
  };

  return (
    <div className="mx-4 flex justify-center items-center min-h-screen">
      <div className="relative">
        <button
          onClick={toggleCalendarVisibility}
          className="cursor-pointer bg-white p-12 px-24 md:px-19 rounded-xl shadow-lg border border-[#122455] flex items-center space-x-4"
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
        {isVisible && (
          <>
            {loading && (
              <div className="absolute top-full mt-2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
                <p className="ml-4 text-blue-500">Loading...</p>
                {/* <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> */}
              </div>
            )}
            <InlineWidget
              url="https://calendly.com/michelleokonicha/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              styles={{ minWidth: "320px", height: "630px" }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: true,
                hideLandingPageDetails: false,
                primaryColor: "00a2ff",
                textColor: "4d5055",
              }}
              onLoad={handleCalendlyLoaded} // Called when Calendly is fully loaded
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Calendar;




// <!-- Calendly inline widget begin -->
// <div class="calendly-inline-widget" data-url="https://calendly.com/michelleokonicha/30min?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
// <!-- Calendly inline widget end -->
// <!-- Calendly inline widget begin -->
// <div class="calendly-inline-widget" data-url="https://calendly.com/michelleokonicha/30min" style="min-width:320px;height:700px;"></div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
// <!-- Calendly inline widget end -->