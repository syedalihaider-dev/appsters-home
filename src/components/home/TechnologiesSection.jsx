"use client";
import { useState } from "react";
import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./TechnologiesSection.module.css";

export default function TechnologiesSection() {

  const [activeTab, setActiveTab] = useState("ai");

  const videos = {
    ai: "/video/artificial-intelligence.mp4",
    iot: "/video/artificial-intelligence.mp4",
    blockchain: "/video/artificial-intelligence.mp4",
    arvr: "/video/artificial-intelligence.mp4",
    mvp: "/video/artificial-intelligence.mp4",
  };

  const tabContent = {
    ai: (
      <div className="tab_item">
        <h3>Artificial Intelligence</h3>
        <p className="scroll_block">
          AI-powered apps are reshaping industries, and we make them practical for your business. From intelligent automation to decision-support systems, our AI apps are designed for production, not prototypes.
        </p>
        <ul>
          <li>Predictive Analytics for Smarter Decisions</li>
          <li>Intelligent Process Automation</li>
          <li>Machine Learning Models Built for Production</li>
          <li>AI Apps That Scale with Your Business</li>
        </ul>
        <div className="combo_btn">
          <ActionButtons />
        </div>
      </div>
    ),

    iot: (
      <div className="tab_item">
        <h3>IoT</h3>
        <p className="scroll_block">
          Internet of Things solutions turn everyday devices into data-generating assets. Our IoT apps enable you to monitor operations in real-time, reduce inefficiencies, and connect multiple systems into a singular smart ecosystem.
        </p>
        <ul>
          <li>Real-Time Device and Sensor Monitoring</li>
          <li>Edge-to-Cloud Data Processing</li>
          <li>Secure IoT Network Integration</li>
          <li>Scalable IoT App Solutions for Enterprise</li>
        </ul>
        <div className="combo_btn">
          <ActionButtons />
        </div>
      </div>
    ),

    blockchain: (
      <div className="tab_item">
        <h3>Blockchain</h3>
        <p className="scroll_block">
          Blockchain app development is about more than crypto, as it’s about secure, verifiable, and transparent transactions for your business. We create blockchain apps that support smart contracts, tamper-proof data sharing, and scalable Web3 integrations.
        </p>
        <ul>
          <li>Smart Contract Development</li>
          <li>Decentralized App (dApp) Development</li>
          <li>Secure Transaction and Data Validation</li>
          <li>Enterprise-Ready Blockchain Integration</li>
        </ul>
        <div className="combo_btn">
          <ActionButtons />
        </div>
      </div>
    ),

    arvr: (
      <div className="tab_item">
        <h3>AR/VR</h3>
        <p className="scroll_block">
          AR/VR technology is driving new possibilities in training, retail, and entertainment. We build immersive experiences that merge the digital and physical worlds, helping your users engage deeper, learn faster, and interact in ways that are intuitive.
        </p>
        <ul>
          <li>Augmented Reality for Retail and Training</li>
          <li>Virtual Reality Simulations</li>
          <li>Interactive 3D Content Development</li>
          <li>Cross-Platform AR/VR App Deployment</li>
        </ul>
        <div className="combo_btn">
          <ActionButtons />
        </div>
      </div>
    ),

    mvp: (
      <div className="tab_item">
        <h3>MVP Apps</h3>
        <p className="scroll_block">
          MVP app development helps you test ideas faster and reduce time-to-market. We build lean, functional MVPs that validate your business model, attract investors, and provide a clear roadmap for scaling into a full product with confidence.
        </p>
        <ul>
          <li>Rapid Prototyping and Iteration</li>
          <li>Core Feature Development Only</li>
          <li>Early User Feedback and Analytics</li>
          <li>Scalable Foundation for Future Growth</li>
        </ul>
        <div className="combo_btn">
          <ActionButtons />
        </div>
      </div>
    ),
  };

  return (
    <section className={styles.technologiesSection}>
      <p className={styles.transparent_heading}>Technologies & Solutions</p>
      <div className="container">
        <div className={styles.sec_top}>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-7">
              <div className={styles.sec_left}>
                <p className={styles.sub_heading}>Advanced Technologies & Solutions</p>
                <h2>
                  <span className="primarytxt">Next-Gen</span> Technology, Apps, & Ecosystems That
                  <span className="primarytxt"> Put You Ahead</span> In Real-Time.
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-5">
              <div className={styles.sec_right}>
                <p>
                  We create next-gen solutions, AI-native applications, digital ecosystems, and web-based products that give businesses the power to move faster, work smarter, and lead. <br /><br />
                  Our approach focuses on practical innovation that integrates into your existing systems and delivers results you can measure in numbers and growth.

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
                  key={activeTab}
                  src={videos[activeTab]}
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
                  <li className={activeTab === "ai" ? styles.activeTab : ""} onClick={() => setActiveTab("ai")}>Artificial Intelligence</li>
                  <li className={activeTab === "iot" ? styles.activeTab : ""} onClick={() => setActiveTab("iot")}>IoT</li>
                  <li className={activeTab === "blockchain" ? styles.activeTab : ""} onClick={() => setActiveTab("blockchain")}>Blockchain</li>
                  <li className={activeTab === "arvr" ? styles.activeTab : ""} onClick={() => setActiveTab("arvr")}>AR/VR</li>
                  <li className={activeTab === "mvp" ? styles.activeTab : ""} onClick={() => setActiveTab("mvp")}>MVP Apps</li>
                </ul>
                <div className={styles.tabContentBox}>
                  {tabContent[activeTab]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}