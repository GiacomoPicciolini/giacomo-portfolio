"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop />
      <BannerRowCenter playMarquee={playMarquee} />
      <BannerRowBottom />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter, i) => (
      <motion.span
        key={i}
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = () => {
  return (
    <div className={"banner-row"}>
      <div className='row-col'>

      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
        <p className='row-message'>
          Simple solutions require complex processes. <br />
          I’m a UX/UI designer based in Luzern.<br />
          These are the latest projects that speak most about me.
        </p>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = () => {
  return (
    <div className={"banner-row left"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='scroll'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          down
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
        <p className='row-message-2'>
          I am poised to bring a strategic and user-focused approach to all the projects, contributing to the success and innovation of the final products.
        </p>
      </motion.div>
    </div>
  );
};

const BannerRowCenter = ({ playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'>
        <AnimatedLetters title={"latest work"} disabled />
        <AnimatedLetters title={"latest work"} />
        <AnimatedLetters title={"latest work"} disabled />
        <AnimatedLetters title={"latest work"} disabled />
      </motion.div>
    </div>
  );
};

export default Banner;
