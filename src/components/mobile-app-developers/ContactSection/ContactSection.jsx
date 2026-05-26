import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styles from './ContactSection.module.css'

const ContactSection = () => {
    const benefits = [
        {
            title: 'Free Project Estimate',
            desc: 'Detailed cost breakdown for your iOS, Android, or cross-platform app'
        },
        {
            title: 'Technical Roadmap',
            desc: 'Step-by-step development plan with timeline and milestones'
        },
        {
            title: 'Strategy Consultation Call',
            desc: '30-min call with a senior mobile app developer to discuss your vision'
        },
        {
            title: 'NDA Signed Before We Talk',
            desc: 'Your idea is 100% protected from the first conversation'
        },
        {
            title: 'Response Within 4 Hours',
            desc: 'A real human — not a bot — reaches out to discuss your project'
        }
    ]

    const contactMethods = [
        { icon: '📞', label: 'CALL US NOW', value: '+1 (855) 442-2711' },
        { icon: '✉️', label: 'EMAIL US', value: 'hello@appsters.io' },
        { icon: '💬', label: 'LIVE CHAT', value: 'Available 24/7' },
        { icon: '📅', label: 'BOOK A CALL', value: 'Pick a time slot' }
    ]

    return (
        <section className={styles.contactSection}>
            <div className={styles.gridBg}></div>
            <Container>
                <div className="text-center mb-5">
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        GET STARTED TODAY
                    </div>
                    <h2 className={styles.mainTitle}>
                        Let's Build Your <span className={styles.highlight}>Next App</span> Together
                    </h2>
                    <p className={styles.mainDesc}>
                        Tell us your idea. We'll respond within 4 hours with a free project<br />
                        estimate, technical roadmap, and a clear path to launch.
                    </p>
                </div>

                <Row className="gy-5">
                    <Col lg={6} className="pe-lg-5">
                        <div className={styles.leftColumn}>
                            <h3 className={styles.sectionSubTitle}>WHAT YOU GET — FREE, NO OBLIGATION</h3>
                            
                            <ul className={styles.benefitsList}>
                                {benefits.map((item, index) => (
                                    <li key={index} className={styles.benefitItem}>
                                        <div className={styles.checkIcon}>✓</div>
                                        <div>
                                            <h4 className={styles.benefitTitle}>{item.title}</h4>
                                            <p className={styles.benefitDesc}>{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.contactMethodsGrid}>
                                {contactMethods.map((method, index) => (
                                    <div key={index} className={styles.contactMethodCard}>
                                        <div className={styles.methodIcon}>{method.icon}</div>
                                        <div>
                                            <div className={styles.methodLabel}>{method.label}</div>
                                            <div className={styles.methodValue}>{method.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.trustBanner}>
                                <div className={styles.avatars}>
                                    <span className={styles.avatar} style={{backgroundColor: '#caff33', color: '#000'}}>MK</span>
                                    <span className={styles.avatar} style={{backgroundColor: '#3b82f6', color: '#fff'}}>SR</span>
                                    <span className={styles.avatar} style={{backgroundColor: '#8b5cf6', color: '#fff'}}>JL</span>
                                    <span className={styles.avatar} style={{backgroundColor: '#f59e0b', color: '#fff'}}>AT</span>
                                </div>
                                <div className={styles.trustText}>
                                    <span className={styles.highlightText}>450+ founders</span> trusted Appsters to build their app. Average response time: <span className={styles.highlightText}>under 2 hours.</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className={styles.formCard}>
                            <h3 className={styles.formTitle}>Start Your Project Today</h3>
                            <p className={styles.formSubtitle}>Free estimate • No commitment • NDA signed on request</p>

                            <Form className={styles.contactForm}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className={styles.formLabel}>FULL NAME</Form.Label>
                                            <Form.Control type="text" placeholder="Jane Smith" className={styles.formInput} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className={styles.formLabel}>PHONE NUMBER</Form.Label>
                                            <Form.Control type="text" placeholder="+1 (000) 000-0000" className={styles.formInput} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label className={styles.formLabel}>WORK EMAIL</Form.Label>
                                    <Form.Control type="email" placeholder="jane@company.com" className={styles.formInput} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className={styles.formLabel}>WHAT ARE YOU BUILDING?</Form.Label>
                                    <Form.Select className={styles.formInput}>
                                        <option>Select a service</option>
                                        <option>iOS App</option>
                                        <option>Android App</option>
                                        <option>Cross-Platform App</option>
                                    </Form.Select>
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className={styles.formLabel}>ESTIMATED BUDGET</Form.Label>
                                            <Form.Select className={styles.formInput}>
                                                <option>Select a range</option>
                                                <option>$10k - $25k</option>
                                                <option>$25k - $50k</option>
                                                <option>$50k+</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className={styles.formLabel}>PROJECT TIMELINE</Form.Label>
                                            <Form.Select className={styles.formInput}>
                                                <option>When to start?</option>
                                                <option>Immediately</option>
                                                <option>1-3 Months</option>
                                                <option>3+ Months</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4">
                                    <Form.Label className={styles.formLabel}>BRIEF PROJECT DESCRIPTION</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Tell us about your app idea — what it does, who it's for, and any key features..." className={styles.formInput} />
                                </Form.Group>

                                <button type="button" className={styles.submitBtn}>
                                    Get My Free Estimate — No Cost, No Commitment <span>→</span>
                                </button>
                                
                                <div className={styles.ndaText}>
                                    🔒 We sign NDAs before every project discussion. Your idea stays yours.
                                </div>
                            </Form>

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
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactSection
