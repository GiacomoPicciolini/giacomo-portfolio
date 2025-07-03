import React, { ReactNode } from 'react'
import { Footer, FooterNav, Header } from '@/widgets'
import styles from './single-page-layout.module.scss'

interface ISinglePageLayoutProps {
  children: ReactNode
  title: string
  subtitle: string
  subtitleClassName?: string
  nextPageTitle: string
  nextPageLink: string
  previousPageLink: string
  industryBlock?: ReactNode
}

export const SinglePageLayout = ({
  title,
  children,
  subtitle,
  subtitleClassName = '',
  nextPageTitle,
  nextPageLink,
  previousPageLink,
  industryBlock,
}: ISinglePageLayoutProps) => {
  return (
    <div>
      <Header isCloseButton={true} isBlackCloseIcon={true} menuButtonClassName="menuButtonWhite" />

      <main className={styles.mainContainer}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{title}</h1>

          <h2 className={`${styles.subtitle} ${subtitleClassName}`}>{subtitle}</h2>
        </div>

        <div className={styles.industryBlock}>{industryBlock}</div>

        {children}
      </main>

      <Footer>
        <FooterNav
          nextTitle={nextPageTitle}
          nextLink={nextPageLink}
          previousLink={previousPageLink}
        />
      </Footer>
    </div>
  )
}
