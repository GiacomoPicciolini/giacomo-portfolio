'use client'
import { Nav, ProfileIntro } from '@/widgets'
import styles from './home.module.scss'

export const HomeView = () => {
  return (
    <div className={styles.homeView}>
      <div className={styles.container}>
        <h1 className={`title-link ${styles.titleEl}`}>
          Simple Solutions, requires <br /> Complex Processes
        </h1>
        <Nav />
        <ProfileIntro />
      </div>
    </div>
  )
}
