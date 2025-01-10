"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';

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
    words: ['Transforming Communities through Tech'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
    onLoopDone: () => console.log(`loop completed after infinite runs.`)
  });
  
  const [text2] = useTypewriter({
    words: ['Creating Opportunities in Cybersecurity.'],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 150,
    onLoopDone: () => console.log(`loop completed after infinite runs.`)
  });

  return (
    <section id='about' className='snap-start m-auto px-8 mb-5 text-white min-h-screen flex flex-col items-center justify-center'>
      <motion.div
        className='m-auto items-center justify-center align-center font-bold text-3xl md:text-4xl'
        variants={textVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.span className='font-normal hidden md:block pt-4'>#whoami</motion.span>
      </motion.div>
      <div className="m-auto hidden md:flex flex-col lg:flex-row gap-y-10 text-center lg:gap-x-1 items-center justify-center text-white w-full">
        <motion.div
          className=' font-normal text-lg md:text-xl lg:text-4xl w-full lg:w-1/3 lg:pl-16'
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
            src='J-black.PNG'
            alt='my profile picture'
            className='rounded-full'
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            width={200}
            height={200}
            ref={ref}
          />
        </div>
        <motion.div
          className='font-normal text-lg md:text-xl lg:text-4xl w-full lg:w-1/3'
          variants={nameVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {text2}
          <Cursor cursorColor='#8B0000' />
        </motion.div>
      </div>
      {/* mobile starts */}
      <div className="m-auto py-12 flex md:hidden flex-col lg:flex-row gap-y-10 text-center lg:gap-x-1 items-center justify-center text-white w-full">
        <div className='font-semibold text-xl'>#whoami</div>
       <div>
          {text}
          <Cursor cursorColor='#8B0000' />
        </div>
        <div className='w-1/3 flex items-center justify-center'>
         <Image
            src='/J-black.PNG'
            alt='my profile picture'
            className='rounded-full'
            
            width={200}
            height={200}
          />
        </div>
        <div
          className='font-normal text-lg md:text-xl lg:text-4xl w-full lg:w-1/3'
        >
          {text2}
          <Cursor cursorColor='#8B0000' />
        </div>
      </div>
      {/* mobile ends */}
      <div className='px-0 md:px-2 flex flex-col md:flex-row items-center gap-y-8 md:gap-y-0 gap-x-0 md:gap-x-80 justify-between mt-10 w-full'>
        <motion.div
          className='text-sm md:text-base leading-8 w-full md:w-1/3 text-center md:text-left'
          variants={textVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <motion.div className='font-sm leading-loose text-xl font-bold md:mb-4'>Welcome  to my corner of the Internet </motion.div>
          <motion.span className='font-normal leading-loose'>Jonathan is a Cybersecurity Professional passionate about using technology 
            for social good. With extensive experience in IT security and consulting safeguarding organizational assets and 
            optimizing technology resources for enhanced productivity and growth. Having worked as a Cybersecurity Engineer, 
            Cybersecurity Analyst, and information security officer Skilled in cybersecurity risk assessment, Network security, 
            endpoint detection and response,
            monitoring and investigation etc. I hold certifications such as ISO 27001 Lead Implementer, Security+, CCNA, CompTIA A+. </motion.span>
        </motion.div>
        <motion.div
          className='w-full md:w-1/3 text-sm md:text-base leading-8 text-center md:text-left'
          variants={textVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <motion.span className='font-normal leading-loose'>I hold a Master&apos;s in
            Cybersecurity and have a background in leading cybersecurity initiatives for diverse clients.
            He is a member of the Cyber Security Experts Association of Nigeria, the British Computer Society,
            ISC2, ISACA and the Chartered Institute of Information Security, London. I am passionate about
            creating economic advancement opportunities for young ones leveraging technology and also an advocate of a
             diverse and inclusive tech ecosystem and volunteers as a UK STEM Ambassador and CyberFirst Ambassador, an initiative of the 
            National Cyber Security Centre (NCSC), an arm of the GCHQ, promoting diversity in tech and inspiring the
            next generation of tech talents.</motion.span>
          <motion.div className='py-4 font-normal'>
            <a
              href='/Jonathan Ayodele NG CVvv.pdf'
              download='https://drive.google.com/drive/folders/1quWhSClM_-IVDspYz6vQMkDvIgAXwReR?usp=drive_link'
              className="bg-[#8B0000] mt-4 lg:mt-6 hover:bg-blue-700 text-gray-300 font-bold py-2 px-4 rounded"
            >
              Download my CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
