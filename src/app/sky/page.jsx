'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectFooter from '../../components/ProjectFooter/index';
import styles from '../../common/page.module.scss';
import { IntroSection, ImageWrapper, ParallaxSection, ContentBlock } from "../../common/Parallax"

import image1 from '../../../public/Sky/copertina_sky.jpg';
import image2 from '../../../public/Sky/screensky.png';

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
          Improving Sky Go App functionalities and rewrite experience on Sky Q and Sky On Demand
        </p>
      </div>

      <IntroSection introImage={image1} />

      <div className={styles.multiContentWrapper}>
        <ContentBlock
          label='OVERVIEW'
          texts={[
            'Sky Television Broadcast was initially established as a pan-European private television network and gradually became a market leader. Over time, it expanded its offerings to include streaming services and apps for various platforms. This expansion has made the content consumption experience more engaging and up-to-date for subscribers, keeping pace with evolving trends.',
            'Before fully diving into my role as a UX/UI Designer, I had the opportunity to briefly join the Graphic Design Team. This experience allowed me to fully understand the rhythms, organization, and environment of the company.',
          ]}
        />
        <ContentBlock
          label=''
          texts={[
            'After completing this brief experience and gaining insight into the demands of a 24-hour on-air television environment, I began working on the UX/UI for various Sky apps, including Sky Go and Sky On Demand',
          ]}
        />
      </div>
      <div className={styles.titleContentWrapper}>
        <h3>
          &quot;Having had the opportunity to work in different roles has taught me how to communicate clearly and effectively, with a strong emphasis on data visualization and visual clarity in messaging&quot;
        </h3>
      </div>

      <ImageWrapper
        images={[
          { src: '/Sky/01.jpg', alt: 'sky' },
          { src: '/Sky/02.jpg', alt: 'sky' },
        ]}
      />

      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>CHALLENGES AND GOALS</p>
        </div>
        <div className={styles.secondaryText}>
          <h4>Identifying the differences</h4>
          <p>Although Sky Go and Sky On Demand are both applications, they are used on completely different platforms: Sky Go on mobile devices and Sky On Demand as an OTT app on television. The team’s goal was to conduct tests to determine where to unify the user experience and where to differentiate it.</p>
          <br />
          <br />
          <h4>Expanding the user base</h4>
          <p>Sky was one of the first companies to launch streaming apps, but it later had to compete with new platforms entering the market. One of the objectives was to analyze user requests and compare them with the latest trends and choices of various competitors. This analysis helped determine which new features to develop, making the user experience increasingly satisfying.</p>
          <br />
          <br />
          <h4>Understanding the User</h4>
          <p>User research has always been fundamental for the company. From the outset, I had the opportunity to closely interact with a significant portion of Sky subscribers, conducting product tests with a perfectly profiled audience.</p>
        </div>
      </div>

      <ImageWrapper
        images={[
          { src: '/Sky/screensky.png', alt: 'VR image' },
        ]}
      />

      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>THE TAKEAWAY</p>
        </div>
        <p className={styles.secondaryText}>
          This experience has been truly formative for several reasons. During my time at Sky, we launched new features, created new sections in our apps, and improved the usability of various functionalities based on user feedback.
          <br /><br />
          The most significant part of my work was redesigning the user experience for the login and onboarding process of the app. This involved making it accessible across different platforms and simplifying the entire journey, reducing time and effort for users.
          <br /><br />
          However, I believe it is more appropriate to focus on the various skills I acquired rather than the data. This experience taught me the dynamics of a multinational corporation and how to work and collaborate within a large company. It introduced me to a new method of design, where data visualization is central to the project. I learned different testing methodologies and understood that without a solid foundation of study and analysis, it is impossible to satisfy the end user.        </p>
      </div>



      <ImageWrapper
        images={[
          { src: '/Sky/skygook.jpg', alt: 'VR image' },
        ]}
      />

      <div className={styles.contact}>
        <div className={styles.body}>
          <div className={styles.nav}>
            <div className={styles.projects}>

            </div>
            <a href='/protected/pilatus#top' className={styles.next}>
              <span>Pilatus</span>
              <img src='/arrow_forward_2.svg' alt='Next' />
            </a>
          </div>
          <div className={styles.nav}>
            <div></div>
            <a href='/sharely#top' className={styles.next}>
              <img src='/arrow_back.svg' alt='Previous' />
            </a>
          </div>
          <ProjectFooter title='PILATUS' />
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
