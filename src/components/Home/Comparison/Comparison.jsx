import styles from "./Comparison.module.css";

const traditional = [
  "Fast-paced itineraries",
  "Surface-level experiences",
  "Physically draining",
  "Short-lived satisfaction",
];

const wellness = [
  "Slow, intentional journeys",
  "Mind & body renewal",
  "Deep cultural connection",
  "Long-term wellbeing",
];

const Comparison = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why Wellness Tourism</p>

          <h2 className={styles.title}>
            Two ways to travel.
            <br />
            <span>Only one returns you whole.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {/* Traditional */}
          <div className={styles.cardLight}>
            <p className={styles.labelMuted}>Traditional Travel</p>

            <h1 className={styles.subtitleMuted}>
              Seeing more,
              <br />
              feeling less.
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

            <p className={styles.labelAccent}>Wellness Tourism</p>

            <h1 className={styles.subtitle}>
              Slowing down,
              <br />
              returning to yourself.
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
          This isn't a trip. <span>It's a reset.</span>
        </h1>
      </div>
    </section>
  );
};

export default Comparison;