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
          AI-powered apps are reshaping industries, and we make them practical for your business.
          From intelligent automation to decision-support systems, our AI apps are built for production,
          helping you minimize errors, unlock insights, and scale across operations.
        </p>
        <ul>
          <li>Predictive Analytics for Smarter Decisions</li>
          <li>Intelligent Process Automation</li>
          <li>Production-Ready Machine Learning Models</li>
          <li>AI Systems That Scale with Your Business</li>
        </ul>
        <div className="combo_btn">
          <ActionButtons />
        </div>
      </div>
    ),

    iot: (
      <div className="tab_item">
        <h3>Internet of Things (IoT)</h3>
        <p className="scroll_block">
          IoT connects your digital and physical ecosystem, enabling seamless data flow,
          automation, and real-time monitoring for smarter business operations.
        </p>
        <ul>
          <li>Smart Device Integration</li>
          <li>Cloud-Connected IoT Dashboards</li>
          <li>Real-Time Monitoring & Alerts</li>
          <li>IoT Automation Workflows</li>
        </ul>
        <div className="combo_btn">
          <ActionButtons />
        </div>
      </div>
    ),

    blockchain: (
      <div className="tab_item">
        <h3>Blockchain Solutions</h3>
        <p className="scroll_block">
          Blockchain brings transparency, trust, and tamper-proof security to your digital ecosystem —
          from smart contracts to decentralized operations.
        </p>
        <ul>
          <li>Smart Contract Development</li>
          <li>Secure Decentralized Applications</li>
          <li>Enterprise Blockchain Networks</li>
          <li>Immutable Data Storage</li>
        </ul>
        <div className="combo_btn">
          <ActionButtons />
        </div>
      </div>
    ),

    arvr: (
      <div className="tab_item">
        <h3>AR/VR Experiences</h3>
        <p className="scroll_block">
          We build immersive AR/VR experiences that transform how customers interact,
          learn, and visualize products in real time.
        </p>
        <ul>
          <li>3D Interactive Environments</li>
          <li>Product Visualization</li>
          <li>Training & Simulation Systems</li>
          <li>Virtual Experience Platforms</li>
        </ul>
        <div className="combo_btn">
          <ActionButtons />
        </div>
      </div>
    ),

    mvp: (
      <div className="tab_item">
        <h3>MVP App Development</h3>
        <p className="scroll_block">
          We help startups test ideas faster with real, functional MVPs designed to validate concepts
          with real users — before scaling into full products.
        </p>
        <ul>
          <li>Rapid Prototyping</li>
          <li>User Testing With Real Customers</li>
          <li>Market-Ready Feature Planning</li>
          <li>Scalable App Architecture</li>
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
                  We create next-gen solutions, AI-native applications, digital ecosystems, and web-based products
                  that give businesses the power to move faster, work smarter, and lead. <br /><br /> Our approach
                  focuses on practical innovation that integrates into your existing systems and delivers results you
                  can measure in numbers and growth.
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