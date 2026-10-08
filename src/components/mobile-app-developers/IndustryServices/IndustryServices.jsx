import React from 'react'
import styles from './IndustryServices.module.css'
import { FaCheck, FaArrowRight, FaCoins, FaBriefcaseMedical, FaShoppingCart, FaCarSide, FaHome, FaRobot } from 'react-icons/fa'

const services = [
    { title: 'Fintech & Banking Apps', icon: FaCoins, theme: 'gold', description: 'Secure, PCI-DSS compliant payment platforms and digital banking apps built for trust at scale.', features: ['Bank-grade encryption & security', 'Real-time payment processing', 'Multi-currency & crypto support', 'KYC / AML compliance built-in'], action: 'Start your fintech app', visual: 'balance' },
    { title: 'Healthcare & Telemedicine', icon: FaBriefcaseMedical, theme: 'blue', description: 'HIPAA-compliant patient management and telemedicine platforms that modernize care delivery.', features: ['HIPAA & HITECH compliant', 'EHR / EMR integration', 'Video consultation & chat', 'Prescription & appointment tools'], action: 'Start your health app', visual: 'health' },
    { title: 'E-Commerce & Retail Apps', icon: FaShoppingCart, theme: 'purple', description: 'High-performance mobile shopping apps with seamless checkout, loyalty programs, and inventory sync.', features: ['One-tap mobile checkout', 'Real-time inventory tracking', 'AI-powered product recommendations', 'Shopify / WooCommerce integrations'], action: 'Start your ecommerce app', visual: 'shop' },
    { title: 'On-Demand & Logistics Apps', icon: FaCarSide, theme: 'orange', description: 'Uber-style on-demand platforms with live tracking, smart dispatching, and real-time analytics.', features: ['Live GPS tracking & routing', 'Driver & fleet management', 'In-app payments & tipping', 'Multi-stop delivery optimization'], action: 'Start your on-demand app', visual: 'map' },
    { title: 'Real Estate & PropTech', icon: FaHome, theme: 'green', description: 'Property marketplace apps that connect buyers, sellers, and agents with intelligent search and virtual tours.', features: ['3D virtual property tours', 'AI-powered property matching', 'Mortgage calculator & CRM', 'Agent commission management'], action: 'Start your proptech app', visual: 'home' },
    { title: 'AI-Powered Mobile Apps', icon: FaRobot, theme: 'violet', description: 'Next-gen apps powered by ChatGPT, computer vision, NLP, and predictive analytics — built for tomorrow.', features: ['ChatGPT & LLM integration', 'Computer vision & image AI', 'Predictive analytics dashboards', 'Voice recognition & NLP'], action: 'Start your AI app', visual: 'ai' },
]

