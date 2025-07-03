import React from 'react'
import Link from 'next/link'
import styles from './close-button.module.scss'
import { Icon } from '@/shared'

interface ICloseButtonProps {
  href?: string
  onClose?: () => void
  isBlackCloseIcon?: boolean
  className?: string
  iconClassName?: string
}

export const CloseButton = ({ href, onClose, className, iconClassName }: ICloseButtonProps) => {
  const closeImage = <Icon type="CROSS" className={[iconClassName].join(' ')} />
  return href ? (
    <Link href={href} className={[styles.closeButton, className].join(' ')}>
      {closeImage}
    </Link>
  ) : (
    <button className={[styles.closeButton, className].join(' ')} onClick={onClose && onClose}>
      {closeImage}
    </button>
  )
}
