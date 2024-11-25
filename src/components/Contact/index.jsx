import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function index() {

    return (
        <motion.div id="contact" className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <h2>Want to</h2>
                    <h2>Get in Touch?</h2>
                </div>
                <div className={styles.nav}>
                    <a href="/giacomo_picciolini.pdf" download>
                        <span className={styles.firstImage}>
                            <Image color="white" width={24} height={24} alt="Tel" src={"/arrow_forward.svg"} />
                        </span>
                        <span className={styles.text}>CV</span>
                        <span className={styles.secondImage}>
                            <Image color="white" width={24} height={24} alt="Tel" src={"/arrow_forward.svg"} />
                        </span>
                    </a>
                    <a href='tel:+41 76 512 59 32'>
                        <span className={styles.firstImage}>
                            <Image color="white" width={24} height={24} alt="Tel" src={"/arrow_forward.svg"} />
                        </span>
                        <span className={styles.text}>+41 76 512 59 32</span>
                        <span className={styles.secondImage}>
                            <Image color="white" width={24} height={24} alt="Tel" src={"/arrow_forward.svg"} />
                        </span>
                    </a>
                    <a href='mailto:giacomo.picciolini3@gmail.com'>
                        <span className={styles.firstImage}>
                            <Image color="white" width={24} height={24} alt="Email" src={"/arrow_forward.svg"} />
                        </span>
                        <span className={styles.text}>giacomo.picciolini3@gmail.com</span>
                        <span className={styles.secondImage}>
                            <Image color="white" width={24} height={24} alt="Email" src={"/arrow_forward.svg"} />
                        </span>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}
