import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import Image from 'next/image';

const navItems = [
  {
    title: "Hey",
    href: "/",
  },
  {
    title: "Pilatus Aircraft",
    href: "/pilatus",
  },
  {
    title: "Sharely",
    href: "/sharely",
  },
  {
    title: "Sky Television",
    href: "/sky",
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

export default function index({ setIsActive }) {

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
        <div className={styles.closebuttonContainer} onClick={() => setIsActive(false)}>
          <div className={`${styles.closebutton}`}>
            <Image
              priority
              src="/close.svg"
              height={24}
              width={24}
              alt="Close"
            />
          </div>
        </div>
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