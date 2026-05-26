import React from 'react'
import styles from './TestimonialsSection.module.css'
import { FaStar, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

const TestimonialsSection = () => {
    return (
        <section className={styles.testimonialsSection} id="testimonials">
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span> CLIENT TESTIMONIALS
                        </div>
                        <h2 className={styles.mainTitle}>
                            Trusted by <span className={styles.highlight}>450+ Businesses</span><br />
                            Across 40 Industries
                        </h2>
                        <p className={styles.mainDesc}>
                            Don't take our word for it. Here's what founders, CTOs, and product leaders say about working with Appsters to bring their app vision to life.
                        </p>
                    </div>
                </div>

                <div className="row mt-5">
                    {/* Large Card 1 */}
                    <div className="col-lg-6 mb-4 d-flex">
                        <div className={styles.largeCard}>
                            <div className={styles.starsRow}>
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <div className={styles.resultBadge}>
                                📈 Result: 3x user growth in 60 days
                            </div>
                            <div className={styles.quoteIcon}>"</div>
                            <p className={styles.testimonialText}>
                                Appsters didn't just build our app — they transformed how we serve customers. The iOS and Android development was flawless, delivered 2 weeks ahead of schedule, and the AI features they integrated became our biggest competitive differentiator. Within 60 days of launch, our user base tripled.
                            </p>
                            <div className={styles.profileWrapper}>
                                <div className={styles.avatar} style={{ backgroundColor: '#caff33', color: '#000' }}>MK</div>
                                <div className={styles.profileInfo}>
                                    <h4 className={styles.profileName}>Michael Kern</h4>
                                    <p className={styles.profileTitle}>CEO, NovaPay — Fintech Startup, San Francisco</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Large Card 2 */}
                    <div className="col-lg-6 mb-4 d-flex">
                        <div className={styles.largeCard}>
                            <div className={styles.starsRow}>
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <div className={styles.resultBadge}>
                                🏥 Result: 400K patients onboarded in 6 months
                            </div>
                            <div className={styles.quoteIcon}>"</div>
                            <p className={styles.testimonialText}>
                                We needed a HIPAA-compliant telemedicine app built fast without cutting corners on security. Appsters delivered a world-class product in 10 weeks. Their expertise in healthcare app development is unmatched — they understood our compliance requirements better than teams we'd worked with for years.
                            </p>
                            <div className={styles.profileWrapper}>
                                <div className={styles.avatar} style={{ backgroundColor: '#3366ff', color: '#fff' }}>SR</div>
                                <div className={styles.profileInfo}>
                                    <h4 className={styles.profileName}>Dr. Sarah Rahman</h4>
                                    <p className={styles.profileTitle}>Co-Founder, MediConnect — HealthTech, New York</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Small Card 1 */}
                    <div className="col-lg-4 mb-4 d-flex">
                        <div className={styles.smallCard}>
                            <div className={styles.starsRow}>
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <p className={styles.smallTestimonialText}>
                                "Our e-commerce app went from idea to App Store in 12 weeks. The checkout experience Appsters built cut our cart abandonment by 40%. Best mobile app development agency we've worked with."
                            </p>
                            <div className={styles.profileWrapper}>
                                <div className={styles.avatarSmall} style={{ backgroundColor: '#223322', color: '#caff33' }}>JL</div>
                                <div className={styles.profileInfo}>
                                    <h4 className={styles.profileNameSmall}>James Liu</h4>
                                    <p className={styles.profileTitleSmall}>VP Product, ShopBridge — E-Commerce</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Card 2 */}
                    <div className="col-lg-4 mb-4 d-flex">
                        <div className={styles.smallCard}>
                            <div className={styles.starsRow}>
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <p className={styles.smallTestimonialText}>
                                "The React Native app Appsters built handles 50,000 concurrent users without breaking a sweat. Their engineering team is exceptional — they think about scalability from day one, not as an afterthought."
                            </p>
                            <div className={styles.profileWrapper}>
                                <div className={styles.avatarSmall} style={{ backgroundColor: '#442222', color: '#ff6666' }}>AT</div>
                                <div className={styles.profileInfo}>
                                    <h4 className={styles.profileNameSmall}>Alsha Thornton</h4>
                                    <p className={styles.profileTitleSmall}>CTO, LogiTrack — Logistics SaaS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Card 3 */}
                    <div className="col-lg-4 mb-4 d-flex">
                        <div className={styles.smallCard}>
                            <div className={styles.starsRow}>
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <p className={styles.smallTestimonialText}>
                                "Appsters built our real estate app in 11 weeks — virtual tours, AI property matching, mortgage calculator, the works. We've closed $220M in transactions through the platform in our first year."
                            </p>
                            <div className={styles.profileWrapper}>
                                <div className={styles.avatarSmall} style={{ backgroundColor: '#2a2244', color: '#aa88ff' }}>RP</div>
                                <div className={styles.profileInfo}>
                                    <h4 className={styles.profileNameSmall}>Ryan Patel</h4>
                                    <p className={styles.profileTitleSmall}>Founder, PropNest — Real Estate Tech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <div className={styles.ctaCard}>
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h3 className={styles.ctaTitle}>Ready to Build an App That Actually Grows Your Business?</h3>
                                    <p className={styles.ctaDesc}>
                                        Join 450+ companies who chose Appsters for their custom iOS, Android, and cross-platform mobile app development.
                                    </p>
                                    <Link href="#contact" className={styles.primaryBtn}>
                                        Get a Free Project Estimate <FaArrowRight className={styles.btnIcon} />
                                    </Link>
                                </div>
                                <div className="col-lg-5">
                                    <div className={styles.trustBadges}>
                                        <div className={styles.trustItem}>
                                            <div className={styles.stars}>
                                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                            </div>
                                            <div className={styles.ratingScore}>4.9/5</div>
                                            <div className={styles.ratingSource}>CLUTCH</div>
                                        </div>
                                        <div className={styles.trustItem}>
                                            <div className={styles.stars}>
                                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                            </div>
                                            <div className={styles.ratingScore}>4.8/5</div>
                                            <div className={styles.ratingSource}>GOODFIRMS</div>
                                        </div>
                                        <div className={styles.trustItem}>
                                            <div className={styles.stars}>
                                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                            </div>
                                            <div className={styles.ratingScore}>1,200+</div>
                                            <div className={styles.ratingSource}>REVIEWS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
