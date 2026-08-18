"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";
import styles from "./IdeasSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ideasData = [
  {
    id: "ai",
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "AI-powered apps are reshaping industries, and we make them practical for your business. From intelligent automation to decision-support systems, our AI apps are designed for production, not prototypes.",
    tags: [
      "Predictive Analytics for Smarter Decisions",
      "Intelligent Process Automation",
      "Machine Learning Models Built for Production",
      "AI Apps That Scale with Your Business",
    ],
    image: "/images/contact/ideas-img-1.png",
  },
  {
    id: "ar-vr",
    title: "AR/VR",
    description:
      "AR/VR technology is driving new possibilities in training, retail, and entertainment. We build immersive experiences that merge the digital and physical worlds, helping your users engage deeper, learn faster, and interact in ways that are intuitive.",
    tags: [
      "Augmented Reality for Retail and Training",
      "Virtual Reality Simulations",
      "Interactive 3D Content Development",
      "Cross-Platform AR/VR App Deployment",
    ],
    image: "/images/contact/ideas-img-2.png",
  },
  {
    id: "blockchain",
    title: "BLOCKCHAIN",
    description:
      "Blockchain app development is about more than crypto, as it's about secure, verifiable, and transparent transactions for your business. We create blockchain apps that support smart contracts, tamper-proof.",
    tags: [
      "Decentralized App (dApp) Development",
      "Smart Contract Development",
      "Secure Transaction and Data Validation",
      "Enterprise-Ready Blockchain Integration",
    ],
    image: "/images/contact/ideas-img-3.png",
  },
];

export default function IdeasSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Smooth Fade-Up
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Individual Cards Entrance
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const graphic = card.querySelector(`.${styles.graphicArea}`);
        const tags = card.querySelectorAll(`.${styles.tagItem}`);

        // Card Container Entrance
        gsap.fromTo(
          card,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Graphic Area Entrance
        if (graphic) {
          gsap.fromTo(
            graphic,
            { opacity: 0, x: 30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              delay: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Tags Micro-Stagger Entrance
        if (tags.length) {
          gsap.fromTo(
            tags,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.05,
              ease: "power1.out",
              scrollTrigger: {
                trigger: card,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.ideasSection} ref={sectionRef}>
      <div className="container">
        {/* Top Header Row */}
        <div className="row align-items-center mb-5" ref={headerRef}>
          <div className="col-12 col-lg-6 mb-3 mb-lg-0">
            <h2 className={styles.mainHeading}>
              <span className={styles.yellowText}>TRANSFORMING</span> IDEAS
              <br />
              INTO <span className={styles.yellowText}>REALITY</span>
            </h2>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <p className={styles.headerDescription}>
              Being one of the fastest-growing mobile app development companies in Houston, we are well aware of all the intricacies that could happen during app development. Our adept team of Houston app developers has the expertise to develop flawless digital apps that help generate massive revenue. Here are the top reasons why you should choose us a mobile app development company in Houston.
            </p>
          </div>
        </div>

        {/* Cards Stack */}
        <div className={styles.cardsStack}>
          {ideasData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.ideaCard}
            >
              {/* Left Content Area */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>

                {/* Feature Tags */}
                <div className={styles.tagsGrid}>
                  {item.tags.map((tag, idx) => (
                    <div key={idx} className={styles.tagItem}>
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={styles.btnRow}>
                  <ActionButtons text="Get a Quote" />
                  <ActionButtons
                    text="Call Us Now"
                    href={SITE_PHONE_LINK}
                    textClassName={styles.yellowBtnText}
                  />
                </div>
              </div>

              {/* Right Visual Graphic Area */}
              <div className={styles.graphicArea}>
                <Image
                  src="/images/contact/ideas-yellow-bg.png"
                  alt="Yellow Background Shape"
                  fill
                  className={styles.yellowBgImg}
                />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.featureImg}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
