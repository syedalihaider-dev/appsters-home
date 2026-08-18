"use client";
import styles from "./MapSection.module.css";

const stats = [
  { value: "200+", label: "No. Of Developers" },
  { value: "40+", label: "Industries Served" },
  { value: "500+", label: "Apps Developed" },
];

export default function MapSection() {
  return (
    <section className={styles.mapSection}>
      <div className="container">
        <div className={styles.grid}>

          {/* ── Left Column ── */}
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>
              Expand Your Market Presence With Our Top App Development Company
              in Houston
            </h2>

            <p className={styles.description}>
              We are the No.1 mobile app development company Houston that offers
              impeccable solutions at cost-effective rates. We build high-quality,
              user-friendly mobile apps that drive growth and help you reach more
              customers &amp; generate massive revenue. With our award-winning
              solutions and industry expertise, we help you keep ahead of your
              rivals.
            </p>

            <div className={styles.statsRow}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className={styles.rightCol}>
            {/* Map */}
            <div className={styles.mapWrapper}>
              <iframe
                title="Houston Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83828278914!2d-95.68959449255672!3d29.75893821818889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Red pin marker overlay */}
              <div className={styles.mapPin}>
                <svg
                  width="32"
                  height="42"
                  viewBox="0 0 32 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C7.163 0 0 7.163 0 16c0 12 16 26 16 26s16-14 16-26C32 7.163 24.837 0 16 0z"
                    fill="#E53935"
                  />
                  <circle cx="16" cy="16" r="6" fill="white" />
                </svg>
              </div>
            </div>

            {/* Office Info Card */}
            <div className={styles.officeCard}>
              <h3 className={styles.officeTitle}>
                Find Us at Our Houston Office
              </h3>
              <p className={styles.officeDescription}>
                Discover our Houston office located at 1923 Washington Ave, Suite
                2323, Houston, TX 77007, United States. Equipped with modern
                amenities, our Houston location offers a thriving workspace where
                our professional app developers Houston develop innovative mobile
                applications.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}