"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Banner.module.css'
import { useRouter } from 'next/navigation'

const Banner = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("");
    const [customQuote, setCustomQuote] = useState("");

    const services = [
        "Mobile App Development",
        "Web App Development",
        "SaaS Platform",
        "MVP Development",
        "Game Development",
        "Blockchain Solutions",
        "Business Proposal"
    ];

    const standardBudgets = [
        "$3,000 to $5,000",
        "$5,000 to $10,000",
        "$10,000 to $25,000",
        "$25,000 to $50,000",
        "Request a custom quote"
    ];

    const proposalBudgets = [
        "$999 – Starter Proposal",
        "$2,499 – Investor Ready Proposal",
        "$4,900 – Corporate Proposal Pack",
        "Request a custom quote (Corporate / Enterprise)"
    ];

    const currentBudgets = selectedService === "Business Proposal" ? proposalBudgets : standardBudgets;

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Custom Quote Validation
        if (selectedBudget.toLowerCase().includes("custom quote")) {
            if (!customQuote || parseInt(customQuote) < 30000) {
                alert("The minimum custom quote is $30,000. Please enter a valid amount.");
                return;
            }
        }

        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            service: selectedService,
            budget: selectedBudget,
            customQuote: selectedBudget.toLowerCase().includes("custom quote") ? customQuote : "",
            message: formData.get("message"),
            pageUrl: window.location.href
        };

        try {
            const response = await fetch("/api/lp-mobile-app-studio", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                router.push("/lp/mobile-app-studio/thank-you");
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='banner' className={styles.banner}>
            <Image src="/images/mobile-app-studio/banner.png" alt="banner-bg" priority fill className={styles.bannerBg} />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className={styles.content}>
                            <h1 className={styles.title}>
                                Apps &
                                <span className={styles.highlightBling}> Digital
                                    <Image src="/images/mobile-app-studio/highlight-bling.png" alt="spring vector" width={57} height={55} className={styles.highlightBlingAfter} />
                                </span> Ecosystems That Scale With Your <span className={styles.specialist}>Growth.
                                    <Image src="/images/mobile-app-studio/spring-vector.png" alt="underline" width={423} height={22} className={styles.springVector} />
                                </span>
                            </h1>
                            <p className={styles.desc}>
                                Engineered for results. Obsessed over by users. Architected for the AI era.
                                Appsters builds the mobile apps and digital ecosystems that dominate today’s
                                market and define tomorrow’s.
                            </p>
                            <a href="#contact" className={styles.ctaBtn}>Get Started</a>

                            <div className={styles.awards}>
                                <Image src="/images/mobile-app-studio/clutch-awards.png" alt="clutch" width={100} height={109} />
                                <Image src="/images/mobile-app-studio/appfutura-award.png" alt="appfutura" width={123} height={105} />
                                <Image src="/images/mobile-app-studio/goodfirms-award.png" alt="goodfirms" width={119} height={103} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.formCard}>
                            <div className={styles.star}>
                                <Image src="/images/mobile-app-studio/star.png" alt="star" width={67} height={74} className={styles.starImg} />
                            </div>
                            <h3>Let’s turn ideas into impact.</h3>
                            <p>Talk to our experts for a free consultation.</p>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.inputGroup}>
                                    <input type="text" name="name" placeholder="Full Name*" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="email" name="email" placeholder="Email Address*" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="number" name="phone" placeholder="Phone Number*" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <select
                                        name="service"
                                        className={styles.selectInput}
                                        required
                                        value={selectedService}
                                        onChange={(e) => {
                                            setSelectedService(e.target.value);
                                            setSelectedBudget("");
                                        }}
                                    >
                                        <option value="" disabled>Select Services*</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                                {selectedService && (
                                    <div className={styles.inputGroup}>
                                        <select
                                            name="budget"
                                            className={styles.selectInput}
                                            required
                                            value={selectedBudget}
                                            onChange={(e) => setSelectedBudget(e.target.value)}
                                        >
                                            <option value="" disabled>Estimated Budget / Scope*</option>
                                            {currentBudgets.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                {selectedBudget.toLowerCase().includes("custom quote") && (
                                    <div className={styles.inputGroup}>
                                        <input
                                            type="number"
                                            name="customQuote"
                                            required
                                            value={customQuote}
                                            onChange={(e) => setCustomQuote(e.target.value)}
                                            placeholder="Enter Custom Quote (Min $30,000)*"
                                            min="30000"
                                        />
                                    </div>
                                )}
                                <div className={styles.inputGroup}>
                                    <textarea name="message" placeholder="Tell us about your Requirements*" rows="3" required></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? "SENDING..." : "SUBMIT NOW"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={styles.trustedBox}>
                    <div className={styles.headingBox}>
                        <Image src="/images/mobile-app-studio/heading-line.png" alt="line" width={134} height={2} className={styles.lineLeft} />
                        <h2 className={styles.headingBoxTitle}>TRUSTED BY INDUSTRY</h2>
                        <Image src="/images/mobile-app-studio/heading-line.png" alt="line" width={134} height={2} className={styles.lineRight} />
                    </div>
                    <div className={styles.logoRow}>
                        <div className={styles.logoItem}><Image src="/images/mobile-app-studio/industry-icon-01.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/images/mobile-app-studio/industry-icon-02.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/images/mobile-app-studio/industry-icon-03.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/images/mobile-app-studio/industry-icon-04.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/images/mobile-app-studio/industry-icon-05.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/images/mobile-app-studio/industry-icon-01.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/images/mobile-app-studio/industry-icon-02.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/images/mobile-app-studio/industry-icon-03.png" alt="logo" width={120} height={40} /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
