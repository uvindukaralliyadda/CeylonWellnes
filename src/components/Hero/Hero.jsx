"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";



const slides = [
  { src: "/Group 1.png", place: "VIP Clients · Busy Families", label: "Fully planned wellness journeys" },
  { src: "/Group 2.png", place: "Recovery Patients", label: "Detoxification & post-treatment recovery support" },
  { src: "/Group 3.png", place: "Families · Local & Foreign Travelers", label: "Holistic wellness experiences" },
  { src: "/Group 4.png", place: "Digital Nomads · Corporate Staff", label: "Work-life balance wellness programs" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero}>
      
      {/* SLIDES */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide} ${
            i === index ? styles.active : ""
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.place}
            fill
            priority={i === 0}
            sizes="100vw"
            className={styles.image}
            style={{ objectFit: "cover" }}
          />

          <div className={styles.overlay} />
        </div>
      ))}

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.container}>
          
          <div className={styles.textBox}>
            <p className={styles.eyebrow}>
              {slides[index].label} · {slides[index].place}
            </p>

            <h1 className={styles.title}>
              Wellness Travel in Sri Lanka,
              <br />
              <span><i>Designed Around You.</i></span>
            </h1>

            <p className={styles.subtitle}>
              We create fully personalized wellness journeys that go beyond sightseeing, helping you restore balance, heal, 
              and experience Sri Lanka through mindful travel, curated by local experts.
            </p>

            <div className={styles.buttons}>
              <Link href="/contact" className={styles.primaryBtn}>
                Start Your Wellness Journey
              </Link>

              <Link href="/treatment" className={styles.secondaryBtn}>
                Explore Programs
              </Link>
            </div>
          </div>

          {/* INDICATORS */}
          <div className={styles.indicators}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={styles.bar}
              >
                <span
                  className={`${styles.fill} ${
                    i === index ? styles.fillActive : ""
                  }`}
                />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}