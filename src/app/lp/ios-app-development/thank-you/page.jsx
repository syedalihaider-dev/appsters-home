import Link from "next/link";
import styles from "./ThankYou.module.css";

export const metadata = {
  title: "Thank You | iOS App Development | Appsters",
  description: "Your iOS development enquiry has been received by Appsters.",
  robots: { index: false, follow: false },
};

export default function IosAppDevelopmentThankYou() {
  return (
    <main className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.content}>
        <Link href="/lp/ios-app-development" className={styles.brand} aria-label="Appsters home">
          <img src="/ios-app-development/assets/source-logo.png" alt="Appsters" width="165" height="44" />
        </Link>
        <span className={styles.eyebrow}>iOS DEVELOPMENT · APPSTERS</span>
        <div className={styles.check} aria-hidden="true">✓</div>
        <h1>Thank you for reaching out.</h1>
        <p>
          Your iOS project enquiry has been received. Our team will review your goals and
          get back to you shortly with practical next steps.
        </p>
        <Link href="/lp/ios-app-development" className={styles.button}>
          Back to iOS Development <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
