"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./ProcessSection.module.css";

export default function ProcessSection() {

  const steps = [
    {
      step: "01",
      title: "App Idea & Research",
      text: "Every project starts with a dissected discovery process. Our team conducts market research, competitive benchmarking, and feasibility analysis to define a clear direction. We identify user pain points, explore monetization opportunities, and validate assumptions using real data. This early research minimizes risk, sets realistic timelines, and ensures your mobile app development investment targets measurable business outcomes from day one.",
    },
    {
      step: "02",
      title: "Strategic Planning & Consultation",
      text: "Once we have clarity, we build a strategy around it. Roadmaps define project milestones, technical stack recommendations, and budget allocations. We work closely with stakeholders to align features with business priorities. This stage converts big-picture goals into actionable steps, ensuring transparency for CTOs, founders, and PMs before a single line of code is written.",
    },
    {
      step: "03",
      title: "Wireframing and Prototyping",
      text: "We translate strategy into structure with interactive wireframes and clickable prototypes. This allows stakeholders to visualize user flows, review navigation, and refine the experience early. We focus on UI/UX design principles, accessibility, and usability testing at this stage. Prototyping reduces costly rework, shortens feedback cycles, and secures stakeholder buy-in before development begins.",
    },
    {
      step: "04",
      title: "App Development",
      text: "Our engineering team builds production-ready code using agile sprints and version control. Native, cross-platform, AI-driven, or hybrid; we match the approach to your project needs. Continuous integration and peer code reviews maintain quality throughout. By keeping development modular and scalable, we enable faster, cheaper, and more reliable future updates, while also keeping technical debt under control.",
    },
    {
      step: "05",
      title: "Expert QA & Testing",
      text: "No app leaves our hands without rigorous testing. Our QA specialists run automated and manual tests covering performance, security, usability, and edge cases. We stress-test across devices, operating systems, and network conditions to ensure consistency. This proactive approach prevents bugs from reaching users and protects your brand reputation before launch day.",
    },
    {
      step: "06",
      title: "App Launch",
      text: "A strong launch sets the tone for adoption. We handle app store submissions, compliance checks, and performance monitoring during the rollout. Our launch playbook ensures proper versioning, crash reporting, and analytics tracking from day one. This provides immediate insights into user behavior, allowing quick adjustments to drive engagement and retention post-launch.",
    },
    {
      step: "07",
      title: "We integrate your solution into production environments using zero-downtime deployment strategies. Our team ensures backend configurations, APIs, and third-party services are stable and synchronized. Continuous deployment pipelines keep future releases smooth and predictable. With a focus on scalability, we prepare our infrastructure for peak traffic scenarios from the very first release.",
    },
    {
      step: "08",
      title: "Maintenance & Support",
      text: "Post-launch support is not optional for our expert mobile app developers as it’s critical. We provide ongoing monitoring, performance optimization, and security patching. Regular updates keep the app compatible with OS changes and evolving user needs. Our support model is designed to catch issues before they become costly, protecting uptime and maintaining a consistently high-quality experience for users.",
    },
  ];

  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <section className={styles.processSection}>
      <div className={styles.sec_top}>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-sm-12 col-md-6">
              <p className={styles.sub_heading}>8 Steps. 1 Powerful Outcome.</p>
              <h2>
                A <span className="primarytxt">Battle-Tested</span> App Development <span className="primarytxt">Process.</span>
              </h2>
            </div>

            <div className="col-sm-12 col-md-6">
              <p className={styles.para}>
                Great apps don’t happen by chance, as disruptive apps follow a results-focused process. At Appsters, every project moves through eight carefully structured stages that minimize risk, accelerate delivery, and keep everyone aligned. <br /><br />
                From early market research to ongoing maintenance, each step is designed to protect your investment and deliver measurable results. The outcome is not just a revolutionary app, but a reliable digital product built to scale, perform under pressure, and grow into a future-ready solution.
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.sec_content}>
        <div className={styles.sec_left}>
          <div className={styles.video}>
            <video
              src="/video/app-idea.webm"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_right}>
                <div className={styles.process_before}>
                  <Image
                    src="/images/process-before.png"
                    alt="Process Before Image..."
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.content_wrapper}>
                  <div
                    key={active}
                    className={`${styles.animate} ${animate ? styles.show : ""}`}
                  >
                    <p className={styles.step}>{steps[active].step}</p>
                    <h5 className={styles.title}>{steps[active].title}</h5>
                    <p className={styles.para}>{steps[active].text}</p>

                    <div className="combo_btn">
                      <ActionButtons />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dots_wrapper}>
          {steps.map((_, i) => (
            <div key={i} className={`${styles.dot} ${active === i ? styles.activeDot : ""}`} onClick={() => setActive(i)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
