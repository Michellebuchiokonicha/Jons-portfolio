import Image from "next/image";
import React from "react";

const TestimonialMarquee = ({ testimonials }) => {
  return (
    <div className="min-h-screen flex flex-col items-center w-full overflow-hidden relative transition-all duration-500">
      <div className="flex animate-marquee space-x-8">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="md:max-w-[45%] max-w-[25%] flex-shrink-0 px-4">
            <div className="flex flex-col md:flex-row items-center gap-24 p-6 bg-white shadow-xl rounded-lg">
              <div className="flex-1 bg-[#122455] rounded-lg justify-center items-center m-auto">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={200}
                  height={200}
                  className=" object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="mb-2 text-[#122455] text-lg">
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
          <div key={index} className="md:max-w-[45%] max-w-[25%] flex-shrink-0 px-4">
          <div className="flex flex-col md:flex-row items-center gap-24 p-6 bg-white shadow-xl rounded-lg">
            <div className="flex-1 bg-[#122455] rounded-lg justify-center items-center m-auto">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={200}
                height={200}
                className=" object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="mb-2 text-[#122455] text-lg">
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
