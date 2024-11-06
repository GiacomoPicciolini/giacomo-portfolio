import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Link from 'next/link';
import Image from 'next/image';

export default function index() {
    const phrase =
        'I am poised to bring a strategic and user-focused approach to all the projects, contributing to the success and innovation of the final products.';

    const description = useRef(null);
    const isInView = useInView(description);
    return (
        <div id="about" ref={description} className={styles.description}>
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
                    Currently Designing for

                    <Link
                        className={styles.link}
                        href="/protected/pilatus"
                    >
                        <span className={styles.firstImage}>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <g id='arrow_forward'>
                                    <path
                                        id='path'
                                        d='M17.1176 17.6088L17.6089 17.6002L17.6089 17.1088V6.89115L17.6089 6.39115L17.1089 6.39115L6.89118 6.39115L6.39987 6.39115L6.39126 6.88238L6.37358 7.89001L6.36465 8.39878L6.8735 8.39878L14.187 8.39878L6.18407 16.4017L5.83052 16.7553L6.18407 17.1088L6.89118 17.816L7.24473 18.1695L7.59829 17.816L15.6012 9.813V17.1265L15.6012 17.6354L16.11 17.6264L17.1176 17.6088Z'
                                    />
                                </g>
                            </svg>
                        </span>
                        <span className={styles.text}>
                            Pilatus Aircraft
                        </span>
                        <span className={styles.secondImage}>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <g id='arrow_forward'>
                                    <path
                                        id='path'
                                        d='M17.1176 17.6088L17.6089 17.6002L17.6089 17.1088V6.89115L17.6089 6.39115L17.1089 6.39115L6.89118 6.39115L6.39987 6.39115L6.39126 6.88238L6.37358 7.89001L6.36465 8.39878L6.8735 8.39878L14.187 8.39878L6.18407 16.4017L5.83052 16.7553L6.18407 17.1088L6.89118 17.816L7.24473 18.1695L7.59829 17.816L15.6012 9.813V17.1265L15.6012 17.6354L16.11 17.6264L17.1176 17.6088Z'
                                    />
                                </g>
                            </svg>
                        </span>
                    </Link>
                </p>
                <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
                    <span className={styles.imageContainer}>
                        <Image src={"/asterisk.svg"} height={171} width={171} alt="asterisk" />
                    </span>
                    I was born in Bologna, Italy. <br /><br />
                    I started working in my hometown, with a <b>university internships</b> and afterwards in a <b>design agency, LeadSpot</b>, where I spent about 3 years, meanwhile completing my <b>University degree in Communication of New Media and UX.</b><br /><br />
                    I decided then to move to Milan to complete a master&apos;s program at <b>IED</b>, and once completed, I worked at <b>Sky Television</b>, as <b>UX/UI Designer.</b><br /><br />
                    One year later, I moved to Zurich and joined a small but ambitious startup called Sharely, which allowed me to immerse in a sensational project, where I had the opportunity to learn and experiment everyday.<br /><br />
                    Currently, I work at <b>Pilatus Aircraft Ltd.</b>, in the Ground Based Training System department, taking care of the <b>UX/UI</b> of various products designed to teach new pilots how to fly, working with the best technologies the market has to offer, such as VR, and Flight Simulators.<br /><br />
                </motion.p>
            </div >
        </div >
    );
}
