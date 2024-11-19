'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectFooter from '../../../components/ProjectFooter/index';
import styles from '../../../common/page.module.scss';

import { IntroSection, ImageWrapper, ParallaxSection, ContentBlock } from "../../../common/Parallax"

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
    <main id="top" className={styles.container}>
      <Link className={styles.closebuttonContainer} href='/#hey'>
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
          The GBTS department is dedicated to developing software for pilots and technicians training, teaching students how to approach aircraft through the use of theoretical lessons, flight simulators, and augmented reality.
        </p>
      </div>

      <IntroSection introImage={image1} />

      <div className={styles.multiContentWrapper}>
        <ContentBlock
          label='OVERVIEW'
          texts={[
            'Like many other fields, the military aviation sector must innovate to stay current. Pilatus has embraced this challenge.',
            'In early 2022, the ‘Common Platform’ project was launched to develop new teaching tools using the latest technologies, while also enhancing and integrating existing products.',
          ]}
        />
        <ContentBlock
          label='CHALLENGES AND GOALS'
          texts={[
            'The ultimate goal is to develop a comprehensive range of products that cover every aspect of Training Academy instruction.',
            'These include theoretical lessons using images and 3D aircraft models, VR and XR familiarization devices, mission planning and debriefing tools, and full-flight simulators.',
            'The aim was to create an interconnected set of products managed through a centralized system called Academy TMS. This system not only collects and analyzes data but also schedules the academic year and manages content, training assets, and users.',
          ]}
        />
      </div>

      <ImageWrapper
        images={[
          { src: '/Pilatus/MPS-MOCKUP.jpg', alt: 'simulator image' },
        ]}
      />

      <ImageWrapper
        images={[
          { src: '/Pilatus/Simulator.jpg', alt: 'simulator image' },
          { src: '/Pilatus/TMS-IMAGE.jpg', alt: 'TMS image' },
        ]}
      />

      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>BUILDING A PROCESS</p>
        </div>
        <p className={styles.secondaryText}>
          In collaboration with other design teams, we first built the company’s Design System.
          <br />
          <br />
          My initial goal was to analyze how to incorporate design discipline into an already well-defined development process, using a V-based approach with established work phases that include system engineers, project managers, and V&V engineers.
          <br />
          <br />
          We adopted the Google Design Sprint methodology, tailoring it to fit our needs and expectations as a baseline for creating our own design process. By introducing workshops, conducting user research, and collaborating with other departments, we successfully integrated design into the Pilatus lifecycle. This integration quickly yielded noticeable improvements in the products under development.
        </p>
      </div>

      <ImageWrapper
        images={[
          { src: '/Pilatus/VR_ok.jpg', alt: 'VR image' },
        ]}
      />


      <ImageWrapper
        images={[
          { src: '/Pilatus/tms2.jpg', alt: 'Simulator image' },
        ]}
      />


      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>THE DESIGN</p>
        </div>
        <p className={styles.secondaryText}>
          I have designed the UX and UI for three completely new products: Academy TMS, Interactive Wallboards, and Familiarization Learning Computer-Based Training.
          <br />
          <br />
          Additionally, I completed a full redesign of existing products such as Mission Planner, Debrief, and Computer-Based Training. This redesign aimed to unify their visual appearance and add new features and functionalities, enabling data exchange and full integration.
          <br />
          <br />
          Through user research, I tackled complex topics like VR design and observed how end users could influence design choices. The research and testing allowed us to simplify the user journey as much as possible in very complex management software used by many aviation academies worldwide.
        </p>
      </div>

      <ImageWrapper
        images={[
          { src: '/Pilatus/IWB_OLD.jpg', alt: 'Mockup image', hoverSrc: '/Pilatus/IWB_NEW.jpg' },
          { src: '/Pilatus/TMS-OLD.jpg', alt: 'GBTS image', hoverSrc: '/Pilatus/TMS-New.jpg' },
          { src: '/Pilatus/CBT-OLD.jpg', alt: 'Login image', hoverSrc: '/Pilatus/CBT-NEW.jpg' },
          { src: '/Pilatus/MPS_OLD.jpg', alt: 'TMS image', hoverSrc: '/Pilatus/MPS_NEW.jpg' },
        ]}
      />

      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>THE TAKEAWAY</p>
        </div>
        <p className={styles.secondaryText}>
          Through the design of new products, we have significantly increased customer satisfaction, extended existing contracts, and signed deals with three new training academies.
          <br />
          <br />
          By working with focus groups and conducting surveys, we confirmed that product usability has improved exponentially and that the Pilatus brand is now universally recognized across all its products.
          <br />
          <br />
          The biggest challenge was introducing the discipline of design into a well-established engineering and aviation environment. This required educating people on new perspectives based on agile methods, user-centered design, and iterative approaches.
          <br />
          <br />
          This experience taught me how to find creative solutions to unique problems, such as technical limitations of an app or the inability to use common user research methodologies.
        </p>
      </div>

      <div className={styles.contact}>
        <div className={styles.body}>
          <div className={styles.nav}>
            <div className={styles.projects}>
              <a href='/sharely#top'>Next Project</a>
            </div>
            <a href='/sharely#top' className={styles.next}>
              <span>Sharely</span>
              <img src='/arrow_forward_2.svg' alt='Next' />
            </a>
          </div>
          <div className={styles.nav}>
            <div></div>
            <a href='/sky#top' className={styles.next}>
              <img src='/arrow_back.svg' alt='Previous' />
            </a>
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
                  src={'/arrow_up.svg'}
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
