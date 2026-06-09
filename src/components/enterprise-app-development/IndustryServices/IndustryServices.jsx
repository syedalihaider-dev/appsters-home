"use client"
import React from 'react'
import {
  FaMobileAlt,
  FaLayerGroup,
  FaCloud,
  FaRobot,
  FaPlug,
  FaShieldAlt,
  FaArrowRight,
} from 'react-icons/fa'
import styles from './IndustryServices.module.css'

const SERVICES = [
  {
    icon: <FaMobileAlt />,
    title: 'Enterprise iOS & Android Apps',
    desc: 'Native enterprise apps with MDM integration, SSO, and corporate security built in.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Cross-Platform Enterprise Apps',
    desc: 'React Native & Flutter solutions with single codebase efficiency across all enterprise devices.',
  },
  {
    icon: <FaCloud />,
    title: 'Enterprise SaaS Mobile Apps',
    desc: 'Mobile extensions of your existing SaaS platforms built for enterprise user workflows.',
  },
  {
    icon: <FaRobot />,
    title: 'AI-Powered Enterprise Apps',
    desc: 'ChatGPT, NLP, computer vision, and predictive analytics integrated into enterprise-grade mobile solutions.',
  },
  {
    icon: <FaPlug />,
    title: 'Legacy System Integration',
    desc: 'We connect your mobile app to your existing ERP, CRM, SAP, and enterprise infrastructure.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Compliance-Ready Development',
    desc: 'HIPAA, PCI-DSS, SOC 2, GDPR compliant apps built with enterprise security from day one.',
  },
]

export default function IndustryServices({ onOpenPopup }) {
  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <div className={styles.sectionHead}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} /> OUR EXPERTISE
          </div>
          <h2 className={styles.sectionTitle}>
            Enterprise Mobile App Development Services for Every Industry
          </h2>
          <p className={styles.sectionLede}>
            From native flagship apps to AI-powered platforms — engineered for
            corporate security, scale, and the systems you already run.
          </p>
        </div>

        <div className="row">
          {SERVICES.map((s) => (
            <div className="col-lg-4 col-md-6" key={s.title}>
              <article className={styles.card}>
                <span className={styles.cardIcon}>{s.icon}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <button
                  type="button"
                  className={styles.cardLink}
                  onClick={onOpenPopup}
                >
                  Get an estimate <FaArrowRight />
                </button>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
