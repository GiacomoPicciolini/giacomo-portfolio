import Link from 'next/link'
import { E_ROUTES, Linkedin } from '@/shared'
import { ReactNode } from 'react'
import { DownloadCv } from '@/shared'
import styles from './footer.module.scss'

export const Footer = ({ children }: { children?: ReactNode }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerBg}>
          <Link href={E_ROUTES.ABOUT} className={styles.link}>
            About
          </Link>

          <div className={styles.socialLinkedin}>
            <Linkedin className={styles.linkedinIconStyle} size={32} />
          </div>

          <div className={styles.socialDownload}>
            <DownloadCv />
          </div>
          <a href="mailto:giacomo.picciolini3@gmail.com" className={styles.text}>
            giacomo.picciolini3@gmail.com
          </a>
        </div>
        {children}
      </div>
    </footer>
  )
}
