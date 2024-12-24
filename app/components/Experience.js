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
    //   activities: ['Collaborated with cross-functional teams, enhancing security policies and procedures, resulting in a 15% improvement in overall security posture.', "Assisted in implementing ISO 27001 Information Security Management system, ensuring compliance with international standards and enhancing the organisation's security posture.",  'Conducted comprehensive IT risk assessments to identify vulnerabilities and recommend mitigating controls, resulting in a 20% reduction in potential security threats.',
    //   'Reviewed and enhanced the information security policies and internal control procedures, recommending updates where necessary and collaborating with organisational structures for effective implementation.',
    //  "Ensured compliance with company IT and information security policies, procedures, and external regulations like GDPR, ISO, NIST, PCI DSS.",
    //   "Developed security awareness programs, educating employees on best practices and reducing phishing incidents by 40%",
    //   "Developed and maintained key risk indicators (KRIs) to enable proactive risk monitoring.",]
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
    //   activities: ['Collaborated with cross-functional teams, enhancing security policies and procedures, resulting in a 15% improvement in overall security posture.', "Assisted in implementing ISO 27001 Information Security Management system, ensuring compliance with international standards and enhancing the organisation's security posture.",  'Conducted comprehensive IT risk assessments to identify vulnerabilities and recommend mitigating controls, resulting in a 20% reduction in potential security threats.',
    //   'Reviewed and enhanced the information security policies and internal control procedures, recommending updates where necessary and collaborating with organisational structures for effective implementation.',
    //  "Ensured compliance with company IT and information security policies, procedures, and external regulations like GDPR, ISO, NIST, PCI DSS.",
    //   "Developed security awareness programs, educating employees on best practices and reducing phishing incidents by 40%",
    //   "Developed and maintained key risk indicators (KRIs) to enable proactive risk monitoring.",]
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
      // activities: ['Led threat hunting exercises, identifying and mitigating three advanced persistent threats (APTs) before any data breach occurred.',
      //  "Monitoring, analysing and investigating security events achieving a 95% resolution rate within established SLAs.",
      //  'Developed automated scripts, enhancing incident detection and response efficiency by 30% and reducing false positives by 25%.',
      //  "Collaborated with IT teams to implement security controls, enhancing system security by 20%.",
      //  "Evolved advanced mechanisms to pinpoint emerging security threats, such as Indicators of Compromise (IOCs) and Tactics, Techniques, and Procedures (TTPs), bolstering organisation's security posture.",
      // "Responded to security incidents, reducing false positives by 25% through refined analysis techniques.",
      // 'Enacted STRIDE methodology to orchestrate threat modelling, identifying potential security risks and formulating effective mitigation strategies.',
      // "Integrated keywords and indicators of compromise (IoCs) into the company's SIEM system to improve detection and response capabilities.",
      //  "Presented monthly security reports to C-level executives, ensuring informed decision-making and securing budget allocations for critical projects.",
      //  "Configured and maintained intrusion detection/prevention systems for proactive threat mitigation",
      // 'Analysed sign-in logs to identify suspicious activities, determined the legitimacy of events and worked collaboratively to establish response actions.']
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
      // activities: ['Restructured cloud IAM policies, resulting in a 60% reduction in over-permissive roles.',
      //  "Introduced a cloud DLP (Data Loss Prevention) solution, detecting and mitigating 100+ potential data exposure incidents in its first year.",
      //  'Configured and managed firewalls and VPNs, ensuring robust perimeter security and secure remote access, reducing unauthorized access attempts by 20%.',
      //  'Strengthened defence layers and minimised vulnerabilities by deploying a range of Cybersecurity technologies, including EDR/XDR, E-mail Security, Microsoft Security Solutions and Network-Based security controls',
      //  "Integrated cloud security monitoring with the enterprise SIEM (Security Information and Event Management) system, enhancing visibility into cloud-specific threats.",
      //  "Managed the entire lifecycle of detected vulnerabilities and collaborated with system owners to prioritise and address issues swiftly, bolstering overall security and reducing potential exploitation points.",
      //  "Implemented an enforced Multi-Factor Authentication (MFA) across the organisation to bolster user account security.",]
    },
  //  {
  //     id: 5,
  //     role: 'IT Officer',
  //     logo: '',
  //     company: 'PATHWAY DIGITAL SOLUTION',
  //     date: 'feb.2022 - March.2023',
  //     location: 'Lagos, Nigeria',
  //     description: '',
    //   activities: ['Created a Business Continuity Plan for the business',
    //    "Streamlined software deployment processes, reducing installation time by 25%.",
    //    'Implemented a robust backup system for all vital company data, reducing data loss to zero',
    //   'Installed and configured computer systems, diagnosed hardware and software faults and solved technical and applications problems, saving the company funds on repairs.',
    //    "Enhanced network uptime to 99.9% through proactive monitoring and prompt troubleshooting.",
    // "Ensure software licenses are up-to-date and compliant with SLAs.",]
    // },
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
                  {/* <div className="flex-start"> */}
                    {/* <Image
                      src="/logo.jpg"
                      width={50}
                      height={50}
                      alt="logo"
                      className="rounded-full border-2 border-red-500"
                    /> */}
                  {/* </div> */}
                  <div className="">
                    <div className='uppercase text-start font-semibold'>{experience.company}</div>
                    <div className='italic text-start'>{experience.role}</div>
                  </div>
                </div>
                <div>
                  <div className='text-end'>{experience.date}</div>
                  {/* <div className='text-end font-semibold'>{experience.location}</div> */}
                  </div>
              </div>
              <div className="mt-2 text-sm lg:text-base text-gray-600">
                <ul className="leading-loose pl-6">
                  {/* {experience.activities.slice(0, 3).map((activity, index) => ( */}
                    <li key={index} className=" py-4 text-start">
                    {experience.activity}
                    </li>
                  {/* ))} */}
                </ul>
                
                {/* {experience.activities.length > 3 && (
                  <div className="text-lg font-semibold text-[#8B0000] mt-2">
                    ...Click to see more
                    
                  </div>
                  
                )} */}
              </div>
              {/* <div className="flex items-center gap-16 justify-between">
                <div className="mt-2 flex text-sm lg:text-base flex-center text-start">
                  {experience.description}
                  <ul className="list-disc pl-6 text-gray-600 text-sm lg:text-base">
                    {experience.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                          
                        </ul>
                </div>
              </div> */}
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
                  {/* <div className='text-end font-normal'>{experience.location}</div> */}
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
        {/* <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#122455] transform -translate-x-1/2"></div> */}
      </div>
      {/* mobile ends */}

      {/* Modal */}
      {/* {selectedExperience && (
        <Modal onClose={() => setSelectedExperience(null)}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{selectedExperience.role}</h2>
            <p className="text-gray-600 mb-4">{selectedExperience.date}</p>
            <ul className="list-disc pl-6 text-gray-700">
              {selectedExperience.activities.map((activity, index) => (
                <li key={index} className='mb-2 pb-4'>{activity}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )} */}
    </div>
  );
};

export default Experience;
