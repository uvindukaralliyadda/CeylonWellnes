import styles from "./page.module.css";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>LEGAL</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>
          Your privacy matters to us. This policy explains how Ceylon Wellness
          Care collects, uses, and protects your information.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Ceylon Wellness Care is committed to protecting your privacy and
            handling your personal information responsibly. By using our
            website, contacting us, or requesting our services, you agree to
            the practices described in this Privacy Policy.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>We may collect information including:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Country of residence</li>
            <li>Travel preferences</li>
            <li>Wellness goals and requirements</li>
            <li>Information submitted through forms, WhatsApp, email, or consultations</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>Your information may be used to:</p>
          <ul>
            <li>Respond to inquiries and requests</li>
            <li>Design personalized wellness journeys</li>
            <li>Coordinate accommodations and travel arrangements</li>
            <li>Communicate important updates</li>
            <li>Provide customer support</li>
            <li>Improve our services and website experience</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>4. Information Sharing</h2>
          <p>
            We do not sell or rent personal information. Information may be
            shared with accommodation providers, transportation partners,
            wellness centers, or other trusted service providers only when
            necessary to arrange and manage your journey.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We take reasonable measures to protect personal information from
            unauthorized access, disclosure, alteration, or misuse. However, no
            online transmission or storage method can be guaranteed as
            completely secure.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. Cookies & Analytics</h2>
          <p>
            Our website may use cookies and analytics tools to improve
            performance, understand visitor behavior, and enhance user
            experience. You may manage cookie preferences through your browser
            settings.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Third-Party Services</h2>
          <p>
            Our website may contain links to our official social media pages and WhatsApp communication channels. 
            When you visit or interact with these platforms, your information may be subject to the privacy policies and 
            practices of the respective service providers. We encourage you to review their privacy policies before sharing 
            personal information.
          </p>
          <p>
            Ceylon Wellness Care is not responsible for the privacy practices, content, or security measures of third-party platforms.
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. Wellness Information Disclaimer</h2>
          <p>
            Information shared regarding wellness goals, lifestyle preferences,
            recovery needs, or personal circumstances is used solely for
            planning suitable wellness travel experiences. Ceylon Wellness Care
            does not provide medical diagnosis, treatment, or healthcare
            services unless specifically arranged through qualified third-party
            providers.
          </p>
        </div>

        <div className={styles.section}>
          <h2>9. Your Rights</h2>
          <p>You may request to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent for future communications</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>10. Data Retention</h2>
          <p>
            We retain information only for as long as necessary to provide our
            services, comply with legal obligations, and maintain business
            records.
          </p>
        </div>

        <div className={styles.section}>
          <h2>11. Children's Privacy</h2>
          <p>
            Our services are not intended for children without parental or
            guardian involvement. We do not knowingly collect personal
            information from children without appropriate consent.
          </p>
        </div>

        <div className={styles.section}>
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be published on this page with the latest revision date.
          </p>
        </div>

        <div className={styles.section}>
          <h2>13. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy or your personal
            information, please contact us.
          </p>

          <div className={styles.contactBox}>
            <p>
              <strong>Ceylon Wellness Care</strong>
            </p>
            <p>Email: info@ceylonwellnesscare.com</p>
            <p>Phone: +94 74 135 1434</p>
            <p>WhatsApp: +94 74 135 1434</p>
          </div>
        </div>
      </section>
    </main>
  );
}