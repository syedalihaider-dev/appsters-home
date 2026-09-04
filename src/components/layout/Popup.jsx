"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Popup.module.css';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useRouter, usePathname } from 'next/navigation';
import ClutchWidget from '../ClutchWidget';



const Popup = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [show, setShow] = useState(false);
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

    useEffect(() => {
        if (pathname?.startsWith('/lp')) return;

        // Auto-play popup after 5 seconds
        const timer = setTimeout(() => {
            setShow(true);
        }, 5000);

        // Listen for internal clicks on any element with .popupBtn
        const handlePopupTrigger = (e) => {
            if (e.target.closest('.popupBtn')) {
                e.preventDefault();
                setShow(true);
            }
        };

        document.addEventListener('click', handlePopupTrigger);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('click', handlePopupTrigger);
        };
    }, [pathname]);

    useEffect(() => {
        if (!show) return;

        const initClutchWidget = () => {
            if (typeof window !== 'undefined' && window.CLUTCHCO && typeof window.CLUTCHCO.Init === 'function') {
                window.CLUTCHCO.Init();
            }
        };

        const frame = requestAnimationFrame(initClutchWidget);
        return () => cancelAnimationFrame(frame);
    }, [show]);

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
            const response = await fetch("/api/lp-mvp-development", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setShow(false);
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

    if (!show || pathname?.startsWith('/lp')) return null;

    return (
        <div className={styles.popupOverlay} onClick={() => setShow(false)}>
            <div className={styles.popupContainer} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={() => setShow(false)}>
                    <IoCloseCircleOutline />
                </button>

                <div className="row g-0 h-100">
                    <div className={`col-md-6 col-lg-6 ${styles.leftCol}`}>
                        <div className={styles.contentBox}>
                            <h2 className={styles.title}>
                                From Idea To Launch We Build <span className={styles.highlight}>
                                    Digital Products
                                    <Image src="/images/mobile-app-studio/spring-vector.png" alt="line" width={250} height={15} className={styles.spring} />
                                </span> That Scale
                            </h2>
                            <p className={styles.description}>
                                Whether you need product strategy, UI/UX design, mobile app development, web platforms, or MVP execution, we bring the right expertise to every stage of your product journey.
                            </p>
                            <ul className={styles.featureList}>
                                <li>Strategy</li>
                                <li>Design</li>
                                <li>Development</li>
                                <li>Growth</li>
                            </ul>

                            <div className={styles.clutchBox}>
                                <ClutchWidget/>
                            </div>
                            

                            <div className={styles.partnerLogos}>
                                <Image src="/images/mobile-app-studio/popup/featherDev.png" alt="featherDev" width={151} height={37} />
                                <Image src="/images/mobile-app-studio/popup/spherule.png" alt="spherule" width={126} height={37} />
                                <Image src="/images/mobile-app-studio/popup/globalBank.png" alt="globalBank" width={151} height={37} />
                                <Image src="/images/mobile-app-studio/popup/boltshift.png" alt="boltshift" width={130} height={37} />
                            </div>
                        </div>
                    </div>

                    <div className={`col-md-6 col-lg-6 ${styles.rightCol}`}>
                        <form className={styles.formBox} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label>Full Name*</label>
                                <input type="text" name="name" placeholder="Please share your first and last Name ..." required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email Address*</label>
                                <input type="email" name="email" placeholder="yourid@domain.com" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Phone Number*</label>
                                <input type="number" name="phone" placeholder="+1 000 000 0000" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Select Services*</label>
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
                                    <option value="" disabled>Select Services</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service}>{service}</option>
                                    ))}
                                </select>
                            </div>
                            {selectedService && (
                                <div className={styles.inputGroup}>
                                    <label>Estimated Budget / Scope*</label>
                                    <select
                                        name="budget"
                                        className={styles.selectInput}
                                        required
                                        value={selectedBudget}
                                        onChange={(e) => setSelectedBudget(e.target.value)}
                                    >
                                        <option value="" disabled>Estimated Budget / Scope</option>
                                        {currentBudgets.map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            {selectedBudget.toLowerCase().includes("custom quote") && (
                                <div className={styles.inputGroup}>
                                    <label>Custom Quote ($)*</label>
                                    <input
                                        type="number"
                                        name="customQuote"
                                        required
                                        value={customQuote}
                                        onChange={(e) => setCustomQuote(e.target.value)}
                                        placeholder="Enter Custom Quote (Min $30,000)"
                                        min="30000"
                                    />
                                </div>
                            )}
                            <div className={`${styles.inputGroup} ${styles.textareaGroup}`}>
                                <label>Tell us about your Requirements*</label>
                                <textarea name="message" placeholder="Type your query" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                {isSubmitting ? "SENDING..." : "SUBMIT NOW"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
