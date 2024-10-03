'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={container} className={styles.parallaxSection}>
      <div className={styles.fixedBackground}>
        <motion.div style={{ y }} className={styles.backgroundImageWrapper}>
          <Image
            src={"/Pilatus/Pilatus/sim_ok2.jpg"}
            fill
            alt="image"
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
    <div className={styles.heroSection}>
      <motion.div style={{ y }} className={styles.heroImage}>
        <Image
          src={"/Pilatus/Pilatus/MPS-MOCKUP.jpg"}
          fill
          alt="image"
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
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.labelText}>
          <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
          <p>PROJECT</p>
        </div>
        <p className={styles.primaryText}>
          The GBTS department is dedicated to developing software for pilot and technician training, teaching students how to approach aircraft through the use of theoretical lessons, flight simulators, and augmented reality.
        </p>
      </div>
      <Intro />
      <div className={styles.multiContentWrapper}>
        <div className={styles.secondaryContent}>
          <div className={styles.labelText}>
            <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
            <p>OVERVIEW</p>
          </div>
          <p className={styles.secondaryText}>
            Just as in any other field, the military aviation sector has felt the need to innovate to keep up with the times, and Pilatus has decided to seize the opportunity.
            <br /><br />
            At the beginning of 2022, the &quot;Common Platform&quot; project was launched, aimed at creating new teaching tools based on the latest technologies, improving and integrating established products.
          </p>
        </div>
        <div className={styles.secondaryContent}>
          <div className={styles.labelText}>
            <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
            <p>CHALLENGES AND GOALS</p>
          </div>
          <p className={styles.secondaryText}>
            The ultimate goal is to develop a wide range of products that fully cover every aspect of Training Academy instruction.
            <br /><br />
            Theoretical lessons, based on images and 3D aircraft models, VR and XR familiarization devices, mission planning and debriefing tools, full-flight simulators.
            <br /><br />
            The real goal was to create this set of products, interconnecting them through a centralized management system. This system, called Academy TMS, not only collects and analyzes data but also schedules the academic year and manages content, training assets and users.
          </p>
        </div>
      </div>
      <Section />
      <div className={styles.imageWrapper}>
        <div className={styles.doubleDescriptionImage}>
          <Image
            src={"/Pilatus/Pilatus/Simulator.jpg"}
            fill
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.doubleDescriptionImage}>
          <Image
            src={"/Pilatus/Pilatus/TMS-IMAGE.jpg"}
            fill
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
          <p>OVERVIEW</p>
        </div>
        <p className={styles.secondaryText}>
          In collaboration with other Design Teams, we built first the company’ Design System.
          <br /><br />
          My first Goal was to analyzed how to incorporate Design discipline into an already well-defined development process, with a V-Based approach, and established work-phases that include System Engineers, Project Managers, and V&V.
          <br /><br />
          We used the Google Design Sprint methodology, tailoring the process to fit our needs and expectations, as baseline to create our own design process.
          Introducing workshops, User Research and collaborating with other departments, we were at the end able to fit Design into the Pilatus Lifecycle, starting immediately to see on the products under development results and improvements.        </p>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.singleDescriptionImage}>
          <Image
            src={"/Pilatus/Pilatus/VR_ok.jpg"}
            fill
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.singleDescriptionImage}>
          <Image
            src={"/Pilatus/Pilatus/Simulator2.jpg"}
            fill
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
          <p>THE DESIGN</p>
        </div>
        <p className={styles.secondaryText}>
          I have designed the UX and UI of 3 completely new products:
          Academy TMS, Interactive Wallboards and Familiarization Learning Computer Based Training.
          <br /><br />
          Besides that, it has also been completed a full redesign of existing products such as Mission Planner and Debrief, and Computer Based Training, in order to uniform them visually, and add new features and functionalities that allowed an exchange of data, and a full integration.
          <br /><br />
          Thanks to user research, I was able to tackle complicated topics such as design for VR, and see how end users could influence design choices. The research and testing developed, allowed us to simplify User Journey as much as possible in very complicated management software, used by many Aviation Academies all over the world.  </p>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.fourDescriptionImage}>
          <Image
            src={"/Pilatus/Pilatus/IWB_Mockup.jpg"}
            fill
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.fourDescriptionImage}>
          <Image
            src={"/Pilatus/Pilatus/GBTS_27ok.jpg"}
            fill
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.fourDescriptionImage}>
          <Image
            src={"/Pilatus/Pilatus/login_ok.jpg"}
            fill
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.fourDescriptionImage}>
          <Image
            src={"/Pilatus/Pilatus/TMS-IMAGE.jpg"}
            fill
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={"/radio.svg"} width={24} height={24} alt="dot" />
          <p>THE TAKEAWAY</p>
        </div>
        <p className={styles.secondaryText}>
          Through the design of new products, we have managed to increase the satisfaction rate of current customers, extending existing contracts and signing deals with 3 new Training Academies.
          <br /> <br />
          Working with focus groups and surveys, we have been able to confirm how the usability of the product has increased exponentially and how the Pilatus brand is now universally recognized across all its products.
          <br /> <br />
          The biggest challenge to face, has been to introduce in an strongly established engineers/aviation environment, the discipline of design, educating people to a new perspective based on agile methods, user centered design, and iterative approaches.
          <br /> <br />
          This experience taught me how to find different and creative solutions to problems that are often not found in design projects, such as technical limitations of an App or the inability to use the most common User Research methodologies.
        </p>
      </div>
      <div className={styles.contact}>
        <div className={styles.body}>
          <div className={styles.nav}>
            <div className={styles.projects}>
              <Link href='/sharely'>
                Next Project
              </Link>
            </div>
            <Link href='/sharely' className={styles.next}>
              <span>Sharely</span>
              <img src='/arrow_forward_2.svg' alt="image" />
            </Link>
          </div>
          <div className={styles.nav}>
            <div>
            </div>
            <Link href="/sky" className={styles.next}>
              <img src='/arrow_back.svg' alt="image" />
            </Link>
          </div>
          <div className={styles.title}>
            <h2>SHARELY</h2>
          </div>
          <div className={styles.nav}>
            <div></div>
            <a href='#top'>
              <span className={styles.firstImage}>
                <Image color="white" width={24} height={24} alt="Email" src={"/arrow_forward.svg"} />
              </span>
              <span className={styles.text}>Back on top</span>
              <span className={styles.secondImage}>
                <Image color="white" width={24} height={24} alt="Email" src={"/arrow_forward.svg"} />
              </span>
            </a>
          </div>
        </div>
      </div>

    </main >
  );
}
