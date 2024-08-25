"use client"

import { useState, useEffect, useRef } from 'react';
import { client } from '@/sanity/lib/client';


async function getData() {
    const query = `*[_type == "service"] 
  {
      _key,
      _id,
      title,
      description,
      activityOne,
      activityTwo,
      activityThree,
      activityFour,
      activityFive,   
   }
  `
  const data = await client.fetch(query);
  return data;
  }
  
  export const revalidate = 60;

const Services = () => {
    
    const servicesContainerRef = useRef(null);
    const fixedContentRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const servicesContainer = servicesContainerRef.current;
            const fixedContent = fixedContentRef.current;
            const scrollTop = window.scrollY;
            
            if (scrollTop >= servicesContainer.offsetTop && scrollTop < servicesContainer.offsetTop + servicesContainer.offsetHeight - fixedContent.offsetHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const fetchServices = async () => {
          const data = await getData();
          setServices(data);
        };
        fetchServices();
      }, []);

    return (
        <section id="services" className="snap-start my-22 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-16 transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center justify-around gap-y-2 lg:gap-x-6 lg:gap-y-0 space-y-8 lg:space-y-0 transition-all duration-500 order-2" ref={servicesContainerRef}>
               <div className={`lg:w-[40%] w-[90%] text-gray-300 lg:mb-[43rem] ${isFixed ? 'lg:fixed lg:bottom-0 lg:top-4 lg:rigt-0 lg:left-2 lg:ml-32': ''}`} ref={fixedContentRef}>
                 <h2 className="text-3xl justify-center items-center text-center md:text-4xl lg:text-6xl mb-4 lg:mb-5">High-Growth and Trusted Services</h2>
                 <div className='text-sm lg:text-base text-center'>
                 To add to the list of organizations I have also worked with over 250 business owners to create and
                  launch and scale their business models for profitability and my teachings have directly
                   impacted over 20,000 followers across all platforms.
                 </div>
               </div>
               
                <div className={`flex w-[90%] lg:w-[40%] flex-col justify-center align-center space-y-6  ${isFixed ? 'lg:relative lg:left-44 ' : ''}`}>
                {services.map((service, index) => (
                     <div key={service._id} className={`bg-gray-100 p-6 lg:p-10 rounded-md ${isFixed ? 'lg:w-[220%]' : ''}`}>
                        <h3 className="text-lg lg:text-xl font-bold text-[#122455]">{service.title}</h3>
                        <p className="text-[#122455] text-sm lg:text-base">
                            {service.description}
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 text-sm lg:text-base">
                            <li>{service.activityOne}</li>
                            <li>{service.activityTwo}</li>
                            <li>{service.activityThree}</li>
                            {/* <li>Compliance reviews</li> */}
                        </ul>
                        <button class="bg-[#122455] mt-4 lg:mt-6 hover:bg-blue-700 text-gray-300 font-bold py-2 px-4 rounded">
                         Let&apos;s talk
                        </button>
                    </div>
                      ))}
                </div>
    
               
            </div>
        </section>
    )
}


export default Services;
