import styles from './link.module.scss'
import { motion } from 'framer-motion'
import { slide, scale } from '../../animation'

export interface LinkProps {
  data: any
  isActive: boolean
  setSelectedIndicator: any
}

export function Link({ data, isActive, setSelectedIndicator }: LinkProps) {
  const { title, href, index } = data

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href)
      }}
      custom={index}
      variants={slide as any}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      ></motion.div>
      <a href={href}>{title}</a>
    </motion.div>
  )
}
