'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FadeInOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
}

export const FadeInScroll = ({ children, delay = 0, className }: FadeInOnScrollProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay,
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
