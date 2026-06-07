import React from 'react';
import styles from './CTASection.module.css';

const CTASection = () => {
    return (
        <section className={styles.ctaSection}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    {/* Left Column: Information */}
                    <div className={styles.infoColumn}>
                        <div className={styles.subtitle}>
                            <span className={styles.dot}></span>
                            FREE 30-MINUTE STRATEGY CALL
                        </div>
                        <h2 className={styles.title}>
                            Ready to Turn Your <br />
                            <span className={styles.glowCyan}>App Idea</span> Into <br />
                            Reality?
                        </h2>
                        <p className={styles.description}>
                            Book a free 30-minute strategy call with our experts. Walk away with a clear scope, a realistic timeline, and an honest estimate — no pressure.
                        </p>
                        
                        <ul className={styles.featuresList}>
                            <li>
                                <div className={styles.iconWrapper}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0cebed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                A free roadmap & ballpark estimate
                            </li>
                            <li>
                                <div className={styles.iconWrapper}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0cebed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                </div>
                                NDA signed on request — your idea stays yours
                            </li>
                            <li>
                                <div className={styles.iconWrapper}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0cebed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                A real expert replies within 4 hours
                            </li>
                        </ul>
                    </div>

                    {/* Right Column: Form */}
                    <div className={styles.formColumn}>
                        <div className={styles.formCard}>
                            <form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">NAME <span className={styles.asterisk}>*</span></label>
                                    <input type="text" id="name" placeholder="Jordan Rivera" required />
                                </div>
                                
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">EMAIL <span className={styles.asterisk}>*</span></label>
                                    <input type="email" id="email" placeholder="jordan@company.com" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="idea">YOUR APP IDEA <span className={styles.asterisk}>*</span></label>
                                    <textarea id="idea" rows="4" placeholder="What do you want to build, and who is it for?" required></textarea>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="budget">BUDGET RANGE <span className={styles.asterisk}>*</span></label>
                                    <div className={styles.selectWrapper}>
                                        <select id="budget" required defaultValue="">
                                            <option value="" disabled>Select a range...</option>
                                            <option value="10k-25k">$10k - $25k</option>
                                            <option value="25k-50k">$25k - $50k</option>
                                            <option value="50k-100k">$50k - $100k</option>
                                            <option value="100k+">$100k+</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    Schedule My Free Consultation <span className={styles.arrow}>→</span>
                                </button>
                                
                                <div className={styles.secureText}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    100% confidential. No spam, ever.
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
