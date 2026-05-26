import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './ProcessSection.module.css'

const ProcessSection = () => {
    const processStepsRow1 = [
        {
            number: '01',
            icon: '🔍',
            title: 'Discovery & Strategy',
            desc: 'We deep-dive into your business goals, target audience, and competitive landscape to build a winning product strategy.',
            week: 'Week 1'
        },
        {
            number: '02',
            icon: '🎨',
            title: 'UX Research & Wireframing',
            desc: 'User journey mapping, information architecture, and low-fidelity wireframes reviewed and approved by you.',
            week: 'Week 1–2'
        },
        {
            number: '03',
            icon: '✏️',
            title: 'UI Design & Prototyping',
            desc: 'Pixel-perfect, brand-aligned UI design with interactive prototypes. You see exactly what you\'re getting before a line of code is written.',
            week: 'Week 2–3'
        },
        {
            number: '04',
            icon: '⚙️',
            title: 'Architecture & Tech Setup',
            desc: 'Scalable backend architecture, cloud infrastructure, database design, and API planning — built to handle millions of users.',
            week: 'Week 3–4'
        }
    ]

    const processStepsRow2 = [
        {
            number: '05',
            icon: '📱',
            title: 'Agile Development',
            desc: '2-week sprint cycles with daily standups. You get a working build every 2 weeks to review, test, and give feedback in real time.',
            week: 'Week 4–9'
        },
        {
            number: '06',
            icon: '🗡️',
            title: 'QA & Testing',
            desc: 'Automated and manual testing across 50+ device types. Performance, security, and UX testing before a single user touches it.',
            week: 'Week 9–10'
        },
        {
            number: '07',
            icon: '🚀',
            title: 'App Store Launch',
            desc: 'Full App Store and Google Play submission, optimization (ASO), and deployment. We handle every detail of the launch process.',
            week: 'Week 11–12'
        },
        {
            number: '08',
            icon: '🔧',
            title: 'Post-Launch Support',
            desc: 'Ongoing maintenance, performance monitoring, feature updates, and dedicated support — we\'re with you long after launch.',
            week: 'Ongoing'
        }
    ]

    const guarantees = [
        {
            icon: '📅',
            title: 'On-Time Delivery Guarantee',
            desc: 'We commit to deadlines and deliver on them. 97% of our projects ship on schedule.'
        },
        {
            icon: '💬',
            title: 'Daily Progress Updates',
            desc: 'Dedicated project manager, Slack channel, and real-time access to your development board.'
        },
        {
            icon: '🔒',
            title: 'IP Ownership — 100% Yours',
            desc: 'You own every line of code, every asset, and every design file from day one.'
        },
        {
            icon: '🛡️',
            title: 'Bug-Free Launch Guarantee',
            desc: '90-day free bug fix warranty on every app we ship. Zero risk to your launch.'
        }
    ]

    const technologies = [
        'Swift (iOS)', 'Kotlin (Android)', 'React Native', 'Flutter', 'Node.js', 'Python / Django',
        'AWS / GCP / Azure', 'Firebase', 'GraphQL', 'PostgreSQL', 'OpenAI / GPT-4', 'TensorFlow',
        'Stripe / Plaid', 'Twilio', 'Kubernetes'
    ]

    return (
        <section className={styles.processSection}>
            <div className={styles.gridBg}></div>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={10}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            OUR PROCESS
                        </div>
                        <h2 className={styles.mainTitle}>
                            From Idea to App Store<br />
                            in <span className={styles.highlight}>as Little as 12 Weeks</span>
                        </h2>
                        <p className={styles.mainDesc}>
                            A battle-tested 8-step development process refined across 3,000+ apps. Transparent,<br />
                            collaborative, and engineered to get your product to market fast — without sacrificing quality.
                        </p>
                    </Col>
                </Row>

                <div className={styles.timelineContainer}>
                    <div className={styles.timelineRow}>
                        <div className={styles.timelineLine}></div>
                        {processStepsRow1.map((step, index) => (
                            <div key={index} className={styles.stepCard}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.stepIcon}>{step.icon}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                                <span className={styles.stepWeek}>{step.week}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.timelineRow}>
                        <div className={styles.timelineLine}></div>
                        {processStepsRow2.map((step, index) => (
                            <div key={index} className={styles.stepCard}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.stepIcon}>{step.icon}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                                <span className={styles.stepWeek}>{step.week}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.guaranteesGrid}>
                    {guarantees.map((item, index) => (
                        <div key={index} className={styles.guaranteeItem}>
                            <div className={styles.guaranteeIcon}>{item.icon}</div>
                            <div className={styles.guaranteeContent}>
                                <h4 className={styles.guaranteeTitle}>{item.title}</h4>
                                <p className={styles.guaranteeDesc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.techSection}>
                    <h3 className={styles.techTitle}>Technologies We Build With</h3>
                    <div className={styles.techTags}>
                        {technologies.map((tech, index) => (
                            <div key={index} className={styles.techTag}>
                                <span className={styles.techDot}></span>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProcessSection
