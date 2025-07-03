'use client'
import styles from './header.module.scss'
import { lazy, Suspense, useEffect, useState } from 'react'
// import { MobileMenu } from './ui'
import { CloseButton } from '@/shared/ui/close-button'
import { E_ROUTES, Icon, useNoScroll } from '@/shared'
import Link from 'next/link'
import Lenis from 'lenis'

const MobileMenu = lazy(() => import('./ui').then((mod) => ({ default: mod.MobileMenu })))

interface IHeaderProps {
  isCloseButton?: boolean
  isBlackCloseIcon?: boolean
  baseLinksColorStyle?: string
  menuButtonClassName?: string
}

let lenis: Lenis | null = null
let animationFrame: number

export const Header = ({
  isCloseButton,
  isBlackCloseIcon,
  baseLinksColorStyle,
  menuButtonClassName,
}: IHeaderProps) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isActive) {
      if (lenis) {
        lenis.destroy()
        lenis = null
        cancelAnimationFrame(animationFrame)
      }
    } else {
      lenis = new Lenis()
      const raf = (time: number) => {
        lenis?.raf(time)
        animationFrame = requestAnimationFrame(raf)
      }
      animationFrame = requestAnimationFrame(raf)
    }

    return () => {
      if (lenis) {
        lenis.destroy()
        lenis = null
      }
      cancelAnimationFrame(animationFrame)
    }
  }, [isActive])

  useNoScroll(isActive, 4000)

  return (
    <>
      <header className={styles.header}>
        <Link
          href={E_ROUTES.HOME}
          className={[styles.heroLinks, baseLinksColorStyle ? baseLinksColorStyle : ''].join(' ')}
        >
          <span className={`title-link ${styles.headerName}`}>Giacomo Picciolini</span>
          <span className="title-link">Senior UX/UI Designer</span>
        </Link>

        {isCloseButton ? (
          <CloseButton
            href={E_ROUTES.HOME}
            isBlackCloseIcon={isBlackCloseIcon}
            className={menuButtonClassName}
            iconClassName={'burgerMenuIcon'}
          />
        ) : (
          <button onClick={() => setIsActive(!isActive)} className={'menuButton'}>
            <Icon type="BURGER_MENU" className="burgerMenuIcon" />
          </button>
        )}
      </header>
      <Suspense fallback={null}>
        {isActive && <MobileMenu setIsActive={setIsActive} isActive={isActive} />}
      </Suspense>
    </>
  )
}
