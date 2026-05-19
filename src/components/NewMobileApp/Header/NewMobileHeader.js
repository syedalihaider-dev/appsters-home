import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from "./Header.module.css";

const NewMobileHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between py-3">
                        {/* Logo */}
                        <div className={styles.logoWrapper}>
                            <Link href="/lp/mobile-app-development-services">
                                <Image 
                                    alt="Appsters" 
                                    src="/newmobileapp/logo.png" 
                                    width={180} 
                                    height={40} 
                                    className="img-fluid" 
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Nav Pill (Desktop Only) */}
                        <div className={`${styles.navPill} d-none d-lg-flex align-items-center`}>
                            <ul className="d-flex align-items-center list-unstyled mb-0 gap-4">
                                <li><a href="#services" className={styles.navLink}>Services</a></li>
                                <li><a href="#portfolio" className={styles.navLink}>Portfolio</a></li>
                                <li><a href="#testimonial" className={styles.navLink}>Testimonial</a></li>
                                <li><a href="#process" className={styles.navLink}>Process</a></li>
                                <li><a href="#contact" className={styles.navLink}>Contact</a></li>
                            </ul>
                            <a href="#contact" className={`${styles.connectBtn} ms-4`}>
                                Connect Now
                            </a>
                        </div>

                        {/* Mobile Hamburger Menu Toggle */}
                        <button className={`${styles.menuToggle} d-lg-none ${isOpen ? styles.toggleOpen : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Sidebar Navigation */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
                    <ul className="list-unstyled mb-0 text-center py-5">
                        <li className="my-4"><a href="#services" className={styles.mobileLink} onClick={toggleMenu}>Services</a></li>
                        <li className="my-4"><a href="#casestudies" className={styles.mobileLink} onClick={toggleMenu}>Portfolio</a></li>
                        <li className="my-4"><a href="#testimonials" className={styles.mobileLink} onClick={toggleMenu}>Testimonial</a></li>
                        <li className="my-4"><a href="#process" className={styles.mobileLink} onClick={toggleMenu}>Process</a></li>
                        <li className="my-4"><a href="#contact" className={styles.mobileLink} onClick={toggleMenu}>Contact</a></li>
                        <li className="mt-5">
                            <a href="#contact" className={styles.mobileConnectBtn} onClick={toggleMenu}>
                                Connect Now
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Overlay Background */}
                <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`} onClick={toggleMenu} />
            </header>
        </>
    );
};

export default NewMobileHeader;
