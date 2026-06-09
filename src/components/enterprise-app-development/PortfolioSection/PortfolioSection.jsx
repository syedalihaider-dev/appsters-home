"use client"
import React from 'react'
import {
  FaShieldAlt,
  FaUserTie,
  FaChartLine,
  FaCheckCircle,
  FaFileContract,
  FaHeadset,
} from 'react-icons/fa'
import styles from './PortfolioSection.module.css'

const METRICS = [
  { number: '$2.4B', label: 'Transactions processed for fintech clients' },
  { number: '400K', label: 'Enterprise users onboarded in 6 months' },
  { number: '97%', label: 'On-time delivery rate' },
  { number: '90 Days', label: 'Free bug-fix warranty on every app' },
]

const REASONS = [
  {
    icon: <FaShieldAlt />,
    title: 'Security-First Architecture',
    desc: 'Every app is built with enterprise-grade encryption, role-based access, and vulnerability testing.',
  },
  {
    icon: <FaUserTie />,
    title: 'Dedicated Project Manager',
    desc: 'A senior PM assigned from day one — with daily standups and Slack access.',
  },
  {
    icon: <FaChartLine />,
    title: 'Scalable from Day One',
    desc: 'Architecture designed to handle 1M+ users without performance degradation.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Full IP Ownership',
    desc: 'You own 100% of the code, designs, and assets. Always.',
  },
  {
    icon: <FaFileContract />,
    title: 'Compliance Expertise',
    desc: 'HIPAA, PCI-DSS, SOC 2, GDPR — we know enterprise compliance inside out.',
  },
  {
    icon: <FaHeadset />,
    title: 'Post-Launch Support',
    desc: 'Ongoing maintenance, monitoring, and feature development after launch.',
  },
]

export default function PortfolioSection() {
  return (
    <section className={styles.portfolioSection} id="results">
      <div className="container">
        <div className={styles.sectionHead}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} /> ENTERPRISE RESULTS
          </div>
          <h2 className={styles.sectionTitle}>
            Numbers that survive a board review
          </h2>
          <p className={styles.sectionLede}>
            The outcomes enterprise teams actually report back to us after
            launch.
          </p>
        </div>

        <div className={styles.metrics}>
          {METRICS.map((m) => (
            <div className={styles.metric} key={m.label}>
              <div className={styles.metricNumber}>{m.number}</div>
              <div className={styles.metricLabel}>{m.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.reasonHead}>
          <h3 className={styles.reasonTitle}>Why enterprises choose Appsters</h3>
          <p className={styles.reasonLede}>
            Built for the standards your security, legal, and procurement teams
            will hold us to.
          </p>
        </div>

        <div className="row">
          {REASONS.map((r) => (
            <div className="col-lg-4 col-md-6" key={r.title}>
              <div className={styles.reasonCard}>
                <span className={styles.reasonIcon}>{r.icon}</span>
                <h4 className={styles.reasonCardTitle}>{r.title}</h4>
                <p className={styles.reasonCardDesc}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
