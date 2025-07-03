import React from 'react'
import styles from './download-cv.module.scss'
import Image from 'next/image'

export const DownloadCv = () => {
  return (
    <a href="/Giacomo_Picciolini_CV.pdf" download className={styles.iconLink}>
      <Image src={'/img/download.svg'} alt="Download" width={32} height={32} />
      <span className={styles.cvTitle}>CV</span>
    </a>
  )
}
