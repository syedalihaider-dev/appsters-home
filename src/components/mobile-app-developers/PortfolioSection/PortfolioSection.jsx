import React from 'react'
import styles from './PortfolioSection.module.css'
import { FaStar, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const smallCaseStudies = [
    {
        icon: "🏥",
        title: "Telemedicine Platform — 400K Patients Onboarded",
        description: "HIPAA-compliant telehealth app with video consultations, e-prescriptions, and insurance billing integration.",
        stats: [
            { value: "400K", label: "Patients" },
            { value: "4.9⭐", label: "App Store" },
            { value: "10 Wks", label: "To Launch" }
        ],
        gradient: "radial-gradient(circle at 50% 0%, rgba(26,58,40,0.5) 0%, #111111 70%)"
    },
    {
        icon: "🛒",
        title: "E-Commerce App — 3x Revenue Increase in 90 Days",
        description: "Mobile-first shopping app with AI product recommendations, one-tap checkout, and loyalty rewards engine.",
        stats: [
            { value: "3x", label: "Revenue lift" },
            { value: "68%", label: "Cart conversion" },
            { value: "12 Wks", label: "To Launch" }
        ],
        gradient: "radial-gradient(circle at 50% 0%, rgba(20,45,80,0.5) 0%, #111111 70%)"
    },
    {
        icon: "🍔",
        title: "Food Delivery App — 1.2M Orders in First Year",
        description: "On-demand delivery platform with live GPS tracking, multi-vendor management, and automated driver dispatch.",
        stats: [
            { value: "1.2M", label: "Orders" },
            { value: "4.8⭐", label: "Google Play" },
            { value: "8 Wks", label: "To MVP" }
        ],
        gradient: "radial-gradient(circle at 50% 0%, rgba(80,45,20,0.5) 0%, #111111 70%)"
    }
]

const industryTags = [
    "Fintech", "Healthcare", "E-Commerce", "Food Delivery", "Real Estate", 
    "EdTech", "Logistics", "Travel", "SaaS", "Gaming", "+31 more"
]

const PortfolioSection = () => {
    return (
        <section className={styles.portfolioSection} id="portfolio">
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span> OUR WORK
                        </div>
                        <h2 className={styles.mainTitle}>
                            Apps That Drive <br />
                            <span className={styles.highlight}>Real Business<br/>Results</span>
                        </h2>
                        <p className={styles.mainDesc}>
                            We measure success in growth metrics, not just downloads. Here's what we've built for clients who trusted us with their most important product.
                        </p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <div className={styles.featuredCard}>
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className={styles.featuredContent}>
                                        <div className={styles.featuredBadge}>
                                            <FaStar className={styles.starIcon} /> FEATURED CASE STUDY — FINTECH
                                        </div>
                                        <h3 className={styles.featuredTitle}>
                                            Digital Wallet App That Processed $2.4B in Year One
                                        </h3>
                                        <p className={styles.featuredDesc}>
                                            A leading US fintech startup needed a secure, scalable mobile payment platform built from scratch — with biometric auth, real-time transfers, and multi-currency support — in under 14 weeks.
                                        </p>
                                        
                                        <div className={styles.statsRow}>
                                            <div className={styles.statItem}>
                                                <div className={styles.statValue}>$2.4B</div>
                                                <div className={styles.statLabel}>Transactions processed</div>
                                            </div>
                                            <div className={styles.statItem}>
                                                <div className={styles.statValue}>2.1M</div>
                                                <div className={styles.statLabel}>Active users in 6 months</div>
                                            </div>
                                            <div className={styles.statItem}>
                                                <div className={styles.statValue}>14 Wks</div>
                                                <div className={styles.statLabel}>MVP to App Store launch</div>
                                            </div>
                                        </div>

                                        <div className={styles.tagsRow}>
                                            <span className={styles.tag}>iOS & Android</span>
                                            <span className={styles.tag}>React Native</span>
                                            <span className={styles.tag}>PCI-DSS Compliant</span>
                                            <span className={styles.tag}>Biometric Auth</span>
                                            <span className={styles.tag}>Stripe & Plaid API</span>
                                        </div>

                                        <Link href="#contact" className={styles.primaryBtn}>
                                            View Full Case Study <FaArrowRight className={styles.btnIcon} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className={styles.featuredImageWrapper}>
                                        <div className={styles.mockupContainer}>
                                            <div className={styles.mockupPhone}>
                                                <div className={styles.mockupScreen}>
                                                    <div className={styles.mockupHeader}>
                                                        <div className={styles.mockupNotch}></div>
                                                    </div>
                                                    <div className={styles.mockupBody}>
                                                        <h4 className={styles.mockupBalance}>$48,320</h4>
                                                        <p className={styles.mockupLabel}>Total Balance</p>
                                                        <div className={styles.mockupCard1}></div>
                                                        <div className={styles.mockupLines}>
                                                            <div className={styles.mockupLine}></div>
                                                            <div className={styles.mockupLineShort}></div>
                                                        </div>
                                                        <div className={styles.mockupCard2}></div>
                                                        <div className={styles.mockupCard3}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.glowEffect}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    {smallCaseStudies.map((study, index) => (
                        <div className="col-lg-4 col-md-6 mb-4 d-flex" key={index}>
                            <div className={styles.smallCard} style={{ background: study.gradient }}>
                                <div className={styles.smallCardIcon}>{study.icon}</div>
                                <h4 className={styles.smallCardTitle}>{study.title}</h4>
                                <p className={styles.smallCardDesc}>{study.description}</p>
                                <div className={styles.smallStatsRow}>
                                    {study.stats.map((stat, idx) => (
                                        <div className={styles.smallStatItem} key={idx}>
                                            <div className={styles.smallStatValue}>{stat.value}</div>
                                            <div className={styles.smallStatLabel}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <div className={styles.industryFooter}>
                            <span className={styles.industryPrefix}>Industries we've shipped for:</span>
                            <div className={styles.industryTagsWrapper}>
                                {industryTags.map((tag, index) => (
                                    <span className={styles.industryFooterTag} key={index}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection
