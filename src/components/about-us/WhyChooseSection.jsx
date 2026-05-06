import React from 'react';
import styles from './WhyChooseSection.module.css';

export default function WhyChooseSection() {
  const features = [
    {
      title: "User-First Approach",
      description: "Every decision starts with the end user in mind"
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business"
    },
    {
      title: "Agile Development",
      description: "Fast iterations and continuous improvements"
    },
    {
      title: "Transparent Process",
      description: "Clear communication at every stage"
    },
    {
      title: "Business-Focused Delivery",
      description: "Technology aligned with real ROI"
    },
    {
      title: "Global Mindset",
      description: "Speed, flexibility, and cultural adaptability"
    }
  ];

  return (
    <section className={styles.whyChooseSection}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className={styles.heading}>
              WHY CHOOSE <span className={styles.highlight}>APPSTERS</span>
            </h2>
            <p className={styles.subtext}>
              We don't believe in one-size-fits-all development. Every project is treated as a unique product with its own strategy and execution plan.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={styles.featureCard}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
