"use client"

import React, {useState, useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Modal from "./Modal";

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, staggerChildren: 0.1 } },
  };

  const experiences = [
    {
      id: 1,
      role: 'Cybersecurity Architect ',
      logo: '',
      company: 'Bitscape Technologies',
      date: 'September.2024 - Present',
      location: 'Nigeria',
      description: '',
      activity: 'As a Cybersecurity Architect I designed and implemented a cybersecurity architecture framework, reducing vulnerabilities by 35%. Conducted risk assessments, leading to a 50% reduction in critical risks. Developed and deployed an incident response framework, reducing response times by 40%. Architected and deployed secure cloud solutions on Azure, ensuring seamless integration with existing systems.',
    },
    {
      id: 2,
      role: 'Information Security Officer',
      logo: '',
      company: 'LAYER21',
      date: 'Nov.2023 - May.2024',
      location: 'United Kingdom',
      description: '',
      activity: 'Enhanced security policies, improving overall security posture by 15%. Assisted in implementing ISO 27001 Information Security Management System, ensuring compliance and improving security posture. Conducted IT risk assessments and implemented controls that reduced potential security threats by 20%. Developed security awareness programs'
    },
    {
      id: 3,
      role: 'Cybersecurity Analyst',
      logo: '',
      company: 'CYBRAIK LTD',
      date: 'May.2023 - Nov.2023',
      location: 'Lagos, Nigeria',
      description: '',
      activity: 'Led threat hunting exercises, identifying and mitigating threats with a 95% resolution rate. Developed automated scripts, enhancing incident detection and response efficiency by 30%. Collaborated with IT teams to implement security controls, increasing system security by 20%. Introduced advanced mechanisms for identifying emerging security threats, strengthening security posture. Applied STRIDE methodology for threat modeling and integrated indicators of compromise (IoCs) into the SIEM system for improved detection.'
    },
    {
      id: 4,
      role: 'Cybersecurity Engineer',
      logo: '',
      company: 'PATHWAY DIGITAL SOLUTION',
      date: 'Feb.2020 - Aug.2022',
      location: 'Lagos, Nigeria',
      description: '',
      activity: 'Restructured cloud IAM policies, reducing over-permissive roles by 60%. Introduced a cloud DLP solution, mitigating over 100 data exposure incidents in its first year. Configured and managed firewalls and VPNs, reducing unauthorized access by 20%. Strengthened security defenses with EDR/XDR, email security, Microsoft Security Solutions, and network-based security controls. Integrated cloud security monitoring with the SIEM system, enhancing visibility into cloud threats.',
    },
  ];

  return (
    <div
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center m-auto mx-auto my-36 lg:my-72"
      ref={ref}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-4 text-white mb-16"
        variants={textVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="font-bold text-2xl lg:text-4xl">My Experiences</div>
        <div>My Experiences span across industries</div>
      </motion.div>
      {/* large screens */}
      <motion.div
        className="mx-auto hidden md:block relative w-4/5 min-h-screen items-center"
        variants={experienceVariants}
        initial="hidden"
        animate={controls}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className={`text-[#122455] flex items-center w-1/2 ${
              index % 2 === 0 ? "justify-end text-right mb-8" : "justify-start text-left ml-auto"
            }`}
            variants={experienceVariants}
            initial="hidden"
            animate={controls}
          >
          <div className="relative w-[90%] lg:w-full h-[100%] z-10 bg-gray-100 p-4 py-8 mx-auto lg:mx-8 my-8 rounded-xl shadow-md cursor-pointer" onClick={() => setSelectedExperience(experience)}>
              <div className="flex items-center gap-[10%] m-auto mb-2 justify-around">
                <div className="flex justify-center items-center gap-4">
                  
                  <div className="">
                    <div className='uppercase text-start font-semibold'>{experience.company}</div>
                    <div className='italic text-start'>{experience.role}</div>
                  </div>
                </div>
                <div>
                  <div className='text-end'>{experience.date}</div>
                  </div>
              </div>
              <div className="mt-2 text-sm lg:text-base text-gray-600">
                <ul className="leading-loose pl-6">
                    <li key={index} className=" py-4 text-start">
                    {experience.activity}
                    </li>
                </ul> 
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#122455] text-white w-8 h-8 rounded-full flex items-center justify-center z-20">
              <span>0{experience.id}</span>
            </div>
          </motion.div>
        ))}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#122455] transform -translate-x-1/2"></div>
      </motion.div>
      {/* mobile starts */}
      <div
        className="mx-auto md:hidden relative p-4 min-h-screen items-center"
      >
        {experiences.map((experience, index) => (
         <div key={experience.id}>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#122455] text-white w-8 h-8 rounded-full flex items-center justify-center z-20">
              <span>0{experience.id}</span>
            </div>
          <div className="relative w-[90%] py-12 lg:w-full h-[100%] z-10 bg-gray-100 p-4 mx-auto lg:mx-8 my-8 rounded-xl shadow-md cursor-pointer" onClick={() => setSelectedExperience(experience)}>
              <div className="flex flex-col items-center gap-[10%] m-auto mb-2 justify-center">
                <div className="flex justify-center items-center gap-4">
                  <div className="">
                    <div className='uppercase text-start font-normal'>{experience.company}</div>
                    <div className='italic text-start'>{experience.role}</div>
                  </div>
                </div>
                <div>
                  <div className='text-end'>{experience.date}</div>
                  </div>
              </div>
              <div className="mt-2 text-sm lg:text-base text-gray-600">
                <ul className="leading-loose pl-6">
                    <li key={index} className=" py-4 text-start">
                    {experience.activity}
                    </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* mobile ends */}
    </div>
  );
};

export default Experience;
