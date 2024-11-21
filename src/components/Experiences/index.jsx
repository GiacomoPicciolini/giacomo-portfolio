'use client';
import styles from './style.module.scss';
import Image from 'next/image';

import image1 from '../../../public/Pilatus/TMS-New.jpg'
import image2 from '../../../public/Pilatus/TMS-New.jpg'
import image3 from '../../../public/Pilatus/TMS-New.jpg'

export default function Experiences() {

    return (
        <div id="work" className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.One}>
                    <div className={styles.card}>
                        <Image src={image1} alt="image" />
                        <div className={styles.text}>
                            <h3 className={styles.title}>Pilatus Aircraft</h3>
                            <div className={styles.subtitle}>
                                <span>UX/UI</span>
                                <span>|</span>
                                <span>Design System</span>
                                <span>|</span>
                                <span>VR Design</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Two}>
                    <div className={styles.card}>
                        <Image src={image1} alt="image" />
                        <div className={styles.text}>
                            <h3 className={styles.title}>Title</h3>
                            <p className={styles.subtitle}>Subtitle</p>
                        </div>
                    </div>
                </div>
                <div className={styles.Three}>
                    <div className={styles.card}>
                        <Image src={image1} alt="image" />
                        <div className={styles.text}>
                            <h3 className={styles.title}>Title</h3>
                            <p className={styles.subtitle}>Subtitle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
