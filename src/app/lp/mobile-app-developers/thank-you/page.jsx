import Link from "next/link";
import Script from "next/script";

import styles from "./ThankYou.module.css";

export const metadata = {
    title: "Thank You - Appsters",
    description:
        "Thank you for contacting Appsters. Your inquiry has been received and our team will get back to you shortly.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYou() {
    return (
        <>
            {/* Google Ads Conversion Tracking */}
            <Script id="google-ads-conversion" strategy="afterInteractive">
                {`
          if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
              'send_to': 'AW-16476280714/MD9mCJjo2ZkcEIqvwLA9'
            });
          }
        `}
            </Script>

            <main className={styles.thankYouPage}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.successIcon} aria-hidden="true">
                            <svg viewBox="0 0 48 48" fill="none">
                                <path d="m13 24.5 7.2 7.2L35.5 16" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className={styles.eyebrow}>MESSAGE RECEIVED</span>
                        <h1 className={styles.title}>Thank You!</h1>

                        <p className={styles.desc}>
                            Your inquiry is safely with our team. An Appsters specialist will
                            be in touch shortly to discuss your mobile app and next steps.
                        </p>

                        <div className={styles.btnRow}>
                            <Link
                                href="/lp/mobile-app-developers"
                                className={styles.backBtn}
                            >
                                <span aria-hidden="true">←</span> Back to the landing page
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
