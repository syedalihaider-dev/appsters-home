"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './Header.module.css'
import { openEstimatePopup } from '../_shared/popup'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.header
            className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container">
                <div className={styles.navWrapper}>
                    <div className={styles.logo}>
                        <Link href="/lp/create-your-app">
                            <Image src="/mobile-app-developers/logo.png" alt="Appsters Logo" width={150} height={40} className={styles.logoImg} priority />
                        </Link>
                    </div>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                        aria-expanded={isMenuOpen}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>

                    <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                        <ul className={styles.navList}>
                            <li><Link href="#why" onClick={() => setIsMenuOpen(false)}>WHY DIY</Link></li>
                            <li><Link href="#portfolio" onClick={() => setIsMenuOpen(false)}>CASE STUDIES</Link></li>
                            <li><Link href="#whyus" onClick={() => setIsMenuOpen(false)}>WHY US</Link></li>
                            <li><Link href="#process" onClick={() => setIsMenuOpen(false)}>PROCESS</Link></li>
                            <li><Link href="#results" onClick={() => setIsMenuOpen(false)}>RESULTS</Link></li>
                        </ul>
                        <div className={styles.navAction}>
                            <button
                                type="button"
                                className={styles.ctaBtn}
                                onClick={() => { setIsMenuOpen(false); openEstimatePopup(); }}
                            >
                                Free Consultation
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
