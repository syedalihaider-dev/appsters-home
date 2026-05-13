import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './Process.module.css'

const Process = () => {
    const [progress, setProgress] = useState(0);
    const rightColRef = useRef(null);

    const steps = [
        {
            num: "01.",
            subtitle: "Discovery",
            title: "App Idea & Research",
            desc: "Every project starts with a dissected discovery process. Our team conducts market research, competitive benchmarking, and feasibility analysis to define a clear direction.We identify user pain points, explore monetization opportunities, and validate assumptions using real data.This early research minimizes risk, sets realistic timelines, and ensures your mobile app development investment targets measurable business outcomes from day one."
        },
        {
            num: "02.",
            subtitle: "Flows",
            title: "Strategic Planning & Consultation",
            desc: "Once we have clarity, we build a strategy around it. Roadmaps define project milestones, technical stack recommendations, and budget allocations. We work closely with stakeholders to align features with business priorities. This stage converts big-picture goals into actionable steps, ensuring transparency for CTOs, founders, and PMs before a single line of code is written."
        },
        {
            num: "03.",
            subtitle: "Wireframes",
            title: "Wireframing & Prototyping",
            desc: "We translate strategy into structure with interactive wireframes and clickable prototypes. This allows stakeholders to visualize user flows, review navigation, and refine the experience early. We focus on UI/UX design principles, accessibility, and usability testing at this stage. Prototyping reduces costly rework, shortens feedback cycles, and secures stakeholder buy-in before development begins."
        },
        {
            num: "04.",
            subtitle: "UI/UX Design",
            title: "App Development",
            desc: "Our engineering team builds production-ready code using agile sprints and version control. Native, cross-platform, AI-driven, or hybrid; we match the approach to your project needs. Continuous integration and peer code reviews maintain quality throughout the development process. By keeping development modular and scalable, we enable faster, cheaper, and more reliable future updates, while also keeping technical debt under control"
        },
        {
            num: "05.",
            subtitle: "Development",
            title: "Expert QA & Testing",
            desc: "No app leaves our hands without rigorous testing. Our QA specialists run automated and manual tests covering performance, security, usability, and edge cases. We stress-test across devices, operating systems, and network conditions to ensure consistency. This proactive approach prevents bugs from reaching users and protects your brand reputation before launch day."
        },
        {
            num: "06.",
            subtitle: "Quality Assurance",
            title: "App Launch",
            desc: "A strong launch sets the tone for adoption. We handle app store submissions, compliance checks, and performance monitoring during the rollout. Our launch playbook ensures proper versioning, crash reporting, and analytics tracking from day one. This provides immediate insights into user behavior, allowing quick adjustments to drive engagement and retention post-launch."
        },
        {
            num: "07.",
            subtitle: "Deployment",
            title: "Deployment",
            desc: "We integrate your solution into production environments using zero-downtime deployment strategies. Our team ensures that backend configurations, APIs, and third-party services are stable and in sync. Continuous deployment pipelines keep future releases smooth and predictable. With a focus on scalability, we prepare our infrastructure for peak traffic scenarios from the very first release."
        }
    ];

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setProgress(scrollPercent);
    };

    return (
        <section className={styles.processSection}>
            <div className="container">
                <div className={styles.headingBox}>
                    <h2 className={styles.title}>
                        From Ideas To <span className={styles.highlight}>Architectures.
                            {/* <Image src="/images/mobile-app-studio/spring-vector.png" alt="spring" width={300} height={20} className={styles.spring} /> */}
                        </span> <br /> A Battle-Tested Process That Delivers Results.
                    </h2>
                    <p className={styles.topDesc}>
                        Great apps don’t happen by chance, as disruptive apps follow a results-focused
                        process. At Appsters, every project moves through carefully structured stages
                        that minimize risk, accelerate delivery, and keep everyone aligned
                    </p>
                </div>

                <div className={styles.contentRow}>
                    <div className={styles.leftCol}>
                        <div className={styles.imgBox}>
                            <Image
                                src="/images/mobile-app-studio/discovery.png"
                                alt="Discovery Process"
                                width={600}
                                height={450}
                                className="w-100 h-auto"
                            />
                        </div>
                        <a href="#contact" className={styles.readMoreBtn}>Get Started</a>
                    </div>

                    <div className={styles.rightCol}>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ height: `${progress}%` }}
                            ></div>
                        </div>

                        <div className={styles.scrollWrapper} onScroll={handleScroll}>
                            <div className={styles.stepsList}>
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.stepItem}`}
                                    >
                                        <span className={styles.num}>{step.num}</span>
                                        <span className={styles.subtitle}>{step.subtitle}</span>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <p className={styles.stepDesc}>{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
