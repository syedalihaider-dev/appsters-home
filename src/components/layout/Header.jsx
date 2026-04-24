"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "SOFTWARE DEVELOPMENT", desc: "Custom software solutions to improve efficiency and scale your business." },
    { title: "MVP DEVELOPMENT", desc: "Launch faster with a lean, functional MVP built to validate your idea and attract early users." },
    { title: "AI DEVELOPMENT", desc: "Build intelligent AI solutions to automate, optimize, and scale your business." },
    { title: "WEB DEVELOPMENT", desc: "Build fast, scalable, and responsive websites for modern businesses." },
    { title: "MOBILE DEVELOPMENT", desc: "Create high-performance mobile apps for seamless user experiences." },
    { title: "DESKTOP DEVELOPMENT", desc: "Build powerful desktop applications for efficient business operations." },
    { title: "API DEVELOPMENT", desc: "Build secure and scalable APIs for seamless system integration." },
    { title: "DATABASE DEVELOPMENT", desc: "Design robust databases for secure, scalable, and efficient data management." },
    { title: "SOFTWARE MODERNIZATION", desc: "Upgrade legacy software for better performance, security, and scalability." },
    { title: "IT STAFF AUGMENTATION", desc: "Provide skilled IT professionals to scale your team on demand." },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.capsule}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/images/logo.png" alt="Appsters Logo" width={224} height={52} style={{ objectFit: "contain" }} />
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>HOME</Link>
            <Link href="/about" className={styles.navLink}>ABOUT</Link>

            <div className={styles.dropdown} onMouseEnter={() => setActiveMenu('services')} onMouseLeave={() => setActiveMenu(null)}>
              <span className={styles.navLink}>SERVICES <i className={styles.arrow}></i></span>
              <div className={`${styles.megaMenu} ${activeMenu === 'services' ? styles.show : ''}`}>
                <div className="container d-flex flex-wrap">
                  <div className={styles.megaLeft}>
                    <h2>Services Recognized by IAOP</h2>
                    <p>Trusted by CTOs, valued by users, and built for AI scalability. Appsters deliver mobile apps that your business needs today & tomorrow.</p>
                    <div className={styles.iaopLogo}>
                      <Image src="/images/iaop-logo.png" alt="IAOP Logo" width={500} height={215} style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  <div className={styles.megaRight}>
                    <div className={styles.servicesGrid}>
                      {services.map((service, index) => (
                        <Link href="#!" key={index} className={styles.serviceItem}>
                          <h4>{service.title}</h4>
                          <p>{service.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="#!" className={styles.navLink}>INDUSTRIES <i className={styles.arrow}></i></Link>
            <Link href="#!" className={styles.navLink}>TECHNOLOGIES <i className={styles.arrow}></i></Link>
            <Link href="#!" className={styles.navLink}>PORTFOLIO <i className={styles.arrow}></i></Link>
            <Link href="#!" className={styles.navLink}>SOLUTIONS <i className={styles.arrow}></i></Link>
            <Link href="/contact" className={styles.navLink}>CONTACT US</Link>
          </nav>

          <div className={styles.headerBtn}>
            <Link href="#!" className={styles.talkBtn}>
              <span className={styles.dot}></span> Let's Talk! ↗
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

