"use client"

import { useState, useEffect } from 'react';

const Services = () => {

    const services = [
        {id: 1, title: 'Cloud Security Assessment', description: 'I conduct comprehensive cloud security assessments to cloud infrastructure.', activity1:'Vulnerability scanning', activity2: 'Penetration testing', activity3: 'Configuration audits'},
        {id: 2, title: 'Cloud Searcher', description: 'I conduct comprehensive cloud security assessments to cloud infrastructure.', activity1:'Vulnerability scanning', activity2: 'Penetration testing', activity3: 'Configuration audits'},
        {id: 3, title: 'Cloud Securit Assessment', description: 'I conduct comprehensive cloud security assessments to cloud infrastructure.', activity1:'Vulnerability scanning', activity2: 'Penetration testing', activity3: 'Configuration audits'},
        ];
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {  
    //     const handleScroll = () => {
    //         if(window.scrollY > window.innerHeight * 0.5) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <section id="services" className="my-22 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-16 transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center justify-around gap-y-6 lg:gap-x-6 lg:gap-y-0 space-y-8 lg:space-y-0 transition-all duration-500 order-2">
               <div className='lg:w-[40%] w-[90%] text-white'>
                 <h2 className="text-3xl justify-center items-center text-center md:text-4xl lg:text-6xl mb-4 lg:mb-5">High-Growth and Trusted Services</h2>
                 <div className='text-sm lg:text-base text-center'>
                 To add to the list of organizations I have also worked with over 250 business owners to create and
                  launch and scale their business models for profitability and my teachings have directly
                   impacted over 20,000 followers across all platforms.
                 </div>
               </div>
               
                <div className="flex w-[90%] lg:w-[40%] flex-col justify-center align-center space-y-6">
                {services.map((service, index) => (
                     <div key={service.id} className="bg-gray-100 p-6 lg:p-10 rounded-md">
                        <h3 className="text-lg lg:text-xl font-bold">{service.title}</h3>
                        <p className="text-gray-600 text-sm lg:text-base">
                            {service.description}
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 text-sm lg:text-base">
                            <li>{service.activity1}</li>
                            <li>{service.activity2}</li>
                            <li>{service.activity3}</li>
                            {/* <li>Compliance reviews</li> */}
                        </ul>
                        <button class="bg-[#746969] mt-4 lg:mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                         Let&apos;s talk
                        </button>
                    </div>
                      ))}
                </div>
    
               
            </div>
            {/* <div className="transition-all duration-500 order-1"> */}
                {/* Add an image or visual element here if desired */}
            {/* </div> */}
        </section>
    )
}


export default Services;
