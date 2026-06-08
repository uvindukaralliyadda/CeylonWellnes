"use client";

import styles from "./Herovideo.module.css";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const videoVariant = {
  hidden: { opacity: 0, scale: 1.08 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Herovideo = () => {
  return (
    <motion.section
      className={styles.videoSection}
      variants={sectionVariant}
      initial="hidden"
      animate="show"
    >
      {/* TEXT BLOCK */}
      <motion.div
        className={styles.container}
        variants={containerVariant}
      >
        <motion.p className={styles.eyebrow} variants={item}>
          -A DIFFERENT KIND OF TRAVEL
        </motion.p>

        <motion.h1 className={styles.title} variants={item}>
          The pace of a place changes <span>everything</span>.
        </motion.h1>
      </motion.div>

      {/* VIDEO BLOCK */}
      <motion.div
        className={styles.videoWrapper}
        variants={videoVariant}
      >
        <div className={styles.videoCard}>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/wellnesshero.mp4" type="video/mp4" />
          </video>

          <div className={styles.overlay} />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Herovideo;