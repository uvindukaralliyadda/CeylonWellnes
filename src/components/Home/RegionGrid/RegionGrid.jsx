import Link from "next/link";
import Image from "next/image";
import styles from "./RegionGrid.module.css";

export const regions = [
  {
    slug: "south-coast",
    name: "South Coast",
    places: "Galle · Mirissa · Unawatuna",
    img: "/Galle.jpg",
    desc: "Ocean rhythms, slow mornings, and coastal Ayurveda.",
  },
  {
    slug: "hill-country",
    name: "Hill Country",
    places: "Ella · Nuwara Eliya · Kandy",
    img: "/Ella.webp",
    desc: "Tea-scented air, cool mountains, and quiet retreats.",
  },
  {
    slug: "cultural-triangle",
    name: "Cultural Triangle",
    places: "Sigiriya · Anuradhapura · Polonnaruwa",
    img: "/Anuradhapura.webp",
    desc: "Ancient temples and the depth of spiritual practice.",
  },
  {
    slug: "east-coast",
    name: "East Coast",
    places: "Trincomalee · Arugam Bay",
    img: "/ArugamBay.webp",
    desc: "Untouched shores, surf, and meditative solitude.",
  },
];

const RegionGrid = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.top}>
          <div className={styles.headingBox}>
            <p className={styles.eyebrow}>Wellness by Region</p>

            <h1 className={styles.title}>
              One island. <span>Many ways</span> to find stillness.
            </h1>
          </div>

          <Link href="/region" className={styles.viewAll}>
            View all regions
            <span className={styles.arrow}>↗</span>
          </Link>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {regions.map((region, index) => (
            <Link
              key={region.slug}
              href={`/regions/${region.slug}`}
              className={`${styles.card} ${
                index % 2 === 1 ? styles.offset : ""
              }`}
            >
              
              {/* Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={region.img}
                  alt={region.name}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className={styles.image}
                />
              </div>

              {/* Overlay */}
              <div className={styles.overlay} />

              {/* Content */}
              <div className={styles.content}>
                <p className={styles.places}>{region.places}</p>

                <h1 className={styles.regionName}>{region.name}</h1>

                <p className={styles.description}>{region.desc}</p>

              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionGrid;