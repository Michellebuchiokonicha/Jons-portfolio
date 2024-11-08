"use client"

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
 import { useTypewriter, Cursor } from 'react-simple-typewriter';

const About = () => {
  const textVariants = {
    hidden: { opacity: 0.3, y: 50 },
    visible: { opacity: 1, y: 0.5, transition: { duration: 0.8, delay: 0.2, staggerChildren: 0.1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0.3, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } },
  };

  const nameVariants = {
    hidden: { opacity: 0.3, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const [text] = useTypewriter({
    words: ['Transforming Communities through Tech' ,],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
    onLoopDone: () => console.log(`loop completed after infinite runs.`)
  })
  const [text2] = useTypewriter({
    words: ['Creating Opportunities in Cybersecurity.' ,],
    loop: 0,
    typeSpeed: 150,
    //  delay: 200,
    deleteSpeed: 150,
    onLoopDone: () => console.log(`loop completed after infinite runs.`)
  })


  return (
    <section id='about' className='snap-start m-auto px-8 mb-5 text-white min-h-screen flex flex-col items-center justify-center'>
      <motion.div
        className='m-auto items-center justify-center align-center font-bold text-3xl md:text-4xl'
        variants={textVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        {/* <motion.span className='font-normal'> */}
            {/* Abou /t Me */}
            {/* </motion.span> */}
        <motion.span className='font-normal'> About Me</motion.span>
      </motion.div>
      <div className="m-auto flex flex-col lg:flex-row gap-y-10 text-center lg:gap-x-1 items-center justify-center text-white w-full">
        <motion.div
          className=' font-normal text-4xl md:text-7xl lg:text-8xl w-full lg:w-1/3 lg:pl-16'
          variants={nameVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {text}
          <Cursor cursorColor='#8B0000' />
        </motion.div>
        <div className='w-1/3 flex items-center justify-center'>
          <motion.img
            src='J-3.jpeg'
            alt='my profile picture'
            className='rounded-full'
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          />
        </div>
        <motion.div
          className='font-normal text-4xl md:text-7xl lg:text-8xl w-full lg:w-1/3'
          variants={nameVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {text2}
          <Cursor cursorColor='#8B0000' />
        </motion.div>
      </div>
      <div className='px-0 md:px-32 flex flex-col md:flex-row items-center gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-96 justify-between mt-10 w-full'>
        <motion.div
          className='text-lg md:text-2xl w-full md:w-[35%] text-center md:text-left'
          variants={textVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <motion.span className='font-normal'>Welcome </motion.span>
          <motion.span className='font-normal'> to my corner of the Internet</motion.span>
        </motion.div>
        <motion.div
          className='w-full md:w-[35%] text-lg md:text-2xl text-center md:text-left'
          variants={textVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <motion.span className='font-normal'>with over 7 years of impact ..</motion.span>
          <motion.span className='font-normal'>Social media</motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;