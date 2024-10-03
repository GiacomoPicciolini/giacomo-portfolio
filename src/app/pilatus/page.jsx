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
          In collaboration with other Design Teams, we built first the company’ Design System.</p>
        <p className={styles.heading}>
          My first Goal was to analyzed how to incorporate Design discipline into an already well-defined development process, with a V-Based approach, and established work-phases that include System Engineers, Project Managers, and V&V.
          <br /><br />
          We used the Google Design Sprint methodology, tailoring the process to fit our needs and expectations, as baseline to create our own design process.
          Introducing workshops, User Research and collaborating with other departments, we were at the end able to fit Design into the Pilatus Lifecycle, starting immediately to see on the products under development results and improvements.
        </p>
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
      <div className={styles.mainDescriptionContainer}>
        <div className={styles.label}>
          <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
          <p>PROJECT</p>
        </div>
        <p className={styles.descriptionText}>
          The GBTS department is dedicated to developing software for pilot and technician training, teaching students how to approach aircraft through the use of theoretical lessons, flight simulators, and augmented reality.
        </p>
      </div>
      <Intro />
      <div className={styles.doubleDescriptionContainer}>
        <div className={styles.secondaryDescription}>
          <div className={styles.label}>
            <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
            <p>OVERVIEW</p>
          </div>
          <p className={styles.secondaryDescriptionText}>
            Just as in any other field, the military aviation sector has felt the need to innovate to keep up with the times, and Pilatus has decided to seize the opportunity.
            <br /><br />
            At the beginning of 2022, the &quot;Common Platform&quot; project was launched, aimed at creating new teaching tools based on the latest technologies, improving and integrating established products.
          </p>
        </div>
        <div className={styles.secondaryDescription}>
          <div className={styles.label}>
            <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
            <p>CHALLENGES AND GOALS</p>
          </div>
          <p className={styles.secondaryDescriptionText}>
            The ultimate goal is to develop a wide range of products that fully cover every aspect of Training Academy instruction.
            <br /><br />
            Theoretical lessons, based on images and 3D aircraft models, VR and XR familiarization devices, mission planning and debriefing tools, full-flight simulators.
            <br /><br />
            The real goal was to create this set of products, interconnecting them through a centralized management system. This system, called Academy TMS, not only collects and analyzes data but also schedules the academic year and manages content, training assets and users.          </p>
        </div>
      </div>
      <Section />
      <div className={styles.mainDescriptionContainer}>
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