function CardVisual({ type }) {
    return (
        <svg className={styles.cardVisual} viewBox="0 0 220 220" aria-hidden="true" focusable="false">
            <defs>
                <linearGradient id={`phone-${type}`} x1="0" x2="1" y1="0" y2="1">
                    <stop stopColor="var(--accent)" stopOpacity=".35" />
                    <stop offset="1" stopColor="#090b13" />
                </linearGradient>
            </defs>

            {type === 'map' && <g>
                <path d="M10 160 58 111l32 25 56-72 55 35" fill="none" stroke="var(--accent)" strokeOpacity=".38" strokeWidth="2" />
                <path d="M18 177 68 126l34 25 46-60 56 27" fill="none" stroke="#77829d" strokeOpacity=".2" />
                <rect x="21" y="127" width="134" height="77" rx="15" fill="#111522" stroke="#343c50" />
                <rect x="37" y="146" width="37" height="37" rx="10" fill="var(--accent)" fillOpacity=".25" />
                <path d="M52 173c-12-12-7-20 3-20s15 8 3 20l-3 3z" fill="var(--accent)" />
                <circle cx="53" cy="160" r="2" fill="#111" />
                <rect x="83" y="151" width="49" height="6" rx="3" fill="#7b8292" />
                <rect x="83" y="164" width="36" height="5" rx="2" fill="#454d60" />
                <rect x="83" y="176" width="56" height="5" rx="2" fill="#30384a" />
                <path d="M160 80c-12-14-2-34 13-34s25 20 13 34l-13 17z" fill="var(--accent)" />
                <circle cx="173" cy="63" r="6" fill="#24150d" />
            </g>}

            {type === 'home' && <g>
                <rect x="21" y="75" width="122" height="116" rx="12" fill="#0c1716" stroke="#204c3a" />
                <path d="m39 120 42-36 44 36v55H39z" fill="#142a22" stroke="var(--accent)" />
                <path d="M32 121 81 78l52 43" fill="none" stroke="var(--accent)" strokeWidth="7" strokeLinejoin="round" />
                <rect x="74" y="140" width="18" height="35" rx="2" fill="#09120f" stroke="var(--accent)" strokeOpacity=".7" />
                <rect x="45" y="128" width="18" height="15" fill="#88e9bb" fillOpacity=".35" />
                <rect x="101" y="128" width="18" height="15" fill="#88e9bb" fillOpacity=".35" />
                <circle cx="171" cy="150" r="27" fill="#0b211a" stroke="var(--accent)" />
                <text x="171" y="157" textAnchor="middle" fill="var(--accent)" fontSize="17" fontWeight="700">3D</text>
            </g>}

            {['balance', 'health', 'shop', 'ai'].includes(type) && <g transform="rotate(-5 133 115)">
                <rect x="78" y="17" width="112" height="190" rx="23" fill="#05070a" stroke="#394050" strokeWidth="3" />
                <rect x="85" y="25" width="98" height="174" rx="18" fill={`url(#phone-${type})`} />
                <rect x="119" y="31" width="36" height="6" rx="3" fill="#080a0c" />

                {type === 'balance' && <g>
                    <text x="96" y="62" fill="#aab2c2" fontSize="7">Total Balance</text>
                    <text x="96" y="80" fill="white" fontSize="14" fontWeight="700">$24,680.00</text>
                    <rect x="94" y="91" width="80" height="48" rx="8" fill="var(--accent)" fillOpacity=".27" stroke="var(--accent)" strokeOpacity=".55" />
                    <rect x="101" y="101" width="42" height="4" rx="2" fill="#ffe7b5" />
                    <rect x="101" y="112" width="56" height="4" rx="2" fill="#ba8f44" />
                    <rect x="100" y="126" width="18" height="7" rx="3" fill="#eab849" />
                </g>}

                {type === 'health' && <g>
                    <circle cx="134" cy="87" r="27" fill="var(--accent)" fillOpacity=".24" />
                    <circle cx="134" cy="79" r="10" fill="#8fc7ff" />
                    <path d="M116 106c2-13 10-19 18-19s16 6 18 19" fill="#538ee5" />
                    <path d="M95 127h75" stroke="var(--accent)" strokeOpacity=".6" strokeWidth="5" strokeLinecap="round" />
                    <path d="M95 143h58" stroke="#7690ad" strokeOpacity=".45" strokeWidth="5" strokeLinecap="round" />
                </g>}

                {type === 'shop' && <g>
                    <rect x="97" y="58" width="75" height="68" rx="11" fill="var(--accent)" fillOpacity=".2" />
                    <path d="m112 91 15-19 16 19z" fill="#b5a5ff" />
                    <path d="m127 91 18-27 20 27z" fill="#8170e8" />
                    <path d="M108 100h52" stroke="#c2b4ff" strokeWidth="3" />
                    <path d="M105 139h60" stroke="#a6a0c4" strokeOpacity=".6" strokeWidth="4" strokeLinecap="round" />
                    <path d="M105 152h42" stroke="#a6a0c4" strokeOpacity=".4" strokeWidth="4" strokeLinecap="round" />
                    <path d="M123 58v-6a12 12 0 0 1 24 0v6" fill="none" stroke="var(--accent)" strokeWidth="4" />
                </g>}

                {type === 'ai' && <g>
                    <rect x="98" y="53" width="72" height="44" rx="10" fill="var(--accent)" fillOpacity=".2" />
                    <path d="M108 83V69l11-8 11 8v14h-8V73h-7v10z" fill="var(--accent)" />
                    <text x="137" y="69" fill="#fff" fontSize="7">AI ASSIST</text>
                    <rect x="97" y="109" width="74" height="43" rx="9" fill="#10182a" stroke="var(--accent)" strokeOpacity=".45" />
                    <circle cx="134" cy="127" r="12" fill="#657dff" />
                    <circle cx="130" cy="125" r="2" fill="white" />
                    <circle cx="138" cy="125" r="2" fill="white" />
                    <path d="M130 131q4 4 8 0" fill="none" stroke="white" strokeWidth="1.5" />
                    <rect x="106" y="160" width="57" height="5" rx="2" fill="#868da3" />
                </g>}
            </g>}

            {type === 'balance' && <g>
                <rect x="16" y="108" width="61" height="51" rx="12" fill="#111621" stroke="var(--accent)" strokeOpacity=".6" />
                <circle cx="46" cy="133" r="16" fill="var(--accent)" fillOpacity=".18" />
                <ellipse cx="46" cy="128" rx="10" ry="4" fill="var(--accent)" />
                <path d="M36 128v10q10 8 20 0v-10M36 133q10 7 20 0" fill="var(--accent)" stroke="#ffe5a6" />
            </g>}
            {type === 'health' && <g>
                <rect x="16" y="108" width="61" height="51" rx="12" fill="#111621" stroke="var(--accent)" strokeOpacity=".6" />
                <circle cx="46" cy="133" r="16" fill="var(--accent)" fillOpacity=".18" />
                <path d="M45 121h4v8h8v4h-8v8h-4v-8h-8v-4h8z" fill="var(--accent)" />
            </g>}
            {type === 'shop' && <g>
                <rect x="16" y="108" width="61" height="51" rx="12" fill="#111621" stroke="var(--accent)" strokeOpacity=".6" />
                <circle cx="46" cy="133" r="16" fill="var(--accent)" fillOpacity=".18" />
                <path d="M37 135h18l-2-10H40zM40 125l2-7h9l3 7M38 135v4m15-4v4" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />
            </g>}
        </svg>
    )
}

