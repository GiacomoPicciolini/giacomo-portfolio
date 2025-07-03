import React from 'react'
import styles from './info-list.module.scss'
import Image from 'next/image'

interface InfoItem {
  label: string
  value: string
  anchor: string
}

interface InfoListProps {
  items: InfoItem[]
  className?: string
}

export const InfoList: React.FC<InfoListProps> = ({ items, className = '' }) => {
  const objIcon = {
    asterisk: '/icons/asterisk.svg',
    circle: '/icons/circle.svg',
    rhombus: '/icons/rhombus.svg',
    star: '/icons/star.svg',
  }
  return (
    <ul className={`${styles.list} ${className}`}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          <span className={styles.icon}>
            <Image
              src={objIcon[item.anchor as keyof typeof objIcon]}
              alt={item.label}
              width={24}
              height={24}
            />
          </span>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.value}>{item.value}</span>
        </li>
      ))}
    </ul>
  )
}
