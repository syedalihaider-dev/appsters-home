import React from 'react'
import styles from './IndustryServices.module.css'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

const servicesData = [
    {
        title: "Fintech & Banking Apps",
        icon: "💰",
        description: "Secure, PCI-DSS compliant payment platforms and digital banking apps built for trust at scale.",
        features: [
            "Bank-grade encryption & security",
            "Real-time payment processing",
            "Multi-currency & crypto support",
            "KYC / AML compliance built-in"
        ],
        linkText: "Start your fintech app",
        linkUrl: "#contact"
    },
    {
        title: "Healthcare & Telemedicine",
        icon: "🏥",
        description: "HIPAA-compliant patient management and telemedicine platforms that modernize care delivery.",
        features: [
            "HIPAA & HITECH compliant",
            "EHR / EMR integration",
            "Video consultation & chat",
            "Prescription & appointment tools"
        ],
        linkText: "Start your health app",
        linkUrl: "#contact"
    },
    {
        title: "E-Commerce & Retail Apps",
        icon: "🛒",
        description: "High-performance mobile shopping apps with seamless checkout, loyalty programs, and inventory sync.",
        features: [
            "One-tap mobile checkout",
            "Real-time inventory tracking",
            "AI-powered product recommendations",
            "Shopify / WooCommerce integrations"
        ],
        linkText: "Start your ecommerce app",
        linkUrl: "#contact"
    },
    {
        title: "On-Demand & Logistics Apps",
        icon: "🚗",
        description: "Uber-style on-demand platforms with live tracking, smart dispatching, and real-time analytics.",
        features: [
            "Live GPS tracking & routing",
            "Driver & fleet management",
            "In-app payments & tipping",
            "Multi-stop delivery optimization"
        ],
        linkText: "Start your on-demand app",
        linkUrl: "#contact"
    },
    {
        title: "Real Estate & PropTech",
        icon: "🏠",
        description: "Property marketplace apps that connect buyers, sellers, and agents with intelligent search and virtual tours.",
        features: [
            "3D virtual property tours",
            "AI-powered property matching",
            "Mortgage calculator & CRM",
            "Agent commission management"
        ],
        linkText: "Start your proptech app",
        linkUrl: "#contact"
    },
    {
        title: "AI-Powered Mobile Apps",
        icon: "🤖",
        description: "Next-gen apps powered by ChatGPT, computer vision, NLP, and predictive analytics — built for tomorrow.",
        features: [
            "ChatGPT & LLM integration",
            "Computer vision & image AI",
            "Predictive analytics dashboards",
            "Voice recognition & NLP"
        ],
        linkText: "Start your AI app",
        linkUrl: "#contact"
    }
]

const technologies = [
    { title: "iOS", subtitle: "NATIVE APP DEVELOPMENT" },
    { title: "Android", subtitle: "NATIVE APP DEVELOPMENT" },
    { title: "Flutter", subtitle: "CROSS-PLATFORM APPS" },
    { title: "React Native", subtitle: "CROSS-PLATFORM APPS" }
]

const IndustryServices = () => {
    return (
        <section className={styles.servicesSection} id="services">
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span> OUR EXPERTISE
                        </div>
                        <h2 className={styles.mainTitle}>
                            Custom Mobile App Development<br />
                            Services for <span className={styles.highlight}>Every Industry</span>
                        </h2>
                        <p className={styles.mainDesc}>
                            We don't build generic apps. Every solution is engineered for your industry's specific compliance requirements, user expectations, and growth goals — from MVP to enterprise scale.
                        </p>
                    </div>
                </div>

                <div className="row mt-5">
                    {servicesData.map((service, index) => (
                        <div className="col-lg-4 col-md-6 mb-4 d-flex" key={index}>
                            <div className={styles.serviceCard}>
                                <div className={styles.iconBox}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                                <ul className={styles.featureList}>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <FaCheck className={styles.checkIcon} /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={service.linkUrl} className={styles.cardLink}>
                                    {service.linkText} <FaArrowRight className={styles.arrowIcon} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <div className={styles.techBar}>
                            {technologies.map((tech, index) => (
                                <div className={styles.techItem} key={index}>
                                    <h4 className={styles.techTitle}>{tech.title}</h4>
                                    <p className={styles.techSubtitle}>{tech.subtitle}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndustryServices
