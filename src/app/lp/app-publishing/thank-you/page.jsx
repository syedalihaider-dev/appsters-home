import Link from "next/link";
import Script from "next/script";
import styles from "./ThankYou.module.css";

export const metadata = {
  title: "Thank You – App Publishing | Appsters",
  description:
    "Thank you for contacting Appsters about app publishing. Our team will review your submission and get back to you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYou() {
  return (
    <main className={styles.thankYouPage}>
      <Script id="google-conversion" strategy="afterInteractive">
        {`
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
              'send_to': 'AW-16476280714/MD9mCJjo2ZkcEIqvwLA9'
            });
          }
        `}
      </Script>

      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Thank You!</h1>

          <p className={styles.desc}>
            Your inquiry has been received. One of our publishing specialists
            will get back to you shortly to review your app and map the fastest
            route to the store.
          </p>

          <div className={styles.btnRow}>
            <Link href="/lp/app-publishing" className={styles.backBtn}>
              &larr; BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
