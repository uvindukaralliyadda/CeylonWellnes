"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";



const slides = [
  { src: "/Hero.jpg", place: "Mirissa · South Coast", label: "Ocean wellness" },
  { src: "/Ella.jpg", place: "Ella · Hill Country", label: "Mountain stillness" },
  { src: "/Ayurveda.jpg", place: "Traditional Ayurveda", label: "Ancient healing" },
  { src: "/Sigiriya.jpg", place: "Sigiriya · Cultural Triangle", label: "Sacred ground" },
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
              Travel That Heals,
              <br />
              <span><i>Not Just Impresses.</i></span>
            </h1>

            <p className={styles.subtitle}>
              Move beyond sightseeing. Experience Sri Lanka through balance,
              restoration, and mindful living.
            </p>

            <div className={styles.buttons}>
              <Link href="/contact" className={styles.primaryBtn}>
                Start Your Wellness Journey
              </Link>

              <Link href="/treatments" className={styles.secondaryBtn}>
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