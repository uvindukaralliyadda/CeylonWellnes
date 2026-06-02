"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [hover, setHover] = useState("");

  return (
    <div
      className={`${styles.content} ${
        hover === "left"
          ? styles.hoverLeft
          : hover === "right"
          ? styles.hoverRight
          : ""
      }`}
    >
      {/* NAVBAR */}
      

      {/* SPLIT CONTENT */}
      <div className={`${styles.split} ${styles.left}`}>
        <img src="/img/skateboard.png" alt="" className={styles.skateboard} />

        <div className={styles.text}>
          <p className={styles.subtitle}>cruiser skateboard</p>
          <h1 className={styles.title}>
            mmm ahhh <br /> ..push it!
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sint
            voluptatem tempora ipsam expedita?
          </p>
          <button className={styles.button}>Discover More</button>
        </div>

        <div
          className={styles.hoverArea}
          onMouseEnter={() => setHover("left")}
          onMouseLeave={() => setHover("")}
        />
      </div>

      <div className={`${styles.split} ${styles.right}`}>
        <img src="/img/shoes.png" alt="" className={styles.shoes} />

        <div className={styles.text}>
          <p className={styles.subtitle}>
            adidas pharrel williams tennis hu
          </p>
          <h1 className={styles.title}>
            because <br /> i'm happy <br /> again
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sint
            voluptatem tempora ipsam expedita?
          </p>
          <button className={styles.button}>Discover More</button>
        </div>

        <div
          className={styles.hoverArea}
          onMouseEnter={() => setHover("right")}
          onMouseLeave={() => setHover("")}
        />
      </div>

      {/* SLIDER */}
      <div className={styles.slider}>
        <div className={styles.pages}>
          <span>01</span>06
        </div>

        <div className={styles.arrows}>
          <span>←</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}