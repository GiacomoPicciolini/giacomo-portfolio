import Image from 'next/image';
import styles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const firstText = useRef(null);
  const imgText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Throttle the ScrollTrigger to avoid excessive updates
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: slider.current, // Limit trigger area to the slider
        scrub: 0.5, // Increase scrub time for smoother animations
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => direction = e.direction * -1,
      },
      x: "-500px",
    });

    // Optimize requestAnimationFrame for mobile
    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }

      gsap.set(firstText.current, { xPercent });
      gsap.set(secondText.current, { xPercent });

      // Add a condition to stop animation when off-screen for mobile optimization
      if (window.innerWidth > 900 || slider.current.getBoundingClientRect().top > 0) {
        requestAnimationFrame(animate);
      }

      xPercent += 0.1 * direction;
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <Link href="/protected/pilatus">
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>
            LATEST WORK
            <Image
              ref={imgText}
              width={522}
              height={286}
              src={'/Pilatus/VR_ok.jpg'}
              alt="VR"
            />
          </p>
          <p ref={secondText}>
            LATEST WORK
            <Image
              ref={imgText}
              width={522}
              height={286}
              src={'/Pilatus/VR_ok.jpg'}
              alt="VR"
            />
          </p>
        </div>
      </div>
      </Link>
      <div
        data-scroll
        data-scroll-speed={0.1}
        className={styles.description}
      >
        <div>
          <p>Simple solutions require Complex Processes.</p>
          <p>These are the latest projects that speak most about me.</p>
        </div>
      </div>
    </motion.main>
  );
}