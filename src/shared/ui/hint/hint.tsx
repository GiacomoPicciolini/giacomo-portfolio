import React, { FC } from 'react'
import styles from './hint.module.scss'
import Image from 'next/image'

interface IHintProps {
  title: string
  isVerticalCentered?: boolean
}

export const Hint: FC<IHintProps> = ({ title, isVerticalCentered = false }) => {
  return (
    <div className={[styles.hint, isVerticalCentered ? styles.centered : ''].join(' ')}>
      <Image src="/icons/info.svg" alt="info" width={24} height={24} className={styles.iconSVG} />
      <p>{title}</p>
    </div>
  )
}
