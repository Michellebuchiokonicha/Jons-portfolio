"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Years = () => {
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

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.6 } },
  };

  return (
    <div
      className="snap-start min-h-screen flex flex-col md:flex-row items-center text-center justify-center text-white justify-around py-16"
      style={{
        background: `linear-gradient(rgba(5, 14, 40, 0.8), rgba(5, 14, 40, 0.8)), url('/J-2.png') center center/contain no-repeat`,
      }}
    >
      <motion.div
        className=""
        variants={textVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <h1 className="leading-10 py-1">Clients</h1>
        <motion.div
          className="font-bold md:font-extrabold text-3xl md:text-4xl lg:text-6xl"
          variants={numberVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          256+
        </motion.div>
      </motion.div>
      <motion.div
        className=""
        variants={textVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <h1 className="leading-10 py-1">Experience</h1>
        <motion.div
          className="font-bold md:font-extrabold text-3xl md:text-4xl lg:text-6xl"
          variants={numberVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          4 Years
        </motion.div>
      </motion.div>
      <motion.div
        className=""
        variants={textVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <h1 className="leading-10 py-1">Happy Clients</h1>
        <motion.div
          className="font-bold md:font-extrabold text-3xl md:text-4xl lg:text-6xl"
          variants={numberVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          100%
        </motion.div>
      </motion.div>
      <motion.div
        className=""
        variants={textVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <h1 className="leading-10 py-1">Impact</h1>
        <motion.div
          className="font-bold md:font-extrabold text-3xl md:text-4xl lg:text-6xl"
          variants={numberVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          10K
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Years;
