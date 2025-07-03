'use client'
import React from 'react'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import styles from '@/views/about/about.module.scss'
import Image from 'next/image'
import { Placement } from 'tippy.js'

interface TooltipProps {
  hoveredText: string
  imagePath: string
  width: number
  height: number
  placement: Placement
}

export const Tooltip = ({ hoveredText, placement, height, imagePath, width }: TooltipProps) => {
  return (
    <Tippy
      content={<Image src={imagePath} alt="hover img" width={width} height={height} />}
      placement={placement}
      interactive={true}
    >
      <span className={styles.hoverWord}>
        <strong>{hoveredText}</strong>
      </span>
    </Tippy>
  )
}
