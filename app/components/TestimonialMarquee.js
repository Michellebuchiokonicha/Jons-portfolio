import Image from "next/image";
import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";



const TestimonialMarquee = ({ testimonials }) => {

  return (
    <div className="min-h-screen flex flex-col items-center w-full overflow-hidden relative transition-all duration-500">
      <div className="flex animate-marquee space-x-8">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="md:w-[12%] max-w-[15%] h-screen flex-shrink-0 px-4">
            <div className="flex flex-col md:flex-row items-center gap-y-8 gap:x-16 lg:gap-x-24 p-6 h-64 bg-white shadow-xl rounded-lg">
              {/* <div className="hidden lg:flex flex-1 rounded-lg justify-center items-center m-auto"> */}
                   {/* Replacing image with a quote icon */}
                   <FaQuoteLeft className=" w-1/4 text-[20rem] text-gray-300 p-4" />
                 {/* </div> */}
                <div className=" w-3/4">
                  <p className="mb-2 italic text-[#122455] text-lg">
                   &quot;{testimonial.text}&quot;
                 </p>
                 <p className="font-bold text-lg text-[#122455]s">{testimonial.name}</p>
                 <p className="text-[#122455] text-base">{testimonial.role}</p>
               </div>
           </div>
         </div>
        ))}
        {/* Duplicate again to ensure smoothness */}
        {[...testimonials].map((testimonial, index) => (
          <div key={index} className="md:w-[12%] max-w-[15%] h-screen flex-shrink-0 px-4">
         <div className="flex flex-col md:flex-row items-center gap-y-8 gap:x-16 lg:gap-x-24 p-6 h-64 bg-white shadow-xl rounded-lg">
           {/* <div className="hidden lg:flex flex-1 rounded-lg justify-center items-center m-auto"> */}
                {/* Replacing image with a quote icon */}
                <FaQuoteLeft className=" w-1/4 text-[20rem] text-gray-300 p-4" />
              {/* </div> */}
             <div className=" w-3/4">
               <p className="mb-2 italic text-[#122455] text-lg">
                &quot;{testimonial.text}&quot;
              </p>
              <p className="font-bold text-lg text-[#122455]s">{testimonial.name}</p>
              <p className="text-[#122455] text-base">{testimonial.role}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
