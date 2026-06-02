import styles from "./page.module.css";

export default function TermsPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>LEGAL</p>
        <h1 className={styles.title}>Terms & Conditions</h1>
        <p className={styles.subtitle}>
          Please read these Terms & Conditions carefully before using our
          website or engaging our services.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing this website or using the services provided by Ceylon
            Wellness Care, you agree to be bound by these Terms & Conditions.
            If you do not agree with any part of these terms, please do not use
            our website or services.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Our Services</h2>
          <p>
            Ceylon Wellness Care provides customized wellness travel planning
            and coordination services in Sri Lanka. We assist with itinerary
            design, accommodation recommendations, wellness experiences,
            transportation coordination, and related travel arrangements.
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Customized Journeys</h2>
          <p>
            Every journey is tailored to individual preferences and wellness
            goals. Recommendations are based on the information provided by the
            client. Final decisions regarding bookings and participation remain
            the responsibility of the traveler.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Wellness Disclaimer</h2>
          <p>
            Ceylon Wellness Care does not provide medical diagnosis, treatment,
            or healthcare services. Wellness experiences and recommendations are
            intended for travel and lifestyle purposes only. Travelers should
            consult qualified healthcare professionals regarding medical
            conditions or treatment decisions.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Third-Party Providers</h2>
          <p>
            Accommodations, transportation providers, wellness centers, guides,
            and other service providers operate independently. While we carefully
            select partners, we are not responsible for their actions,
            availability, service quality, policies, or performance.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. Client Responsibilities</h2>
          <ul>
            <li>Provide accurate travel information.</li>
            <li>Provide accurate wellness requirements and preferences.</li>
            <li>Ensure passports, visas, insurance, and travel documents are valid.</li>
            <li>Follow local laws and regulations during travel.</li>
            <li>Inform relevant providers of any health concerns where necessary.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>7. Changes and Cancellations</h2>
          <p>
            Changes and cancellations may be subject to the policies of hotels,
            wellness centers, transportation providers, and other third-party
            suppliers. Any applicable fees imposed by those providers remain the
            responsibility of the traveler.
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. Limitation of Liability</h2>
          <p>
            Ceylon Wellness Care shall not be liable for delays, disruptions,
            cancellations, accidents, injuries, losses, force majeure events,
            natural disasters, government restrictions, or actions of
            independent third-party service providers.
          </p>
        </div>

        <div className={styles.section}>
          <h2>9. Intellectual Property</h2>
          <p>
            All website content, including text, graphics, logos, images, and
            branding materials, belongs to Ceylon Wellness Care unless otherwise
            stated. Content may not be copied, reproduced, or distributed
            without written permission.
          </p>
        </div>

        <div className={styles.section}>
          <h2>10. Website Use</h2>
          <p>
            You agree not to misuse the website, attempt unauthorized access,
            distribute harmful content, or engage in activities that may
            interfere with the operation of the website.
          </p>
        </div>

        <div className={styles.section}>
          <h2>11. Changes to These Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Updated
            versions will be published on this page and become effective upon
            publication.
          </p>
        </div>

        <div className={styles.section}>
          <h2>12. Contact Information</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us.
          </p>

          <div className={styles.contactBox}>
            <p><strong>Ceylon Wellness Care</strong></p>
            <p>Email: info@ceylonwellnesscare.com</p>
            <p>Phone: +94 74 135 1434</p>
            <p>WhatsApp: +94 74 135 1434</p>
          </div>
        </div>
      </section>
    </main>
  );
}