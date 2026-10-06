import React from 'react'
import { FiExternalLink, FiShield, FiThumbsUp, FiUsers } from 'react-icons/fi'
import styles from './ReviewsSection.module.css'

const platforms = [
    {
        name: 'Clutch',
        className: 'clutch',
        logo: '/images/clutch.png',
        score: '5.0/5',
        stars: '★★★★★',
        count: '12 reviews',
        description: 'Verified client feedback from Clutch.',
        action: 'View Our Profile',
        url: 'https://clutch.co/profile/appsters',
    },
    {
        name: 'GoodFirms',
        className: 'goodfirms',
        logo: '/images/goodfirms.png',
        score: '5.0/5',
        stars: '★★★★★',
        count: '10 reviews',
        description: 'Trusted reviews from verified clients on GoodFirms.',
        action: 'View Our Profile',
        url: 'https://www.goodfirms.co/company/appsters',
    },
]

function ExternalLinkIcon() {
    return <FiExternalLink aria-hidden="true" />
}

export default function ReviewsSection() {
    return (
        <section className={styles.section} aria-labelledby="mobile-developer-reviews-title">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <span className={styles.eyebrow}><FiShield aria-hidden="true" /> Trusted &amp; reviewed</span>
                    <h2 id="mobile-developer-reviews-title">Trusted by Clients.<br /><span>Backed by Reviews.</span></h2>
                    <p>See what real clients say about working with Appsters. Our reviews across trusted platforms reflect our commitment to quality, communication and results. Choose Appsters with confidence.</p>
                    <div className={styles.trustPoints}>
                        <div><span className={styles.trustIcon}><FiThumbsUp aria-hidden="true" /></span><span>Real Client<br />Feedback</span></div>
                        <div><span className={styles.trustIcon}><FiShield aria-hidden="true" /></span><span>Verified<br />Reviews</span></div>
                        <div><span className={styles.trustIcon}><FiUsers aria-hidden="true" /></span><span>Trusted by<br />Startups &amp; Businesses</span></div>
                    </div>
                </div>

                <div className={styles.platforms}>
                    <article className={`${styles.card} ${styles.trustpilot}`}>
                        <div className={`${styles.brand} ${styles.trustpilotBrand}`}><img src="/images/trustpilot.jpg" alt="" /><span>Trustpilot</span></div>
                        <div className={styles.stars} aria-label="4.5 out of 5 stars">★★★★<span>★</span></div>
                        <strong className={styles.score}>4.5/5</strong>
                        <p className={styles.count}>Based on <a href="https://www.trustpilot.com/review/appsters.io" target="_blank" rel="noreferrer">20 reviews</a></p>
                        <p className={styles.description}>Independent client reviews from real businesses.</p>
                        <a className={styles.action} href="https://www.trustpilot.com/review/appsters.io" target="_blank" rel="noreferrer">Read Our Reviews <ExternalLinkIcon /></a>
                    </article>

                    {platforms.map((platform) => (
                        <article key={platform.name} className={`${styles.card} ${styles[platform.className]}`}>
                            <div className={styles.brand}><img src={platform.logo} alt={platform.name} /></div>
                            <div className={styles.stars} aria-label={`${platform.score} rating`}>{platform.stars}</div>
                            <strong className={styles.score}>{platform.score}</strong>
                            <p className={styles.count}>Based on <a href={platform.url} target="_blank" rel="noreferrer">{platform.count}</a></p>
                            <p className={styles.description}>{platform.description}</p>
                            <a className={styles.action} href={platform.url} target="_blank" rel="noreferrer">{platform.action} <ExternalLinkIcon /></a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
