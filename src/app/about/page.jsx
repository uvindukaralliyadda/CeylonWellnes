import React from 'react'
import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'
import PageHeader from "@/components/PageHeader/PageHeader";
import Field from '@/components/Field/Field';
import ContactForm from '@/components/ContactForm/ContactForm';
import Compareabout from '@/components/Compareabout/Compareabout';
import Cta from '@/components/Cta/Cta';

const page = () => {
  return (
    <div>

     <PageHeader
        eyebrow="About Us"
        title={
          <>
            Customized Wellness Travel Planners<span className={styles.highlight}><i> For First Time In Sri Lanka.</i></span>
          </>
        }
        intro="We are a wellness travel planning company in Sri Lanka. 
        We help you design and manage complete wellness journeys based on your needs, comfort, and travel goals."
        image="/hero.jpg"
      />

      {/*Overview Section*/}

       <section className={styles.overview}>
        <div className={styles.overview1}>
            <h2 className={styles.smallheading}>What We Do</h2>
            <h1 className={styles.overview1title}>4 quiet ways <span><i>we shape your wellness journey.</i></span></h1>
            <p className={styles.overview1p}>Each piece is considered. Each detail is handled. You stay present while we take care of the rest.</p>
            <Image src="/About.webp" alt="About Us" width={425} height={325} className={styles.overview1image}/>
        </div>
        <div className={styles.overview2}>

            <div className={styles.overview2item}>

              <div className={styles.imageCard}>
                <Image
                  src="/Travelplan.webp"
                  alt="Travel"
                  width={225}
                  height={300}
                  className={styles.overview2image}
                />
                <div className={styles.imageOverlay}>
                  <h1>Custom Journey Planning</h1>
                  <p>Wellness itineraries shaped around your personal goals and travel needs.</p>
                </div>
              </div>

              <div className={styles.imageCard}>
                <Image
                  src="/Hotel.webp"
                  alt="Hotels"
                  width={225}
                  height={300}
                  className={styles.overview2image}
                />
                <div className={styles.imageOverlay}>
                  <h1>Right Locations & Stays</h1>
                  <p>We select the best regions and accommodations matched to your comfort and pace.</p>
                </div>
              </div>

            </div>

            <div className={styles.overview2item2}>

              <div className={styles.imageCard}>
                <Image
                  src="/Yogaa.webp"
                  alt="Yogaa"
                  width={225}
                  height={300}
                  className={styles.overview2image}
                />
                <div className={styles.imageOverlay}>
                  <h1>Wellness Experience Design</h1>
                  <p>We arrange suitable treatments and experiences with a natural, balanced flow.</p>
                </div>
              </div>

              <div className={styles.imageCard}>
                <Image
                  src="/Arrival.webp"
                  alt="Arrival"
                  width={225}
                  height={300}
                  className={styles.overview2image}
                />
                <div className={styles.imageOverlay}>
                  <h1>Full Travel Support</h1>
                  <p>From arrival to departure, everything is coordinated and managed for you.</p>
                </div>
              </div>

            </div>

      </div>
      </section>
        
        <Compareabout />
        
    <section className={styles.purpose}>
      <h1>Our Purpose</h1>

      <div className={styles.purposetypes}>

        {/* Mission Card */}
        <div className={styles.card}>
          <Image
            src="/Mission.webp"
            alt="Mission"
            width={425}
            height={325}
            className={styles.image}
          />

          <div className={styles.overlay}>
            <p>Mission</p>
            <h1>
              <i>
              To make wellness travel in Sri Lanka simple, personalised, and stress-free.
              </i>
            </h1>
          </div>
        </div>

        {/* Vision Card */}
        <div className={styles.card}>
          <Image
            src="/Vision.webp"
            alt="Vision"
            width={425}
            height={325}
            className={styles.image}
          />

          <div className={styles.overlay}>
            <p>Vision</p>
            <h1><i>
              To become a trusted wellness partner for global travellers seeking calm,
              recovery, and balance in Sri Lanka.
              </i>
            </h1>
          </div>
        </div>

      </div>
    </section>
      <Cta />
    </div>
  )
}

export default page
