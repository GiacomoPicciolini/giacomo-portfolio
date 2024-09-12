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
                <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
                    I was born in Bologna, Italy, in 1992. <br />
                    <br />
                    I started working in my hometown, Bologna, with university internships
                    and afterwards in a design agency, LeadSpot, where I spent about 3
                    years, meanwhile completing my Master&apos;s degree in Communication
                    of New Media and UX. <br />
                    <br />
                    I decided to move to Milan to complete a master&apos;s program at IED,
                    and once finished, I started working at Sky Television. <br />
                    <br />
                    After a year, I moved to Zurich and started working for a small and
                    ambitious startup called Sharely, which allowed me to immerse in a
                    sensational project, where I had the opportunity to learn and
                    experiment everyday. <br />
                    <br />
                    Currently, I work at Pilatus Aircraft Ltd., in the Software department
                    of the Ground Based Training System, taking care of the UX/UI of
                    various products designed to teach new pilots how to fly, working with
                    the best technologies the market has to offer, such as VR, and Flight
                    Simulators.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <div className={styles.imageContainer}>
                        <Image fill={true} alt={'image'} src={`/person.jpeg`} />
                    </div>
                </div>
            </div>
        </div>
    );
}
