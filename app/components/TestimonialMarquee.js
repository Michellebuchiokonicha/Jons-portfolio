import React from "react";

const TestimonialMarquee = ({ testimonials }) => {
  return (
    <div className=" min-h-screen flex flex-col items-center  w-[80%] relative">
      <div className="flex animate-marquee ">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 mx-72 px-6 max-w-lg">
            <div className="w-[60rem] flex items-center p-6 bg-white h-90 shadow-xl rounded-lg">
              <div className="mr-6 flex-1  pb-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-80 h-80  object-cover"
                />
              </div>
              <div className="flex-1">
                <p className=" mb-2 text-blue-600 text-lg" >&quot;{testimonial.text}&quot;</p>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-500 text-base">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate again to ensure smoothness */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index + testimonials.length} className="flex-shrink-0 mx-72 px-6 max-w-lg">
            <div className="w-[60rem] flex items-center p-6 bg-white h-90 shadow-xl rounded-lg">
              <div className="mr-6 flex-1  pb-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-80 h-80  object-cover"
                />
              </div>
              <div className="flex-1">
                <p className=" mb-2 text-blue-600 text-lg" >&quot;{testimonial.text}&quot;</p>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-500 text-base">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
