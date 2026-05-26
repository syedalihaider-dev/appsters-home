import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerContent}>
                    <div className={styles.logo}>
                        Appsters
                    </div>

                    <ul className={styles.footerLinks}>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>

                    <div className={styles.copyright}>
                        © 2026 Appsters. All rights reserved.
                    </div>
                </div>
            </Container>
            <div className={styles.glowEffect}></div>
        </footer>
    )
}

export default Footer
