import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Hey",
    href: "/",
  },
  {
    title: "Pilatus Aircraft",
    href: "/experiences/pilatus",
  },
  {
    title: "Sharely",
    href: "/experiences/sharely",
  },
  {
    title: "Sky Television",
    href: "/experiences/sky",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
]

export default function index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
          {
            navItems.map((data, index) => {
              return <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}>
              </Link>
            })
          }
        </div>
      </div>
      <Curve />
    </motion.div>
  )
}