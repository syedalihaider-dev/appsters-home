import Link from 'next/link';
import styles from './ThankYou.module.css';

export default function ThankYou() {
    return (
        <main className={styles.thankYouPage}>
            {/* Event snippet for appsters-Sign-up conversion page */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `gtag('event', 'conversion', {'send_to': 'AW-16476280714/MD9mCJjo2ZkcEIqvwLA9'});`
                }}
            />
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="48" stroke="#CCFF00" strokeWidth="4"/>
                            <path d="M30 50L45 65L70 35" stroke="#CCFF00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h1>Thank You!</h1>
                    <p>Your message has been sent successfully. <br /> Our team will get back to you shortly.</p>
                    <div className="combo_btn justify-content-center">
                        <Link href="/" className="mybtn">
                            <div className="text">
                                <span>Back to Home</span>
                                <span>Back to Home</span>
                            </div>
                            <div className="icon">
                                <img src="/images/send.png" alt="icon" width="20" height="20" />
                                <img src="/images/send.png" alt="icon" width="20" height="20" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
