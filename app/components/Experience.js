"use client"

import { useState, useEffect } from 'react';

const Experience = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {  
        const handleScroll = () => {
            if(window.scrollY > window.innerHeight * 0.5) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="experience" className={`flex items-center justify-center min-h-screen transition-all duration-500 ${scrolled ? 'justify-around' : ''}`}>
            <div className={`flex flex-col space-y-4 transition-all duration-500 ${scrolled ? 'order-1' : 'order-2'} ${scrolled ? 'ml-8' : ''}`}>
                <h2 className="text-4xl font-bold">Experience</h2>
                <div className="flex flex-col space-y-4">
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-xl font-bold">Cybersecurity Analyst</h3>
                        <p className="text-gray-600">Acme Corporation - 2020 - Present</p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Developed and implemented security policies and procedures.</li>
                            <li>Monitored network traffic and identified security threats.</li>
                            <li>Responded to security incidents and conducted incident investigations.</li>
                            <li>Performed vulnerability assessments and penetration testing.</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-xl font-bold">Cloud Security Engineer</h3>
                        <p className="text-gray-600">XYZ Technologies - 2018 - 2020</p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Designed and implemented cloud security solutions.</li>
                            <li>Managed cloud security tools and services.</li>
                            <li>Performed cloud security audits and assessments.</li>
                            <li>Collaborated with development teams to ensure secure cloud deployments.</li>
                        </ul>
                    </div>
                    {/* Add more experience entries here */}
                </div>
            </div>
            <div className={`transition-all duration-500 ${scrolled ? 'order-2' : 'order-1'} ${scrolled ? 'mr-8' : ''}`}>
                {/* Add an image or visual element here if desired */}
            </div>
        </section>
    )
}


export default Experience;
