// app/components/Features.js
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="bg-[#122455]  lg:w-4/5 rounded-xl m-auto py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-center text-white mb-8 font-bold">Features</h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-12">
            <div className="flex-shrink-0">
              <img src="/path/to/logo1.png" alt="Logo 1" className="h-16" />
            </div>
            <div className="flex-shrink-0">
              <img src="/awards8.jpg" alt="Logo 2" className="h-16" />
            </div>
            <div className="flex-shrink-0">
              <img src="/awards8.jpg" alt="Logo 3" className="h-16" />
            </div>
            <div className="flex-shrink-0">
              <img src="/awards8.jpg" alt="Logo 4" className="h-16" />
            </div>
            <div className="flex-shrink-0">
              <img src="/awards8.jpg" alt="Logo 5" className="h-16" />
            </div>
            {/* Duplicate logos */}
            <div className="flex-shrink-0">
              <img src="/awards8.jpg" alt="Logo 1" className="h-16" />
            </div>
            <div className="flex-shrink-0">
              <img src="/awards8.jpg" alt="Logo 2" className="h-16" />
            </div>
            <div className="flex-shrink-0">
              <img src="/awards8.jpg" alt="Logo 3" className="h-16" />
            </div>
            <div className="flex-shrink-0">
              <img src="/awards8.jpg" alt="Logo 4" className="h-16" />
            </div>
            <div className="flex-shrink-0">
              <img src="/awards8.jpg" alt="Logo 5" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
