"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";
import styles from "./SectorsSection.module.css";

const defaultSectorsData = [
  {
    id: "on-demand",
    tabTitle: "ON-DEMAND APP SOLUTION",
    heading: "ON-DEMAND APP SOLUTION",
    desc1: "With a strong focus on delivering excellence, our onDemand App Solutions are your one-stop destination to create customized end-to-end specific solutions for your needs. Let us know about your requirements and we’ll develop an efficient solution that fulfills your every need..",
    desc2: "With a strong focus on delivering excellence, our onDemand App Solutions are your one-stop destination to create customized end-to-end specific solutions for your needs. Let us know about your requirements..",
    img: "/images/industries/on-demand-mockup.jpg",
  },
  {
    id: "ecommerce",
    tabTitle: "ECOMMERCE & MARKETPLACE",
    heading: "ECOMMERCE & MARKETPLACE",
    desc1: "We build high-converting ecommerce platforms and multi-vendor marketplaces that scale effortlessly with your sales volume. From smooth catalog browsing to secure one-click checkouts, our solutions drive measurable revenue growth.",
    desc2: "With robust inventory management, AI recommendation engines, and seamless third-party integrations, we make buying and selling intuitive for mobile and web users alike.",
    img: "/images/industries/ecommerce.webp",
  },
  {
    id: "food-beverage",
    tabTitle: "FOOD & BEVERAGE SOLUTION",
    heading: "FOOD & BEVERAGE SOLUTION",
    desc1: "Transform your restaurant or food delivery business with custom ordering platforms, kitchen display systems, and real-time order tracking that delight hungry customers.",
    desc2: "Our food and beverage tech solutions streamline table reservations, digital contactless menus, loyalty programs, and last-mile delivery logistics to maximize repeat orders.",
    img: "/images/industries/Cutting-Edge.png",
  },
  {
    id: "pickup-delivery",
    tabTitle: "PICKUP & DELIVERY SOLUTION",
    heading: "PICKUP & DELIVERY SOLUTION",
    desc1: "Optimize last-mile deliveries with intelligent route optimization, automated customer notifications, and digital proof of delivery for courier, grocery, and parcel businesses.",
    desc2: "Empower drivers with intuitive mobile apps while giving dispatchers full visibility into fleet performance, ETA predictions, and delivery compliance in real time.",
    img: "/images/industries/logistics.webp",
  },
  {
    id: "blockchain",
    tabTitle: "BLOCKCHAIN SOLUTION",
    heading: "BLOCKCHAIN SOLUTION",
    desc1: "Pioneer decentralized applications with smart contracts, crypto wallets, NFT marketplaces, and tamper-proof ledger architectures engineered for modern digital enterprises.",
    desc2: "We bring transparency, security, and immutability to financial transactions, supply chain tracking, and digital identity management across high-stakes industries.",
    img: "/images/industries/fintech.webp",
  },
  {
    id: "healthcare",
    tabTitle: "HEALTHCARE SOLUTION",
    heading: "HEALTHCARE SOLUTION",
    desc1: "HIPAA-compliant telemedicine platforms, patient portals, and EHR integrations designed to enhance patient care and streamline clinical workflows for modern health providers.",
    desc2: "Our healthcare mobile apps combine strict data security with intuitive appointment scheduling, prescription refills, and remote health monitoring.",
    img: "/images/industries/healthcare.webp",
  },
];

const contentVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

export default function SectorsSection({ data = {} }) {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1);
  const tabRefs = useRef([]);
  const tabsContainerRef = useRef(null);

  const mainTitle = data.mainTitle || "SERVING 40+ SECTORS WITH MOBILE<br />APP DEVELOPMENT IN HOUSTON";
  const sectorsData = data.sectorsData || defaultSectorsData;

  const scrollToTab = (index) => {
    const container = tabsContainerRef.current;
    const tab = tabRefs.current[index];
    if (container && tab) {
      const containerWidth = container.offsetWidth;
      const tabOffsetLeft = tab.offsetLeft;
      const tabWidth = tab.offsetWidth;
      const targetScrollLeft = tabOffsetLeft - containerWidth / 2 + tabWidth / 2;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const changeTab = (newIndex, newDirection) => {
    if (newIndex === activeTab) return;
    setDirection(newDirection);
    setActiveTab(newIndex);
    scrollToTab(newIndex);
  };

  const handleTabClick = (index) => {
    const dir = index > activeTab ? 1 : -1;
    changeTab(index, dir);
  };

  const handlePrev = () => {
    const newIndex = activeTab === 0 ? sectorsData.length - 1 : activeTab - 1;
    changeTab(newIndex, -1);
  };

  const handleNext = () => {
    const newIndex = activeTab === sectorsData.length - 1 ? 0 : activeTab + 1;
    changeTab(newIndex, 1);
  };

  const currentSector = sectorsData[activeTab] || sectorsData[0];

  return (
    <section className={styles.sectorsSection}>
      <div className="container">
        {/* Main Section Heading */}
        <div className={styles.titleWrap}>
          <h2 className={styles.mainTitle} dangerouslySetInnerHTML={{ __html: mainTitle }}></h2>
        </div>

        {/* Tab Navigation Row */}
        <div className={styles.tabNavWrapper}>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={`${styles.arrowBtn} ${styles.leftArrow}`}
            onClick={handlePrev}
            aria-label="Previous Tab"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <div className={styles.tabsContainer} ref={tabsContainerRef}>
            {sectorsData.map((sector, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={sector.id || index}
                  ref={(el) => (tabRefs.current[index] = el)}
                  className={`${styles.tabItem} ${isActive ? styles.activeTab : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  <span>{sector.tabTitle}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className={styles.activeUnderline}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={`${styles.arrowBtn} ${styles.rightArrow}`}
            onClick={handleNext}
            aria-label="Next Tab"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Content Area */}
        <div className={styles.contentWrap}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="row align-items-center"
            >
              {/* Left Text Column */}
              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div className={styles.textContent}>
                  <h3 className={styles.sectorHeading}>{currentSector.heading}</h3>
                  <p className={styles.sectorDesc}>{currentSector.desc1}</p>
                  <p className={styles.sectorDesc}>{currentSector.desc2}</p>
                  <div className={styles.btnRow}>
                    <ActionButtons text="Get a Quote" textClassName={styles.redBtnText} />
                    <ActionButtons text="Call Us Now" href={SITE_PHONE_LINK} textClassName={styles.redBtnText} />
                  </div>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="col-12 col-lg-6">
                <div className={styles.imageCard}>
                  <Image
                    src={currentSector.img}
                    alt={currentSector.heading}
                    width={640}
                    height={420}
                    style={{ objectFit: "cover", width: "100%", height: "auto" }}
                    className={styles.sectorImg}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
