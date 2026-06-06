import React from 'react'
import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'
import PageHeader from "@/components/PageHeader/PageHeader";
import Field from '@/components/Field/Field';
import ContactForm from '@/components/ContactForm/ContactForm'; 
import Cta from '@/components/Cta/Cta';

const Contact = () => {
 

  return (
    <div >
      
        <PageHeader
        eyebrow="Contact"
        title={
          <>
            A Seamless Journey From Inquiry<span className={styles.highlight}><i> To Transformation.</i></span>
          </>
        }
        intro="We handle everything from planning to arrival with complete care."
        image="/hero.jpg"
      />

        {/* timeline */}

        <div className={styles.container}> 

    <h1 className={styles.containerText}><i>Your Journey step by Step</i></h1> 
      <ol className={styles.timeline}>
      {/* Item 1 */}
      <li className={styles.item}>
        <div className={`${styles.content} ${styles.left}`}>
          <span className={styles.dot}></span>

          <div className={styles.textBox}>
            <div className={styles.imageWrapper}> <Image src="/step 1.webp" alt="Step 1" width={275} height={150} className={styles.mileImg}/></div>

            <h1 className={styles.heading}>Submit Your Inquiry</h1>

            <p className={styles.text}>
              Share your wellness goals, preferences, and travel expectations with us. From the very first conversation, 
              we begin shaping a smooth and personalised experience around you.
            </p>
          </div>
        </div>

        <div></div>
      </li>

      {/* Item 2 */}
      <li className={styles.item}>
        <div className={`${styles.content} ${styles.right}`}>
          <span className={styles.dot}></span>

          <div className={styles.textBox}>
             <div className={styles.imageWrapper}> <Image src="/step 2.webp" alt="Step 1" width={275} height={150} className={styles.mileImg}/></div>

            <h1 className={styles.heading}>Personal Consultation</h1>

            <p className={styles.text}>
              A relaxed consultation through WhatsApp or call to understand your needs, pace, comfort, 
              and the kind of wellness journey you’re truly looking for.
            </p>
          </div>
        </div>

        <div></div>
      </li>

      {/* Item 3 */}
      <li className={styles.item}>
        <div className={`${styles.content} ${styles.left}`}>
          <span className={styles.dot}></span>

          <div className={styles.textBox}>
            <div className={styles.imageWrapper}> <Image src="/step 3.webp" alt="Step 1" width={275} height={150} className={styles.mileImg}/></div>

            <h1 className={styles.heading}>Tailored Journey Planning</h1>

            <p className={styles.text}>
              We carefully curate your itinerary, accommodations, treatments, 
              and travel flow to ensure everything feels seamless, balanced, and entirely personal.
            </p>
          </div>
        </div>
        <div></div>
      </li>

      {/* Item 4 */}
      <li className={styles.item}>
        <div className={`${styles.content} ${styles.right}`}>
          <span className={styles.dot}></span>

          <div className={styles.textBox}>
             <div className={styles.imageWrapper}> <Image src="/step 4.webp" alt="Step 1" width={275} height={150} className={styles.mileImg}/></div>

            <h1 className={styles.heading}>Confirmation & Preparation</h1>

            <p className={styles.text}>
              Once refined together, we quietly handle the coordination, scheduling, and preparations, 
              so you can look forward to your journey with complete peace of mind.
            </p>
          </div>
        </div>

        <div></div>
      </li>

            {/* Item 5 */}
                <li className={styles.item}>
                    <div className={`${styles.content} ${styles.left}`}>
                    <span className={styles.dot}></span>

                    <div className={styles.textBox}>
                        <div className={styles.imageWrapper}> <Image src="/step 5.webp" alt="Step 1" width={275} height={150} className={styles.mileImg}/></div>

                        <h1 className={styles.heading}>Arrival & Guided Experience</h1>

                        <p className={styles.text}>
                        From the moment you arrive in Sri Lanka, every detail is thoughtfully managed. 
                        You are welcomed, guided, and supported throughout your wellness journey with care.
                        </p>
                    </div>
                    </div>
                    <div></div>
                </li>
    </ol>
    </div>

        {/* contact form */}

        <div className={styles.contactSection}>
            <div className={styles.contactCard}>
                <p className={styles.eyebrow}>
                    REACH TO US DIRECTLY
                </p>
                <h1 className={styles.containerText1}>We respond personally<br/> usually within a day.</h1> 
                <div className={styles.contactCard2}>
                <div className={styles.textLabel}>
                    <div className={styles.textIcon}>
                        <Image src="/email.webp" alt="email" width={20} height={20} className={styles.iconImage}/>
                    </div>
                    <div className={styles.textArea}>
                        <h2>EMAIL</h2>
                        <p>info@ceylonwellnesscare.com</p>
                    </div>
                </div>

                <div className={styles.textLabel}>
                    <div className={styles.textIcon}>
                        <Image src="/phone.webp" alt="email" width={20} height={20} className={styles.iconImage}/>
                    </div>
                    <div className={styles.textArea}>
                        <h2>PHONE</h2>
                        <p>+94 74 135 1434</p>
                    </div>
                </div>

                <div className={styles.textLabel}>
                    <div className={styles.textIcon}>
                        <Image src="/whatsapp.webp" alt="email" width={20} height={20} className={styles.iconImage}/>
                    </div>
                    <div className={styles.textArea}>
                        <h2>WHATSAPP</h2>
                        <p>+94 74 135 1434</p>
                    </div>
                </div>

                <div className={styles.textLabel}>
                    <div className={styles.textIcon}>
                        <Image src="/location.webp" alt="email" width={20} height={20} className={styles.iconImage}/>
                    </div>
                    <div className={styles.textArea}>
                        <h2>LOCATION</h2>
                        <p>No. 3, Bandaranayekapura Rd, Rajagiriya, Colombo</p>
                    </div>
                </div>
                </div>
            </div>

            {/* contact form */}

            <div className={styles.contactForm}>
                  <form className={styles.form}>

                      {/* Travel Type */}
                      <div className={styles.field}>
                        <label>I PLAN TO TRAVEL *</label>
                        <select required>
                          <option value="">Select an option</option>
                          <option>As a couple</option>
                          <option>As a family</option>
                          <option>With my friends</option>
                          <option>As a group</option>
                          <option>Corporate Staff</option>
                          <option>Alone</option>
                        </select>
                      </div>

                      {/* Adults & Children */}
                      <div className={styles.row}>
                        <div className={styles.field}>
                          <label>ADULTS</label>
                          <input type="number" min="1" />
                        </div>

                        <div className={styles.field}>
                          <label>CHILDREN</label>
                          <input type="number" min="0" />
                        </div>
                      </div>

                      {/* Departure & Duration */}
                      <div className={styles.row}>
                        <div className={styles.field}>
                          <label>TRIP DEPARTURE</label>
                          <input type="date" />
                        </div>

                        <div className={styles.field}>
                          <label>DURATION (DAYS)</label>
                          <input type="number" min="1" />
                        </div>
                      </div>

                      {/* Budget */}
                      <div className={styles.field}>
                        <label>MAX BUDGET</label>
                        <input
                          type="number"
                          placeholder="Euros per person"
                          min="0"
                        />
                      </div>

                      {/* Accommodation Level */}
                      <div className={styles.field}>
                        <label>DESIRED LEVEL OF ACCOMMODATION</label>

                        <div className={styles.radioGroup}>
                          <label>
                            <input type="radio" name="accommodation" value="Guest House" />
                            Guest House
                          </label>

                          <label>
                            <input type="radio" name="accommodation" value="Standard (***)" />
                            Standard (***)
                          </label>

                          <label>
                            <input type="radio" name="accommodation" value="Comfort (****)" />
                            Comfort (****)
                          </label>

                          <label>
                            <input
                              type="radio"
                              name="accommodation"
                              value="Luxury / Boutique Hotel (*****)"
                            />
                            Luxury / Boutique Hotel (*****)
                          </label>
                        </div>
                      </div>

                      {/* Additional Requests */}
                      <div className={styles.field}>
                        <label>ADDITIONAL ACCOMMODATION AND OTHER REQUESTS</label>
                        <textarea />
                      </div>

                      {/* Name & Phone */}
                      <div className={styles.row}>
                        <div className={styles.field}>
                          <label>FULL NAME *</label>
                          <input type="text" required />
                        </div>

                        <div className={styles.field}>
                          <label>PHONE / WHATSAPP *</label>
                          <input type="tel" required />
                        </div>
                      </div>

                      {/* Email & City */}
                      <div className={styles.row}>
                        <div className={styles.field}>
                          <label>EMAIL</label>
                          <input type="email" />
                        </div>

                        <div className={styles.field}>
                          <label>CITY *</label>
                          <input type="text" required />
                        </div>
                      </div>

                      {/* Country */}
                      <div className={styles.field}>
                        <label>COUNTRY OF RESIDENCE</label>
                        <input type="text" />
                      </div>

                      <button type="submit" className={styles.button}>
                        Send Inquiry
                        <Image
                          src="/submit.webp"
                          alt="Send"
                          width={20}
                          height={20}
                        />
                      </button>

                    </form>
                </div>
                
        </div>  
      <Cta/>
    </div>
  )
}

export default Contact
