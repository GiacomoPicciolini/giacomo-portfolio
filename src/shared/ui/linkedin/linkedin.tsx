import React from 'react'
import styles from './linkedin.module.scss'
import { Icon } from '@/shared'

interface LinkedinIconProps {
  className?: string
  size?: number
  iconStyle?: string
}

export const Linkedin = ({ className = '', size, iconStyle = '' }: LinkedinIconProps) => {
  return (
    <a
      href="https://www.linkedin.com/in/giacomo-picciolini-2489a0147"
      rel="noopener noreferrer"
      target="_blank"
      className={[styles.iconLink, className].join(' ')}
    >
      <Icon type="LINKEDIN_CUBE" width={size} height={size} className={[styles.cube, iconStyle].join(' ')} />
      <Icon
        type="LINKEDIN_CIRCLE"
        width={size}
        height={size}
        className={[styles.circle, iconStyle].join(' ')}
        fill="#121619"
      />
    </a>
  )
}
