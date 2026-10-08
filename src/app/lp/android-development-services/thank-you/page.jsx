import Link from "next/link";
import styles from "./ThankYou.module.css";

export const metadata = {
  title: "Thank You | Android Development Services | Appsters",
  description: "Your Android development enquiry has been received by Appsters.",
  robots: { index: false, follow: false },
};

export default function AndroidDevelopmentServicesThankYou() {
  return (
    <main className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.content}>
        <Link href="/lp/android-development-services" className={styles.brand} aria-label="Appsters home">
          <img src="/android-development-services/assets/source-logo.png" alt="Appsters" width="165" height="44" />
        </Link>
        <span className={styles.eyebrow}>ANDROID DEVELOPMENT · APPSTERS</span>
        <div className={styles.check} aria-hidden="true">✓</div>
        <h1>Thank you for reaching out.</h1>
        <p>
          Your Android project enquiry has been received. Our team will review your goals and
          get back to you shortly with practical next steps.
        </p>
        <Link href="/lp/android-development-services" className={styles.button}>
          Back to Android Development <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
