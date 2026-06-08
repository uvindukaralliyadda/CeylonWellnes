"use client";

import styles from "./Compareabout.module.css";
import { motion } from "framer-motion";

const traditional = [
  "Too much research needed",
  "Many hotels to compare",
  "Confusing travel planning",
  "Hard to match wellness needs",
  "Time-consuming process",
];

const wellness = [
  "We plan everything for you",
  "We match locations to your needs",
  "We handle coordination and bookings",
  "We simplify the entire process",
  "You only focus on your journey",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Compareabout = () => {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className={styles.container}>

        {/* Header */}
        <motion.div className={styles.header} variants={fadeUp}>
          <p className={styles.eyebrow}>Why Go Through Us</p>

          <h2 className={styles.title}>
            Planning alone vs.
            <br />
            <span>planning with us.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className={styles.grid}>

          {/* Traditional */}
          <motion.div className={styles.cardLight} variants={fadeUp}>

            <h1 className={styles.subtitleMuted}>
              Planning Alone.
            </h1>

            <ul className={styles.listLight}>
              {traditional.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                >
                  <span className={styles.line} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Wellness */}
          <motion.div className={styles.cardDark} variants={fadeUp}>
            <div className={styles.glow} />

            <h1 className={styles.subtitle}>
              With Us.
            </h1>

            <ul className={styles.listDark}>
              {wellness.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                >
                  <span className={styles.dot} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Footer text */}
        <motion.h1 className={styles.footerText} variants={fadeIn}>
          You tell us your needs. <span>We handle the rest.</span>
        </motion.h1>

      </div>
    </motion.section>
  );
};

export default Compareabout;