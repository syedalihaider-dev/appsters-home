"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const industryLinks = [
    { name: "Automotive", href: "/industry/automotive-software-development" },
    { name: "Education", href: "/industry/education-app-development" },
    { name: "Taxi", href: "/industry/taxi-app-development-company" },
    { name: "Logistics", href: "/industry/logistics-software-development" },
    { name: "Music", href: "/industry/music-app-development-company" },
    { name: "Social Media", href: "/industry/social-media-app-development-services" },
    { name: "Restaurant", href: "/industry/restaurant-app-development-company" },
    { name: "Healthcare", href: "/industry/healthcare-app-development-services" },
    { name: "Real Estate", href: "/industry/real-estate-app-development" },
  ];

  const serviceGroups = [
    {
      title: "Mobile App Development",
      items: [
        { name: "Android App Development", href: "/service/android-app-development-company" },
        { name: "iOS App Development", href: "/service/ios-app-development-company" },
        { name: "React Native Development", href: "/service/react-native-app-development-company" },
        { name: "Cross-Platform App Development", href: "/service/cross-platform-app-development-company" },
        { name: "Flutter App Development", href: "/service/flutter-app-development-company" },
        { name: "Hybrid App Development", href: "/service/hybrid-app-development-company" },
        { name: "Mobile App Development", href: "/service/mobile-app-development-company" },
      ],
    },
    {
      title: "Game Development",
      items: [
        { name: "Mobile Game Development", href: "/service/mobile-game-development-services" },
        { name: "2D Game Development", href: "/service/2d-game-development-services" },
        { name: "3D Game Development", href: "/service/3d-game-development-services" },
        { name: "Web3 Game Development", href: "/service/web3-game-development-company" },
        { name: "Blockchain Game Development", href: "/service/blockchain-game-development-company" },
        { name: "NFT Game Development", href: "/service/nft-game-development-company" },
      ],
    },
    {
      title: "Emerging Technology",
      items: [
        { name: "AI App Development", href: "/service/ai-app-development-services" },
      ],
    },
  ];

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // const services = [
  //   { title: "SOFTWARE DEVELOPMENT", desc: "Custom software solutions to improve efficiency and scale your business." },
  //   { title: "MVP DEVELOPMENT", desc: "Launch faster with a lean, functional MVP built to validate your idea and attract early users." },
  //   { title: "AI DEVELOPMENT", desc: "Build intelligent AI solutions to automate, optimize, and scale your business." },
  //   { title: "WEB DEVELOPMENT", desc: "Build fast, scalable, and responsive websites for modern businesses." },
  //   { title: "MOBILE DEVELOPMENT", desc: "Create high-performance mobile apps for seamless user experiences." },
  //   { title: "DESKTOP DEVELOPMENT", desc: "Build powerful desktop applications for efficient business operations." },
  //   { title: "API DEVELOPMENT", desc: "Build secure and scalable APIs for seamless system integration." },
  //   { title: "DATABASE DEVELOPMENT", desc: "Design robust databases for secure, scalable, and efficient data management." },
  //   { title: "SOFTWARE MODERNIZATION", desc: "Upgrade legacy software for better performance, security, and scalability." },
  //   { title: "IT STAFF AUGMENTATION", desc: "Provide skilled IT professionals to scale your team on demand." },
  // ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.capsule}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/images/logo.png" alt="Appsters Logo" width={224} height={52} style={{ objectFit: "contain" }} />
            </Link>
          </div>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ""}`}>
            <button className={styles.closeMenuBtn} type="button" onClick={() => { setIsMobileMenuOpen(false); setActiveMenu(null); }} aria-label="Close navigation">×</button>
            <Link href="/" className={styles.navLink} onClick={() => { setIsMobileMenuOpen(false); setActiveMenu(null); }}>HOME</Link>
            <Link href="/about-us" className={styles.navLink} onClick={() => { setIsMobileMenuOpen(false); setActiveMenu(null); }}>ABOUT</Link>

            <div className={styles.dropdown} onMouseEnter={() => !isMobileMenuOpen && setActiveMenu("industry")} onMouseLeave={() => !isMobileMenuOpen && setActiveMenu(null)}>
              <button type="button" className={`${styles.navLink} ${styles.dropdownTrigger} ${activeMenu === "industry" ? styles.activeNavLink : ""}`} aria-expanded={activeMenu === "industry"} aria-controls="industry-menu" onClick={() => setActiveMenu(isMobileMenuOpen && activeMenu === "industry" ? null : "industry")}>
                INDUSTRIES <i className={`${styles.arrow} ${activeMenu === "industry" ? styles.arrowUp : ""}`}></i>
              </button>
              <div id="industry-menu" className={`${styles.industryMegaMenu} ${activeMenu === "industry" ? styles.showMenu : ""} ${activeMenu === "industry" && isMobileMenuOpen ? styles.mobileShowMenu : ""}`}>
                <div className={styles.industryMenuInner}>
                  <div className={styles.menuHeadingRow}>
                    <div><span className={styles.menuEyebrow}>WHO WE SERVE</span><p className={styles.menuTitle}>Industries</p></div>
                    <Link href="/industry" className={styles.menuViewAll} onClick={() => { setIsMobileMenuOpen(false); setActiveMenu(null); }}>Explore all industries <span aria-hidden="true">↗</span></Link>
                  </div>
                  <div className={styles.industryColumnsGrid}>
                    {industryLinks.map((item) => (
                      <Link key={item.href} href={item.href} className={styles.industryLink} onClick={() => { setIsMobileMenuOpen(false); setActiveMenu(null); }}>
                        <span className={styles.menuLinkMark} aria-hidden="true">↗</span>{item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.dropdown} onMouseEnter={() => !isMobileMenuOpen && setActiveMenu("services")} onMouseLeave={() => !isMobileMenuOpen && setActiveMenu(null)}>
              <button type="button" className={`${styles.navLink} ${styles.dropdownTrigger} ${activeMenu === "services" ? styles.activeNavLink : ""}`} aria-expanded={activeMenu === "services"} aria-controls="services-menu" onClick={() => setActiveMenu(isMobileMenuOpen && activeMenu === "services" ? null : "services")}>
                SERVICES <i className={`${styles.arrow} ${activeMenu === "services" ? styles.arrowUp : ""}`}></i>
              </button>
              <div id="services-menu" className={`${styles.industryMegaMenu} ${styles.servicesMegaMenu} ${activeMenu === "services" ? styles.showMenu : ""} ${activeMenu === "services" && isMobileMenuOpen ? styles.mobileShowMenu : ""}`}>
                <div className={styles.industryMenuInner}>
                  <div className={styles.menuHeadingRow}>
                    <div><span className={styles.menuEyebrow}>WHAT WE DO</span><p className={styles.menuTitle}>Our Services</p></div>
                    <Link href="/services" className={styles.menuViewAll} onClick={() => { setIsMobileMenuOpen(false); setActiveMenu(null); }}>Explore all services <span aria-hidden="true">↗</span></Link>
                  </div>
                  <div className={styles.serviceGroupGrid}>
                    {serviceGroups.map((group) => (
                      <section key={group.title} className={styles.serviceGroup}>
                        <h3>{group.title}</h3>
                        <div className={styles.serviceGroupLinks}>
                          {group.items.map((item) => (
                            <Link key={item.href} href={item.href} className={styles.serviceMenuLink} onClick={() => { setIsMobileMenuOpen(false); setActiveMenu(null); }}>
                              <span className={styles.menuLinkMark} aria-hidden="true">↗</span>{item.name}
                            </Link>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link href="/case-study" className={styles.navLink} onClick={() => { setIsMobileMenuOpen(false); setActiveMenu(null); }}>CASE STUDIES</Link>
            <Link href="/contact-us" className={styles.navLink} onClick={() => { setIsMobileMenuOpen(false); setActiveMenu(null); }}>CONTACT</Link>
            {/* <Link href="/location" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>LOCATION</Link> */}
          </nav>

          <div className={styles.headerRight}>
            <div className={styles.headerBtn}>
              <Link href="/contact-us" className={styles.talkBtn}>
                <span className={styles.dot}></span> Let&apos;s Talk! ↗
              </Link>
            </div>

            <button
              className={styles.mobileMenuToggle}
              type="button"
              onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setActiveMenu(null); }}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

