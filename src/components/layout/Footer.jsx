"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_top}>
          <div className={styles.footerGrid}>
            <div className={`${styles.footer_menu} ${styles.companyMenu}`}>
              <h6 className={styles.heading}>Our Company</h6>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/case-study">Case Studies</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
              </ul>
            </div>

            <div className={`${styles.footer_menu} ${styles.servicesMenu}`}>
              <h6 className={styles.heading}><Link href="/services">Our Services</Link></h6>
              <ul className={styles.linkGrid}>
                <li><Link href="/service/android-app-development-company">Android App Development</Link></li>
                <li><Link href="/service/ios-app-development-company">iOS App Development</Link></li>
                <li><Link href="/service/react-native-app-development-company">React Native App Development</Link></li>
                <li><Link href="/service/cross-platform-app-development-company">Cross-Platform App Development</Link></li>
                <li><Link href="/service/flutter-app-development-company">Flutter App Development</Link></li>
                <li><Link href="/service/mobile-game-development-services">Mobile Game Development</Link></li>
                <li><Link href="/service/hybrid-app-development-company">Hybrid App Development</Link></li>
                <li><Link href="/service/mobile-app-development-company">Mobile App Development</Link></li>
                <li><Link href="/service/ai-app-development-services">AI App Development</Link></li>
                <li><Link href="/service/2d-game-development-services">2D Game Development</Link></li>
                <li><Link href="/service/3d-game-development-services">3D Game Development</Link></li>
                <li><Link href="/service/web3-game-development-company">Web3 Game Development</Link></li>
                <li><Link href="/service/blockchain-game-development-company">Blockchain Game Development</Link></li>
                <li><Link href="/service/nft-game-development-company">NFT Game Development</Link></li>
              </ul>
            </div>

            <div className={`${styles.footer_menu} ${styles.industriesMenu}`}>
              <h6 className={styles.heading}><Link href="/industry">Industries</Link></h6>
              <ul className={styles.linkGrid}>
                <li><Link href="/industry/automotive-software-development">Automotive</Link></li>
                <li><Link href="/industry/education-app-development">Education</Link></li>
                <li><Link href="/industry/taxi-app-development-company">Taxi</Link></li>
                <li><Link href="/industry/logistics-software-development">Logistics</Link></li>
                <li><Link href="/industry/music-app-development-company">Music</Link></li>
                <li><Link href="/industry/social-media-app-development-services">Social Media</Link></li>
                <li><Link href="/industry/restaurant-app-development-company">Restaurant</Link></li>
                <li><Link href="/industry/healthcare-app-development-services">Healthcare</Link></li>
                <li><Link href="/industry/real-estate-app-development">Real Estate</Link></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className={styles.ft_main}>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className={styles.ft_left_group}>
                <ul className={styles.ft_badges}>
                  <li>
                    <Link href="https://clutch.co/profile/appsters" target="_blank">
                      <Image src="/images/ft-clutch.png" alt="Clutch" width={140} height={40} style={{ objectFit: "contain" }} />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.goodfirms.co/company/appsters" target="_blank">
                      <Image src="/images/ft-good-firms.png" alt="Good Firms" width={140} height={40} style={{ objectFit: "contain" }} />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.trustpilot.com/review/appsters.io" target="_blank">
                      <Image src="/images/ft-trustpilot.png" alt="Trustpilot" width={140} height={40} style={{ objectFit: "contain" }} />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.designrush.com/agency/profile/appsters" target="_blank">
                      <Image src="/images/ft-designrush.png" alt="Design Rush" width={140} height={40} style={{ objectFit: "contain" }} />
                    </Link>
                  </li>
                </ul>
                <ul className={styles.ft_social}>
                  <li>
                    <Link href="https://www.facebook.com/appsters1" target="_blank">
                      <Image src="/images/ft-facebook.png" alt="Facebook" width={18} height={18} style={{ objectFit: "contain" }} />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/app-sters/" target="_blank">
                      <Image src="/images/ft-linkedin.png" alt="LinkedIn" width={18} height={18} style={{ objectFit: "contain" }} />
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="https://twitter.com/appsters" target="_blank">
                      <Image src="/images/ft-twitter.png" alt="X" width={18} height={18} style={{ objectFit: "contain" }} />
                    </Link>
                  </li> */}
                  <li>
                    <Link href="https://www.instagram.com/app.sters" target="_blank">
                      <Image src="/images/ft-instagram.png" alt="Instagram" width={18} height={18} style={{ objectFit: "contain" }} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className={styles.ft_right}>
                <div className={styles.ft_content}>
                  <ul className={styles.ft_terms}>
                    <li><Link href="https://www.appsters.io/term-and-condition">Terms of Use</Link></li>
                    <li className={styles.separator}>|</li>
                    <li><Link href="https://www.appsters.io/privacy-policy">Privacy Policy</Link></li>
                  </ul>
                  <p className={styles.para}>Appsters.io © 2026 All rights reserved.</p>
                </div>
                <div className={styles.img}>
                  <Image src="/images/ft-favicon.png" alt="Logo" width={50} height={50} style={{ objectFit: "contain" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
