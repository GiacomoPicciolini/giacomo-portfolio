'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectFooter from '../../../components/ProjectFooter/index';
import styles from '../../../common/page.module.scss';

import { IntroSection, ImageWrapper, ParallaxSection, ContentBlock } from "../../common/Parallax"

import image1 from '../../../../public/Pilatus/sim_ok2.jpg';
import image2 from '../../../../public/Pilatus/MPS-MOCKUP.jpg';


const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.container}>
      <Link className={styles.closebuttonContainer} href='/'>
        <div className={styles.closebutton}>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="close">
              <g mask="url(#mask0_8_56)">
                <path id="close_2"
                  d="M6.40001 18.3078L5.69226 17.6L11.2923 12L5.69226 6.40001L6.40001 5.69226L12 11.2923L17.6 5.69226L18.3078 6.40001L12.7078 12L18.3078 17.6L17.6 18.3078L12 12.7078L6.40001 18.3078Z" />
              </g>
            </g>
          </svg>
        </div>
      </Link>
      <div className={styles.contentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>PROJECT</p>
        </div>
        <p className={styles.primaryText}>
          The GBTS department is dedicated to developing software for pilot and
          technician training, teaching students how to approach aircraft
          through the use of theoretical lessons, flight simulators, and
          augmented reality.
        </p>
      </div>

      <IntroSection introImage={image1} />

      <div className={styles.multiContentWrapper}>
        <ContentBlock
          label='OVERVIEW'
          texts={[
            'Just as in any other field, the military aviation sector has felt the need to innovate to keep up with the times, and Pilatus has decided to seize the opportunity.',
            'At the beginning of 2022, the "Common Platform" project was launched, aimed at creating new teaching tools based on the latest technologies, improving and integrating established products.',
          ]}
        />
        <ContentBlock
          label='CHALLENGES AND GOALS'
          texts={[
            'The ultimate goal is to develop a wide range of products that fully cover every aspect of Training Academy instruction.',
            'Theoretical lessons, based on images and 3D aircraft models, VR and XR familiarization devices, mission planning and debriefing tools, full-flight simulators.',
            'The real goal was to create this set of products, interconnecting them through a centralized management system. This system, called Academy TMS, not only collects and analyzes data but also schedules the academic year and manages content, training assets, and users.',
          ]}
        />
      </div>

      <ParallaxSection backgroundImage={image2} />

      <ImageWrapper
        images={[
          { src: '/Pilatus/Simulator.jpg', alt: 'simulator image' },
          { src: '/Pilatus/TMS-IMAGE.jpg', alt: 'TMS image' },
        ]}
      />

      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>OVERVIEW</p>
        </div>
        <p className={styles.secondaryText}>
          In collaboration with other Design Teams, we built the company’s first
          Design System.
          <br />
          <br />
          My first Goal was to analyze how to incorporate Design discipline into
          an already well-defined development process, with a V-Based approach,
          and established work phases that include System Engineers, Project
          Managers, and V&V.
          <br />
          <br />
          We used the Google Design Sprint methodology, tailoring the process to
          fit our needs and expectations, as a baseline to create our own design
          process. Introducing workshops, User Research, and collaborating with
          other departments, we were able to fit Design into the Pilatus
          Lifecycle, seeing immediate results and improvements in the products
          under development.
        </p>
      </div>

      <ImageWrapper
        images={[
          { src: '/Pilatus/VR_ok.jpg', alt: 'VR image' },
          { src: '/Pilatus/Simulator2.jpg', alt: 'Simulator image' },
        ]}
      />

      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>THE DESIGN</p>
        </div>
        <p className={styles.secondaryText}>
          I have designed the UX and UI of 3 completely new products: Academy
          TMS, Interactive Wallboards, and Familiarization Learning CBT.
          <br />
          <br />
          Besides that, a full redesign of existing products like Mission
          Planner and Debrief, and Computer Based Training, was completed to
          visually unify them and add new features and functionalities that
          allowed an exchange of data and full integration.
          <br />
          <br />
          Thanks to user research, I tackled complicated topics such as design
          for VR, and learned how end users could influence design choices. The
          research and testing allowed us to simplify the User Journey as much
          as possible in very complicated management software, used by many
          Aviation Academies worldwide.
        </p>
      </div>

      <ImageWrapper
        images={[
          { src: '/Pilatus/IWB_Mockup.jpg', alt: 'Mockup image' },
          { src: '/Pilatus/GBTS_27ok.jpg', alt: 'GBTS image' },
          { src: '/Pilatus/login_ok.jpg', alt: 'Login image' },
          { src: '/Pilatus/TMS-IMAGE.jpg', alt: 'TMS image' },
        ]}
      />

      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>THE TAKEAWAY</p>
        </div>
        <p className={styles.secondaryText}>
          Through the design of new products, we have managed to increase the
          satisfaction rate of current customers, extending existing contracts
          and signing deals with 3 new Training Academies.
          <br />
          <br />
          Working with focus groups and surveys, we confirmed how product
          usability has increased exponentially and how the Pilatus brand is now
          universally recognized across all its products.
          <br />
          <br />
          The biggest challenge was to introduce design discipline in a strongly
          established engineers/aviation environment, educating people to a new
          perspective based on agile methods, user-centered design, and
          iterative approaches.
          <br />
          <br />
          This experience taught me how to find creative solutions to problems
          often unique to design projects, such as technical limitations of an
          app or the inability to use common User Research methodologies.
        </p>
      </div>

      <div className={styles.contact}>
        <div className={styles.body}>
          <div className={styles.nav}>
            <div className={styles.projects}>
              <Link href='/sharely'>Next Project</Link>
            </div>
            <Link href='/sharely' className={styles.next}>
              <span>Sharely</span>
              <img src='/arrow_forward_2.svg' alt='Next' />
            </Link>
          </div>
          <div className={styles.nav}>
            <div></div>
            <Link href='/sky' className={styles.next}>
              <img src='/arrow_back.svg' alt='Previous' />
            </Link>
          </div>
          <ProjectFooter title='SHARELY' />
          <div className={styles.nav}>
            <div></div>
            <a href='#top'>
              <span className={styles.firstImage}>
                <Image
                  width={24}
                  height={24}
                  alt='Back to top'
                  src={'/arrow_upsvg'}
                />
              </span>
              <span className={styles.text}>Back on top</span>
              <span className={styles.secondImage}>
                <Image
                  width={24}
                  height={24}
                  alt='Back to top'
                  src={'/arrow_up.svg'}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
