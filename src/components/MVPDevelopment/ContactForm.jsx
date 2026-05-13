import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ContactForm.module.css';

import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SITE_EMAIL as EMAIL_ADDRESS, SITE_PHONE as PHONE_NUMBER } from "@/app/constants"
import { useRouter } from 'next/navigation';

const ContactForm = () => {
    return (
        <section className={styles.contactSection} id="contact">
            <div className="container">
                <div className={styles.headerRow}>
                    <div className={styles.leftTitle}>
                        <h2 className={styles.title}>
                            Connect With Our <span className={styles.highlight}> ‘Appsters’.
                                <Image src="/images/mobile-app-studio/spring-vector.png" alt="line" width={150} height={15} className={styles.spring} />
                            </span>
                        </h2>
                        <p className={styles.subtitle}>
                            Ready to stop iterating in your head and start pushing to production? Explore our
                            digital solutions and see how an app can change what you do.
                        </p>
                    </div>
                    <div className={styles.rightContact}>
                        <div className={styles.contactItem}>
                            <div className={styles.iconCircle}><FaPhoneAlt /></div>
                            <div className={styles.info}>
                                <span className={styles.label}>Phone</span>
                                <a href={`tel:${PHONE_NUMBER}`} className={styles.value}>{PHONE_NUMBER}</a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconCircle}><FaEnvelope /></div>
                            <div className={styles.info}>
                                <span className={styles.label}>Drop us a line</span>
                                <a href={`mailto:${EMAIL_ADDRESS}`} className={styles.value}>{EMAIL_ADDRESS}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <FormContent />
            </div>
        </section>
    );
};

const FormContent = () => {
    const router = useRouter();
    const [selectedService, setSelectedService] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("");
    const [customQuote, setCustomQuote] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                router.push("/lp/mvp-development/thank-you");
            } else {
                alert("Thinking happened. Please try again or call us.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Submission failed. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

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

    return (
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
            <div className="row gy-4">
                <div className="col-lg-6">
                    <div className={styles.inputGroup}>
                        <label>Full Name</label>
                        <input type="text" name="name" required placeholder="Please share your first and last Name ..." />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Email Address</label>
                        <input type="email" name="email" required placeholder="yourid@domain.com" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Phone Number</label>
                        <input type="tel" name="phone" required placeholder="+1 000 000 0000" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Select Services</label>
                        <select
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
                </div>
                <div className="col-lg-6 mb">
                    <div className={styles.inputGroup}>
                        <label>Estimated Budget / Scope</label>
                        <select
                            className={styles.selectInput}
                            required
                            value={selectedBudget}
                            onChange={(e) => setSelectedBudget(e.target.value)}
                        >
                            <option value="" disabled>Estimated Budget / Scope</option>
                            {currentBudgets.map((budget, index) => (
                                <option key={index} value={budget}>{budget}</option>
                            ))}
                        </select>
                    </div>
                    {selectedBudget.toLowerCase().includes("custom quote") && (
                        <div className={styles.inputGroup}>
                            <label>Custom Quote ($)</label>
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
                        <label>Your Message</label>
                        <textarea name="message" placeholder="Type your query"></textarea>
                    </div>
                    <div className={styles.btnWrapper}>
                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;
