import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <p className={styles.eyebrow}>Start Your Journey</p>

        <h1 className={styles.title}>
          Let us design your <span>wellness experience</span> in Sri Lanka
        </h1>

        <p className={styles.description}>
          Share your goals and we’ll create a fully personalised wellness journey
          designed around your comfort, pace, and needs.
        </p>

        <div className={styles.buttons}>
          <a href="/contact" className={styles.primaryBtn}>
            Get Started
          </a>

          <a href="https://wa.me/+94741351434" className={styles.secondaryBtn}>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}