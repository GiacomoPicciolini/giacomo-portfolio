import React from 'react'
import styles from './footer-nav.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export interface IFooterNav {
  nextTitle: string
  nextLink: string
  previousLink: string
}

export const FooterNav = ({ nextTitle, nextLink, previousLink }: IFooterNav) => {
  return (
    <div className={styles.navWrapper}>
      <Link href={nextLink} className={styles.next}>
        <span>{nextTitle}</span>
        <Image
          src="/img/arrow_forward.svg"
          alt="Next"
          width={28}
          height={28}
          className={styles.nextImage}
        />
      </Link>

      <Link href={previousLink} className={styles.previous}>
        <Image src="/img/arrow_forward.svg" alt="Previous" width={28} height={28} />
      </Link>
    </div>
  )
}
