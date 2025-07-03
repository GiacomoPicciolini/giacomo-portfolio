'use client'

import React from 'react'
import styles from './video-block.module.scss'
import { SkeletonImage } from '@/shared/ui/image-skeleton/image-skeleton'

interface IVideoBlockProps {
  path: string
  wrapperClassName?: string
  blockClassName?: string
  src?: string
  autoPlay?: boolean
  controls?: boolean
  loop?: boolean
  muted?: boolean
  isSkeleton?: boolean
}

export const VideoBlock = ({
  path,
  wrapperClassName = '',
  blockClassName = '',
  src,
  autoPlay = true,
  controls = false,
  muted = true,
  loop = true,
  isSkeleton = true,
}: IVideoBlockProps) => {
  return (
    <div className={`${styles.videoBlock} ${blockClassName}`}>
      {isSkeleton && <SkeletonImage />}
      <div className={`${styles.videoWrapper} ${wrapperClassName}`}>
        <video
          className={styles.video}
          src={path}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          controls={controls}
          poster={src}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
