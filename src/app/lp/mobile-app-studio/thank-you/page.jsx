import Link from 'next/link'
import Script from 'next/script'
import styles from './ThankYou.module.css'

export const metadata = {
    robots: {
        title: "Thank You - Appsters",
        description:
            "Thank you for contacting Appsters. Your inquiry has been received and our team will get back to you shortly.",
        index: false,
        follow: false,
        nocache: true,
    },
}

export default function ThankYou() {
    return (
        <main className={styles.thankYouPage}>
            {/* Event snippet for conversion */}
            <Script id="google-conversion" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('event', 'conversion', {
                    'send_to': 'AW-16476280714/MD9mCJjo2ZkcEIqvwLA9'
                });
                `}
            </Script>
            <div className="container">
                <div className={styles.content}>
                    {/* <div className={styles.iconBox}>
                        <Image src="/mobile-app-studio/check-circle.png" alt="success" width={100} height={100} />
                    </div> */}
                    <h1 className={styles.title}>Thank You!</h1>
                    <p className={styles.desc}>
                        Your inquiry has been received. One of our "Appsters" will get back to you shortly
                        to discuss how we can bring your mobile vision to life.
                    </p>
                    <div className={styles.btnRow}>
                        <Link href="/lp/mobile-app-studio" className={styles.backBtn}>
                            &larr; BACK TO HOME
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
