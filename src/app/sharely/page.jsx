'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectFooter from '../../components/ProjectFooter/index';
import styles from '../../common/page.module.scss';
import { IntroSection, ImageWrapper, ParallaxSection, ContentBlock } from "../../common/Parallax"

import image1 from '../../../public/Sharely/cover.jpg';
import image2 from '../../../public/Sharely/final.jpg';

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
          Sharely is a startup driven by a huge ambition: to change the consumption habits of Swiss citizens.
        </p>
      </div>

      <IntroSection introImage={image1} />

      <div className={styles.multiContentWrapper}>
        <ContentBlock
          label='OVERVIEW'
          texts={[
            '“Own less, do more” is the claim that sums up our vision: why own and waste when you can be part of a circular community where objects are exchanged?',
            'When I started working with Sharely, we were ambitious and had a clear vision, but we also faced many obstacles.',
            'Beyond the economic situation, we had to understand every single aspect of the business. Usage data was missing, there was no product study, user feedback was absent, and we lacked a strong and recognizable brand image'
          ]}
        />
        <ContentBlock
          label='CHALLENGES AND GOALS'
          texts={[
            'Our goal was to understand the environment and user needs, fully grasp the products offered, investigate market demands, and modernize the platform to provide the requested features.',
            'We quickly launched an MVP to gather data and develop a roadmap. Simultaneously, we initiated various user testing activities, including surveys and interviews with users familiar with the old version of Sharely.',
            'After completing the initial phase, our objective was to develop a platform—similar to an e-commerce model—that facilitated item rentals. We aimed to meet stakeholder deadlines and achieve growth over time to attract potential investors.',
          ]}
        />
      </div>

      <ParallaxSection backgroundImage={image2} />

      <ImageWrapper
        images={[
          { src: '/Sharely/Sharely/bmw-video.mp4#t=0.001', alt: 'Sharely video', video: true },
        ]}
      />

      <div className={styles.multiContentWrapper}>
        <ContentBlock
          label='THE DESIGN'
          texts={[
            'By integrating analytics results from Hotjar, Metabase, and Google Analytics with other types of tests such as interviews, mapping, and user journey analysis, we began redesigning the existing parts of the platform and adding new functionalities.',
            'The design encourages users not only to search for items using common e-commerce best practices but also to upload what they own. Features like an automatic price calculator show how the price is built. This approach helps Sharely create circularity and offer an ever-expanding choice of items.',
          ]}
        />
        <ContentBlock
          label=""
          texts={[
            'The platform, designed for both desktop and mobile, is tailored to different user types, offering specific functionalities depending on whether the user is a private individual or a store.',
            'A centralized dashboard allows all operational aspects to be managed in one place, providing not only transaction control but also messaging and review services, similar to a social media approach.',
            'A significant part of the work focused on the item offerings. Using research tools like card sorting, we investigated which objects users associated with specific categories and what they were looking for.',
          ]}
        />
      </div>

      <ImageWrapper
        images={[
          { src: '/Sharely/Sharely/video_sharely.mp4#t=0.001', alt: 'Mockup image', video: true },
        ]}
      />

      <div className={styles.singleContentWrapper}>
        <div className={styles.labelText}>
          <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
          <p>THE TAKEAWAY</p>
        </div>
        <p className={styles.secondaryText}>
          This project is particularly important to me because I’ve been involved since the very beginning.<br />
          Like every startup, we’ve experienced both incredible highs and challenging lows, but I’ve learned from every single experience.</p>
        <ul className={styles.ul}>
          <li>
            We’ve gone through three rounds of investment, increasing not only our funds but also the perceived value of the company.           </li>
          <li>
            We’ve revitalized a struggling brand, growing the community from a few thousand members to tens of thousands of users.           </li>
          <li>
            We’ve established partnerships with major Swiss companies such as DiePost, Migros, and Interdiscount          </li>
          <li>
            By streamlining the user journey and adding new functionalities centered around user needs, we’ve significantly increased transactions on the website by 100% in 2022.           </li>
          <li>
            We’ve also quintupled the number of items uploaded to our site, offering much more choice for every need.          </li>
        </ul>
      </div>

      <ImageWrapper
        images={[
          { src: '/Sharely/sharely1.jpg', alt: 'Mockup image', fullsize: true },
        ]}
      />

      <div className={styles.contact}>
        <div className={styles.body}>
          <div className={styles.nav}>
            <div className={styles.projects}>
            </div>
            <a href='/sky#top' className={styles.next}>
              <span>Sky Television</span>
              <img src='/arrow_forward_2.svg' alt='Next' />
            </a>
          </div>
          <div className={styles.nav}>
            <div></div>
            <a href='/protected/pilatus#top' className={styles.next}>
              <img src='/arrow_back.svg' alt='Previous' />
            </a>
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
