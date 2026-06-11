"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './Popup.module.css';
import { OPEN_ESTIMATE_EVENT } from '../_shared/popup';

const EMPTY = { name: '', email: '', phone: '', service: '', budget: '', idea: '' };

const Popup = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState(EMPTY);

    const close = useCallback(() => setOpen(false), []);

    // Listen for global "open popup" events dispatched by CTA buttons
    useEffect(() => {
        const onOpen = () => setOpen(true);
        window.addEventListener(OPEN_ESTIMATE_EVENT, onOpen);
        return () => window.removeEventListener(OPEN_ESTIMATE_EVENT, onOpen);
    }, []);

    // Esc to close + lock body scroll while open
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === 'Escape') close(); };
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [open, close]);

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
                body: JSON.stringify({ ...formData, pageUrl: window.location.href })
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
        <AnimatePresence>
            {open && (
                <motion.div
                    className={styles.overlay}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="estimate-popup-title"
                    onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <button className={styles.close} onClick={close} aria-label="Close">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className={styles.eyebrow}>
                            <span className={styles.dot}></span>
                            FREE ESTIMATE · NO COMMITMENT
                        </div>
                        <h3 className={styles.title} id="estimate-popup-title">
                            Let&apos;s build your <span className={styles.accent}>app.</span>
                        </h3>
                        <p className={styles.sub}>
                            Tell us about your project — a senior developer replies within 4 hours with a free estimate &amp; roadmap.
                        </p>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Work email" required />

                            <div className={`${styles.phone} ${styles.full}`}>
                                <div className={styles.phoneCode}><span>🇺🇸</span><span>+1</span></div>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" required />
                            </div>

                            <div className={styles.select}>
                                <select name="service" value={formData.service} onChange={handleChange} required className={formData.service ? styles.filled : ''}>
                                    <option value="" disabled>Service needed</option>
                                    <option value="iOS App">iOS App</option>
                                    <option value="Android App">Android App</option>
                                    <option value="Cross-platform App">Cross-platform App</option>
                                    <option value="Web App">Web App</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="MVP Development">MVP Development</option>
                                    <option value="Not sure yet">Not sure yet</option>
                                </select>
                            </div>
                            <div className={styles.select}>
                                <select name="budget" value={formData.budget} onChange={handleChange} required className={formData.budget ? styles.filled : ''}>
                                    <option value="" disabled>Budget range</option>
                                    <option value="10k-25k">$10k - $25k</option>
                                    <option value="25k-50k">$25k - $50k</option>
                                    <option value="50k-100k">$50k - $100k</option>
                                    <option value="100k+">$100k+</option>
                                </select>
                            </div>

                            <textarea className={styles.full} name="idea" value={formData.idea} onChange={handleChange} placeholder="Briefly describe your app idea (optional)"></textarea>

                            <button type="submit" className={styles.submit} disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Get My Free Estimate'} <span className={styles.arrow}>→</span>
                            </button>

                            <div className={styles.foot}>
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                                    <path d="M9.5 5H2.5C1.67 5 1 5.67 1 6.5V11.5C1 12.33 1.67 13 2.5 13H9.5C10.33 13 11 12.33 11 11.5V6.5C11 5.67 10.33 5 9.5 5Z" stroke="#5a5a5a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.5 5V3.5C3.5 2.84 3.76 2.2 4.23 1.73C4.7 1.26 5.34 1 6 1C6.66 1 7.3 1.26 7.77 1.73C8.24 2.2 8.5 2.84 8.5 3.5V5" stroke="#5a5a5a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                We sign NDAs before every discussion. Your idea stays yours.
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Popup;
