'use client'

import { useEffect, useState } from 'react'

export const useNoScroll = (isOpen: boolean, widthThreshold: number) => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    if (isOpen && windowWidth <= widthThreshold) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      window.removeEventListener('resize', handleResize)

      document.body.style.overflow = 'auto'
    }
  }, [isOpen, windowWidth, widthThreshold])
}
