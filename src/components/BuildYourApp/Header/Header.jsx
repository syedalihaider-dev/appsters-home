import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navWrapper}>
                    <div className={styles.logo}>
                        <Link href="/lp/build-your-app">
                            <Image src="/mobile-app-developers/logo.png" alt="Appsters Logo" width={150} height={40} className={styles.logoImg} />
                        </Link>
                    </div>

                    <button className={styles.mobileToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>

                    <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                        <ul className={styles.navList}>
                            <li><Link href="#services" onClick={() => setIsMenuOpen(false)}>SERVICES</Link></li>
                            <li><Link href="#portfolio" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</Link></li>
                            <li><Link href="#testimonials" onClick={() => setIsMenuOpen(false)}>TESTIMONIALS</Link></li>
                            <li><Link href="#process" onClick={() => setIsMenuOpen(false)}>PROCESS</Link></li>
                            <li><Link href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link></li>
                        </ul>
                        <div className={styles.navAction}>
                            <Link href="#contact" className={styles.ctaBtn} onClick={() => setIsMenuOpen(false)}>
                                Get a Free Estimate
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
