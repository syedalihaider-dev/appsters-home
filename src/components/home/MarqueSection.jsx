"use client";
import Image from "next/image";
import styles from './MarqueSection.module.css';

export default function MarqueSection() {

  return (
    <section className={styles.marqueSection}>
      <ul className={styles.marquee_slider}>
        <li>
          <div className={styles.box}>
            <p>Mobile App <span>Development</span> Services</p>
          </div>
        </li>
        <li>
          <div className={styles.center_logo}>
            <Image
              src="/images/appsters-shape-decor-dark-lg.png"
              alt="Appsters Shape Decor Silver Image..."
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </li>
        <li>
          <div className={styles.box}>
            <p>Mobile App <span>Development</span> Services</p>
          </div>
        </li>
        <li>
          <div className={styles.center_logo}>
            <Image
              src="/images/appsters-shape-decor-dark-lg.png"
              alt="Appsters Shape Decor Silver Image..."
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </li>
        <li>
          <div className={styles.box}>
            <p>Mobile App <span>Development</span> Services</p>
          </div>
        </li>
        <li>
          <div className={styles.center_logo}>
            <Image
              src="/images/appsters-shape-decor-dark-lg.png"
              alt="Appsters Shape Decor Silver Image..."
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </li>
        <li>
          <div className={styles.box}>
            <p>Mobile App <span>Development</span> Services</p>
          </div>
        </li>
        <li>
          <div className={styles.center_logo}>
            <Image
              src="/images/appsters-shape-decor-dark-lg.png"
              alt="Appsters Shape Decor Silver Image..."
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </li>
        <li>
          <div className={styles.box}>
            <p>Mobile App <span>Development</span> Services</p>
          </div>
        </li>
        <li>
          <div className={styles.center_logo}>
            <Image
              src="/images/appsters-shape-decor-dark-lg.png"
              alt="Appsters Shape Decor Silver Image..."
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
