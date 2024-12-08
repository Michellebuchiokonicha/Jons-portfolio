"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import award from '../../public/awards8.jpg'
import J1 from '../../public/awards1.webp';
import Navbar from '../components/Navbar';
import NewsletterSignup from '../components/NewsLeter';


const previousEngagements = [
  {
    id: 1,
    event: 'CyberTech Conference 2023',
    location: 'London, UK',
    description: 'I shared insights on the latest trends in cybersecurity, focusing on AI and machine learning’s impact on cybersecurity strategies and emerging threats in the digital space.',
    topics: 'Cybersecurity Innovation, AI & Machine Learning in Cybersecurity',
    imageSrc: '/awards8.jpg',
  },
  {
    id: 2,
    event: 'Women in Technology Summit 2023',
    location: 'Virtual',
    description: 'A panel discussion on the barriers women face in technology and cybersecurity, alongside practical advice for overcoming these obstacles and building inclusive environments.',
    topics: 'Diversity in Tech, Empowering Women in Cybersecurity',
    imageSrc: '/awards8.jpg',
  },
  {
    id: 3,
    event: 'Global Digital Literacy Forum 2024',
    location: 'New York, USA',
    description: 'I spoke about the importance of digital literacy in today’s interconnected world, emphasizing digital skills for the younger generation and how they can prepare for careers in cybersecurity.',
    topics: 'Digital Literacy, Youth Empowerment in Tech',
    imageSrc: '/awards8.jpg',
  },
];

const Speaking = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
     <Navbar />
    <div className=" bg-[#050E28] font-montserrat min-h-screen flex flex-col items-center justify-center mx-auto my-2 lg:my-2 lg:px-16 lg:my-22 p-8">

    {/* Hero Image Section */}
    <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-xl">
      <Image
        src={J1}
        alt="Hero Image"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#122455] to-transparent flex items-center justify-center">
        <h1 className="md:text-5xl text-3xl font-bold text-gray-100 leading-tight text-center px-4 py-2 bg-black bg-opacity-10 rounded-lg">
            Speaking Engagements
        </h1>
      </div>
    </div>

      {/* Introduction Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center mb-8">
          <Image
            src="/images/jonathan-profile.jpg"
            alt="Jonathan's Profile"
            className="rounded-full w-32 h-32 object-cover"
            width={128}
            height={128}
          />
        </div>
        <p className="text-gray-100 text-lg leading-loose text-center m-auto">
          As a seasoned cybersecurity professional and digital literacy advocate, Jonathan has shared his insights on some of the industry’s most pressing issues at conferences, webinars, and international forums. Specializing in Cybersecurity, Digital Literacy, and Youth Empowerment, his key areas include cybersecurity innovation, risk management, and the intersection of technology and socio-economic development. Jonathan is passionate about raising awareness on cyber resilience, and safe digital practices in an increasingly connected world. With interests in business innovation, startups, and SME development, he brings a unique blend of technical expertise and entrepreneurial insight to his sessions. Audiences leave his sessions equipped with actionable knowledge to navigate today’s digital landscape with confidence, security, and a growth mindset.
        </p>
      </motion.div>

      {/* Previous Speaking Engagements Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {previousEngagements.map((engagement) => (
          <motion.div
            key={engagement.id}
            className=" bg-gradient-to-l from-[#141e3a] to-[#122455] text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            variants={itemVariants}
          >
            <div className="mb-4">
              <Image
                src={engagement.imageSrc} // Dynamic image for each event
                alt={engagement.event}
                className="rounded-lg w-full h-48 object-cover"
                width={350}
                height={200}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{engagement.event}</h3>
            <p className="text-lg mb-2">{engagement.location}</p>
            <p className="text-base mb-4">{engagement.description}</p>
            <p className="text-base font-semibold">{engagement.topics}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Booking Section */}
      <div className="text-center mt-24 p-16 mb-16 bg-gradient-to-l from-white to-[#90a1d5] rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-[#122455] mb-8">Book Me for Your Event</h2>
        <p className="text-[#122455] text-lg mb-8">
          Interested in having Jonathan speak at your next event? Whether it’s a conference, summit, or corporate seminar, Jonathan’s talks provide actionable insights and thought leadership in the fields of cybersecurity, digital literacy, and youth empowerment. Reach out today to discuss your event!
        </p>
        <a
          href="/#contact"
          className="bg-[#8B0000] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#f20034] transition duration-300"
        >
          Contact Me for Booking
        </a>
      </div>

    </div>
    <NewsletterSignup />
    </div>
  );
};

export default Speaking;
