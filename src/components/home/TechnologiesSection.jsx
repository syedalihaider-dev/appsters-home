"use client";
import { useState } from "react";
import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";
import styles from "./TechnologiesSection.module.css";

const defaultTabs = [
  {
    id: "ai",
    label: "Artificial Intelligence",
    title: "Artificial Intelligence",
    video: "/video/artificial-intelligence.mp4",
    text: "AI-powered apps are reshaping industries, and we make them practical for your business. From intelligent automation to decision-support systems, our AI apps are designed for production, not prototypes.",
    points: [
      "Predictive Analytics for Smarter Decisions",
      "Intelligent Process Automation",
      "Machine Learning Models Built for Production",
      "AI Apps That Scale with Your Business"
    ]
  },
  {
    id: "iot",
    label: "IoT",
    title: "IoT",
    video: "/video/artificial-intelligence.mp4",
    text: "Internet of Things solutions turn everyday devices into data-generating assets. Our IoT apps enable you to monitor operations in real-time, reduce inefficiencies, and connect multiple systems into a singular smart ecosystem.",
    points: [
      "Real-Time Device and Sensor Monitoring",
      "Edge-to-Cloud Data Processing",
      "Secure IoT Network Integration",
      "Scalable IoT App Solutions for Enterprise"
    ]
  },
  {
    id: "blockchain",
    label: "Blockchain",
    title: "Blockchain",
    video: "/video/artificial-intelligence.mp4",
    text: "Blockchain app development is about more than crypto, as it’s about secure, verifiable, and transparent transactions for your business. We create blockchain apps that support smart contracts, tamper-proof data sharing, and scalable Web3 integrations.",
    points: [
      "Smart Contract Development",
      "Decentralized App (dApp) Development",
      "Secure Transaction and Data Validation",
      "Enterprise-Ready Blockchain Integration"
    ]
  },
  {
    id: "arvr",
    label: "AR/VR",
    title: "AR/VR",
    video: "/video/artificial-intelligence.mp4",
    text: "AR/VR technology is driving new possibilities in training, retail, and entertainment. We build immersive experiences that merge the digital and physical worlds, helping your users engage deeper, learn faster, and interact in ways that are intuitive.",
    points: [
      "Augmented Reality for Retail and Training",
      "Virtual Reality Simulations",
      "Interactive 3D Content Development",
      "Cross-Platform AR/VR App Deployment"
    ]
  },
  {
    id: "mvp",
    label: "MVP Apps",
    title: "MVP Apps",
    video: "/video/artificial-intelligence.mp4",
    text: "MVP app development helps you test ideas faster and reduce time-to-market. We build lean, functional MVPs that validate your business model, attract investors, and provide a clear roadmap for scaling into a full product with confidence.",
    points: [
      "Rapid Prototyping and Iteration",
      "Core Feature Development Only",
      "Early User Feedback and Analytics",
      "Scalable Foundation for Future Growth"
    ]
  }
];

export default function TechnologiesSection({ data }) {
  const tabs = data?.tabs || defaultTabs;
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "ai");

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
  const subHeading = data?.subHeading || "Advanced Technologies & Solutions";
  const title = data?.title || '<span class="primarytxt">Next-Gen</span> Technology, Apps, & Ecosystems That <span class="primarytxt"> Put You Ahead</span> In Real-Time.';
  const description = data?.description || (
    <>
      We create next-gen solutions, AI-native applications, digital ecosystems, and web-based products that give businesses the power to move faster, work smarter, and lead. <br /><br />
      Our approach focuses on practical innovation that integrates into your existing systems and delivers results you can measure in numbers and growth.
    </>
  );

  return (
    <section className={styles.technologiesSection}>
      <p className={styles.transparent_heading}>Technologies & Solutions</p>
      <div className="container">
        <div className={styles.sec_top}>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-7">
              <div className={styles.sec_left}>
                <p className={styles.sub_heading}>{subHeading}</p>
                <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-5">
              <div className={styles.sec_right}>
                <p>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sec_content}>
          <div className={styles.content_after}>
            <Image
              src="/images/technologies-cap-shape.png"
              alt="Technologies Cap Shape Image"
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-5">
              <div className={styles.content_left}>
                <video
                  key={currentTab.id}
                  src={currentTab.video || "/video/artificial-intelligence.mp4"}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className={styles.content_right}>
                <ul className={styles.tabs}>
                  {tabs.map((tab) => (
                    <li
                      key={tab.id}
                      className={activeTab === tab.id ? styles.activeTab : ""}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label || tab.title}
                    </li>
                  ))}
                </ul>
                <div className={styles.tabContentBox}>
                  <div className="tab_item">
                    <h3>{currentTab.title}</h3>
                    <p className="scroll_block">
                      {currentTab.text || currentTab.desc}
                    </p>
                    {currentTab.points && currentTab.points.length > 0 && (
                      <ul>
                        {currentTab.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                    )}
                    <div className="combo_btn">
                      <ActionButtons href={currentTab.btnHref || "#contactForm"} />
                      <ActionButtons text={currentTab.callBtnText || "Call Us Now"} href={currentTab.callBtnHref || SITE_PHONE_LINK} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}