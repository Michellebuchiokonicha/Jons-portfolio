"use client"

import { useState, useEffect } from 'react';

const Projects = () => {
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
        <section id="projects" className={`flex items-center justify-center min-h-screen transition-all duration-500 ${scrolled ? 'justify-around' : ''}`}>
            <div className={`flex flex-col space-y-4 transition-all duration-500 ${scrolled ? 'order-1' : 'order-2'} ${scrolled ? 'ml-8' : ''}`}>
                <h2 className="text-4xl font-bold">Projects</h2>
                <div className="flex flex-col space-y-4">
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-xl font-bold">Secure Cloud Platform for XYZ Company</h3>
                        <p className="text-gray-600">
                            Designed and implemented a secure cloud platform for XYZ Company, migrating their critical applications to a highly available and scalable cloud environment. This project involved:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Implementing robust security controls, including network segmentation, data encryption, and access management.</li>
                            <li>Conducting regular security audits and vulnerability assessments to ensure ongoing security posture.</li>
                            <li>Developing and implementing incident response plans to mitigate potential threats.</li>
                        </ul>
                        <p className="text-gray-600 mt-2">
                            Impact: This project significantly enhanced XYZ Company's security posture, reducing their risk of cyberattacks and improving their overall security compliance.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-xl font-bold">Security Awareness Training Program for ABC Corporation</h3>
                        <p className="text-gray-600">
                            Developed and delivered a comprehensive security awareness training program for ABC Corporation, covering topics such as phishing, social engineering, password security, and data privacy. This project involved:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Creating engaging and interactive training materials.</li>
                            <li>Conducting live training sessions and workshops.</li>
                            <li>Developing and implementing a system for tracking employee training completion and knowledge retention.</li>
                        </ul>
                        <p className="text-gray-600 mt-2">
                            Impact: This project significantly improved ABC Corporation's employee security awareness, reducing their susceptibility to cyberattacks and improving their overall security culture.
                        </p>
                    </div>
                    {/* Add more project entries here */}
                </div>
            </div>
            <div className={`transition-all duration-500 ${scrolled ? 'order-2' : 'order-1'} ${scrolled ? 'mr-8' : ''}`}>
                {/* Add an image or visual element here if desired */}
            </div>
        </section>
    )
}


export default Projects;
