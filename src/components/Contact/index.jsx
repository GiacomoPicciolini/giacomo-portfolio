import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function index() {

    return (
        <motion.div className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <h2>Want to</h2>
                    <h2>Get in Touch?</h2>
                </div>
                <div className={styles.nav}>
                    <a href='tel:+41 76 512 59 32'><Image width={24} height={24} alt="Open" src={"/arrow_forward.svg"} />+41 76 512 59 32</a>
                    <a href='mailto:giacomo.picciolini3@gmail.com'><Image width={24} height={24} alt="Open" src={"/arrow_forward.svg"} />giacomo.picciolini3@gmail.com</a>
                </div>
            </div>
        </motion.div>
    )
}
