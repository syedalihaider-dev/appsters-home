"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './EngagementModels.module.css'

const EngagementModels = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0); // Dedicated Team is at index 0

    const data = {
        attributes: [
            "Flexibility",
            "Control Over Team",
            "Team Availability",
            "Client Involvement",
            "Best for"
        ],
        models: [
            {
                name: "Dedicated Team",
                values: ["High", "Full control", "Full-time", "High", "Long-term Projects"]
            },
            {
                name: "Fixed Price",
                values: ["Low", "Limited control", "As Needed", "Low", "Defined Projects"]
            },
            {
                name: "Hourly Price",
                values: ["Medium", "Moderate control", "On-demand", "Medium", "Small Tasks"]
            },
            {
                name: "Onsite Team",
                values: ["High", "Full control", "Full-time Onsite", "High", "Close Collaboration"]
            }
        ]
    };

    return (
        <section className={styles.engagementSection}>
            <div className="container">
                <h2 className={styles.title}>
                    Great apps don’t wait <br /> <span className={styles.highlight}> Neither should you
                        <Image src="/images/mobile-app-studio/spring-vector.png" alt="line" width={529} height={30} className={styles.spring} />
                    </span>
                </h2>

                <div className={styles.tableCard}>
                    <div className={styles.modelsGrid}>
                        {/* Attributes Column */}
                        <div className={styles.attributeCol}>
                            <div className={styles.headerCell}></div>
                            {data.attributes.map((attr, i) => (
                                <div key={i} className={styles.cell}>{attr}</div>
                            ))}
                        </div>

                        {/* Model Columns */}
                        {data.models.map((model, index) => (
                            <div
                                key={index}
                                className={`${styles.column} ${hoveredIndex === index ? styles.isActive : ""}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(0)} // Revert to index 0 on leave
                            >
                                <div className={styles.headerCell}>{model.name}</div>
                                {model.values.map((val, i) => (
                                    <div key={i} className={styles.cell}>{val}</div>
                                ))}
                                <div className={styles.ctaWrapper}>
                                    <a href="#" className={`${styles.letsTalk} chat`}>
                                        • LET'S TALK! &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EngagementModels
