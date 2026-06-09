"use client"
import React from 'react'
import {
  FaSearch,
  FaShieldAlt,
  FaPalette,
  FaServer,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
  FaCheckCircle,
  FaLock,
  FaClock,
  FaAward,
} from 'react-icons/fa'
import styles from './ProcessSection.module.css'

const STEPS = [
  { icon: <FaSearch />, title: 'Discovery & Enterprise Requirements', desc: 'We map goals, stakeholders, and system constraints to lock the right scope.', week: 'Week 1' },
  { icon: <FaShieldAlt />, title: 'Security Architecture Planning', desc: 'Threat modeling, encryption strategy, and access controls defined up front.', week: 'Week 1-2' },
  { icon: <FaPalette />, title: 'UI/UX Design & Prototyping', desc: 'Clickable prototypes & enterprise UI you approve before a line of code.', week: 'Week 2-3' },
  { icon: <FaServer />, title: 'Scalable Backend Architecture', desc: 'Cloud infrastructure designed for millions of users from day one.', week: 'Week 3-4' },
  { icon: <FaCode />, title: 'Agile Development (2-week sprints)', desc: 'Native & cross-platform builds shipped in fast, visible sprints.', week: 'Week 4-9' },
  { icon: <FaBug />, title: 'Enterprise QA & Penetration Testing', desc: 'Real-device testing, load testing, and full security penetration audits.', week: 'Week 9-10' },
  { icon: <FaRocket />, title: 'App Store & Enterprise Deployment', desc: 'Public store submission plus private MDM & enterprise distribution.', week: 'Week 11-12' },
  { icon: <FaHeadset />, title: 'Dedicated Post-Launch Support', desc: 'Monitoring, maintenance, and a roadmap for ongoing feature development.', week: 'Ongoing' },
]

const GUARANTEES = [
  { icon: <FaCheckCircle />, title: '97% On-Time Delivery', desc: 'We ship when we say we will — backed by a track record across 3,000+ apps.' },
  { icon: <FaLock />, title: 'NDA & Full IP Ownership', desc: 'Your idea stays confidential and you own 100% of the code we write.' },
  { icon: <FaClock />, title: '90-Day Bug-Fix Warranty', desc: 'Every app ships with three months of free post-launch bug fixes.' },
  { icon: <FaAward />, title: 'Senior-Only Engineering', desc: 'No juniors learning on your budget — only experienced enterprise engineers.' },
]

const TECHNOLOGIES = [
  'Swift (iOS)', 'Kotlin (Android)', 'React Native', 'Flutter', 'Node.js',
  'Python / Django', 'AWS / GCP / Azure', 'Firebase', 'GraphQL', 'PostgreSQL',
  'OpenAI / GPT-4', 'TensorFlow', 'Stripe / Plaid', 'Twilio', 'Kubernetes',
]

export default function ProcessSection() {
  const rows = [STEPS.slice(0, 4), STEPS.slice(4, 8)]

  return (
    <section className={styles.processSection} id="process">
      <div className="container">
        <div className={styles.sectionHead}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} /> OUR PROCESS
          </div>
          <h2 className={styles.sectionTitle}>
            From Idea to Enterprise Launch in as Little as 12 Weeks
          </h2>
          <p className={styles.sectionLede}>
            Eight tight stages with security baked into every one — and you in
            the loop the whole way.
          </p>
        </div>

        {rows.map((row, rIdx) => (
          <div className={styles.timelineRow} key={rIdx}>
            {/* <div className={styles.timelineLine} aria-hidden="true" /> */}
            {row.map((s, i) => {
              const num = rIdx * 4 + i + 1
              return (
                <div className={styles.stepCard} key={s.title}>
                  <div className={styles.stepTop}>
                    <span className={styles.stepIcon}>{s.icon}</span>
                    <span className={styles.stepNumber}>{num}</span>
                  </div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                  <span className={styles.stepWeek}>{s.week}</span>
                </div>
              )
            })}
          </div>
        ))}

        <div className={styles.guarantees}>
          {GUARANTEES.map((g) => (
            <div className={styles.guaranteeCard} key={g.title}>
              <span className={styles.guaranteeIcon}>{g.icon}</span>
              <div>
                <h4 className={styles.guaranteeTitle}>{g.title}</h4>
                <p className={styles.guaranteeDesc}>{g.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.stackWrap}>
          <h3 className={styles.stackTitle}>
            The enterprise-grade tools we build with
          </h3>
          <div className={styles.stack}>
            {TECHNOLOGIES.map((t) => (
              <span className={styles.tech} key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
