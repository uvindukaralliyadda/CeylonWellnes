import styles from "./Herovideo.module.css";

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
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/wellnesshero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={styles.overlay} />

          
        </div>
      </div>
    </section>
  );
};

export default Herovideo;