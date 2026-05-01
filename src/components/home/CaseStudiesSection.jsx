"use client";
import Image from "next/image";
import styles from "./CaseStudiesSection.module.css";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import ActionButtons from "@/components/ui/ActionButtons";

export default function CaseStudiesSection() {
  return (
    <section className={styles.caseStudiesSection}>
      <p className={styles.transparent_heading}>Case Studies</p>
      <div className="container">
        <div className={styles.sec_top}>
          <div className={styles.caseStudies_before}>
            <Image
              src="/images/case-studies-before.png"
              alt="Case Studies Before Image"
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>

          <p className={styles.sub_heading}>Case Studies</p>

          <div className="row align-items-center">
            <div className="col-sm-12 col-md-5">
              <div className={styles.sec_left}>
                <div className={styles.custom_arrow}>
                  <div className={`swiper-button-prev ${styles.left} ${styles.dots}`}>
                    <Image
                      src="/images/slider-arrow.png"
                      alt="Arrow Image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <div className={`swiper-button-next ${styles.right} ${styles.dots}`}>
                    <Image
                      src="/images/slider-arrow.png"
                      alt="Arrow Image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-7">
              <div className={styles.sec_right}>
                <h2>
                  <span className="primarytxt">Experience the stories.</span> See the results & technology in action.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec_content}>
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={2}
          //centeredSlides={true}
          //centeredSlidesBounds={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-img-01.png"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      PayFlow |
                      <span className={styles.primarytxt}>FinTech</span>
                    </h4>
                    <h5>Engineering financial fluidity for a Fintech powerhouse.</h5>
                    <p>
                      Peer-to-peer transfer app with biometric login and instant merchant settlements. Scaled to handle $500M+ volume and &lt;1s speeds for 2M+ users.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>User Flow Wireframing</li>
                  <li>Security Architecture</li>
                  <li>Backend Engineering</li>
                  <li>Compliance Logic</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-img-02.png"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      FitSphere |
                      <span className={styles.primarytxt}>Fitness & Health</span>
                    </h4>
                    <h5>Quantifying human performance on the go. </h5>
                    <p>
                      Wearable-synced fitness platform with personalized, gamified training plans. Drove 500k+ downloads, logged 10M+ workouts, and boosted daily retention by 40%.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>Gamification UX</li>
                  <li>Wearable Integration</li>
                  <li>Algorithmic Training</li>
                  <li>Data Visualization</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-img-01.png"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      DropTheBeat |
                      <span className={styles.primarytxt}>Music & Entertainment</span>
                    </h4>
                    <h5>Sonic architecture for low-bandwidth entertainment and music. </h5>
                    <p>
                      AI-driven music streaming engineered for seamless, low-bandwidth listening. Delivers 99.9% uptime and 3x faster loads for 1M+ daily streams.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>Adaptive Streaming Engine</li>
                  <li>AI Discovery Logic</li>
                  <li>UI/UX Design</li>
                  <li>Infrastructure</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-img-02.png"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      RightOps |
                      <span className={styles.primarytxt}>AI Automation</span>
                    </h4>
                    <h5>Automating operational intelligence for the workforce.</h5>
                    <p>
                      AI automation platform generating predictive insights without workflow disruption. Reduced manual workload by 60% and saved 10,000+ hours with zero downtime.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>Process Mapping</li>
                  <li>Predictive AI Integration</li>
                  <li>Backend Automation</li>
                  <li>System Integration</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-img-02.png"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      Cars & Wraps |
                      <span className={styles.primarytxt}>Automotive Marketplace</span>
                    </h4>
                    <h5>Streamlining operational automotive marketplace intelligence.</h5>
                    <p>
                      Automotive marketplace featuring real-time inventory and AR wrap previews. Increased conversions by 25%, drove 100k+ AR interactions, and cut turnaround by 30%.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>AR Interface Design</li>
                  <li>Inventory API</li>
                  <li>Matching Algorithms</li>
                  <li>3D Rendering </li>
                  {/* <li>App Development</li> */}
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-img-02.png"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      PlayNest |
                      <span className={styles.primarytxt}>Kids Media</span>
                    </h4>
                    <h5>Security-first digital learning through next-generation mobile gaming.</h5>
                    <p>
                      Secure edutainment platform offering interactive games and robust parental controls. Achieved 100% COPPA/GDPR compliance with a 4.9-star rating across 2M+ sessions.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>Safety UX Wireframing</li>
                  <li>Compliance Engineering</li>
                  <li>Game Development</li>
                  <li>Real-time Analytics</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-img-02.png"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      TaskIt |
                      <span className={styles.primarytxt}>AI Productivity</span>
                    </h4>
                    <h5>The scalable brain for distribution teams and beyond.</h5>
                    <p>
                      AI collaboration tool for messaging, file sharing, and smart task prioritization. Empowers 150k+ teams, automates 5M+ tasks, and syncs 50% faster.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>Collaboration UX</li>
                  <li>AI Task Prioritization</li>
                  <li>Real-time Sync</li>
                  <li>Cross-Platform Dev</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-img-02.png"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      The Gate |
                      <span className={styles.primarytxt}>Next-Gen Mobile Gaming Experience</span>
                    </h4>
                    <h5>Simulating massive reality without cuts or lag.</h5>
                    <p>
                      Massive open-world sandbox game with real-time physics and scalable servers. Handles 100k+ concurrent players at &lt;20ms latency, driving 1M+ downloads.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>Server-Side Physics</li>
                  <li>Concurrency Scaling</li>
                  <li>Economy Design</li>
                  <li>Multiplayer Framework</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-img-02.png"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      RightOps |
                      <span className={styles.primarytxt}>AI Automation</span>
                    </h4>
                    <h5>Automating operational intelligence for the workforce.</h5>
                    <p>
                      AI automation platform generating predictive insights without workflow disruption. Reduced manual workload by 60% and saved 10,000+ hours with zero downtime.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>Process Mapping</li>
                  <li>Predictive AI Integration</li>
                  <li>Backend Automation</li>
                  <li>System Integration</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
