import React, { ReactNode } from 'react'
import styles from './home-page-layout.module.scss'
import { Footer, Header } from '@/widgets'

interface HomePageLayoutProps {
  children: ReactNode
}
export const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return (
    <div className={styles.homeLayout}>
      <Header />
      <main className={styles.homeMain}>{children}</main>
      <Footer />
    </div>
  )
}
