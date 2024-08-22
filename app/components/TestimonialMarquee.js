import React from "react";

const TestimonialMarquee = ({ testimonials }) => {
  return (
    <div className="min-h-screen flex flex-col items-center w-full overflow-hidden relative transition-all duration-500">
      <div className="flex animate-marquee space-x-8">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 px-4 max-w-[50%]">
            <div className="flex items-center p-6 bg-white shadow-xl rounded-lg">
              <div className="flex-1">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="mb-2 text-blue-600 text-lg">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-500 text-base">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate again to ensure smoothness */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index + testimonials.length} className="flex-shrink-0 mx-72 px-6 max-w-lg overflow-hidden">
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
