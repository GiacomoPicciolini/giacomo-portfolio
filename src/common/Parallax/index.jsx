import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from "../page.module.scss"

export const ParallaxSection = ({ backgroundImage }) => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

    return (
        <div ref={containerRef} className={styles.parallaxSection}>
            <div className={styles.fixedBackground}>
                <motion.div style={{ y }} className={styles.backgroundImageWrapper}>
                    <Image
                        src={backgroundImage}
                        priority
                        placeholder='blur'
                        fill
                        alt='background image'
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export const IntroSection = ({ introImage }) => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0', '150vh']);

    return (
        <div className={styles.heroSection}>
            <motion.div style={{ y }} className={styles.heroImage}>
                <Image
                    src={introImage}
                    priority
                    placeholder='blur'
                    fill
                    alt='intro image'
                    style={{ objectFit: 'cover' }}
                />
            </motion.div>
        </div>
    );
};

export const ContentBlock = ({ label, texts }) => (
    <div className={styles.secondaryContent} style={{
        gap: label == "" && window.innerWidth < 900 ? "0px" : "40px"
    }}>
        <div className={styles.labelText}>
            {label != "" ? <><Image src={'/radio.svg'} width={24} height={24} alt='dot' /><p>{label}</p></> : <></>}
        </div>

        <p className={styles.secondaryText}>
            {texts.map((text, index) => (
                <React.Fragment key={index}>
                    {text}
                    <br />
                    <br />
                </React.Fragment>
            ))}
        </p>
    </div>
);


export const ImageWrapper = ({ images }) => (
    <div className={images.length > 3 && styles.hoverInfoContainer}>
        <div className={styles.imageWrapper}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={images.length === 1
                        ? image?.video
                            ? styles.singleDescriptionVideo
                            : styles.singleDescriptionImage
                        : images.length === 2 ? styles.doubleDescriptionImage : styles.fourDescriptionImage} >
                    {image?.video === true ? (
                        <video
                            src={image.src}
                            controls
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        ></video>
                    ) : (
                        <div className={styles.imageContainer}>
                            <Image
                                src={image.src}
                                fill
                                alt={image.alt}
                                className={image.hoverSrc && styles.baseImage}
                                style={{ objectFit: 'cover' }} />
                            {image.hoverSrc && (
                                <Image
                                    src={image.hoverSrc}
                                    fill
                                    alt={`${image.alt} (hover)`}
                                    className={styles.hoverImage}
                                    style={{ objectFit: 'cover' }} />
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
        {images.length > 3 && <div className={styles.hoverInfo}>Hover over the images to see the transformation</div>}
    </div >
);
