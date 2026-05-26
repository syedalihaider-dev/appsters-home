"use client"
import React, { useState } from 'react'
import styles from './Banner.module.css'
import { useRouter } from 'next/navigation'
import { FaCheck, FaLock, FaArrowRight, FaPhoneAlt, FaStar, FaClock } from 'react-icons/fa'

const Banner = () => {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            router.push('/lp/mobile-app-developers/thank-you')
        }, 1500)
    }

    return (
        <section className={styles.bannerSection}>
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className={styles.contentWrapper}>
                            <div className={styles.badge}>
                                <span className={styles.badgeDot}></span> RATED #1 ON CLUTCH & GOODFIRMS 2026
                            </div>

                            <h1 className={styles.title}>
                                Mobile App <br />
                                Development for <br />
                                <span className={styles.highlight}> iOS, Android </span> <br />
                                & Cross-Platform
                            </h1>

                            <p className={styles.description}>
                                From <strong>MVP to full-scale launch</strong> — we build custom mobile apps that are fast, scalable, and AI-ready. Trusted by <strong>450+ clients</strong> across fintech, healthcare, e-commerce, and 37+ industries.
                            </p>

                            <div className={styles.btnGroup}>
                                <a href="#contact" className={styles.primaryBtn}>
                                    Get a Free Project Estimate <FaArrowRight className={styles.btnIcon} />
                                </a>
                                <a href="tel:+18554422711" className={styles.phoneBtn}>
                                    <FaPhoneAlt className={styles.phoneIcon} /> +1 (855) 442-2711
                                </a>
                            </div>

                            <div className={styles.featuresList}>
                                <span><FaCheck className={styles.featureIcon} /> No commitment required</span>
                                <span><FaClock className={styles.featureIcon} /> Reply within 4 hours</span>
                                <span><FaLock className={styles.featureIcon} /> NDA signed on request</span>
                                <span><FaLock className={styles.featureIcon} /> Launch in as little as 12 weeks</span>
                            </div>

                            <div className={styles.statsCard}>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>3,000+</div>
                                    <div className={styles.statLabel}>APPS DELIVERED</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>40+</div>
                                    <div className={styles.statLabel}>INDUSTRIES</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>450+</div>
                                    <div className={styles.statLabel}>HAPPY CLIENTS</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>12 Wks</div>
                                    <div className={styles.statLabel}>AVG. LAUNCH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.formWrapper} id="contact">
                            <h3>Tell us about your project</h3>
                            <p>Get a free consultation & cost estimate — no strings attached.</p>

                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles.inputGroup}>
                                            <label>FULL NAME</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Smith" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles.inputGroup}>
                                            <label>PHONE NUMBER</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (000) 000-0000" required />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>WORK EMAIL</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane@company.com" required />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>WHAT ARE YOU BUILDING?</label>
                                    <select name="service" value={formData.service} onChange={handleChange} required>
                                        <option value="" disabled>Select a service</option>
                                        <option value="iOS Development">iOS Development</option>
                                        <option value="Android Development">Android Development</option>
                                        <option value="Cross-Platform Development">Cross-Platform Development</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                    </select>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>ESTIMATED BUDGET</label>
                                    <select name="budget" value={formData.budget} onChange={handleChange} required>
                                        <option value="" disabled>Select a range</option>
                                        <option value="$10k - $25k">$10k - $25k</option>
                                        <option value="$25k - $50k">$25k - $50k</option>
                                        <option value="$50k+">$50k+</option>
                                    </select>
                                </div>

                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Get My Free Estimate'} <FaArrowRight className={styles.btnIcon} />
                                </button>

                                <div className={styles.formFooter}>
                                    <FaLock className={styles.footerIcon} /> We sign NDAs to protect your idea. 100% confidential.
                                </div>
                            </form>

                            <div className={styles.trustBadges}>
                                <div className={styles.trustItem}>
                                    <div className={styles.stars}>
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    </div>
                                    <div className={styles.ratingScore}>4.9/5</div>
                                    <div className={styles.ratingSource}>CLUTCH</div>
                                </div>
                                <div className={styles.trustItem}>
                                    <div className={styles.stars}>
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    </div>
                                    <div className={styles.ratingScore}>4.8/5</div>
                                    <div className={styles.ratingSource}>GOODFIRMS</div>
                                </div>
                                <div className={styles.trustItem}>
                                    <div className={styles.stars}>
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    </div>
                                    <div className={styles.ratingScore}>1,200+</div>
                                    <div className={styles.ratingSource}>REVIEWS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
