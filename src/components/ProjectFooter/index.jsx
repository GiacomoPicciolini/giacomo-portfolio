'use client'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';

export default function ProjectFooter({ title }) {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText?.current, { xPercent: xPercent })
    gsap.set(secondText?.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <motion.div initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>{title}</p>
          <p ref={secondText}>{title}</p>
        </div>
      </div>
    </motion.div>
  )
}
