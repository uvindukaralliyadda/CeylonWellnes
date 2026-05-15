import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <span className={styles.bigCircle}></span>
      <img src="/img/shape.png" className={styles.square} alt="" />

      <div className={styles.form}>
        {/* LEFT SIDE */}
        <div className={styles.contactInfo}>
          <h3 className={styles.title}>Let's get in touch</h3>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className={styles.information}>
            <img src="/img/location.png" className={styles.icon} alt="" />
            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>

          <div className={styles.information}>
            <img src="/img/email.png" className={styles.icon} alt="" />
            <p>lorem@ipsum.com</p>
          </div>

          <div className={styles.information}>
            <img src="/img/phone.png" className={styles.icon} alt="" />
            <p>123-456-789</p>
          </div>

          <div className={styles.socialMedia}>
            <p>Connect with us :</p>

            <div className={styles.socialIcons}>
              <a href="#">F</a>
              <a href="#">T</a>
              <a href="#">I</a>
              <a href="#">IN</a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.contactForm}>
          <span className={`${styles.circle} ${styles.one}`}></span>
          <span className={`${styles.circle} ${styles.two}`}></span>

          <form className={styles.formElement}>
            <h3 className={styles.title}>Contact us</h3>

            <div className={styles.inputContainer}>
              <input type="text" className={styles.input} />
              <label>Username</label>
              <span>Username</span>
            </div>

            <div className={styles.inputContainer}>
              <input type="email" className={styles.input} />
              <label>Email</label>
              <span>Email</span>
            </div>

            <div className={styles.inputContainer}>
              <input type="tel" className={styles.input} />
              <label>Phone</label>
              <span>Phone</span>
            </div>

            <div className={`${styles.inputContainer} ${styles.textarea}`}>
              <textarea className={styles.input}></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>

            <input type="submit" value="Send" className={styles.btn} />
          </form>
        </div>
      </div>
    </div>
  );
}