import React from 'react';
import styles from './CTASection.module.css';
import Image from 'next/image';
import ActionButtons from "@/components/ui/ActionButtons";

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.bgOverlay}>
        <Image
          src="/images/about-us/cta-bg.webp"
          alt="CTA Background"
          fill
          className={styles.bgImage}
        />
      </div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <h2 className={styles.heading}>
              LET'S BUILD SOMETHING EXTRAORDINARY
            </h2>
            <p className={styles.paragraph}>
              Your idea deserves more than just development—it deserves execution that drives real impact. At Appsters, we turn vision into reality through design, technology, and innovation. Let's create the next big digital experience together.
            </p>
            <div className="combo_btn">
              <ActionButtons text="Start Your Project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
