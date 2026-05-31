import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader/PageHeader'
import South from '@/components/South/South'
import Hill from '@/components/Hill/Hill'
import Cultural from '@/components/Cultural/Cultural'
import East from '@/components/East/East'
import Package1 from '@/components/Package1/Package1'
import Package2 from '@/components/Package2/Package2'
import Package3 from '@/components/Package3/Package3'
import Package4 from '@/components/Package4/Package4'
import Cta from '@/components/Cta/Cta'
import { Package} from 'lucide-react'
import Package5 from '@/components/Package5/Package5'


const Treatments = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Wellness JOURNEYS"
        title={
          <>
          Choose the experience, <span className={styles.highlight}><i> not the package.</i></span>
          </>
        }
        intro="We design wellness journeys instead of fixed packages. Each experience combines Sri Lanka's natural environments, 
        holistic wellness practices, 
        and carefully selected stays to create a seamless healing journey."
        image="/hero.jpg"
      className={styles.pageHeader}/>

      {/*Overview Section*/}


        {/*Region 1*/}
        <section className={styles.city}>
        <div className={styles.city1}>
            <h2 className={styles.city1smallheading}>For Stress Relief & Deep Rest</h2>
            <h1 className={styles.city1title}>Restore & Relax</h1>
            <p className={styles.city1p}>Designed for those who feel mentally exhausted by demanding schedules, constant responsibilities, or fast-paced lifestyles. This journey creates space to slow down, disconnect from pressure, and enjoy restorative experiences that promote calm, relaxation, and renewed energy in beautiful coastal settings.</p>
             <div className={styles.city1features}>
              <h1 >WHAT INCLUDES</h1>
              <ul>
                <li>Beachside wellness experiences and coastal relaxation</li>
                <li>Spa therapies and restorative treatments</li>
                <li>Gentle yoga, stretching, and mindfulness sessions</li>
                <li>Sunset walks and slow-living experiences</li>
                <li>Carefully selected wellness-focused accommodation</li>
              </ul>
             </div>

             <div className={styles.city1ideal}>
              <h1 >IDEAL FOR</h1>
              <ul>
                <li>Busy professionals and executives</li>
                <li>VIP travelers seeking effortless relaxation</li>
                <li>Couples and families</li>
                <li>First-time wellness travelers</li>
              </ul>
             </div>

             <div  className={styles.city1calender}>
              <h3><Image src="/map.webp" alt="Map" width={20} height={20} className={styles.city1icon}/>Best Regions</h3>
              <h4><span></span>South Coast , East Coast</h4>
             </div>
        </div>
        <div className={styles.city1rightcontainer}>
          <Package1/>
         </div>
        </section>
        <hr className={styles.cityline}/>
        {/*Region 2*/}
        <section className={styles.city}>
        <div className={styles.city1}>
            <h2 className={styles.city1smallheading}>For Lifestyle Renewal & Wellness Balance</h2>
            <h1 className={styles.city1title}>Reset & Rebalance</h1>
            <p className={styles.city1p}>Created for individuals seeking a meaningful break from unhealthy routines, 
              chronic stress, or digital overload. This journey combines wellness practices, nature, and mindful living to help restore physical balance, 
              improve wellbeing, and encourage healthier habits that continue beyond the trip.</p>
             <div className={styles.city1features}>
              <h1 >WHAT INCLUDES</h1>
              <ul>
                <li>Ayurveda inspired wellness experiences</li>
                <li>Yoga, breathwork, and mindful movement practices</li>
                <li>Guided nature walks, scenic hikes, and outdoor wellness activities</li>
                <li>Nutrition-focused wellness and healthy lifestyle experiences</li>
                <li>Immersive stays in refreshing natural environments</li>
              </ul>
             </div>

             <div className={styles.city1ideal}>
              <h1 >IDEAL FOR</h1>
              <ul>
                <li>Professionals experiencing burnout</li>
                <li>Health-conscious travelers</li>
                <li>Individuals seeking a lifestyle reset</li>
                <li>Guests looking for long-stay wellness experiences</li>
              </ul>
             </div>

             <div  className={styles.city1calender}>
              <h3><Image src="/map.webp" alt="Map" width={20} height={20} className={styles.city1icon}/>Best Regions</h3>
              <h4><span></span>Hill Country, South Coast</h4>
             </div>
        </div>
        <div className={styles.city1rightcontainer}>
          <Package2 />
         </div>
        </section>
        <hr className={styles.cityline}/>
        {/*Region 3*/}
        <section className={styles.city}>
        <div className={styles.city1}>
            <h2 className={styles.city1smallheading}>For Mindfulness & Inner Clarity</h2>
            <h1 className={styles.city1title}>Reflect & Reconnect</h1>
            <p className={styles.city1p}>This journey is designed for travelers seeking greater awareness, 
              emotional grounding, and meaningful connection. Surrounded by Sri Lanka's cultural and spiritual landscapes, 
              guests are encouraged to slow down, reflect deeply, 
              and reconnect with themselves through mindful experiences and intentional travel.</p>
             <div className={styles.city1features}>
              <h1 >WHAT INCLUDES</h1>
              <ul>
                <li>Meditation and mindfulness practices</li>
                <li>Cultural and spiritual experiences</li>
                <li>Sacred site visits and heritage exploration</li>
                <li>Guided reflection walks through nature and historic landscapes</li>
                <li>Quiet spaces designed for contemplation and inner clarity</li>
              </ul>
             </div>

             <div className={styles.city1ideal}>
              <h1 >IDEAL FOR</h1>
              <ul>
                <li>Solo travelers</li>
                <li>Mindfulness practitioners</li>
                <li>Emotional healing journeys</li>
                <li>Spiritual wellness seekers</li>
                <li>Travelers seeking emotional clarity</li>
              </ul>
             </div>

             <div  className={styles.city1calender}>
              <h3><Image src="/map.webp" alt="Map" width={20} height={20} className={styles.city1icon}/>Best Regions</h3>
              <h4><span></span>Cultural Triangle, Hill Country</h4>
             </div>
        </div>
        <div className={styles.city1rightcontainer}>
          <Package3 />
         </div>
        </section>
        <hr className={styles.cityline}/>
        {/*Region 4*/}
        <section className={styles.city}>
        <div className={styles.city1}>
            <h2 className={styles.city1smallheading}>For Recovery, Rest & Gentle Restoration</h2>
            <h1 className={styles.city1title}>Recover & Renew</h1>
            <p className={styles.city1p}>A supportive wellness journey designed for guests who need time to recover physically, mentally, or emotionally. Whether following medical treatment, prolonged stress, or a demanding life period, this experience prioritizes comfort, calm environments, and gentle wellness practices that encourage renewal.</p>
             <div className={styles.city1features}>
              <h1 >WHAT INCLUDES</h1>
              <ul>
                <li>Rest-focused wellness experiences and gentle therapies</li>
                <li>Flexible daily schedules tailored to personal comfort</li>
                <li>Calm natural environments that encourage recovery</li>
                <li>Light nature walks and restorative outdoor experiences</li>
                <li>Wellness-oriented accommodation with space for deep relaxation</li>
              </ul>
             </div>

             <div className={styles.city1ideal}>
              <h1 >IDEAL FOR</h1>
              <ul>
                <li>Guests recovering after medical treatments</li>
                <li>Individuals experiencing emotional exhaustion</li>
                <li>Those seeking restorative rest</li>
                <li>Long-stay recovery travelers</li>
              </ul>
             </div>

             <div  className={styles.city1calender}>
              <h3><Image src="/map.webp" alt="Map" width={20} height={20} className={styles.city1icon}/>Best Regions</h3>
              <h4><span></span>East Coast, South Coast, Hill Country</h4>
             </div>
        </div>
        <div className={styles.city1rightcontainer}>
          <Package4 />
         </div>
        </section>
        <hr className={styles.cityline}/>
        {/*Region 5*/}
        <section className={styles.city}>
        <div className={styles.city1}>
            <h2 className={styles.city1smallheading}>For Remote Living & Balanced Productivity</h2>
            <h1 className={styles.city1title}>Work & Wellbeing</h1>
            <p className={styles.city1p}>Designed for digital nomads, entrepreneurs, and remote professionals who want to 
              maintain productivity while prioritizing wellbeing. This journey blends comfortable long-stay environments with wellness 
              experiences that support focus, balance, creativity, and a healthier relationship with work.</p>
             <div className={styles.city1features}>
              <h1 >WHAT INCLUDES</h1>
              <ul>
                <li>Flexible wellness experiences designed around work commitments</li>
                <li>Yoga, movement, and stress-management practices</li>
                <li>Nature-inspired work environments and long-stay accommodation</li>
                <li>Guided walks, weekend excursions, and outdoor wellness activities</li>
                <li>Work-life balance experiences that support focus and wellbeing</li>
              </ul>
             </div>

             <div className={styles.city1ideal}>
              <h1 >IDEAL FOR</h1>
              <ul>
                <li>Digital nomads</li>
                <li>Entrepreneurs</li>
                <li>Remote professionals</li>
                <li>Long-stay international travelers</li>
              </ul>
             </div>

             <div  className={styles.city1calender}>
              <h3><Image src="/map.webp" alt="Map" width={20} height={20} className={styles.city1icon}/>Best Regions</h3>
              <h4><span></span>East Coast, Hill Country</h4>
             </div>
        </div>
        <div className={styles.city1rightcontainer}>
          <Package5 />
         </div>
        </section>
        <Cta />

    </div>
  )
}

export default Treatments
