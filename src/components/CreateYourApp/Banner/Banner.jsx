"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Banner.module.css';
import { mountStaggerContainer, staggerItem, mountScaleIn } from '../_shared/motion';
import { openEstimatePopup } from '../_shared/popup';

const Banner = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        idea: '',
        budget: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/lp-create-your-app', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    pageUrl: window.location.href
                })
            });
            if (response.ok) {
                router.push('/lp/create-your-app/thank-you');
            } else {
                alert('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.banner} id="top">
            <div className={`${styles.glow} ${styles.glowOne}`} aria-hidden="true"></div>
            <div className={`${styles.glow} ${styles.glowTwo}`} aria-hidden="true"></div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <motion.div className={styles.content} {...mountStaggerContainer(0.12, 0.1)}>
                            <motion.div className={styles.subtitle} variants={staggerItem('up')}>
                                <span className={styles.dot}></span>
                                CREATE AN APP · WITHOUT THE GUESSWORK
                            </motion.div>

                            <motion.h1 className={styles.title} variants={staggerItem('up')}>
                                Want to Create an App? Here&apos;s Why
                                <span className={styles.gradientText}> 90% Choose Professional Development Over DIY</span>
                            </motion.h1>

                            <motion.p className={styles.description} variants={staggerItem('up')}>
                                Save months of frustration. Get a custom, production-ready app built by experts — engineered to scale, designed to convert, and shipped on time.
                            </motion.p>

                            <motion.div className={styles.buttonGroup} variants={staggerItem('up')}>
                                <button type="button" className={styles.primaryBtn} onClick={openEstimatePopup}>
                                    Get Your Free Consultation <span className={styles.arrow}>→</span>
                                </button>
                                <Link href="#portfolio" className={styles.secondaryBtn}>
                                    See Success Stories
                                </Link>
                            </motion.div>

                            <motion.div className={styles.badgesWrapper} variants={staggerItem('up')}>
                                <div className={`${styles.badge} ${styles.badgeCyan}`}>
                                    <span className={styles.badgeNumber}>10+</span>
                                    <span className={styles.badgeText}>Years in<br />business</span>
                                </div>
                                <div className={`${styles.badge} ${styles.badgePurple}`}>
                                    <span className={styles.badgeNumber}>3,000+</span>
                                    <span className={styles.badgeText}>Apps<br />built</span>
                                </div>
                                <div className={`${styles.badge} ${styles.badgePink}`}>
                                    <span className={styles.badgeNumber}>450+</span>
                                    <span className={styles.badgeText}>Happy<br />clients</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <motion.div className={styles.formCard} {...mountScaleIn(0.15)}>
                            <div className={styles.formHeader}>
                                <span className={styles.dot}></span>
                                FREE ESTIMATE
                            </div>
                            <h3 className={styles.formTitle}>Tell us about your project</h3>
                            <p className={styles.formDesc}>
                                Get a free consultation &amp; cost estimate — no strings attached.
                            </p>

                            <form className={styles.estimateForm} onSubmit={handleSubmit}>
                                <div className={styles.inputGroup}>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Work email" required />
                                </div>

                                <div className={styles.phoneGroup}>
                                    <div className={styles.countryCode}>
                                        <span className={styles.flag}>🇺🇸</span>
                                        <span>+1</span>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" required className={styles.phoneInput} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <select name="idea" value={formData.idea} onChange={handleChange} required className={`${styles.selectInput} ${formData.idea ? styles.selectFilled : ''}`}>
                                        <option value="" disabled>What are you building?</option>
                                        <option value="iOS App">iOS App</option>
                                        <option value="Android App">Android App</option>
                                        <option value="Cross-platform App">Cross-platform App</option>
                                    </select>
                                    <div className={styles.selectArrow}>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <select name="budget" value={formData.budget} onChange={handleChange} required className={`${styles.selectInput} ${formData.budget ? styles.selectFilled : ''}`}>
                                        <option value="" disabled>Estimated budget</option>
                                        <option value="10k-25k">$10k - $25k</option>
                                        <option value="25k-50k">$25k - $50k</option>
                                        <option value="50k+">$50k+</option>
                                    </select>
                                    <div className={styles.selectArrow}>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Get My Free Estimate'} <span className={styles.arrow}>→</span>
                                </button>

                                <div className={styles.formFooter}>
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.lockIcon}>
                                        <path d="M9.5 5H2.5C1.67157 5 1 5.67157 1 6.5V11.5C1 12.3284 1.67157 13 2.5 13H9.5C10.3284 13 11 12.3284 11 11.5V6.5C11 5.67157 10.3284 5 9.5 5Z" stroke="#0cebed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.5 5V3.5C3.5 2.83696 3.76339 2.20107 4.23223 1.73223C4.70107 1.26339 5.33696 1 6 1C6.66304 1 7.29893 1.26339 7.76777 1.73223C8.23661 2.20107 8.5 2.83696 8.5 3.5V5" stroke="#0cebed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    We sign NDAs. 100% confidential.
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
