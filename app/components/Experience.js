"use client"

import React, {useState, useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

async function getData() {
  const query = `*[_type == "experience"] {
  _key,
  _id,
  description,
    "logo": logo.asset->url,
      location,
    date,
    role,
}
`
const data = await client.fetch(query);
return data;
}

export const revalidate = 60;

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await getData();
      setExperiences(data);
    };
    fetchExperiences();
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, staggerChildren: 0.1 } },
  };
  
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
            key={experience._id}
            className={`text-[#122455] flex items-center w-1/2 ${
              index % 2 === 0 ? 'justify-end text-right mb-8' : 'justify-start text-left ml-auto'
            }`}
            // variants={experienceVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="relative w-full h-[100%] z-10 bg-gray-100 p-4 py:2 md:py-8 mx-auto lg:mx-8 my-8 rounded-lg shadow-md">
              <div className="flex flex-wrap gap-y-8 items-center  m-auto mb-2 justify-between">
                <div className="flex justify-center items-center gap-4">
                  <div className='md:flex-start md:flex hidden'>
                    <Image
                      src="/logo.jpg"
                      width={50}
                      height={50}
                      alt="logo"
                      className="rounded-full border-2 border-red-500"
                    />
                  </div>
                  <div className='flex-end'>
                    <div className='flex-center text-start font-bold'>{experience.role}</div>
                    <div className='flex-center text-start text-sm'>{experience.location}</div>
                  </div>
                </div>
                <div className='md:flex hidden md:flex-start'>{experience.date}</div>
              </div>
              <div className="flex items-center gap-16 justify-between">
                <div className="mt-2 flex text-sm lg:text-base flex-center text-start">
                  {experience.description}
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#122455] text-white  w-8 h-8 rounded-full flex items-center justify-center z-20">
              <span>0{index + 1}{experience._key}</span>
            </div>
          </motion.div>
        ))}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#122455] transform -translate-x-1/2"></div>
      </motion.div>
    </div>
  );
};

export default Experience;
