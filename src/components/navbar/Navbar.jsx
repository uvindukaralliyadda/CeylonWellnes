"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img
            src="/logo.png"
            alt="Logo"
            className={styles.logoImage}
          />
        </Link>

        {/* Mobile Button */}
        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        {/* Menu */}
        <div className={`${styles.menu} ${open ? styles.show : ""}`}>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.active}>Home</Link></li>
            <li><Link href="/about" className={styles.link}>About</Link></li>
            <li><Link href="/treatment" className={styles.link}>Treatments</Link></li>
            <li><Link href="/region" className={styles.link}>Destinations</Link></li>
           <li><button href="/contact" className={styles.libutton}>Contact</button></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;