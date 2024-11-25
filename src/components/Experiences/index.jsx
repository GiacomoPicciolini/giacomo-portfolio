'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import image1 from '../../../public/pilatus-Home.jpg'
import image2 from '../../../public/sharely-homepage.jpg'
import image3 from '../../../public/sky-home.jpg'

export default function Experiences() {

    return (
        <div id="work" className={styles.container}>
            <Link href="/protected/pilatus">
                <div className={styles.singleImage}>
                    <Image src={image1} alt="image" style={{ objectFit: "cover" }}></Image>
                    <div className={styles.descriptionone}>
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
            </Link>

            <div className={styles.doubleImage}>
                <Link href="/sharely">
                    <div className={styles.firstImage}>
                        <Image src={image2} alt="image" style={{ objectFit: "cover" }}></Image>
                        <div className={styles.descriptiontwo}>
                            <h3 className={styles.title}>Sharely</h3>
                            <div className={styles.subtitle}>
                                <span>UX/UI</span>
                                <span>|</span>
                                <span>Desktop App</span>
                                <span>|</span>
                                <span>Mobile App</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/sky">
                    <div className={styles.secondImage}>
                        <Image src={image3} alt="image" style={{ objectFit: "cover" }}></Image>
                        <div className={styles.descriptiontwo}>
                            <h3 className={styles.title}>Sky Television</h3>
                            <div className={styles.subtitle}>
                                <span>UX/UI</span>
                                <span>|</span>
                                <span>OTT App</span>
                                <span>|</span>
                                <span>Mobile App</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
