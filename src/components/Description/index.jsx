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
                    Currently Designing for Pilatus Aircraft
                </p>
                <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
                    I was born in Bologna, Italy. <br />
                    I began my career with a university internship, followed by three years at the <b>design agency LeadSpot</b>, while completing my degree in Communication of New Media and UX.<br />
                    After moving to Milan for a master’s at <b>IED</b>, I worked as a UX/UI Designer at <b>Sky Television</b>.<br />
                    More than a year later, I joined the startup <b>Sharely</b> in Zurich, where I gained valuable experience<br />
                    in an innovative environment.<br />
                    Currently, I work at <b>Pilatus Aircraft Ltd</b>., focusing on UX/UI for pilot training’s systems using<br />
                    advanced technologies like VR and flight simulators.<br />
                </motion.p>
            </div >
        </div >
    );
}
