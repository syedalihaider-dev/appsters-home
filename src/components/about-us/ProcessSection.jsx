"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ActionButtons from "@/components/ui/ActionButtons";
import styles from './ProcessSection.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const processes = [
    {
      title: "APP IDEA & RESEARCH",
      description: "Every dynamic app begins with a validated idea. As a full-cycle development company, Appsters conducts market analysis, competitor benchmarks, and feasibility audits to ensure your concept is both innovative and executable. This foundation minimizes downstream risk and builds confidence in investment and direction before a single line of code is written.",
      icon: "/images/about-us/1.webp"
    },
    {
      title: "UI/UX STRATEGY & DESIGN",
      description: "Design is where your product begins to breathe. Appsters blends user psychology, motion dynamics, and functional design systems to create experiences that feel natural and stay consistent. Our design-first approach ensures your app doesn't just feel good but functions brilliantly as per your industry standards and defined objectives.",
      icon: "/images/about-us/2.webp"
    },
    {
      title: "ARCHITECTURE & PROTOTYPING",
      description: "Wireframes reduce uncertainty and prevent rework, and every scalable app is born from robust architecture. Our engineers design frameworks that ensure smooth data flow, security, and the ability to handle future user growth seamlessly.",
      icon: "/images/about-us/3.webp"
    },
    {
      title: "AGILE DEVELOPMENT",
      description: "Our expert developers write clean, maintainable code using the latest technologies. We follow agile methodologies, ensuring transparency, regular updates, and the flexibility to adapt to changing requirements throughout the development lifecycle.",
      icon: "/images/about-us/4.webp"
    },
    {
      title: "QUALITY ASSURANCE & TESTING",
      description: "We conduct rigorous testing across multiple devices and platforms to ensure your app is bug-free, secure, and performs optimally under various conditions. Our QA team tests for usability, performance, and security.",
      icon: "/images/about-us/5.webp"
    },
    {
      title: "DEPLOYMENT & LAUNCH",
      description: "From app store optimization to the final submission process, we handle everything required to get your app successfully launched on the Apple App Store and Google Play Store.",
      icon: "/images/about-us/6.webp"
    },
    {
      title: "POST-LAUNCH SUPPORT",
      description: "Our partnership doesn't end at launch. We provide ongoing maintenance, performance monitoring, and regular updates to ensure your app remains competitive and compatible with the latest OS versions.",
      icon: "/images/about-us/7.webp"
    }
  ];

  const activeStepRef = useRef(0);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      const wrapper = cardsWrapperRef.current;
      const section = sectionRef.current;
      if (!wrapper || !section) return;

      const getTotalMove = () => {
        const containerHeight = containerRef.current?.clientHeight || 650;
        const wrapperHeight = wrapper.scrollHeight;
        return Math.max(0, wrapperHeight - containerHeight + 80);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${wrapper.scrollHeight + 300}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const stepIndex = Math.min(
              processes.length - 1,
              Math.max(0, Math.floor(self.progress * processes.length))
            );
            if (activeStepRef.current !== stepIndex) {
              activeStepRef.current = stepIndex;
              setActiveStep(stepIndex);
            }
          },
        },
      });

      tl.to(wrapper, {
        y: () => -getTotalMove(),
        ease: "none",
        duration: 1,
        force3D: true,
      });

      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        clearTimeout(refreshTimeout);
        tl.kill();
        if (wrapper) {
          gsap.set(wrapper, { clearProps: "transform" });
        }
      };
    });

    mm.add("(max-width: 991px)", () => {
      if (cardsWrapperRef.current) {
        gsap.set(cardsWrapperRef.current, { clearProps: "transform" });
      }
    });

    return () => mm.revert();
  }, [processes.length]);

  return (
    <section className={styles.processSection} ref={sectionRef}>
      <div className={`container ${styles.container}`} ref={containerRef}>
        <div className={styles.leftSide}>
          <div className={styles.stickyContent}>
            <span className={styles.transparentHeading}>PROCESS</span>
            <h2 className={styles.mainHeading}>
              A BATTLE-TESTED MOBILE APP<br />
              <span className={styles.highlightText}>DEVELOPMENT PROCESS</span>
            </h2>
            <p className={styles.paragraph}>
              Every successful mobile application begins with a structured, intelligent process. At Appsters, we follow a data-driven workflow that combines design thinking, technical precision, and continuous iteration. From research and wireframing to deployment and post-launch monitoring, our process ensures consistency, quality, and long-term scalability.
            </p>
            <div className="combo_btn">
              <ActionButtons />
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.timelineLine}>
            {/* <div className={styles.timelineProgress}>
              <div className={styles.pointerDot}></div>
            </div> */}
          </div>
          <div className={styles.cardsWrapper} ref={cardsWrapperRef}>
            {processes.map((process, index) => (
              <div
                key={index}
                className={`${styles.cardItem} ${activeStep === index ? styles.active : ''}`}
              >
                <div className={styles.cardNumber}>
                  0{index + 1}.
                </div>
                <div className={styles.cardContentWrapper}>
                  <div className={styles.capWrapper}>
                    <Image
                      src="/images/about-us/transparent-cap.webp"
                      alt="cap"
                      width={571}
                      height={41}
                      className={styles.capImage}
                      unoptimized
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                      <Image
                        src={process.icon}
                        alt={process.title}
                        width={57}
                        height={58}
                      />
                    </div>
                    <h3 className={styles.cardTitle}>{process.title}</h3>
                    <p className={styles.cardText}>{process.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
