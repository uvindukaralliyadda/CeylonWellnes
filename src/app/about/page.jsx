"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import PageHeader from "@/components/PageHeader/PageHeader";
import Compareabout from "@/components/Compareabout/Compareabout";
import Cta from "@/components/Cta/Cta";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

const zoom = {
  hidden: { opacity: 0, scale: 1.05 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const page = () => {
  return (
    <div>

      {/* HEADER */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <PageHeader
          eyebrow="About Us"
          title={
            <>
              Customized Wellness Travel Planners
              <span className={styles.highlight}>
                <i> For First Time In Sri Lanka.</i>
              </span>
            </>
          }
          intro="We are a wellness travel planning company in Sri Lanka. We help you design and manage complete wellness journeys based on your needs, comfort, and travel goals."
          image="/hero.jpg"
        />
      </motion.div>

      {/* OVERVIEW */}
      <motion.section
        className={styles.overview}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >

        <motion.div className={styles.overview1} variants={fadeUp}>
          <h2 className={styles.smallheading}>What We Do</h2>

          <h1 className={styles.overview1title}>
            4 quiet ways <span><i>we shape your wellness journey.</i></span>
          </h1>

          <p className={styles.overview1p}>
            Each piece is considered. Each detail is handled. You stay present while we take care of the rest.
          </p>

          <motion.div variants={zoom}>
            <Image
              src="/About.webp"
              alt="About Us"
              width={425}
              height={325}
              className={styles.overview1image}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.overview2}
          variants={container}
        >

          <motion.div className={styles.imageCard} variants={fadeUp}>
            <Image src="/Travelplan.webp" alt="Travel" width={225} height={300} className={styles.overview2image} />
            <div className={styles.imageOverlay}>
              <h1>Custom Journey Planning</h1>
              <p>Wellness itineraries shaped around your personal goals and travel needs.</p>
            </div>
          </motion.div>

          <motion.div className={styles.imageCard} variants={fadeUp}>
            <Image src="/Hotel.webp" alt="Hotels" width={225} height={300} className={styles.overview2image} />
            <div className={styles.imageOverlay}>
              <h1>Right Locations & Stays</h1>
              <p>We select the best regions and accommodations matched to your comfort and pace.</p>
            </div>
          </motion.div>

          <motion.div className={styles.imageCard} variants={fadeUp}>
            <Image src="/Yogaa.webp" alt="Yoga" width={225} height={300} className={styles.overview2image} />
            <div className={styles.imageOverlay}>
              <h1>Wellness Experience Design</h1>
              <p>We arrange suitable treatments and experiences with a natural, balanced flow.</p>
            </div>
          </motion.div>

          <motion.div className={styles.imageCard} variants={fadeUp}>
            <Image src="/Arrival.webp" alt="Arrival" width={225} height={300} className={styles.overview2image} />
            <div className={styles.imageOverlay}>
              <h1>Full Travel Support</h1>
              <p>From arrival to departure, everything is coordinated and managed for you.</p>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>

      {/* COMPARE */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Compareabout />
      </motion.div>

      {/* PURPOSE */}
      <motion.section
        className={styles.purpose}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={fadeUp}>Our Purpose</motion.h1>

        <motion.div className={styles.purposetypes} variants={container}>

          <motion.div className={styles.card} variants={fadeUp}>
            <Image src="/Mission.webp" alt="Mission" width={425} height={325} />
            <div className={styles.overlay}>
              <p>Mission</p>
              <h1><i>To make wellness travel in Sri Lanka simple, personalised, and stress-free.</i></h1>
            </div>
          </motion.div>

          <motion.div className={styles.card} variants={fadeUp}>
            <Image src="/Vision.webp" alt="Vision" width={425} height={325} />
            <div className={styles.overlay}>
              <p>Vision</p>
              <h1><i>To become a trusted wellness partner for global travellers seeking calm, recovery, and balance in Sri Lanka.</i></h1>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Cta />
      </motion.div>

    </div>
  );
};

export default page;