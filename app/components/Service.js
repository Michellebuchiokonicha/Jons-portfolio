"use client"

import { useState, useEffect, useRef } from 'react';

const Services = () => {

    const services = [
        {id: 1, title: 'Cybersecurity Growth', description: 'I can help you leverage your existing Cybersecurity experiences to apply for and take advantage Global Opportunities like scholarships, study abroad etc', activity1:'CV reviews, writing and Revamp', activity2: 'Linkedin Optimization', activity3: 'Cover Letter', activity4: 'Job Search Strategy', activity5:'Study abroad & Scholarships Coaching'},
        {id: 2, title: 'Trainings', description: 'Engaging training programs designed to enhance cybersecurity awareness and digital skills for teams and individuals at all levels.', activity1:'Customized workshops.', activity2: 'Hands-on trainings.', activity3: 'Continuous learning and development.'},
        {id: 3, title: 'Deployment', description: 'Expert deployment services to implement cutting-edge cybersecurity solutions that protect your organization’s data and infrastructure.', activity1:'Integration of security tools that fit business needs.', activity2: 'Configuration and optimization.', activity3: 'Compliance'},

        ];

    
    const servicesContainerRef = useRef(null);
    const fixedContentRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);

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

    return (
        <section id="services" className="my-22 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-16 transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center justify-around gap-y-2 lg:gap-x-6 lg:gap-y-0 space-y-8 lg:space-y-0 transition-all duration-500 order-2" ref={servicesContainerRef}>
            <div className={`lg:w-[40%] w-[90%] text-gray-300 lg:mb-[43rem] ${isFixed ? 'lg:fixed lg:bottom-0 lg:top-4 lg:rigt-0 lg:left-2 lg:ml-32': ''}`} ref={fixedContentRef}>
                 <h2 className="text-2xl justify-center items-center text-center md:text-3xl lg:text-5xl mb-4 lg:mb-5">Some Things I Can Help You With</h2>
                 <div className='text-sm lg:text-base text-center'>
                 I help create and implement tailored cybersecurity strategies that enhance resilience. 
                 Some others include training programs that equip teams with essential skills to combat 
                 cyber threats, and Career Growth Opportunities.


                 </div>
               </div>
               
                <div className={`flex flex-col justify-center align-center space-y-6  ${isFixed ? 'lg:relative lg:left-48 lg:w-[20%] ' : 'w-[90%] md:w-[40%]'}`}>
                {services.map((service, index) => (
                     <div key={service.id} className={`bg-gray-100 p-6 lg:p-10 rounded-md ${isFixed ? 'lg:w-[220%]' : ''}`}>
                        <h3 className="text-lg lg:text-xl font-bold text-[#122455] pb-4">{service.title}</h3>
                        <p className="text-[#122455] text-sm lg:text-base">
                            {service.description}
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 text-sm lg:text-base">
                            <li>{service.activity1}</li>
                            <li>{service.activity2}</li>
                            <li>{service.activity3}</li>
                            {service.activity4 && (<li>{service?.activity4}</li>)}
                            {service.activity5 && (<li>{service?.activity4}</li>)}
                        </ul>
                        <button  onClick={() => window.location.href = '#contact'} class="bg-[#122455] mt-4 lg:mt-6 hover:bg-blue-700 text-gray-300 font-bold py-2 px-4 rounded">
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