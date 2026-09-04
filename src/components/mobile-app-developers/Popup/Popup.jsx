"use client"
import React, { useState, useEffect } from 'react'
import styles from './Popup.module.css'
import { useRouter } from 'next/navigation'

const Popup = ({ isOpen, onClose }) => {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        description: ''
    })

    // Prevent body scroll when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const response = await fetch('/api/lp-mobile-app-developers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    pageUrl: window.location.href,
                    formSource: 'Popup'
                })
            })
            if (response.ok) {
                onClose()
                router.push('/lp/mobile-app-developers/thank-you')
            } else {
                alert('Submission failed. Please try again.')
            }
        } catch (error) {
            console.error('Submission error:', error)
            alert('An error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={`${styles.popupOverlay} ${isOpen ? styles.open : ''}`}>
            <div className={styles.popupContainer}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close popup">×</button>
                
                <div className={styles.leftCol}>
                    <div className={styles.logoBox}>
                        <div className={styles.logoIcon}>📱</div>
                        Appsters
                    </div>
                    
                    <div className={styles.badge}>
                        • RATED #1 · CLUTCH & GOODFIRMS
                    </div>
                    
                    <h2 className={styles.title}>
                        Let's build your <span className={styles.highlight}>app</span> together.
                    </h2>
                    
                    <p className={styles.description}>
                        Tell us your idea and get a free project estimate, technical roadmap and a clear path to launch — no commitment.
                    </p>
                    
                    <ul className={styles.featureList}>
                        <li>
                            <div className={styles.checkIcon}>✓</div>
                            Free project estimate & roadmap
                        </li>
                        <li>
                            <div className={styles.checkIcon}>🔒</div>
                            NDA signed on request
                        </li>
                        <li>
                            <div className={styles.checkIcon}>⏱</div>
                            A real human replies in 4 hours
                        </li>
                        <li>
                            <div className={styles.checkIcon}>🚀</div>
                            Launch in as little as 12 weeks
                        </li>
                    </ul>
                    
                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>3,000+</span>
                            <span className={styles.statLabel}>APPS SHIPPED</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>450+</span>
                            <span className={styles.statLabel}>CLIENTS</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>40+</span>
                            <span className={styles.statLabel}>INDUSTRIES</span>
                        </div>
                    </div>
                </div>
                
                <div className={styles.rightCol}>
                    <h3 className={styles.formTitle}>Start your project today</h3>
                    <p className={styles.formSubtitle}>Free estimate · No commitment · 100% confidential</p>
                    
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>FULL NAME *</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jordan Rivera" className={styles.formInput} required />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>WORK EMAIL *</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jordan@company.com" className={styles.formInput} required />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>PHONE NUMBER *</label>
                            <div className={styles.phoneGroup}>
                                <select className={styles.countrySelect}>
                                    <option>🇺🇸 +1</option>
                                    <option>🇬🇧 +44</option>
                                    <option>🇦🇺 +61</option>
                                </select>
                                <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="555 000 0000" className={`${styles.formInput} ${styles.phoneInput}`} required />
                            </div>
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>WHAT ARE YOU BUILDING? *</label>
                            <select name="service" value={formData.service} onChange={handleChange} className={styles.formInput} required>
                                <option value="" disabled>Select a service...</option>
                                <option value="iOS App">iOS App</option>
                                <option value="Android App">Android App</option>
                                <option value="Cross-Platform App">Cross-Platform App</option>
                            </select>
                        </div>
                        
                        <div className={styles.row}>
                            <div className={`${styles.col} ${styles.formGroup}`}>
                                <label className={styles.formLabel}>ESTIMATED BUDGET *</label>
                                <select name="budget" value={formData.budget} onChange={handleChange} className={styles.formInput} required>
                                    <option value="" disabled>Select a range...</option>
                                    <option value="$3k - $5k">$3k - $5k</option>
                                    <option value="$5k - $10k">$5k - $10k</option>
                                    <option value="$10k - $25k">$10k - $25k</option>
                                    <option value="$25k - $50k">$25k - $50k</option>
                                    <option value="$50k+">$50k+</option>
                                </select>
                            </div>
                            <div className={`${styles.col} ${styles.formGroup}`}>
                                <label className={styles.formLabel}>PROJECT TIMELINE *</label>
                                <select name="timeline" value={formData.timeline} onChange={handleChange} className={styles.formInput} required>
                                    <option value="" disabled>When to start?</option>
                                    <option value="Immediately">Immediately</option>
                                    <option value="1-3 Months">1-3 Months</option>
                                    <option value="3+ Months">3+ Months</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>BRIEF PROJECT DESCRIPTION</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="What's the app idea, who's it for, and what problem does it solve?" className={styles.formInput}></textarea>
                        </div>
                        
                        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Get My Free Estimate'} <span>→</span>
                        </button>
                        
                        <div className={styles.ndaText}>
                            🔒 We sign NDAs before every project discussion. Your idea stays yours.
                        </div>
                    </form>
                    
                    <div className={styles.ratingsRow}>
                        <div className={styles.ratingItem}>
                            <div className={styles.stars}>★★★★★</div>
                            <div className={styles.score}>4.9/5</div>
                            <div className={styles.source}>CLUTCH</div>
                        </div>
                        <div className={styles.ratingItem}>
                            <div className={styles.stars}>★★★★★</div>
                            <div className={styles.score}>4.8/5</div>
                            <div className={styles.source}>GOODFIRMS</div>
                        </div>
                        <div className={styles.ratingItem}>
                            <div className={styles.stars}>★★★★★</div>
                            <div className={styles.score}>1,200+</div>
                            <div className={styles.source}>REVIEWS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
