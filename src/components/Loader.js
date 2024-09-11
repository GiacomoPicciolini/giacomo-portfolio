"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  const [loadingPercentage, setLoadingPercentage] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) {
          return prev + 10;
        } else {
          clearInterval(interval);
          setLoading(false);
          return prev;
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <motion.div variants={itemMain} className="transition-text">
          <motion.h1
            className="loading-text"
            style={{ perspective: "1000px" }}
          >
            {loadingPercentage}%
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
