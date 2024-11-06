'use client';
import styles from './style.module.scss';
import Card from '../Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const projects = [
    {
        title: 'Pilatus Aircraft',
        description:
            'The GBTS department is dedicated to develop software for pilot and technician training, teaching students how to approach aircraft through the use of the best technologies.',
        src: '/BG/BG/Pilatus_home.png',
        link: '/protected/pilatus',
        color: '#FCFAEE',
        tags: ['UX', 'UI', 'Desktop App', 'VR App', 'Design System'],
        tagColor: "#EFEFEF"
    },
    {
        title: 'Sky Television',
        description:
            'Improving Sky Go App  functionalities and redesign the User experience and User Journey of Sky Q and Sky On Demand Applications.',
        src: '/Sky/copertina_sky.jpg',
        link: '/sky',
        color: '#ECDFCC',
        tags: ['UX', 'UI', 'OTT App', 'Mobile App'],
        tagColor: "#FBF1B7"
    },
    {
        title: 'Sharely',
        description:
            'Sharely is a startup driven by a huge ambition: to change the consumption habits of Swiss citizens.',
        src: '/Sharely/thumbnail_sharely1.jpg',
        link: '/sharely',
        color: '#DBDBDB',
        tags: ['UX', 'UI', 'Desktop App', 'Mobile App', 'Design System'],
        tagColor: "#ECECEC"
    },
];

export default function Cards() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

    return (
        <div id="work" ref={container} className={styles.main}>
            {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                    <Card
                        key={`p_${i}`}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </div>
    );
}
