'use client'
import styles from './nav.module.scss'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

import { Hero } from '@/widgets/hero/hero'
import { navLinks, lottieObj } from './config'

export const Arrow = ({ file }: { file: any }) => {
  return (
    <div className={styles.arrowBlock}>
      <Lottie animationData={file} loop={false} autoplay={true} style={{ height: '100%' }} />
    </div>
  )
}

export const Nav = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isTouching, setIsTouching] = useState<boolean>(false)
  const [delayedHover, setDelayedHover] = useState<string | null>(null)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (hoveredItem) {
      timer = setTimeout(() => {
        setDelayedHover(hoveredItem)
      }, 100)
    } else {
      setDelayedHover(null)
    }
    return () => clearTimeout(timer)
  }, [hoveredItem])

  const removePreviousStyles = () => {
    document.body.classList.forEach((cls) => {
      if (cls.startsWith('bg-')) {
        document.body.classList.remove(cls)
      }
    })
  }

  const onHoverTouchHandler = (id: string) => {
    if (isTouching) return
    removePreviousStyles()
    document.body.classList.add(`bg-${id}`)

    setHoveredItem(id)
  }

  useEffect(() => {
    return () => removePreviousStyles()
  }, [])

  return (
    <>
      <Hero anchor={hoveredItem} />

      <div className={[styles.transition, hoveredItem ? styles[`${hoveredItem}`] : ''].join(' ')} />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map(({ label, id, link }) => {
            return (
              <li
                key={id}
                onTouchStart={() => setIsTouching(true)}
                onMouseEnter={() => onHoverTouchHandler(id)}
                onFocus={() => onHoverTouchHandler(id)}
              >
                <Link href={link} className={styles.listItem}>
                  <span
                    className={`${styles.icon} ${hoveredItem === id ? styles[`icon-${hoveredItem}`] : styles.smallIcon}`}
                  >
                    {delayedHover === id && (
                      <Arrow file={lottieObj[id as keyof typeof lottieObj]} />
                    )}
                  </span>
                  <span
                    className={`title-link ${styles.title} ${hoveredItem === id && styles[`${id}-is-active`]}`}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
