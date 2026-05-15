import styles from "./PageHeader.module.css";

const PageHeader = ({ eyebrow, title, intro, image, children }) => {
  return (
    <section className={styles.section}>
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className={styles.bgImage}
            loading="lazy"
          />
          <div className={styles.overlay} />
        </>
      )}

      <div className={styles.container}>
        <p className={styles.eyebrow}>{eyebrow}</p>

        <h1 className={styles.title}>{title}</h1>

        {intro && <p className={styles.intro}>{intro}</p>}

        {children}
      </div>
    </section>
  );
};

export default PageHeader;