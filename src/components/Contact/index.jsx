import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-200, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <h2>Want to</h2>
                    <h2>Get in touch</h2>
                </div>
                <div className={styles.nav}>
                    <p>giacomo.picciolini3@gmail.com</p>
                    <p>+41 76 512 59 32</p>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3></h3>
                            <p>©2024</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p>Linkedin</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Dribbble</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
