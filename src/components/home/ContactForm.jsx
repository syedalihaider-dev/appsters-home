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
        msg: '',
        pageTitle: 'Home Page',
        pageUrl: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setFormData(prev => ({ ...prev, pageUrl: window.location.href }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
                alert(`Error: ${result.message || 'Something went wrong'}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };


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
                                <div className="row">
                                    <div className="col-sm-12 col-md-12">
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
                                    <div className="col-sm-12 col-md-12">
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
                                    <div className="col-sm-12 col-md-12">
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
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className={`${styles.form_group} ${styles.message}`}>
                                    <label htmlFor="msg">Your Message</label>
                                    <textarea
                                        name="msg"
                                        placeholder="Type your query"
                                        value={formData.msg}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
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
