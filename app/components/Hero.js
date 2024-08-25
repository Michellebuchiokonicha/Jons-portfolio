"use client"

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DivGrey = styled.div`
    // font-family: "Varela Round", sans-serif; 
    // font-family: "Grey Qo", 'cursive';
    //  font-family: 'Montserrat', sans-serif;
`;

const  Hero = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
  };

  return (
    <DivGrey id='hero' className=' min-h-screen text-white min-h-screen flex  items-center justify-center'>
      <div className='bg-[#122455] align-center lg:pl-32 rounded-xl m-auto pt-0 px-10 lg:gap-10 min-h-[30rem] h-full flex w-4/5 flex-col lg:flex-row items-center justify-center'>
        <div className='lg:w-1/2  w-full lg:mb-0 text-center items-center lg:text-left'>
          <div className='w-full mt-16 lg:mt-0 md:mt-8 sm:w-[30rem] leading-6 lg:mb-4 mx-auto lg:mx-0'>
            <motion.div
              className='text-2xl md:text-4xl lg:pb-6 leading-10'
              variants={textVariants}
              initial="hidden"
              animate={controls}
              ref={ref}
            >
              Cybersecurity Analyst, Cyber Educator & Cloud Architect.
            </motion.div>
            <motion.div
              className=' text-sm sm:text-base'
              variants={textVariants}
              initial="hidden"
              animate={controls}
              ref={ref}
            >
              Cloud security and safety | Cloud Consultancy| | Cyber Innovation and Education
            </motion.div>
          </div>
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <button class="bg-[#5D5F70] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0">
              Let&apos;s talk
            </button>
          </motion.div>
        </div>
        <div className='lg:w-1/2 items-center justify-center hidden lg:block m-auto flex pb-32  w-full lg:mb-0 text-center lg:text-left'>
          <motion.img
            src='J-2.png'
            alt='my profile picture'
            className='rounded-full shadow-[#122455]'
            variants={imageVariants}
            // initial="hidden"
            // animate={controls}
            ref={ref}
          />
        </div>
      </div>
    </DivGrey>
  );
};

export default Hero;
