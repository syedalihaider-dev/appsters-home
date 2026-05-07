"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_top}>
          <div className="row justify-content-between">
            {/* Column 1: Our Company */}
            <div className="col-12 col-md-4 col-lg-2 mb-4 mb-lg-0">
              <div className={styles.footer_menu}>
                <h6 className={styles.heading}>Our Company</h6>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/case-study">Case Study</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 2: Our Services */}
            <div className="col-12 col-md-4 col-lg-2 mb-4 mb-lg-0">
              <div className={styles.footer_menu}>
                <h6 className={styles.heading}>Our Services</h6>
                <ul>
                  <li><Link href="/contact-us">App Development</Link></li>
                  <li><Link href="/contact-us">Game Development</Link></li>
                  <li><Link href="/contact-us">Android App Development</Link></li>
                  <li><Link href="/contact-us">Artificial Intelligence</Link></li>
                  <li><Link href="/contact-us">Augmented Reality</Link></li>
                  <li><Link href="/contact-us">Website Development</Link></li>
                  <li><Link href="/contact-us">App Maintenance</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Technologies */}
            <div className="col-12 col-md-4 col-lg-2 mb-4 mb-lg-0">
              <div className={styles.footer_menu}>
                <h6 className={styles.heading}>Technologies</h6>
                <ul>
                  <li><Link href="/contact-us">Artificial Intelligence</Link></li>
                  <li><Link href="/contact-us">Data Science</Link></li>
                  <li><Link href="/contact-us">Machine Learning</Link></li>
                  <li><Link href="/contact-us">Image Analysis</Link></li>
                  <li><Link href="/contact-us">Blockchain</Link></li>
                  <li><Link href="/contact-us">Big Data</Link></li>
                  <li><Link href="/contact-us">Internet Of Things</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 4: Industries */}
            <div className="col-12 col-md-4 col-lg-2 mb-4 mb-lg-0">
              <div className={styles.footer_menu}>
                <h6 className={styles.heading}>Industries</h6>
                <ul>
                  <li><Link href="/contact-us">Healthcare IT Services</Link></li>
                  <li><Link href="/contact-us">Hospitals & Health Systems</Link></li>
                  <li><Link href="/contact-us">Medical Groups</Link></li>
                  <li><Link href="/contact-us">Medical Devices & Diagnostics</Link></li>
                  <li><Link href="/contact-us">Mental Health Care Providers</Link></li>
                  <li><Link href="/contact-us">Home Healthcare Providers</Link></li>
                  <li><Link href="/contact-us">Medical Laboratories</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 5: Solutions */}
            <div className="col-12 col-md-4 col-lg-2 mb-4 mb-lg-0">
              <div className={styles.footer_menu}>
                <h6 className={styles.heading}>Solutions</h6>
                <ul>
                  <li><Link href="/contact-us">ERP</Link></li>
                  <li><Link href="/contact-us">Operations Management</Link></li>
                  <li><Link href="/contact-us">Supply Chain Management</Link></li>
                  <li><Link href="/contact-us">Warehouse Management</Link></li>
                  <li><Link href="/contact-us">Enterprise Asset Management</Link></li>
                  <li><Link href="/contact-us">Vendor Management</Link></li>
                  <li><Link href="/contact-us">Project Management</Link></li>
                </ul>
              </div>
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
