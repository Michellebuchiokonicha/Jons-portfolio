import React from "react";

const TestimonialMarquee = ({ testimonials }) => {
  return (
    <div className=" min-h-screen flex flex-col items-center overflow-hidden whitespace-nowrap w-[80%] relative">
      <div className="flex animate-marquee">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 px-4 max-w-xs">
            <div className="flex items-center p-4 bg-white h-64 shadow-lg rounded-lg">
              <div className="mr-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="max-w-xs">
                <p className="italic mb-1">&quot;{testimonial.text}&quot;</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate again to ensure smoothness */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index + testimonials.length} className="flex-shrink-0 px-4 max-w-xs">
            <div className="flex items-center p-4 bg-white h-64 shadow-lg rounded-lg">
              <div className="mr-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="max-w-xs">
                <p className="italic mb-1">&quot;{testimonial.text}&quot;</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
