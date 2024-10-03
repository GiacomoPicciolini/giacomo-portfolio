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
            src={"/Pilatus/Pilatus/sim_ok2.jpg"}
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

  const y = useTransform(scrollYProgress, [0, 1], ['-30vh', '150vh']);

  return (
    <div className={styles.introContainer}>
      <motion.div style={{ y }} className={styles.introImage}>
        <Image
          src={"/Pilatus/Pilatus/MPS-MOCKUP.jpg"}
          fill
          alt='image'
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    </div>
  );
}


export default function Page() {
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
      <div className={styles.descriptionContainer}>
        <div className={styles.label}>
          <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
          <p>PROJECT</p>
        </div>
        <p className={styles.descriptionText}>
          The GBTS department is dedicated to developing software for pilot and technician training, teaching students how to approach aircraft through the use of theoretical lessons, flight simulators, and augmented reality.
        </p>
      </div>
      <Intro />
      <div className={styles.descriptionContainer}>
        <div className={styles.label}>
          <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
          <p>PROJECT</p>
        </div>
        <p className={styles.descriptionText}>
          The GBTS department is dedicated to developing software for pilot and technician training, teaching students how to approach aircraft through the use of theoretical lessons, flight simulators, and augmented reality.
        </p>
      </div>
      <Section />
      <div className={styles.descriptionContainer}>
        <div className={styles.label}>
          <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
          <p>PROJECT</p>
        </div>
        <p className={styles.descriptionText}>
          The GBTS department is dedicated to developing software for pilot and technician training, teaching students how to approach aircraft through the use of theoretical lessons, flight simulators, and augmented reality.
        </p>
      </div>
    </main>
  );
}
