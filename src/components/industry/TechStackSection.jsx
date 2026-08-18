"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TechStackSection.module.css";

const techData = {
  Design: [
    {
      name: "Adobe XD",
      icon: (
        <div className={styles.adobeXdBadge}>
          Xd
        </div>
      ),
    },
    {
      name: "Adobe Illustrator",
      icon: (
        <div className={styles.adobeAiBadge}>
          Ai
        </div>
      ),
    },
    {
      name: "Balsamiq",
      icon: (
        <div className={styles.balsamiqBadge}>
          b
        </div>
      ),
    },
    {
      name: "InVision",
      icon: (
        <div className={styles.invisionBadge}>
          in
        </div>
      ),
    },
    {
      name: "Figma",
      icon: (
        <svg width="28" height="28" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      ),
    },
    {
      name: "Adobe Photoshop",
      icon: (
        <div className={styles.adobePsBadge}>
          Ps
        </div>
      ),
    },
  ],
  Frontend: [
    {
      name: "React Native",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#20232a", color: "#61dafb" }}>
          RN
        </div>
      ),
    },
    {
      name: "Flutter",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#02569B", color: "#01B5F8" }}>
          Fl
        </div>
      ),
    },
    {
      name: "iOS (Swift)",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#F05138", color: "#FFFFFF" }}>
          Sw
        </div>
      ),
    },
    {
      name: "Android (Kotlin)",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#7F52FF", color: "#FFFFFF" }}>
          Kt
        </div>
      ),
    },
    {
      name: "React.js",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#20232a", color: "#61dafb" }}>
          Re
        </div>
      ),
    },
    {
      name: "Vue.js",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#41B883", color: "#35495E" }}>
          Vu
        </div>
      ),
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#339933", color: "#FFFFFF" }}>
          Node
        </div>
      ),
    },
    {
      name: "Python",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#3776AB", color: "#FFD43B" }}>
          Py
        </div>
      ),
    },
    {
      name: "PHP",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#777BB4", color: "#FFFFFF" }}>
          PHP
        </div>
      ),
    },
    {
      name: "Java",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#5382A1", color: "#E76F00" }}>
          Jv
        </div>
      ),
    },
    {
      name: "Ruby on Rails",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#CC0000", color: "#FFFFFF" }}>
          RoR
        </div>
      ),
    },
    {
      name: ".NET Core",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#512BD4", color: "#FFFFFF" }}>
          .NET
        </div>
      ),
    },
  ],
  Database: [
    {
      name: "MongoDB",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#47A248", color: "#FFFFFF" }}>
          Mg
        </div>
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#4169E1", color: "#FFFFFF" }}>
          Pg
        </div>
      ),
    },
    {
      name: "MySQL",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#4479A1", color: "#F29111" }}>
          My
        </div>
      ),
    },
    {
      name: "Firebase",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#FFCA28", color: "#039BE5" }}>
          Fb
        </div>
      ),
    },
    {
      name: "SQLite",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#003B57", color: "#409FFF" }}>
          Lite
        </div>
      ),
    },
    {
      name: "Redis",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#DC382D", color: "#FFFFFF" }}>
          Rd
        </div>
      ),
    },
  ],
  Cloud: [
    {
      name: "AWS",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#232F3E", color: "#FF9900" }}>
          AWS
        </div>
      ),
    },
    {
      name: "Google Cloud",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#4285F4", color: "#FFFFFF" }}>
          GCP
        </div>
      ),
    },
    {
      name: "Microsoft Azure",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#0089D6", color: "#FFFFFF" }}>
          Az
        </div>
      ),
    },
    {
      name: "Docker",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#2496ED", color: "#FFFFFF" }}>
          Doc
        </div>
      ),
    },
    {
      name: "Kubernetes",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#326CE5", color: "#FFFFFF" }}>
          K8s
        </div>
      ),
    },
    {
      name: "Vercel",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#000000", color: "#FFFFFF" }}>
          Ver
        </div>
      ),
    },
  ],
  Framework: [
    {
      name: "Next.js",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#000000", color: "#FFFFFF" }}>
          Nxt
        </div>
      ),
    },
    {
      name: "Express.js",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#303030", color: "#FFFFFF" }}>
          Exp
        </div>
      ),
    },
    {
      name: "Django",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#092E20", color: "#44B78B" }}>
          Dj
        </div>
      ),
    },
    {
      name: "Laravel",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#FF2D20", color: "#FFFFFF" }}>
          Lv
        </div>
      ),
    },
    {
      name: "Spring Boot",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#6DB33F", color: "#FFFFFF" }}>
          Sb
        </div>
      ),
    },
    {
      name: "NestJS",
      icon: (
        <div className={styles.genericBadge} style={{ background: "#E0234E", color: "#FFFFFF" }}>
          Nest
        </div>
      ),
    },
  ],
};

const tabs = ["Design", "Frontend", "Backend", "Database", "Cloud", "Framework"];

const contentVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    filter: "blur(4px)",
    scale: 0.98,
  }),
  animate: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    filter: "blur(4px)",
    scale: 0.98,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState("Design");
  const [direction, setDirection] = useState(1);

  const handleTabChange = (newTab, newIndex) => {
    if (newTab === activeTab) return;
    const currentIndex = tabs.indexOf(activeTab);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
  };

  return (
    <section className={styles.techStackSection}>
      <div className="container">
        {/* Top Header Row */}
        <div className="row align-items-center mb-5">
          <div className="col-12 col-lg-6 mb-3 mb-lg-0">
            <h2 className={styles.mainHeading}>
              MOBILE APP DEVELOPMENT: <br />A TECH STACK FOR THE BOLD
            </h2>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <p className={styles.headerDescription}>
              Modern frameworks, Smarter code, Stronger results, Trusted by app developers worldwide. Appsters is your next-generation mobile app development company, co-creating disruptive ecosystems and digital products.
            </p>
          </div>
        </div>

        {/* Outer Light Gray Card */}
        <div className={styles.outerCard}>
          {/* Tab Navigation Bar */}
          <div className={styles.tabBar}>
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  className={`${styles.tabBtn} ${isActive ? styles.activeTabBtn : ""}`}
                  onClick={() => handleTabChange(tab, index)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTechTabBg"
                      className={styles.activePillBg}
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className={styles.tabBtnText}>{tab}</span>
                </button>
              );
            })}
          </div>

          {/* Inner White Content Card */}
          <div className={styles.innerCardWrapper}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeTab}
                custom={direction}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={styles.innerCard}
              >
                <h3 className={styles.categoryTitle}>{activeTab.toUpperCase()}</h3>

                <div className={styles.techGrid}>
                  {techData[activeTab].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.035 }}
                      className={styles.techItem}
                    >
                      <div className={styles.iconContainer}>
                        {item.icon}
                      </div>
                      <span className={styles.techName}>{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

