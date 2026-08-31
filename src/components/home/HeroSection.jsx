"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";
import styles from './HeroSection.module.css';
import gsap from "gsap";

import ClutchWidget from '@/components/ClutchWidget';

export default function HeroSection() {
    const router = useRouter();
    const [count, setCount] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: '',
        pageTitle: 'Home Hero Consultation Form',
        pageUrl: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setFormData(prev => ({ ...prev, pageUrl: window.location.href }));
        }

        const obj = { value: 0 };
        gsap.to(obj, {
            value: 200,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
                setCount(Math.floor(obj.value));
            }
        });
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
            <span className={styles.transparent_heading}>Creative Agency</span>
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
                            <p className={styles.sub_heading}>A Digital Transformation Company</p>
                            <h1 className={styles.main_heading}>
                                <span className="primarytxt">Mobile App Development</span> From <span className="primarytxt">Idea</span> to Launch <br /> in <span className="primarytxt">12 Weeks</span>
                                {/* <span className="primarytxt">Create Apps</span> That Scale With Your <span className="primarytxt">Growth.</span> */}
                            </h1>
                            <p className={styles.paragraph}>
                                Trusted by CTOs. 3,000+ Apps Delivered. Appsters deliver mobile apps and digital ecosystems that your business needs today & tomorrow.
                            </p>
                            <div className="combo_btn">
                                <ActionButtons text="Get a Quote" />
                                <ActionButtons text="Call Us Now" href={SITE_PHONE_LINK} />
                            </div>
                            <ClutchWidget />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.banner_right}>

                            {/* <div className={styles.hand_holding_mobile}>
                                <Image
                                    src="/images/hand-hold-mobile.png"
                                    alt="Hand Holding Mobile Image..."
                                    priority
                                    width={683}
                                    height={595}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <div className={styles.mobile_screen}>
                                <Image
                                    src="/video/banner-mobile.gif"
                                    alt="Banner Mobile Image..."
                                    priority
                                    width={720}
                                    height={720}
                                    style={{ objectFit: "contain" }}
                                />
                            </div> */}
                            {/* <Link href="#contactForm" className={styles.circle}>
                                <Image
                                    src="/images/circle.png"
                                    alt="Circle Image..."
                                    fill
                                    priority
                                    sizes="100vw"
                                    style={{ objectFit: "contain" }}
                                    className={styles.circleBg}
                                />
                                <div className={styles.circle_content}>
                                    <Image
                                        src="/images/lets-start-a-project-circle.png"
                                        alt="Lets Start a Project Circle Image..."
                                        fill
                                        priority
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className={styles.circle_arrow}>
                                    <Image
                                        src="/images/circle-arrow.png"
                                        alt="Circle Arrow Image..."
                                        fill
                                        priority
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </Link> */}
                            {/* <div className={styles.counting}>
                                <p>{count}K</p>
                                <div className={styles.global_clients}>
                                    <Image
                                        src="/images/global-clients.png"
                                        alt="Global Clients Image..."
                                        fill
                                        priority
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </div> */}

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
                </ul>
            </div>
        </section >
    )
}
