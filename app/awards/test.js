"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from "../components/Modal";
import Image from 'next/image';
import J1 from '../../public/awards8.jpg';

const awards = [
  {
    id: 1,
    title: 'SME Africa 25under25 Awards (2019 & 2020)',
    date: '2019 & 2020',
    description:
      'Nominated in the technology category for outstanding contributions to the tech industry and support of small and medium enterprises in Africa.',
  },
  {
    id: 2,
    title: 'UK Cyber Diversity Awards (2024)',
    date: 'April 2024',
    description:
      'Recognized as "Highly Commended" for efforts in promoting diversity and inclusion within the cybersecurity sector.',
  },
  {
    id: 3,
    title: 'One to Watch - UK Real Cyber Awards (2024)',
    date: 'November 2024',
    description:
      'Nominated for this prestigious award, highlighting emerging leaders in cybersecurity.',
  },
];

const certifications = [
  'Certified Information Systems Security Professional (CISSP)',
  'CompTIA Security+',
  'ISO 27001 Lead Implementer',
  'Microsoft Cybersecurity Architect',
  'Microsoft Security Engineer',
  'Certified in Cybersecurity',
  'Digital Marketing',
];

const mediaMentions = [
  {
    title: 'Nigerian Gets UK Cyber Diversity Award',
    link: 'https://punchng.com/nigerian-gets-uk-cyber-diversity-award/',
    description: 'Article highlighting my recognition at the UK Cyber Diversity Awards.',
  },
  {
    title: 'Launch Ideas for Cyber Entrepreneurs',
    link: 'https://www.plexal.com/launch-ideas-cyber-entrepreneurs/',
    description: 'Feature on initiatives for empowering cyber entrepreneurs.',
  },
  {
    title: 'Chevening Scholar Returns to Nigeria',
    link: 'https://sunnewsonline.com/chevening-scholar-returns-to-nigeria-pledges-to-transform-ikorodu-community-with-tech-innovation/',
    description: 'A story about my pledge to transform the Ikorodu community with tech innovation.',
  },
  {
    title: 'Risk Management Event by SASIG',
    link: 'https://www.thesasig.com/calendar/event/23-11-06-risk/',
    description: 'Mention of my participation in the SASIG event discussing risk management.',
  },
  {
    title: 'Increase in Insider Cyber Attacks in 2024',
    link: 'https://dailytrust.com/nigeria-to-face-increase-in-insider-cyber-attacks-in-2024/',
    description: 'Article on the rising threat of insider cyberattacks in Nigeria.',
  },
  {
    title: 'Experts See Surge in Cyber Security Threats This Year',
    link: 'https://guardian.ng/business-services/experts-see-surge-in-cyber-security-threats-this-year/',
    description: 'Feature about the expected increase in cybersecurity threats.',
  },
];

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#050E28] font-montserrat min-h-screen flex flex-col items-center justify-center mx-auto my-2 lg:my-2 p-8">

      {/* Hero Image Section with Animation */}
      <motion.div 
        className="w-full h-96 relative mb-16 rounded-lg overflow-hidden shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={J1}
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#122455] to-transparent flex items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-300 leading-tight text-center px-4 py-2 bg-black bg-opacity-50 rounded-lg">
            My Achievements & Recognition
          </h1>
        </div>
      </motion.div>

      {/* Introduction Section with Fade-in Animation */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-300 text-lg w-3/4 text-center m-auto mb-8">
          Over the years, I have been honored with several awards and nominations, recognizing my dedication to cybersecurity, digital literacy, and community empowerment. Below, you can explore my notable awards, certifications, and media mentions:
        </p>
      </motion.div>

      {/* Awards Section with Staggered Animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {awards.map((award) => (
          <motion.div
            key={award.id}
            className="bg-[#122455] text-white rounded-lg shadow-lg p-8 hover:scale-105 transition-all duration-300 ease-in-out transform"
            variants={itemVariants}
            onClick={() => setSelectedAward(award)}
          >
            <h2 className="text-2xl font-semibold mb-2">{award.title}</h2>
            <p className="text-lg mb-4">{award.date}</p>
            <p className="text-base">{award.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for Award Details */}
      {selectedAward && (
        <Modal onClose={() => setSelectedAward(null)}>
          <div className="p-6 bg-white text-black rounded-lg">
            <h2 className="text-xl font-bold mb-2">{selectedAward.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{selectedAward.date}</p>
            <p className="text-base">{selectedAward.description}</p>
          </div>
        </Modal>
      )}

      {/* Certifications Section with Fade-in Animation */}
      <motion.div
        className="text-center mt-24 p-16 mb-16 bg-gradient-to-l bg-white rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-[#122455] mb-8">Certifications</h2>
        <p className="text-[#122455] text-lg w-3/4 text-center m-auto mb-8">
          These certifications are a testament to my commitment to continuous learning and staying ahead in cybersecurity and technology.
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-[#122455] text-[#F7F7F7] py-6 p-8 rounded-lg shadow-md hover:bg-[#F7F7F7] transition duration-300"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold">{cert}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Media Mentions Section with Fade-in Animation */}
      <motion.div
        className="text-center mt-24 p-16 mb-16 bg-[#122455] rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-[#F7F7F7] mb-8">Media Mentions</h2>
        <p className="text-[#F7F7F7] text-lg w-3/4 text-center m-auto mb-8">
          I have been featured in several media outlets, sharing my insights on cybersecurity and community empowerment. Here's a selection of articles where my work has been highlighted.
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {mediaMentions.map((mention, index) => (
            <motion.div
              key={index}
              className="bg-[#F7F7F7] text-[#122455] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold">{mention.title}</h3>
              <p className="text-[#122455] text-sm mb-4">{mention.description}</p>
              <a
                href={mention.link}
                target="_blank"
                className="text-[#E3402A] hover:text-[#F2A900] transition-colors duration-300"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Awards;
