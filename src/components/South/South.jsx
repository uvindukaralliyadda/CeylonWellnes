"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./South.module.css";

const images = ["/South1.webp", "/South2.webp", "/South3.webp"];

export default function South() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className={styles.city1gallery}>
      
      <div className={styles.carousel}>
        <div className={styles.slide}>
          <Image
            src={images[index]}
            alt="gallery image"
            fill
            className={styles.image}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <button className={`${styles.btn} ${styles.prev}`} onClick={prev}>
        ‹
      </button>

      <button className={`${styles.btn} ${styles.next}`} onClick={next}>
        ›
      </button>

    </div>
  );
}