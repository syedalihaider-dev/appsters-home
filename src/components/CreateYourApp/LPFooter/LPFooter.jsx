"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './LPFooter.module.css';

const LPFooter = () => {
    return (
        <motion.footer
            className={styles.lpFooter}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
        >
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.logoArea}>
                    <div className={styles.iconBox}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0cebed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        </svg>
                    </div>
                    <span className={styles.logoText}>App<span className={styles.logoCyan}>sters</span></span>
                </div>
                <div className={styles.copyText}>
                    &copy; 2026 Appsters - appsters.io - Create an app the right way.
                </div>
            </div>
        </motion.footer>
    );
};

export default LPFooter;
