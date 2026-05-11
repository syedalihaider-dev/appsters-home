import React, { useState } from 'react'
import Image from 'next/image'
import styles from './ToolsMaster.module.css'
import { SITE_PHONE as PHONE_NUMBER } from '@/app/constants'

const ToolsMaster = () => {
    const [activeTab, setActiveTab] = useState('Mobile');

    const tabs = [
        {
            id: 'Mobile',
            label: 'Mobile',
            desc: 'Your users demand native-level fluidity, and we deliver exactly that. Whether we are leveraging Swift and Kotlin for pure native iOS and Android performance, or deployingReact Native, Flutter, and Ionic for high-efficiency cross-platform builds, we eliminate lag and UI friction. Our mobile development stack is strictly engineered to reduce load times, optimize battery consumption, and ensure your app feels responsive, intuitive, and crash-free under the heaviest user traffic.',
            img: '/images/mobile-app-studio/mobile.png'
        },
        {
            id: 'FullStack',
            label: 'Full Stack Development',
            desc: 'True full-stack mastery means zero disconnect between what the user sees and what the server processes. We build dynamic, lightning-fast frontends using Next.js and Angular, paired seamlessly with our robust backend architectures. From pixel-perfect UI/UX execution to complex API integrations and AI model deployments like OpenAI or TensorFlow, we handle the entire product lifecycle. This cohesive approach ensures rapid feature deployment, unified codebases, and effortless scalability.',
            img: '/images/mobile-app-studio/full-stack.png'
        },
        {
            id: 'Database',
            label: 'Database',
            desc: 'Data is the lifeblood of your enterprise, and slow queries are completely unacceptable. We architect highly resilient, encrypted, and easily scalable database environments tailored specifically to your payload requirements. Whether utilizing relational structures for absolute transactional integrity or NoSQL architectures for high-velocity, unstructured data handling, we ensure zero bottlenecks. Our database solutions are engineered for real-time syncing, automated backups, and instantaneous retrieval, guaranteeing your application remains blazing fast as your user base explodes.',
            img: '/images/mobile-app-studio/database.png'
        },
        {
            id: 'Backend',
            label: 'Backend',
            desc: 'The interface is just the surface; the backend is where the real power lies. We construct bulletproof server-side logic using industry-leading frameworks like Django, Flask, Laravel, and Express to ensure your application can handle immense concurrent loads effortlessly. We prioritize modular, microservices-driven architectures that process complex algorithms and real-time data streams without breaking a sweat. Expect ironclad security protocols, minimal latency, and an infrastructure capable of powering your most aggressive growth phases.',
            img: '/images/mobile-app-studio/backend.png'
        },
        {
            id: 'Blockchain',
            label: 'Blockchain',
            desc: 'The future of digital ownership and secure transactions is decentralized, and we build the infrastructure to get you there. We engineer immutable, transparent blockchain solutions, from custom smart contracts to secure Web3 integrations that protect every single transaction. Whether you are developing decentralized finance platforms, tokenized gaming assets, or integrating cryptographic security layers into existingenterprise systems, our blockchain stack ensures absolute data integrity, fraud prevention, and readiness for the next era of the web.',
            img: '/images/mobile-app-studio/blockchain.png'
        }
    ];

    const currentTab = tabs.find(t => t.id === activeTab);

    return (
        <section className={styles.toolsSection}>
            <div className="container">
                <div className={styles.card}>
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h2 className={styles.title}>
                                Dynamics & Stacks For <span className={styles.highlight}>Performance.
                                    <Image src="/images/mobile-app-studio/spring-vector.png" width={424} height={22} alt="Spring Vector" className={styles.springVector} />
                                </span>
                            </h2>

                            <div className={styles.tabsRow}>
                                {tabs.map(tab => (
                                    <button
                                        type="button"
                                        key={tab.id}
                                        className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <p className={styles.desc}>{currentTab.desc}</p>

                            <div className={styles.btnGroup}>
                                <a href={`tel:${PHONE_NUMBER}`} className={`${styles.ctaBtn} ${styles.callBtn}`}>CALL NOW</a>
                                <a href="#" className={`${styles.ctaBtn} ${styles.chatBtn} chat`}>CHAT WITH US</a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className={styles.rightCol}>
                                <div className={styles.assetBox}>
                                    <Image
                                        src={currentTab.img}
                                        alt={currentTab.label}
                                        width={601}
                                        height={528}
                                        className={styles.assetImg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ToolsMaster
