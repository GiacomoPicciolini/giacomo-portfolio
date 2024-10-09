import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Image from 'next/image';

export default function index() {
    const phrase =
        'I am poised to bring a strategic and user-focused approach to all the projects, contributing to the success and innovation of the final products.';

    const description = useRef(null);
    const isInView = useInView(description);
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {phrase.split(' ').map((word, index) => {
                        return (
                            <span key={index} className={styles.mask}>
                                <motion.span
                                    variants={slideUp}
                                    custom={index}
                                    animate={isInView ? 'open' : 'closed'}
                                    key={index}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        );
                    })}
                </p>
                <p>
                    Currently Designing
                    <a href='https://www.pilatus-aircraft.com'>
                        <span className={styles.firstImage}>
                            <Image color="black" width={24} height={24} alt="pilatus aircraft" src={"/arrow_forward-black.svg"} />
                        </span>
                        <span className={styles.text}>Pilatus Aircraft</span>
                        <span className={styles.secondImage}>
                            <Image color="black" width={24} height={24} alt="pilatus aircraft" src={"/arrow_forward-black.svg"} />
                        </span>
                    </a>
                </p>
                <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
                    I was born in Bologna, Italy, in 1992. <br />
                    <br />
                    I started working in my hometown, Bologna, with <b>university internships </b>
                    and afterwards in a <b>design agency, LeadSpot,</b> where I spent about 3
                    years, meanwhile completing my <b>Master&apos;s degree in Communication
                        of New Media and UX.</b><br />
                    <br />
                    I decided to move to Milan to complete a master&apos;s program at IED,
                    and once finished, I started working at <b>Sky Television.</b> <br />
                    <br />
                    After a year, I moved to Zurich and started working for a small and
                    ambitious startup called <b>Sharely</b>, which allowed me to immerse in a
                    sensational project, where I had the opportunity to learn and
                    experiment everyday. <br />
                    <br />
                    Currently, I work at <b>Pilatus Aircraft Ltd.</b>, in the Software department
                    of the Ground Based Training System, taking care of the UX/UI of
                    various products designed to teach new pilots how to fly, working with
                    the best technologies the market has to offer, such as VR, and Flight
                    Simulators.
                </motion.p>
            </div >
        </div >
    );
}
