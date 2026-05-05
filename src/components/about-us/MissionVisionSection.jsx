import React from 'react';
import Image from 'next/image';
import styles from './MissionVisionSection.module.css';

export default function MissionVisionSection() {
  return (
    <section className={styles.missionVisionSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.card}>
          <div className={styles.capWrapper}>
            <Image
              src="/images/about-us/cap.png"
              alt="Mission Cap"
              width={401}
              height={52}
              className={styles.capImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.title}>OUR MISSION</h2>
            <p className={styles.text}>
              To empower businesses with innovative, user-centric digital solutions that drive measurable growth, strengthen customer engagement, and create sustainable long-term value. We focus on transforming complex ideas into intuitive, high-performing digital products that solve real business problems and enhance user experiences at every touchpoint. <br />
              We aim to bridge the gap between vision and execution by combining strategic thinking, modern design principles, and robust engineering.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.capWrapper}>
            <Image
              src="/images/about-us/cap.png"
              alt="Vision Cap"
              width={401}
              height={52}
              className={styles.capImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.title}>OUR VISION</h2>
            <p className={styles.text}>
              To become a globally trusted app development partner recognized for crafting intelligent, impactful, and highly scalable digital ecosystems that go beyond traditional software solutions. <br />
              We aim to build products that not only solve today's business challenges but also anticipate future needs, enabling companies to operate more efficiently, make smarter decisions, and deliver better experiences to their users. <br />
              Our vision is to redefine how businesses operate in the digital age by combining innovation, strategy, and technology into seamless ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
