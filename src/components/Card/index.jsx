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
            <div className={styles.labelsContainer}>
              {tags.map((tag) => <Label text={tag} color={tagColor} key={tag} />)}
            </div>
            <span>
              <Link href={link}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='72'
                  height='72'
                  viewBox='0 0 72 72'
                  fill='none'
                >
                  <path
                    d='M51.3531 52.8263L52.8268 52.8005L52.8268 51.3265V20.6735L52.8268 19.1735L51.3268 19.1735L20.6737 19.1735L19.1998 19.1735L19.1739 20.6471L19.1209 23.67L19.0941 25.1963L20.6207 25.1963L42.5613 25.1963L18.5524 49.2052L17.4917 50.2659L18.5524 51.3265L20.6737 53.4479L21.7344 54.5085L22.795 53.4479L46.8039 29.439V51.3796L46.8039 52.9061L48.3302 52.8793L51.3531 52.8263Z'
                    fill='black'
                    stroke='black'
                    stroke-width='3'
                  />
                </svg>
              </Link>
            </span>
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
