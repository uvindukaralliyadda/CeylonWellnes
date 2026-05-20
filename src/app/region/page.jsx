import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader/PageHeader'

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

    </div>
  )
}

export default page
