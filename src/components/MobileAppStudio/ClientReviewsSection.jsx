"use client";
import { FiExternalLink, FiShield, FiThumbsUp, FiUsers } from "react-icons/fi";
import styles from "./ClientReviewsSection.module.css";

export default function ClientReviewsSection() {
  return (
    <section className={styles.clientReviews} aria-labelledby="studio-client-reviews-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}><FiShield aria-hidden="true" /> Trusted &amp; reviewed</span>
          <h2 id="studio-client-reviews-title">Trusted by Clients.<br /><span>Backed by Reviews.</span></h2>
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
            <div className={styles.trustpilotStars} aria-label="4.5 out of 5 stars">★★★★<span>★</span></div>
            <strong className={styles.score}>4.5/5</strong>
            <p className={styles.count}>Based on <a href="https://www.trustpilot.com/review/appsters.io" target="_blank" rel="noreferrer">20 reviews</a></p>
            <p className={styles.description}>Independent client reviews from real businesses.</p>
            <a className={`${styles.link} ${styles.trustpilotLink}`} href="https://www.trustpilot.com/review/appsters.io" target="_blank" rel="noreferrer">Read Our Reviews <FiExternalLink aria-hidden="true" /></a>
          </article>
          <article className={`${styles.card} ${styles.clutch}`}>
            <div className={styles.brand}><img src="/images/clutch.png" alt="Clutch" /></div>
            <div className={styles.stars} aria-label="5 out of 5 stars">★★★★★</div>
            <strong className={styles.score}>5.0/5</strong>
            <p className={styles.count}>Based on <a href="https://clutch.co/profile/appsters" target="_blank" rel="noreferrer">12 reviews</a></p>
            <p className={styles.description}>Verified client feedback from Clutch.</p>
            <a className={`${styles.link} ${styles.clutchLink}`} href="https://clutch.co/profile/appsters" target="_blank" rel="noreferrer">View Our Profile <FiExternalLink aria-hidden="true" /></a>
          </article>
          <article className={`${styles.card} ${styles.goodfirms}`}>
            <div className={styles.brand}><img src="/images/goodfirms.png" alt="GoodFirms" /></div>
            <div className={styles.stars} aria-label="5 out of 5 stars">★★★★★</div>
            <strong className={styles.score}>5.0/5</strong>
            <p className={styles.count}>Based on <a href="https://www.goodfirms.co/company/appsters" target="_blank" rel="noreferrer">10 reviews</a></p>
            <p className={styles.description}>Trusted reviews from verified clients on GoodFirms.</p>
            <a className={`${styles.link} ${styles.goodfirmsLink}`} href="https://www.goodfirms.co/company/appsters" target="_blank" rel="noreferrer">View Our Profile <FiExternalLink aria-hidden="true" /></a>
          </article>
        </div>
      </div>
    </section>
  );
}
