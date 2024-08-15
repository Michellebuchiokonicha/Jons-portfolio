"use client"

import { useState, useEffect } from 'react';

const Services = () => {
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
        <section id="services" className={`flex items-center justify-center min-h-screen transition-all duration-500 ${scrolled ? 'justify-around' : ''}`}>
            <div className={`flex flex-col space-y-4 transition-all duration-500 ${scrolled ? 'order-1' : 'order-2'} ${scrolled ? 'ml-8' : ''}`}>
                <h2 className="text-4xl font-bold">Services</h2>
                <div className="flex flex-col space-y-4">
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-xl font-bold">Cloud Security Assessments</h3>
                        <p className="text-gray-600">
                            I conduct comprehensive cloud security assessments to identify vulnerabilities and risks in your cloud infrastructure. This includes:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Vulnerability scanning</li>
                            <li>Penetration testing</li>
                            <li>Configuration audits</li>
                            <li>Compliance reviews</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-xl font-bold">Security Architecture Design</h3>
                        <p className="text-gray-600">
                            I help you design and implement secure cloud architectures that meet your specific business needs and security requirements. This includes:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Security controls selection</li>
                            <li>Network segmentation</li>
                            <li>Data encryption and access control</li>
                            <li>Threat modeling</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-xl font-bold">Security Awareness Training</h3>
                        <p className="text-gray-600">
                            I provide customized security awareness training to your employees to help them understand and mitigate cyber threats. This includes:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Phishing and social engineering awareness</li>
                            <li>Password security and best practices</li>
                            <li>Data privacy and compliance</li>
                            <li>Incident response procedures</li>
                        </ul>
                    </div>
                    {/* Add more service entries here */}
                </div>
            </div>
            <div className={`transition-all duration-500 ${scrolled ? 'order-2' : 'order-1'} ${scrolled ? 'mr-8' : ''}`}>
                {/* Add an image or visual element here if desired */}
            </div>
        </section>
    )
}


export default Services;
