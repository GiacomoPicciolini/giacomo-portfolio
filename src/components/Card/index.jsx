'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const Card = ({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
  tags,
  tagColor,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className={styles.body}>
          <div className={styles.description}>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>
              <Link href={link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                  <path d="M34.9583 58.7541L36.0186 59.7778L37.0609 58.7356L58.7359 37.0606L59.7965 36L58.7359 34.9393L37.0609 13.2643L36.0186 12.2221L34.9583 13.2458L32.7833 15.3458L31.6851 16.4062L32.7645 17.4856L48.2789 33H14.3252H12.8252V34.5V37.5V39H14.3252H48.2789L32.7645 54.5143L31.6851 55.5937L32.7833 56.6541L34.9583 58.7541Z" fill="black" stroke="black" stroke-width="3" />
                </svg>
              </Link>
            </span>
            <div className={styles.labelsContainer}>
              {tags.map((tag) => <Label text={tag} color={tagColor} key={tag} />)}
            </div>
          </div>
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={src} alt='image' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Label = ({ text, color }) => {
  return (
    <div className={styles.label} style={{ background: color }}>
      <h5 className={styles.el}>{text}</h5>
    </div>
  );
};

export default Card;
