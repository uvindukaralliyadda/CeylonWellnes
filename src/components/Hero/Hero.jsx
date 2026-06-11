"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const slides = [
  {
    src: "/Group 5.webp",
    mobileSrc: "/Mobile 5.webp",
    place: "Digital Nomads · Corporate Staff",
    label: "Work-life balance wellness programs",
    mobileObjectPosition: "40% 50%",
  },
  {
    src: "/Group 2.webp",
    mobileSrc: "/Mobile 2.webp",
    place: "Recovery Patients",
    label: "Detoxification & post-treatment recovery support",
    mobileObjectPosition: "70% 50%",
  },
  {
    src: "/Group 3.webp",
    mobileSrc: "/Mobile 3.webp",
    place: "Families · Local & Foreign Travelers",
    label: "Holistic wellness experiences",
    mobileObjectPosition: "60% 50%",
  },
  {
    src: "/Group 6.webp",
    mobileSrc: "/Mobile 6.webp",
    place: "Alone Travelers · Friend Groups",
    label: "Wellness travel for work-life balance",
    mobileObjectPosition: "45% 50%",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Auto-slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(id);
  }, []);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className={styles.hero}>
      {/* SLIDES */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ""
            }`}
        >
          <Image
            src={isMobile ? slide.mobileSrc : slide.src}
            alt={slide.place}
            fill
            priority={i === 0}
            sizes="100vw"
            className={styles.image}
            style={{
              objectFit: "cover",
              objectPosition: isMobile ? (slide.mobileObjectPosition || "center") : "center",
            }}
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
              <span>
                <i>Designed Around You.</i>
              </span>
            </h1>

            <p className={styles.subtitle}>
              We create fully personalized wellness journeys that go beyond
              sightseeing, helping you restore balance, heal, and experience
              Sri Lanka through mindful travel, curated by local experts.
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
                aria-label={`Go to slide ${i + 1}`}
              >
                <span
                  className={`${styles.fill} ${i === index ? styles.fillActive : ""
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