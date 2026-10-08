"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Banner.module.css'
import { useRouter } from 'next/navigation'
import { FaCheck, FaLock, FaArrowRight, FaPhoneAlt, FaStar, FaFileAlt, FaUser, FaEnvelope, FaCube, FaCalendarAlt, FaDollarSign } from 'react-icons/fa'

const Banner = () => {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', countryCode: '+1', phone: '', service: '', budget: '', timeline: '', description: '' })
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    const handleSubmit = async (e) => {
        e.preventDefault(); setIsSubmitting(true)
        try {
            const response = await fetch('/api/lp-mobile-app-developers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, phone: `${formData.countryCode} ${formData.phone}`.trim(), pageUrl: window.location.href }) })
            if (response.ok) router.push('/lp/mobile-app-developers/thank-you')
            else alert('Submission failed. Please try again.')
        } catch (error) { console.error('Submission error:', error); alert('An error occurred. Please try again.') }
        finally { setIsSubmitting(false) }
    }
    return <section className={styles.bannerSection}>
        <div className={styles.gridBg} />
        <div className={styles.heroLayout}>
            <div className={styles.contentWrapper}>
                <div className={styles.badge}><span>★</span> TOP-RATED ON CLUTCH &amp; GOODFIRMS</div>
                <h1 className={styles.title}>Mobile App Development for <span className={styles.highlight}>iOS, Android</span> &amp; <span className={styles.highlight}>AI-Powered</span> Products</h1>
                <p className={styles.description}>From MVP to full-scale launch, we build custom mobile apps that are fast, scalable, and built for growth. Trusted by <strong>450+ clients</strong> across fintech, healthcare, ecommerce, SaaS, and AI-driven products.</p>
                <div className={styles.btnGroup}><a href="#contact" className={styles.primaryBtn}>Get a Free Project Estimate <FaArrowRight /></a><a href="tel:+18554422711" className={styles.phoneBtn}><FaPhoneAlt /> Book a Strategy Call</a></div>
                <div className={styles.featuresList}><span><FaCheck /> No commitment required</span><span><FaBolt /> Reply within 4 hours</span><span><FaLock /> NDA on request</span><span><FaCalendarAlt /> Launch in as little as 12 weeks</span></div>
            </div>
            <div className={styles.visual}><Image src="/mobile-app-developers/banner-mobile.png" alt="Mobile app screens showing AI, fintech, healthcare and ecommerce products" fill priority sizes="(max-width: 760px) 88vw, 31vw" /></div>
            <div className={styles.formWrapper} id="contact">
                <div className={styles.formHeading}><span className={styles.formIcon}><FaFileAlt /></span><div><h2>Tell us about your project</h2><p>Get a free consultation, ballpark budget, and product roadmap.</p></div></div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.fieldGrid}>
                        <div className={styles.inputGroup}><label>Full name *</label><div className={styles.inputWithIcon}><FaUser /><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" autoComplete="name" required /></div></div>
                        <div className={styles.inputGroup}><label>Phone number *</label><div className={`${styles.inputWithIcon} ${styles.phoneGroup}`}><FaPhoneAlt /><select name="countryCode" value={formData.countryCode} onChange={handleChange} aria-label="Country calling code"><option value="+1">US (+1)</option><option value="+44">UK (+44)</option><option value="+61">AU (+61)</option></select><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="555 000 0000" autoComplete="tel-national" inputMode="tel" required /></div></div>
                    </div>
                    <div className={styles.inputGroup}><label>Work email *</label><div className={styles.inputWithIcon}><FaEnvelope /><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" autoComplete="email" required /></div></div>
                    <div className={styles.inputGroup}><label>What are you building? *</label><div className={styles.inputWithIcon}><FaCube /><select name="service" value={formData.service} onChange={handleChange} required><option value="" disabled>Select a service</option><option value="iOS App">iOS App</option><option value="Android App">Android App</option><option value="Cross-Platform App">Cross-Platform App</option><option value="AI-powered app">AI-powered app</option><option value="Other">Other</option></select></div></div>
                    <div className={styles.fieldGrid}><div className={styles.inputGroup}><label>Estimated budget *</label><div className={styles.inputWithIcon}><FaDollarSign /><select name="budget" value={formData.budget} onChange={handleChange} required><option value="" disabled>Select a range</option><option value="$3k - $5k">$3k - $5k</option><option value="$5k - $10k">$5k - $10k</option><option value="$10k - $25k">$10k - $25k</option><option value="$25k - $50k">$25k - $50k</option><option value="$50k+">$50k+</option></select></div></div><div className={styles.inputGroup}><label>Project timeline *</label><div className={styles.inputWithIcon}><FaCalendarAlt /><select name="timeline" value={formData.timeline} onChange={handleChange} required><option value="" disabled>When do you want to start?</option><option value="Immediately">Immediately</option><option value="1-3 Months">1-3 Months</option><option value="3+ Months">3+ Months</option></select></div></div></div>
                    <div className={styles.inputGroup}><label>Brief project description *</label><div className={`${styles.inputWithIcon} ${styles.textareaWrap}`}><FaFileAlt /><textarea name="description" rows="2" value={formData.description} onChange={handleChange} placeholder="Tell us about your app idea — what it does, who it's for, and key features..." required /></div></div>
                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Get My Free Estimate'} <FaArrowRight /></button>
                    <div className={styles.formFooter}><FaLock /> We sign NDAs to protect your idea. 100% confidential.</div>
                </form>
                <div className={styles.trustBadges}>{[['4.9/5','CLUTCH'],['4.8/5','GOODFIRMS'],['1,200+','REVIEWS']].map(([score,label])=><div className={styles.trustItem} key={label}><div className={styles.stars}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div><strong>{score}</strong><span>{label}</span></div>)}</div>
            </div>
            <div className={styles.statsCard}><div><b>▯</b><span><strong>3,000+</strong>Apps Delivered</span></div><div><b>◎</b><span><strong>40+</strong>Industries</span></div><div><b>♧</b><span><strong>450+</strong>Happy Clients</span></div><div><b>↗</b><span><strong>12 Weeks</strong>Avg. Launch</span></div></div>
        </div>
    </section>
}

function FaBolt() { return <span aria-hidden="true">ϟ</span> }
export default Banner
