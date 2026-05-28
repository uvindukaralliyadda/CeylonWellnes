import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader/PageHeader'
import South from '@/components/South/South'
import Hill from '@/components/Hill/Hill'
import Cultural from '@/components/Cultural/Cultural'
import East from '@/components/East/East'

const page = () => {
  return (
    <div>
       <PageHeader
        eyebrow="Wellness By Region"
        title={
          <>
           Explore Sri Lanka through environments that <span className={styles.highlight}><i> shape your wellness journey.</i></span>
          </>
        }
        intro="Each region offers a distinct natural atmosphere that influences how wellness is experienced. 
        From ocean calm to mountain stillness and cultural depth, 
        journeys are shaped by environments that support healing, rest, and transformation."
        image="/hero.jpg"
      className={styles.pageHeader}/>


        {/*Overview Section*/}

       <section className={styles.overview}>
        <div className={styles.overview1}>
            <h2 className={styles.smallheading}>An Island of Environments</h2>
            <h1 className={styles.overview1title}>Four landscapes. <span><i>Four ways of being well.</i></span></h1>
            <p className={styles.overview1p}>Sri Lanka offers diverse environments that naturally shape wellness experiences. 
                Coastal calm, hill country freshness, cultural depth, and eastern silence each create a 
                different emotional and physical setting for personalised wellness journeys.</p>
        </div>
        <div className={styles.overview2}>
           <div className={styles.overview2item}>
            <Image src="/srilanka1.webp" alt="Mountain" width={225} height={300} className={styles.overview2image1}/>
            <Image src="/srilanka7.webp" alt="Mountain" width={225} height={300} className={styles.overview2image2}/>
           </div>
           <div className={styles.overview2item2}>
            <Image src="/srilanka3.webp" alt="Cultural Depth" width={225} height={300} className={styles.overview2image3}/>
            <Image src="/srilanka4.webp" alt="Eastern Silence" width={225} height={300} className={styles.overview2image4}/>
           </div>
        </div>
        </section>

        {/*Region 1*/}
        <section className={styles.city}>
        <div className={styles.city1}>
            <h2 className={styles.city1smallheading}>Galle Mirissa Unawatuna</h2>
            <h1 className={styles.city1title}>South Coast</h1>
            <p className={styles.city1p}>Sri Lanka’s coastal regions offer a tranquil environment where the rhythmic sound of waves and ocean breeze create a calming atmosphere.
             Wellness experiences here focus on relaxation, stress relief, and rejuvenation through beachside retreats, spa therapies, and water-based activities that connect you to the healing energy of the sea.</p>
             <div className={styles.city1features}>
              <h1 >WHAT THIS REGION ADDS</h1>
              <ul>
                <li>Mental relaxation through ocean environment</li>
                <li>Slow coastal rhythm that supports rest</li>
                <li>Smooth transition into calm, restorative experiences</li>
              </ul>
             </div>

             <div className={styles.city1ideal}>
              <h1 >IDEAL FOR</h1>
              <ul>
                <li>Burned-out professionals</li>
                <li>Couples seeking relaxation</li>
                <li>First-time wellness travellers</li>
                <li>Creative professionals needing mental reset</li>
                <li>Guests wanting slow coastal living</li>
                <li>Gentle post-stress recovery journeys</li>
              </ul>
             </div>

             <div  className={styles.city1calender}>
              <h3><Image src="/calender.png" alt="Calender" width={20} height={20} className={styles.city1icon}/>Best Travel Period</h3>
              <h4><span></span>DECEMBER-APRIL</h4>
             </div>
        </div>
        <div className={styles.city1rightcontainer}>
          <South />
         </div>
        </section>
        <hr className={styles.cityline}/>
        {/*Region 2*/}
        <section className={styles.city}>
        <div className={styles.city1}>
            <h2 className={styles.city1smallheading}>Kandy Nuwaraeliya Ella</h2>
            <h1 className={styles.city1title}>Hill Country</h1>
            <p className={styles.city1p}>Sri Lanka’s hill country region, including Ella, Nuwara Eliya, 
              and Kandy, offers a cool and refreshing environment surrounded by misty mountains, 
              tea plantations, and lush green valleys. The slower pace of life and crisp mountain air 
              naturally support physical and mental reset, creating an ideal setting for restorative wellness journeys focused on balance, clarity, and renewal.</p>
             <div className={styles.city1features}>
              <h1 >WHAT THIS REGION ADDS</h1>
              <ul>
                <li>Natural detox-friendly climate</li>
                <li>Elevated calm atmosphere</li>
                <li>Slower lifestyle rhythm that supports reset</li>
              </ul>
             </div>

             <div className={styles.city1ideal}>
              <h1 >IDEAL FOR</h1>
              <ul>
                <li>Nature-focused travellers</li>
                <li>Lifestyle reset seekers</li>
                <li>Remote workers needing mental refresh</li>
                <li>Long-stay wellness guests</li>
                <li>Digital detox travellers</li>
                <li>Guests escaping urban stress</li>
              </ul>
             </div>

             <div  className={styles.city1calender}>
              <h3><Image src="/calender.png" alt="Calender" width={20} height={20} className={styles.city1icon}/>Best Travel Period</h3>
              <h4><span></span>JANUARY – APRIL, JULY – SEPTEMBER</h4>
             </div>
        </div>
        <div className={styles.city1rightcontainer}>
          <Hill />
         </div>
        </section>
        <hr className={styles.cityline}/>
        {/*Region 3*/}
        <section className={styles.city}>
        <div className={styles.city1}>
            <h2 className={styles.city1smallheading}>Sigiriya Anuradhapura Polonnaruwa</h2>
            <h1 className={styles.city1title}>Cultural Triangle</h1>
            <p className={styles.city1p}>Sri Lanka’s Cultural Triangle, including Sigiriya, 
              Anuradhapura, and Polonnaruwa, is a deeply historic and spiritually rich region filled with 
              ancient kingdoms, sacred temples, and timeless landscapes. The quiet and meaningful atmosphere encourages reflection, mindfulness, and inner awareness, creating a powerful 
              environment for emotional grounding and spiritual wellness journeys.</p>
             <div className={styles.city1features}>
              <h1 >WHAT THIS REGION ADDS</h1>
              <ul>
                <li>Deep cultural grounding</li>
                <li>Quiet reflection spaces</li>
                <li>Mindful travel environments</li>
              </ul>
             </div>

             <div className={styles.city1ideal}>
              <h1 >IDEAL FOR</h1>
              <ul>
                <li>Spiritual wellness seekers</li>
                <li>Mindfulness and meditation travellers</li>
                <li>Emotional healing journeys</li>
                <li>Slow travel enthusiasts</li>
                <li>Cultural immersion travellers</li>
                <li>Guests seeking inner clarity</li>
              </ul>
             </div>

             <div  className={styles.city1calender}>
              <h3><Image src="/calender.png" alt="Calender" width={20} height={20} className={styles.city1icon}/>Best Travel Period</h3>
              <h4><span></span>MAY – SEPTEMBER, DECEMBER – FEBRUARY</h4>
             </div>
        </div>
        <div className={styles.city1rightcontainer}>
          <Cultural />
         </div>
        </section>
        <hr className={styles.cityline}/>
        {/*Region 4*/}
        <section className={styles.city}>
        <div className={styles.city1}>
            <h2 className={styles.city1smallheading}>Trincomalee Arugam Bay</h2>
            <h1 className={styles.city1title}>East Coast</h1>
            <p className={styles.city1p}>Sri Lanka’s east coast, including Trincomalee and Arugam Bay, is 
              known for its wide open beaches, quiet surroundings, and untouched natural beauty. The sense of space and silence creates a deeply calming environment where guests can disconnect from routine life and 
              experience emotional reset, slow living, and complete mental relaxation.</p>
             <div className={styles.city1features}>
              <h1 >WHAT THIS REGION ADDS</h1>
              <ul>
                <li>Wide uncrowded coastal spaces</li>
                <li>Deep sense of silence and openness</li>
                <li>Digital detox environment</li>
                <li>Slow unstructured lifestyle rhythm</li>
                <li>Emotional space for recovery and rest</li>
              </ul>
             </div>

             <div className={styles.city1ideal}>
              <h1 >IDEAL FOR</h1>
              <ul>
                <li>Digital nomads seeking disconnection</li>
                <li>Solo wellness travellers</li>
                <li>Emotional reset journeys</li>
                <li>Quiet recovery guests</li>
                <li>Long-stay slow living travellers</li>
                <li>Individuals avoiding overstimulation</li>
              </ul>
             </div>

             <div  className={styles.city1calender}>
              <h3><Image src="/calender.png" alt="Calender" width={20} height={20} className={styles.city1icon}/>Best Travel Period</h3>
              <h4><span></span>MAY – SEPTEMBER</h4>
             </div>
        </div>
        <div className={styles.city1rightcontainer}>
          <East />
         </div>
        </section>

    </div>
  )
}

export default page
