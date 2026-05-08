"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        customQuote: '',
        msg: '',
        pageTitle: 'Home Page',
        pageUrl: '',
        country: '',
        state: '',
        city: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setFormData(prev => ({ ...prev, pageUrl: window.location.href }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = { ...prev, [name]: value };
            // Reset budget if service changes
            if (name === 'service') {
                newData.budget = '';
                newData.customQuote = '';
            }
            // Reset custom quote if budget changes and is not 'Request a custom quote'
            if (name === 'budget' && !value.includes('Request a custom quote')) {
                newData.customQuote = '';
            }
            return newData;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                router.push('/thank-you');
            } else {
                const errorMsg = result.error ? `${result.message}: ${result.error}` : (result.message || 'Something went wrong');
                alert(`Error: ${errorMsg}`);
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const serviceOptions = [
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

    const getBudgetOptions = () => {
        if (formData.service === "Business Proposal") {
            return proposalBudgets;
        }
        return standardBudgets;
    };

    const showCustomQuote = formData.budget.includes("Request a custom quote");

    return (
        <section className={styles.contactForm} id="contactForm">
            <div className="container">
                <div className={styles.sec_top}>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <h2 className={styles.title}><span className="primarytxt">Connect</span> With Us</h2>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <p className={`${styles.para} text-end`}>
                                Big ideas start with a simple conversation. <br />
                                We’re excited to explore yours and curate something truly extraordinary.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.sec_content}>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className={styles.form_group}>
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Please share your first and last Name ..."
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className={styles.form_group}>
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="yourid@domain.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className={styles.form_group}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="000 000 0000"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className={styles.form_group}>
                                    <label htmlFor="service">Select Services</label>
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Select a service</option>
                                        {serviceOptions.map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {formData.service && (
                                <div className="col-sm-12 col-md-12">
                                    <div className={styles.form_group}>
                                        <label htmlFor="budget">Estimated Budget / Scope</label>
                                        <select
                                            name="budget"
                                            required
                                            value={formData.budget}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select budget</option>
                                            {getBudgetOptions().map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}
                            {showCustomQuote && (
                                <div className="col-sm-12 col-md-12">
                                    <div className={styles.form_group}>
                                        <label htmlFor="customQuote">Custom Quote ($)</label>
                                        <input
                                            type="number"
                                            name="customQuote"
                                            placeholder="Min $30,000 required ..."
                                            required
                                            min="30000"
                                            value={formData.customQuote}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="col-sm-12 col-md-12">
                                <div className={`${styles.form_group} ${styles.message}`}>
                                    <label htmlFor="msg">Your Message</label>
                                    <textarea
                                        name="msg"
                                        placeholder="Type your query"
                                        value={formData.msg}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <div className="combo_btn">
                                    <button type="submit" className="mybtn btn_1" disabled={isSubmitting}>
                                        <div className="text">
                                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                        </div>
                                        <div className="icon">
                                            <Image
                                                src="/images/send.png"
                                                alt="Arrow Icon"
                                                width={20}
                                                height={20}
                                                style={{ objectFit: "contain" }}
                                            />
                                            <Image
                                                src="/images/send.png"
                                                alt="Arrow Icon"
                                                width={20}
                                                height={20}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
