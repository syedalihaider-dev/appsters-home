"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./DevProcess.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  {
    id: "01/06",
    number: "01/06",
    title: "IDEATE",
    description:
      "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success. Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
    image: "/images/contact/dev-process-img-1.png",
  },
  {
    id: "02/06",
    number: "02/06",
    title: "DESIGN",
    description:
      "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction. We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
    image: "/images/contact/dev-process-img-2.png",
  },
  {
    id: "03/06",
    number: "03/06",
    title: "DEVELOP",
    description:
      "Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery. Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
    image: "/images/contact/dev-process-img-3.png",
  },
  {
    id: "04/06",
    number: "04/06",
    title: "TEST",
    description:
      "Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points. Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
    image: "/images/contact/dev-process-img-4.png",
  },
  {
    id: "05/06",
    number: "05/06",
    title: "LAUNCH",
    description:
      "Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance. Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
    image: "/images/contact/dev-process-img-5.png",
  },
  {
    id: "06/06",
    number: "06/06",
    title: "SUPPORT",
    description:
      "Providing ongoing support and enhancements to ensure continued product success. Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction. We analyze your vision thoroughly to ensure the roadmap is perfectly.",
    image: "/images/contact/dev-process-img-6.png",
  },
];

export default function DevProcess() {
  const sectionRef = useRef(null);
  const stepsWrapperRef = useRef(null);
  const viewportRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const activeStepRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      const section = sectionRef.current;
      const wrapper = stepsWrapperRef.current;
      const viewport = viewportRef.current;
      if (!section || !wrapper || !viewport) return;

      const getMaxScroll = () => {
        if (!wrapper || !viewport) return 0;
        const lastItem = wrapper.lastElementChild;
        if (lastItem) {
          const itemOffset = lastItem.offsetTop;
          const itemHeight = lastItem.offsetHeight;
          const viewportH = viewport.clientHeight;
          return Math.max(0, itemOffset + itemHeight - viewportH + 20);
        }
        return Math.max(0, wrapper.scrollHeight - viewport.clientHeight);
      };

      // Native GSAP timeline with scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${processSteps.length * 360}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const rawIndex = self.progress * processSteps.length;
            const newIndex = Math.min(
              processSteps.length - 1,
              Math.max(0, Math.floor(rawIndex))
            );

            // Ref-guarded: Only trigger React state update when index actually changes
            if (activeStepRef.current !== newIndex) {
              activeStepRef.current = newIndex;
              setActiveStep(newIndex);
            }
          },
        },
      });

      tl.to(wrapper, {
        y: () => -getMaxScroll(),
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
      if (stepsWrapperRef.current) {
        gsap.set(stepsWrapperRef.current, { clearProps: "transform" });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section className={styles.devProcessSection} ref={sectionRef}>
      <div className="container h-100">
        <div className="row align-items-center h-100">
          {/* Left Column: Fixed Header & Scrollable Steps Container */}
          <div className="col-12 col-lg-6">
            <div className={styles.leftContent}>
              {/* Main Title */}
              <div className={styles.headerWrap}>
                <h2 className={styles.mainTitle}>
                  OUR <span className={styles.yellowText}>PRODUCT</span>
                  <br />
                  <span className={styles.yellowText}>DEVELOPMENT</span> PROCESS
                </h2>
              </div>

              {/* Viewport Box for Moving Steps */}
              <div className={styles.stepsViewport} ref={viewportRef}>
                <div className={styles.timelineList} ref={stepsWrapperRef}>
                  <div className={styles.timelineLine} />
                  {processSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`${styles.stepItem} ${
                        activeStep === index ? styles.activeStepItem : ""
                      }`}
                    >
                      <span className={styles.stepNumber}>{step.number}</span>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.description}</p>

                      {/* Mobile Image Display */}
                      <div className={styles.mobileImgWrap}>
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={600}
                          height={380}
                          className={styles.mobileImg}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fixed Image Card Showcase */}
          <div className="col-12 col-lg-6 d-none d-lg-block">
            <div className={styles.rightContent}>
              <div className={styles.imageCard}>
                {processSteps.map((step, index) => (
                  <Image
                    key={step.id}
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1200px) 50vw, 600px"
                    className={`${styles.showcaseImg} ${
                      activeStep === index ? styles.activeShowcaseImg : ""
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
