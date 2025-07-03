import React from 'react'
import styles from './grid-showcase.module.scss'
import { ImageWrapper } from '@/shared/ui/Parallax'

export const GridShowcase = () => {
  return (
    <div className={styles.grid}>
      <div className={`${styles.item} ${styles.div1}`}>
        <ImageWrapper
          images={[
            {
              src: '/bg/common/tms-old.webp',
              alt: 'Mockup image',
              hoverSrc: '/bg/common/tms-new.webp',
            },
          ]}
          isSkeleton={true}
          aspectRatio={[styles.imageStyle].join(' ')}
        />
      </div>
      <div className={`${styles.item} ${styles.div2}`}>
        <ImageWrapper
          images={[
            {
              src: '/bg/common/mps-old.webp',
              alt: 'Mockup image',
              hoverSrc: '/bg/common/mps-new.webp',
            },
          ]}
          aspectRatio={styles.imageStyle}
        />
      </div>
      <div className={`${styles.item} ${styles.div3}`}>
        <ImageWrapper
          images={[
            {
              src: '/bg/common/cbt-old.webp',
              alt: 'Mockup image',
              hoverSrc: '/bg/common/cbt-new.webp',
            },
          ]}
          aspectRatio={styles.imageStyle}
        />
      </div>
      <div className={`${styles.item} ${styles.div4}`}>
        <ImageWrapper
          images={[
            {
              src: '/bg/common/iwb-old.webp',
              alt: 'Mockup image',
              hoverSrc: '/bg/common/iwb-new.webp',
            },
          ]}
          aspectRatio={[styles.imageStyle].join(' ')}
        />
      </div>
    </div>
  )
}
