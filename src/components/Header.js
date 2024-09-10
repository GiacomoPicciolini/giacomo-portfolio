"use client";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <nav className='nav'>
          <li>
            <a href='/hey'>01/HEY</a>
          </li>
          <li>
            <a href='/about'>02/ABOUT</a>
          </li>
          <li>
            <a href='/work'>03/WORK</a>
          </li>
          <li>
            <a href='/contact'>04/CONTACT</a>
          </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
