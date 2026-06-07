import React from 'react';
import styles from './LPFooter.module.css';

const LPFooter = () => {
    return (
        <footer className={styles.lpFooter}>
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
                    &copy; 2028 Appsters - appsters.io - Build an app the right way.
                </div>
            </div>
        </footer>
    );
};

export default LPFooter;
