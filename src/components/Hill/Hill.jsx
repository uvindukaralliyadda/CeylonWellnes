"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hill.module.css";

const images = ["/Hill1.webp", "/Hill2.webp", "/Hill3.webp"];

export default function Hill() {
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