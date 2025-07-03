'use client'
import React from 'react'
import Image from 'next/image'
import styles from '../page.module.scss'
import { FadeInScroll } from '@/shared'
import { SkeletonImage } from '@/shared/ui/image-skeleton/image-skeleton'

export const ContentBlock = ({
  label,
  texts,
  wrapperClassName = '',
  textStyle = '',
}: {
  label?: string
  texts: string[]
  wrapperClassName?: string
  textStyle?: string
}) => {
  return (
    <FadeInScroll>
      <div className={[styles.secondaryContent, wrapperClassName].join(' ')}>
        <div className={styles.smallCenteredContainer}>
          {label && <p className="paragraphTitle">{label}</p>}

          <div className={`paragraphText ${styles.secondaryText} ${textStyle}`}>
            {texts.map((text, index) => (
              <React.Fragment key={index}>
                <div dangerouslySetInnerHTML={{ __html: text }} />
                {index !== texts.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </FadeInScroll>
  )
}

interface IImageElement {
  src: string
  alt: string
  hoverSrc?: string
}

interface IImagesWrapperProps {
  images: IImageElement[]
  imageWrapperClassName?: string
  aspectRatio?: string
  imagePriority?: boolean
  imageClassName?: string
  isSkeleton?: boolean
}

export const ImageWrapper = ({
  images,
  imageWrapperClassName = '',
  aspectRatio = '',
  imagePriority = false,
  imageClassName = '',
  isSkeleton = false,
}: IImagesWrapperProps) => (
  <div style={{ height: '100%' }} className={images.length > 3 ? styles.hoverInfoContainer : ''}>
    <div className={`${styles.imageWrapper} ${imageWrapperClassName}`}>
      {images.map((image, index) => (
        <div className={[styles.imageContainer, aspectRatio].join(' ')} key={index}>
          {isSkeleton && <SkeletonImage />}
          <Image
            src={image.src}
            fill
            alt={image.alt}
            className={`${styles.baseImageStyle} ${imageClassName} ${image.hoverSrc && styles.baseImage}`}
            priority={imagePriority}
          />
          {image.hoverSrc && (
            <Image
              src={image.hoverSrc}
              fill
              alt={`${image.alt} (hover)`}
              className={styles.hoverImage}
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
      ))}
    </div>
    {images.length > 3 && (
      <div className={styles.hoverInfo}>Hover over the images to see the transformation</div>
    )}
  </div>
)
