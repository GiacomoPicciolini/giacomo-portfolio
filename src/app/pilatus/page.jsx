'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import styles from './page.module.scss';

function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={container} className={styles.sectionContainer}>
      <div className={styles.textContainer}>
        <p className={styles.description}>
          Beauty and quality need the right time to be conceived and realised
          even in a world that is in too much of a hurry.
        </p>
        <p className={styles.heading}>Background Parallax</p>
      </div>
      <div className={styles.background}>
        <motion.div style={{ y }} className={styles.backgroundImage}>
          <Image
            src={"/Pilatus/Pilatus/MPS-MOCKUP.jpg"}
            fill
            alt='image'
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </div>
  );
}

function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div className={styles.introContainer}>
      <motion.div style={{ y }} className={styles.introImage}>
        <Image
          src={"/Pilatus/Pilatus/sim_ok2.jpg"}
          fill
          alt='image'
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    </div>
  );
}

function Description() {
  return (
    <div className={styles.descriptionContainer}>
      <p className={styles.descriptionText}>
        The quick brown fox jumps over the lazy dog
      </p>
    </div>
  );
}

export default function Contact() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Section />
    </main>
  );
}
