import styles from "./Compareabout.module.css";

const traditional = [
  "Too much research needed",
  "Many hotels to compare",
  "Confusing travel planning",
  "Hard to match wellness needs",
   "Time-consuming process",
];

const wellness = [
  "We plan everything for you",
  "We match locations to your needs",
  "We handle coordination and bookings",
  "We simplify the entire process",
  "You only focus on your journey",
];

const Compareabout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why Go Through Us</p>

          <h2 className={styles.title}>
            Planning alone vs.
            <br />
            <span>planning with us.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {/* Traditional */}
          <div className={styles.cardLight}>
            

            <h1 className={styles.subtitleMuted}>
              Planning Alone.
            </h1>

            <ul className={styles.listLight}>
              {traditional.map((item) => (
                <li key={item}>
                  <span className={styles.line} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Wellness */}
          <div className={styles.cardDark}>
            <div className={styles.glow} />

            

            <h1 className={styles.subtitle}>
             With Us.
            </h1>

            <ul className={styles.listDark}>
              {wellness.map((item) => (
                <li key={item}>
                  <span className={styles.dot} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer text */}
        <h1 className={styles.footerText}>
          You tell us your needs.  <span>We handle the rest.</span>
        </h1>
      </div>
    </section>
  );
};

export default Compareabout;