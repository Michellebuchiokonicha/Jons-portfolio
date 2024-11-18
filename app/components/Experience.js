"use client"

import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ActivityIcon } from '@sanity/icons';

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

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
      role: 'Information Security Officer',
      logo: '',
      date: 'feb.2022 - March.2023',
      location: 'United Kingdom',
      description:
        '',
      activities: ['Collaborated with cross-functional teams, enhancing security policies and procedures, resulting in a 15% improvement in overall security posture.', "Assisted in implementing ISO 27001 Information Security Management system, ensuring compliance with international standards and enhancing the organisation's security posture.",  'Conducted comprehensive IT risk assessments to identify vulnerabilities and recommend mitigating controls, resulting in a 20% reduction in potential security threats.',
      'Reviewed and enhanced the information security policies and internal control procedures, recommending updates where necessary and collaborating with organisational structures for effective implementation.',
     "Ensured compliance with company IT and information security policies, procedures, and external regulations like GDPR, ISO, NIST, PCI DSS.",
      "Developed security awareness programs, educating employees on best practices and reducing phishing incidents by 40%",
      "Developed and maintained key risk indicators (KRIs) to enable proactive risk monitoring.",]
    },
    {
      id: 2,
      role: 'Cybersecurity Analyst',
      logo: '',
      date: 'feb.2022 - March.2023',
      location: 'Lagos, Nigeria',
      description: '',
      activities: ['Led threat hunting exercises, identifying and mitigating three advanced persistent threats (APTs) before any data breach occurred.',
       "Monitoring, analysing and investigating security events achieving a 95% resolution rate within established SLAs.",
       'Developed automated scripts, enhancing incident detection and response efficiency by 30% and reducing false positives by 25%.',
       "Collaborated with IT teams to implement security controls, enhancing system security by 20%.",
       "Evolved advanced mechanisms to pinpoint emerging security threats, such as Indicators of Compromise (IOCs) and Tactics, Techniques, and Procedures (TTPs), bolstering organisation's security posture.",
      "Responded to security incidents, reducing false positives by 25% through refined analysis techniques.",
      'Enacted STRIDE methodology to orchestrate threat modelling, identifying potential security risks and formulating effective mitigation strategies.',
      "Integrated keywords and indicators of compromise (IoCs) into the company's SIEM system to improve detection and response capabilities.",
       "Presented monthly security reports to C-level executives, ensuring informed decision-making and securing budget allocations for critical projects.",
       "Configured and maintained intrusion detection/prevention systems for proactive threat mitigation",
      'Analysed sign-in logs to identify suspicious activities, determined the legitimacy of events and worked collaboratively to establish response actions.']
    },
    {
      id: 3,
      role: 'Cybersecurity Engineer',
      logo: '',
      date: 'feb.2022 - March.2023',
      location: 'Lagos, Nigeria',
      description: '',
      activities: ['Restructured cloud IAM policies, resulting in a 60% reduction in over-permissive roles.',
       "Introduced a cloud DLP (Data Loss Prevention) solution, detecting and mitigating 100+ potential data exposure incidents in its first year.",
       'Configured and managed firewalls and VPNs, ensuring robust perimeter security and secure remote access, reducing unauthorized access attempts by 20%.',
       'Strengthened defence layers and minimised vulnerabilities by deploying a range of Cybersecurity technologies, including EDR/XDR, E-mail Security, Microsoft Security Solutions and Network-Based security controls',
       "Integrated cloud security monitoring with the enterprise SIEM (Security Information and Event Management) system, enhancing visibility into cloud-specific threats.",
       "Managed the entire lifecycle of detected vulnerabilities and collaborated with system owners to prioritise and address issues swiftly, bolstering overall security and reducing potential exploitation points.",
       "Implemented an enforced Multi-Factor Authentication (MFA) across the organisation to bolster user account security.",]
    },
   {
      id: 4,
      role: 'IT Officer',
      logo: '',
      date: 'feb.2022 - March.2023',
      location: 'Lagos, Nigeria',
      description: '',
      activities: ['Created a Business Continuity Plan for the business',
       "Streamlined software deployment processes, reducing installation time by 25%.",
       'Implemented a robust backup system for all vital company data, reducing data loss to zero',
      'Installed and configured computer systems, diagnosed hardware and software faults and solved technical and applications problems, saving the company funds on repairs.',
       "Enhanced network uptime to 99.9% through proactive monitoring and prompt troubleshooting.",
    "Ensure software licenses are up-to-date and compliant with SLAs.",]
    },];

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
      <motion.div
        className="mx-auto relative w-4/5 min-h-screen items-center"
        variants={experienceVariants}
        initial="hidden"
        animate={controls}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className={`text-[#122455] flex items-center w-1/2 ${
              index % 2 === 0 ? 'justify-end text-right mb-8' : 'justify-start text-left ml-auto'
            }`}
            variants={experienceVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="relative w-[90%] lg:w-full h-[100%] z-10 bg-gray-100 p-4 py-8 mx-auto lg:mx-8 my-8 rounded-lg shadow-md">
              <div className="flex items-center gap-[10%] m-auto mb-2 justify-around">
                <div className="flex justify-center items-center gap-4">
                  <div className='flex-start'>
                    <Image
                      src="/logo.jpg"
                      width={50}
                      height={50}
                      alt="logo"
                      className="rounded-full border-2 border-red-500"
                    />
                  </div>
                  <div className='flex-end'>
                    <div>{experience.role}</div>
                    <div>{experience.location}</div>
                  </div>
                </div>
                <div>{experience.date}</div>
              </div>
              <div className="flex items-center gap-16 justify-between">
                <div className="mt-2 flex text-sm lg:text-base flex-center text-start">
                  {experience.description}
                  <ul className="list-disc pl-6 text-gray-600 text-sm lg:text-base">
                    {experience.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                          
                        </ul>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#122455] text-white  w-8 h-8 rounded-full flex items-center justify-center z-20">
              <span>0{experience.id}</span>
            </div>
          </motion.div>
        ))}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#122455] transform -translate-x-1/2"></div>
      </motion.div>
    </div>
  );
};

export default Experience;