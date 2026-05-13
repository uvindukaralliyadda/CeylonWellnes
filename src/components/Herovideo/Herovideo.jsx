import styles from "./Herovideo.module.css";
import Image from "next/image";

const Herovideo = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>-A DIFFERENT KIND OF TRAVEL</p>

        <h1 className={styles.title}>
          The pace of a place changes <span>everything</span>.
        </h1>
      </div>

      <div className={styles.videoWrapper}>
        <div className={styles.videoCard}>
          <Image
            src='/Hero.jpg'
            alt="Hands holding a warm cup"
            style={{ objectFit: "cover" }}
            width={1920}
            height={1080}
            className={styles.image}
            loading="lazy"
          />

          <div className={styles.overlay} />

          {/* Play Button (inline SVG instead of lucide-react) */}
          <button aria-label="Play video" className={styles.playButton}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          
        </div>
      </div>
    </section>
  );
};

export default Herovideo;