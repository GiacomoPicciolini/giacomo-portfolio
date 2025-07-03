'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import Image from 'next/image'
import styles from './hero.module.scss'
import { ReactNode } from 'react'

interface HeroProps {
  anchor: string | null
}

const groupVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

const FadeInOutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className={styles.group}
      variants={groupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export const Hero = ({ anchor }: HeroProps) => {
  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode="wait" initial={false}>
        {anchor === 'sharely' && (
          <FadeInOutWrapper key="sharely">
            <Image
              src="/bg/sharely/1.svg"
              alt=""
              width={1282}
              height={348}
              className={styles.topLeft}
            />
            <Image
              src="/bg/sharely/2.webp"
              alt=""
              width={503}
              height={503}
              className={styles.rightMiddle}
            />
            <Image
              src="/bg/sharely/3.svg"
              alt=""
              width={400}
              height={400}
              className={styles.rightCircle}
            />
          </FadeInOutWrapper>
        )}

        {anchor === 'pilatus' && (
          <FadeInOutWrapper key="pilatus">
            <Image
              src="/bg/pilatus/1.webp"
              alt=""
              width={137}
              height={214}
              className={styles.pilatus1}
            />
            <Image
              src="/bg/pilatus/2.webp"
              alt=""
              width={596}
              height={447}
              className={styles.pilatus2}
            />
          </FadeInOutWrapper>
        )}

        {anchor === 'common' && (
          <FadeInOutWrapper key="common">
            <Image
              src="/bg/common/1.webp"
              alt=""
              width={124}
              height={124}
              className={styles.common1}
            />
            <Image
              src="/bg/common/2.webp"
              alt=""
              width={400}
              height={422}
              className={styles.common2}
            />
          </FadeInOutWrapper>
        )}

        {anchor === 'design' && (
          <FadeInOutWrapper key="design">
            <Image
              src="/bg/design/1.svg"
              alt=""
              width={124}
              height={124}
              className={styles.design1}
            />
            <Image
              src="/bg/design/2.webp"
              alt=""
              width={632}
              height={543}
              className={styles.design2}
            />
          </FadeInOutWrapper>
        )}

        {anchor === 'vr' && (
          <FadeInOutWrapper key="vr">
            <Image
              src="/bg/vr/1.webp"
              alt=""
              width={512}
              height={283}
              className={styles.vr1}
            />
          </FadeInOutWrapper>
        )}

        {anchor === 'sky' && (
          <FadeInOutWrapper key="sky">
            <Image
              src="/bg/sky/1.svg"
              alt=""
              width={124}
              height={124}
              className={styles.sky1}
            />
            <Image
              src="/bg/sky/2.webp"
              alt=""
              width={500}
              height={422}
              className={styles.sky2}
            />
          </FadeInOutWrapper>
        )}
      </AnimatePresence>
    </div>
  )
}
