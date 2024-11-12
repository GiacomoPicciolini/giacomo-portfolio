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
      <Link scroll={true} className={styles.closebuttonContainer} href='/#hey'>
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
              <Link scroll={true} href='/sky/#top'>Next Project</Link>
            </div>
            <Link scroll={true} href='/sky/#top' className={styles.next}>
              <span>Sky Television</span>
              <img src='/arrow_forward_2.svg' alt='Next' />
            </Link>
          </div>
          <div className={styles.nav}>
            <div></div>
            <Link scroll={true} href='/protected/pilatus/#top' className={styles.next}>
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
