"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ActionButtons from "@/components/ui/ActionButtons";
import ClutchWidget from "@/components/ClutchWidget";
import styles from './HeroSection.module.css';

export default function HeroSection({ data = {} }) {
    const router = useRouter();
    const transparentHeading = data.transparentHeading || "Industries";
    const subHeading = data.subHeading || "Appsters";
    const mainHeading = data.mainHeading || '<span class="primarytxt">Mobile App Development Company Houston </span>';
    const paragraph = data.paragraph || "With 10+ years of expertise, BitsWits provides top-graded healthcare app development services that ensure HIPAA compliance, secure patient data and streamline appointment scheduling–so you can focus on your patient care. Hire us to see why healthcare providers trust us!";
    const formPageTitle = data.formPageTitle || 'Industry Hero Consultation Form';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: '',
        pageTitle: formPageTitle,
        pageUrl: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setFormData(prev => ({ ...prev, pageUrl: window.location.href, pageTitle: formPageTitle }));
        }
    }, [formPageTitle]);

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
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    msg: formData.msg,
                    pageTitle: formData.pageTitle,
                    pageUrl: formData.pageUrl
                }),
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

    return (
        <section className={styles.heroSection}>
            <span className={styles.transparent_heading}>{transparentHeading}</span>
            <Image
                src="/images/banner-bg.png"
                alt="Main Banner Image..."
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className={styles.bannerBg}
            />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.banner_left}>
                            <p className={styles.sub_heading}>{subHeading}</p>
                            <h1 className={styles.main_heading} dangerouslySetInnerHTML={{ __html: mainHeading }}></h1>
                            <p className={styles.paragraph}>
                               {paragraph}
                            </p>
                            <div className="combo_btn">
                                <ActionButtons />
                            </div>
                            <div className={styles.clutch_rating_badge}>
                                <ClutchWidget />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.banner_right}>
                            <div className={styles.consultation_form_card}>
                                <h3 className={styles.form_title}>Request a Free Consultation</h3>
                                <p className={styles.form_subtitle}>Tell us what you need and we'll match you with the right experts.</p>

                                <form onSubmit={handleSubmit} className={styles.consultation_form}>
                                    <div className={styles.form_field_group}>
                                        <label className={styles.form_field_label}>Name <span className={styles.required_star}>*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your full name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.form_field_group}>
                                        <label className={styles.form_field_label}>Work Email <span className={styles.required_star}>*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="you@company.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.form_field_group}>
                                        <label className={styles.form_field_label}>Tell us about your requirements <span className={styles.required_star}>*</span></label>
                                        <textarea
                                            name="msg"
                                            required
                                            placeholder="Message"
                                            value={formData.msg}
                                            onChange={handleChange}
                                            rows={3}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className={styles.submit_btn} disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                    </button>

                                    <p className={styles.form_footer_text}>
                                        By submitting this form, you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.appsters_shape_decor}>
                <Image
                    src="/images/appsters-shape-decor.png"
                    alt="Appsters Shape Decor Image..."
                    priority
                    width={979}
                    height={916}
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className={styles.marque}>
                <ul className={styles.marquee_slider}>
                    {[1, 2, 3, 4, 5].map((idx) => (
                        <React.Fragment key={idx}>
                            <li>
                                <div className={styles.box}>
                                    <p>
                                        Turn Your Wildest Ideas Into <span>Powerful Digital Products</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.center_logo}>
                                    <Image
                                        src="/images/appsters-shape-decor-dark.png"
                                        alt="Appsters Shape Decor Dark Image..."
                                        fill
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </section>
    );
}