export default function IndustryServices() {
    return <section className={styles.servicesSection} id="services" aria-labelledby="industry-solutions-title">
        <div className={styles.ambient} aria-hidden="true" />
        <div className={styles.container}>
            <header className={styles.sectionHeader}>
                <span className={styles.badge}>INDUSTRY SOLUTIONS</span>
                <h2 id="industry-solutions-title">Apps Built for <span>Every Industry</span></h2>
                <p>We build specialized mobile products for different business models, combining<br className={styles.desktopBreak} /> industry expertise with cutting-edge technology to help you launch faster and scale bigger.</p>
            </header>
            <div className={styles.servicesGrid}>{services.map(({ title, icon: Icon, theme, description, features, action, visual }) => <article className={`${styles.serviceCard} ${styles[theme]}`} key={title}>
                <div className={styles.cardTop}><span className={styles.iconBox}><Icon aria-hidden="true" /></span><h3>{title}</h3></div>
                <p className={styles.cardDesc}>{description}</p>
                <ul className={styles.featureList}>{features.map((feature) => <li key={feature}><span className={styles.check}><FaCheck aria-hidden="true" /></span>{feature}</li>)}</ul>
                <a href="#contact" className={styles.cardLink}>{action}<span className={styles.arrow}><FaArrowRight aria-hidden="true" /></span></a>
                <CardVisual type={visual} />
                <span className={styles.sparkle} aria-hidden="true" />
            </article>)}</div>
        </div>
    </section>
}
