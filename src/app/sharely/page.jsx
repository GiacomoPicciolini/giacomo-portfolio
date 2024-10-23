'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectFooter from '../../components/ProjectFooter/index';
import styles from '../../common/page.module.scss';

import image1 from '../../../public/Sharely/cover.jpg';
import image2 from '../../../public/Sharely/final.jpg';

const ParallaxSection = ({ backgroundImage }) => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={containerRef} className={styles.parallaxSection}>
      <div className={styles.fixedBackground}>
        <motion.div style={{ y }} className={styles.backgroundImageWrapper}>
          <Image
            src={backgroundImage}
            priority
            placeholder='blur'
            fill
            alt='background image'
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const IntroSection = ({ introImage }) => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0', '150vh']);

  return (
    <div className={styles.heroSection}>
      <motion.div style={{ y }} className={styles.heroImage}>
        <Image
          src={introImage}
          priority
          placeholder='blur'
          fill
          alt='intro image'
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    </div>
  );
};

const ContentBlock = ({ label, texts }) => (
  <div className={styles.secondaryContent}>
    <div className={styles.labelText}>
      {label != "" ? <Image src={'/radio.svg'} width={24} height={24} alt='dot' /> : <></>}
      <p>{label}</p>
    </div>

    <p className={styles.secondaryText}>
      {texts.map((text, index) => (
        <React.Fragment key={index}>
          {text}
          <br />
          <br />
        </React.Fragment>
      ))}
    </p>
  </div>
);

const ImageWrapper = ({ images }) => (
  <div className={styles.imageWrapper}>
    {images.map((image, index) => (
      <div key={index} className={images.length  === 1 ? styles.singleDescriptionImage : styles.doubleDescriptionImage}>
        {image?.video === true ? (
          <video
            src={image.src}
            controls
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          ></video>
        ) : (
          <Image
            src={image.src}
            fill
            alt={image.alt}
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>
    ))}
  </div>
);



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
          Sharely is a startup driven by a huge ambition: to change the consumption habits of Swiss citizens.
        </p>
      </div>

      <IntroSection introImage={image1} />

      <div className={styles.multiContentWrapper}>
        <ContentBlock
          label='OVERVIEW'
          texts={[
            '"Own less, do More" is the claim that sums up its vision - why own and waste, when anyone can be part of a circular community in which to exchange objects?',
            'When I started to work with Sharely we were ambitious, we had a vision, but we also had to face a lot of obstacles.',
            'Beyond the economic situation, we had to understand every single aspect of this business. Usage data was missing, there was no product study, user feedback was absent, and on top of that was missing a strong and recognizable  Brand image.'
          ]}
        />
        <ContentBlock
          label='CHALLENGES AND GOALS'
          texts={[
            'The goal was to understand the environment and user needs, fully grasp the products offered, investigate market demands, and modernize the platform to provide the requested features.',
            'We launched an MVP as quickly as possible to gather data and determine how to develop a roadmap. Simultaneously, we began various user testing initiatives, engaging in surveys and interviews with those users who were already familiar with the old version of Sharely.',
            'Once the initial phase was completed, the goal was to develop a platform - with a model similar to an ecommerce - that allowed the rental of items, adhering to stakeholder deadlines and growing numbers over time to attract potential investors.',
          ]}
        />
      </div>

      <ParallaxSection backgroundImage={image2} />

      <ImageWrapper
        images={[
          { src: '/Sharely/Sharely/bmw-video.mp4', alt: 'Sharely video', video: true },
        ]}
      />

      <div className={styles.multiContentWrapper}>
        <ContentBlock
          label='THE DESIGN'
          texts={[
            'Just as in any other field, the military aviation sector has felt the need to innovate to keep up with the times, and Pilatus has decided to seize the opportunity.',
            'At the beginning of 2022, the "Common Platform" project was launched, aimed at creating new teaching tools based on the latest technologies, improving and integrating established products.',
          ]}
        />
        <ContentBlock
          label=""
          texts={[
            'The ultimate goal is to develop a wide range of products that fully cover every aspect of Training Academy instruction.',
            'Theoretical lessons, based on images and 3D aircraft models, VR and XR familiarization devices, mission planning and debriefing tools, full-flight simulators.',
            'The real goal was to create this set of products, interconnecting them through a centralized management system. This system, called Academy TMS, not only collects and analyzes data but also schedules the academic year and manages content, training assets, and users.',
          ]}
        />
      </div>

      <ImageWrapper
        images={[
          { src: '/Sharely/Sharely/video_sharely.mp4', alt: 'Mockup image', video: true },
        ]}
      />

      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>THE TAKEAWAY</p>
        </div>
        <p className={styles.secondaryText}>
          This project is particularly important to me because I&apos;ve had the opportunity to be involved with it since the very beginning.
          Like every startup, we&apos;ve experienced both incredibly high highs and equally challenging lows, but I&apos;ve learned from every single thing that has happened.
        </p>
        <ul className={styles.ul}>
          <li>
            We&apos;ve gone through 3 rounds of investment, increasing not only the funds, but also the perceived value of the Company.
          </li>
          <li>
            We&apos;ve revitalized a brand that was once struggling, growing the community from a few thousand members to tens of thousands of users.
          </li>
          <li>
            We&apos;ve established partnerships with important Swiss compamies such as DiePost, Migros, and Interdiscount.
          </li>
          <li>
            We&apos;ve vertically increased transactions (+ 100% in 2022) on the website by streamlining the user journey and providing new functionalities centered around user needs.
          </li>
          <li>
            Finally, we&apos;ve quintupled the number of items uploaded to our site, offering much more choice for every need.
          </li>
        </ul>
      </div>

      <ImageWrapper
        images={[
          { src: '/Sharely/sharely1.png', alt: 'Mockup image' },
        ]}
      />

      <div className={styles.contact}>
        <div className={styles.body}>
          <div className={styles.nav}>
            <div className={styles.projects}>
              <Link href='/sky'>Next Project</Link>
            </div>
            <Link href='/sky' className={styles.next}>
              <span>Sky</span>
              <img src='/arrow_forward_2.svg' alt='Next' />
            </Link>
          </div>
          <div className={styles.nav}>
            <div></div>
            <Link href='/pilatus' className={styles.next}>
              <img src='/arrow_back.svg' alt='Previous' />
            </Link>
          </div>
          <ProjectFooter title='SKY TELEVISION' />
          <div className={styles.nav}>
            <div></div>
            <a href='#top'>
              <span className={styles.firstImage}>
                <Image
                  width={24}
                  height={24}
                  alt='Back to top'
                  src={'/arrow_forward.svg'}
                />
              </span>
              <span className={styles.text}>Back on top</span>
              <span className={styles.secondImage}>
                <Image
                  width={24}
                  height={24}
                  alt='Back to top'
                  src={'/arrow_forward.svg'}
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
