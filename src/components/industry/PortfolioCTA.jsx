import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./PortfolioCTA.module.css";

export default function PortfolioCTA({ data = {} }) {
  const watermark = data.watermark || "HEALTHCARE";
  const heading = data.heading || "QUICK GLIMPSE ON <br />OUR PORTFOLIO";
  const description = data.description || "With over two decades of experience in mobile app development in Houston, we have consistently handed over profitable and impactful solutions to various clients. Our portfolio highlights our success we have achieved closely working with our trustable clients. Take a closer look at our work and see how we turn concepts into creative digital products.";

  return (
    <section className={styles.portfolioCTASection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className={styles.blueCard}>
              {/* Background Watermark */}
              <span className={styles.watermark}>{watermark}</span>

              {/* Main Card Content */}
              <div className={styles.cardContent}>
                <h2 className={styles.heading} dangerouslySetInnerHTML={{ __html: heading }}></h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.btnWrapper}>
                  <ActionButtons text="Free Consultation" textClassName={styles.ctaBtnText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
