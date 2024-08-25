"use client"

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; 
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';



async function getData() {
  const query = `*[_type == "about"][0]
{
  content
}

`
const data = await client.fetch(query);
return data;
}

export const revalidate = 60;

const About = () => {

  const customComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-semibold">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-medium">{children}</h3>,
      p: ({ children }) => (
        <p className="text-gray-400 mb-4">{children}</p>
      ),
      ul: ({ children }) => <ul className="list-disc space-y-2">{children}</ul>,
      ol: ({ children }) => <ol className="list-decimal space-y-2">{children}</ol>,

    },
  }

  const [aboutMe, setAboutMe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchAboutMe = async () => {
      setIsLoading(true);
      try {
        const data = await getData();
        setAboutMe(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAboutMe();
  }, [])
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

  const Paragraph = ({ children }) => {
    return (
      <p className="about-paragraph mb-4">{children}</p>
    );
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const [text] = useTypewriter({
    words: ['Jonathan'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
    onLoopDone: () => console.log("loop completed after infinite runs.")
  });

  const [text2] = useTypewriter({
    words: ['Ayodeji'],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 150,
    onLoopDone: () => console.log("loop completed after infinite runs.")
  });
  useEffect(() => {
    const fetchAboutMe = async () => {
      const data = await getData();
      setAboutMe(data);
    };
    fetchAboutMe();
  }, []);

  return (
    
    <section id='about' className='snap-start m-auto px-8 mb-5 text-white min-h-screen flex flex-col items-center justify-center'>
      <motion.div
        className='m-auto items-center justify-center align-center font-bold text-3xl md:text-4xl'
        variants={textVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.span className='font-normal text-gray-200'>About Me</motion.span>
      </motion.div>

      <div className="m-auto flex flex-col lg:flex-row gap-y-10 text-center lg:gap-x-1 items-center justify-center text-white w-full">
        <motion.div
          className='font-normal text-4xl md:text-7xl lg:text-8xl w-full lg:w-1/3 lg:pl-16 text-gray-200'
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
          className='font-normal text-4xl md:text-7xl lg:text-8xl w-full lg:w-1/3 text-gray-200'
          variants={nameVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {text2}
          <Cursor cursorColor='#8B0000' />
        </motion.div>
      </div>

      <div className='px-0 flex flex-col md:flex-row items-center gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-[20%] justify-around mt-10 w-full'>
        <motion.div
          className='text-lg flex-1 md:text-2xl w-full md:w-[35%] text-center md:text-left'
          variants={textVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <motion.div className='font-bold text-2xl italic text-gray-300'>Do your best,</motion.div>
          <motion.div className='font-normal text-sm italic text-gray-300'>Whereas recognition of the inherent dignity</motion.div>
        </motion.div>

        <motion.div
          className='w-full flex-1 md:text-2xl text-center md:text-left'
          variants={textVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <motion.span className='font-normal text-base text-gray-300 mb-4 pb-4'>
          {isLoading ? (
          <p>Loading...</p>
        ) : (
          <PortableText value={aboutMe?.content} components={{ ...customComponents, p: Paragraph }} className='mb-4' />
        )}
          </motion.span>

          <motion.div className='font-normal mt-16'>
            <div className='flex justify-center lg:justify-start space-x-6'>
              <a href="https://www.linkedin.com" className="relative group">
                <FaLinkedin className="text-2xl text-gray-200 hover:text-white transition-colors" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 text-sm text-white bg-gray-800 rounded px-2 py-1 transition-opacity">LinkedIn</span>
              </a>
              <a href="https://github.com" className="relative group">
                <FaGithub className="text-2xl text-gray-200 hover:text-white transition-colors" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 text-sm text-white bg-gray-800 rounded px-2 py-1 transition-opacity">GitHub</span>
              </a>
              <a href="https://twitter.com" className="relative group">
                <FaTwitter className="text-2xl text-gray-200 hover:text-white transition-colors" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 text-sm text-white bg-gray-800 rounded px-2 py-1 transition-opacity">Twitter</span>
              </a>
              <a href="https://www.instagram.com" className="relative group">
                <FaInstagram className="text-2xl text-gray-200 hover:text-white transition-colors" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 text-sm text-white bg-gray-800 rounded px-2 py-1 transition-opacity">Instagram</span>
              </a>
              {/* <a href="https://www.facebook.com" className="relative group">
                <FaFacebook className="text-2xl text-gray-200 hover:text-white transition-colors" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 text-sm text-white bg-gray-800 rounded px-2 py-1 transition-opacity">Facebook</span>
              </a> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
