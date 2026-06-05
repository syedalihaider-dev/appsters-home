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
                <div className="container">
                    <div className={styles.content}>
                        <h1 className={styles.title}>Thank You!</h1>

                        <p className={styles.desc}>
                            Your inquiry has been received. One of our Appsters will get back
                            to you shortly to discuss how we can bring your mobile vision to
                            life.
                        </p>

                        <div className={styles.btnRow}>
                            <Link
                                href="/lp/mobile-app-studio"
                                className={styles.backBtn}
                            >
                                &larr; BACK TO HOME
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}