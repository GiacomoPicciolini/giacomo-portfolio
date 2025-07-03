import React, { useEffect, useState } from 'react'
import styles from './mobile-menu.module.scss'
import { DownloadCv, E_ROUTES, Linkedin, VideoBlock } from '@/shared'
import { CloseButton } from '@/shared/ui/close-button'
import Link from 'next/link'

const navItems = [
  {
    title: 'Design',
    href: E_ROUTES.HOME,
  },
  {
    title: 'About',
    href: E_ROUTES.ABOUT,
  },
]

interface IMobileMenuProps {
  setIsActive: (value: boolean) => void
  isActive?: boolean
}

export function MobileMenu({ setIsActive, isActive }: IMobileMenuProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(timeout)
  }, [])

  const handleClose = () => {
    setVisible(false)

    setTimeout(() => {
      setIsActive(false)
    }, 400)
  }

  return (
    <div
      className={[styles.menu, isActive && visible ? styles.menuOpened : styles.menuClosed].join(
        ' '
      )}
    >
      <div className={styles.headerBlock}>
        <CloseButton
          onClose={handleClose}
          className="menuButtonBlack"
          iconClassName="burgerMenuIcon"
        />
      </div>

      <div className={styles.scrolledBlock}>
        <div className={styles.nav}>
          <ul className={styles.menuList}>
            {navItems.map((data, index) => {
              return (
                <li key={index}>
                  <Link
                    href={data.href}
                    key={data.href}
                    className={styles.menuItem}
                    onClick={handleClose}
                  >
                    {data.title}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className={styles.socialEl}>
            <div className={styles.iconsWrapper}>
              <Linkedin className={styles.linkedinIconStyle} />
              <DownloadCv />
            </div>

            <a href="tel:+41765125932" className={styles.phone}>
              +41 76 512 59 32
            </a>
          </div>

          <VideoBlock
            path="/video/video10.mp4"
            wrapperClassName={styles.videoWrapper}
            blockClassName={styles.blockClassName}
            isSkeleton={false}
          />
        </div>
      </div>
    </div>
  )
}
