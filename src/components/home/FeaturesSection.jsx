"use client";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <video
        src="/video/features-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={styles.video_bg}
      />
      <div className={styles.overlay} />
      <div className={styles.sec_top}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_left}>
                <p className={styles.sub_heading}>Mobile App Development Solutions </p>
                <div className={styles.custom_arrow}>
                  <div className={`swiper-button-prev ${styles.left} ${styles.dots}`}>
                    <Image src="/images/slider-arrow.png" fill style={{ objectFit: "contain" }}
                      alt="Arrow Image" />
                  </div>
                  <div className={`swiper-button-next ${styles.right} ${styles.dots}`}>
                    <Image src="/images/slider-arrow.png" fill style={{ objectFit: "contain" }}
                      alt="Arrow Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_right}>
                <h2 className={styles.title}>
                  That Power Growth For <span className="primarytxt">Next-Generation</span> Experiences
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
          slidesPerView={3}
          //centeredSlides={true}
          //centeredSlidesBounds={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_front}>
                  {/* <h3 className={styles.step}>01</h3> */}
                  <div className={styles.features_icon}>
                    <Image
                      src="/images/virtual-reality.webp"
                      width={135}
                      height={135}
                      style={{ objectFit: "contain" }}
                      alt="Arrow Image"
                    />
                  </div>
                  <h3 className={styles.title}>Virtual Reality</h3>
                  <p className={`${styles.para} scroll_block`}>
                    We build immersive VR experiences for training, simulation, and entertainment. Our VR apps are designed with performance and accessibility in mind, ensuring smooth rendering and realistic environments. <br /><br />Optimized for multiple headsets and devices, these solutions help businesses engage users in entirely new and measurable ways.
                  </p>
                </div>
                {/* <div className={styles.box_hover}>
                  <h3 className={styles.title}>Virtual Reality</h3>
                  <p className={`${styles.para} scroll_block`}>
                    We build immersive VR experiences for training, simulation, and entertainment. Our VR apps are designed with performance and accessibility in mind, ensuring smooth rendering and realistic environments. <br /><br />Optimized for multiple headsets and devices, these solutions help businesses engage users in entirely new and measurable ways.
                  </p>
                </div> */}
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_front}>
                  {/* <h3 className={styles.step}>02</h3> */}
                  <div className={styles.features_icon}>
                    <Image
                      src="/images/image-recognition.webp"
                      width={135}
                      height={135}
                      style={{ objectFit: "contain" }}
                      alt="Arrow Image"
                    />
                  </div>
                  <h3 className={styles.title}>Image Recognition</h3>
                  <p className={`${styles.para} scroll_block`}>
                    Appsters create image recognition apps and solutions that turn raw visual data into insights. From retail inventory scanning to healthcare diagnostics, our models are trained for accuracy and speed. <br /><br />We deploy production-ready AI models that integrate with mobile and enterprise systems, enabling instant detection, classification, and automation at scale.
                  </p>
                </div>
                {/* <div className={styles.box_hover}>
                  <h3 className={styles.title}>Image Recognition</h3>
                  <p className={`${styles.para} scroll_block`}>
                    Appsters create image recognition apps and solutions that turn raw visual data into insights. From retail inventory scanning to healthcare diagnostics, our models are trained for accuracy and speed. <br /><br />We deploy production-ready AI models that integrate with mobile and enterprise systems, enabling instant detection, classification, and automation at scale.
                  </p>
                </div> */}
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_front}>
                  {/* <h3 className={styles.step}>03</h3> */}
                  <div className={styles.features_icon}>
                    <Image
                      src="/images/big-data.webp"
                      width={135}
                      height={135}
                      style={{ objectFit: "contain" }}
                      alt="Arrow Image"
                    />
                  </div>
                  <h3 className={styles.title}>Big Data</h3>
                  <p className={`${styles.para} scroll_block`}>
                    Our big data solutions collect, process, and analyze massive datasets in real time. Using distributed architectures and optimized pipelines, we help businesses uncover actionable patterns faster.  <br /><br />If your business needs analytics dashboards, predictive models, or scalable storage, we deliver systems that grow with your data without losing performance.
                  </p>
                </div>
                {/* <div className={styles.box_hover}>
                  <h3 className={styles.title}>Big Data</h3>
                  <p className={`${styles.para} scroll_block`}>
                    Our big data solutions collect, process, and analyze massive datasets in real time. Using distributed architectures and optimized pipelines, we help businesses uncover actionable patterns faster.  <br /><br />If your business needs analytics dashboards, predictive models, or scalable storage, we deliver systems that grow with your data without losing performance.
                  </p>
                </div> */}
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_front}>
                  {/* <h3 className={styles.step}>04</h3> */}
                  <div className={styles.features_icon}>
                    <Image
                      src="/images/voice-recognition.webp"
                      width={135}
                      height={135}
                      style={{ objectFit: "contain" }}
                      alt="Arrow Image"
                    />
                  </div>
                  <h3 className={styles.title}>Voice Recognition & NLP</h3>
                  <p className={`${styles.para} scroll_block`}>
                    We engineer voice-enabled apps that understand, process, and respond naturally. Our NLP models support multiple languages, custom vocabularies, and domain-specific commands. <br /><br />From virtual assistants to call center automation, we build speech solutions that improve user accessibility and deliver faster response times for customer-facing applications.
                  </p>
                </div>
                {/* <div className={styles.box_hover}>
                  <h3 className={styles.title}>Voice Recognition & NLP</h3>
                  <p className={`${styles.para} scroll_block`}>
                    We engineer voice-enabled apps that understand, process, and respond naturally. Our NLP models support multiple languages, custom vocabularies, and domain-specific commands. <br /><br />From virtual assistants to call center automation, we build speech solutions that improve user accessibility and deliver faster response times for customer-facing applications.
                  </p>
                </div> */}
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_front}>
                  {/* <h3 className={styles.step}>05</h3> */}
                  <div className={styles.features_icon}>
                    <Image
                      src="/images/quantum-computing.webp"
                      width={135}
                      height={135}
                      style={{ objectFit: "contain" }}
                      alt="Arrow Image"
                    />
                  </div>
                  <h3 className={styles.title}>Quantum Computing</h3>
                  <p className={`${styles.para} scroll_block`}>
                    Quantum computing is unlocking possibilities in optimization, cryptography, and simulation. Appsters help businesses experiment safely with quantum algorithms by building hybrid apps that pair classical and quantum workflows. <br /><br />Our solutions are designed for future scalability, so early adopters stay ahead as hardware capabilities rapidly change.
                  </p>
                </div>
                {/* <div className={styles.box_hover}>
                  <h3 className={styles.title}>Quantum Computing</h3>
                  <p className={`${styles.para} scroll_block`}>
                    Quantum computing is unlocking possibilities in optimization, cryptography, and simulation. Appsters help businesses experiment safely with quantum algorithms by building hybrid apps that pair classical and quantum workflows. <br /><br />Our solutions are designed for future scalability, so early adopters stay ahead as hardware capabilities rapidly change.
                  </p>
                </div> */}
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_front}>
                  {/* <h3 className={styles.step}>06</h3> */}
                  <div className={styles.features_icon}>
                    <Image
                      src="/images/progressive-web-apps.webp"
                      width={135}
                      height={135}
                      style={{ objectFit: "contain" }}
                      alt="Arrow Image"
                    />
                  </div>
                  <h3 className={styles.title}>Progressive Web Apps </h3>
                  <p className={`${styles.para} scroll_block`}>
                    PWAs bridge the gap between web and mobile. We design lightweight, fast-loading progressive web apps that work offline, support push notifications, and deliver native-like performance. <br /><br />This approach minimizes development costs while expanding reach, making them ideal for businesses targeting diverse devices and global audiences.
                  </p>
                </div>
                {/* <div className={styles.box_hover}>
                  <h3 className={styles.title}>Progressive Web Apps </h3>
                  <p className={`${styles.para} scroll_block`}>
                    PWAs bridge the gap between web and mobile. We design lightweight, fast-loading progressive web apps that work offline, support push notifications, and deliver native-like performance. <br /><br />This approach minimizes development costs while expanding reach, making them ideal for businesses targeting diverse devices and global audiences.
                  </p>
                </div> */}
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_front}>
                  {/* <h3 className={styles.step}>07</h3> */}
                  <div className={styles.features_icon}>
                    <Image
                      src="/images/5g-technology.webp"
                      width={135}
                      height={135}
                      style={{ objectFit: "contain" }}
                      alt="Arrow Image"
                    />
                  </div>
                  <h3 className={styles.title}>5G Technology</h3>
                  <p className={`${styles.para} scroll_block`}>
                    We build apps that take advantage of 5G’s ultra-low latency and high bandwidth. From AR streaming to IoT control systems, our solutions leverage next-gen networks to deliver richer experiences. <br /><br />With edge computing integration, we push for speed, reliability, and security at every node of your infrastructure.
                  </p>
                </div>
                {/* <div className={styles.box_hover}>
                  <h3 className={styles.title}>5G Technology</h3>
                  <p className={`${styles.para} scroll_block`}>
                    We build apps that take advantage of 5G’s ultra-low latency and high bandwidth. From AR streaming to IoT control systems, our solutions leverage next-gen networks to deliver richer experiences. <br /><br />With edge computing integration, we push for speed, reliability, and security at every node of your infrastructure.
                  </p>
                </div> */}
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_front}>
                  {/* <h3 className={styles.step}>08</h3> */}
                  <div className={styles.features_icon}>
                    <Image
                      src="/images/data-science.webp"
                      width={135}
                      height={135}
                      style={{ objectFit: "contain" }}
                      alt="Arrow Image"
                    />
                  </div>
                  <h3 className={styles.title}>Data Science</h3>
                  <p className={`${styles.para} scroll_block`}>
                    Our data science solutions turn raw data into predictive intelligence. We design and deploy machine learning pipelines for forecasting, clustering, and anomaly detection. <br /><br />With clear reporting and visualization, stakeholders get actionable insights that support better decisions, faster iterations, and stronger performance across business units.
                  </p>
                </div>
                {/* <div className={styles.box_hover}>
                  <h3 className={styles.title}>Data Science</h3>
                  <p className={`${styles.para} scroll_block`}>
                    Our data science solutions turn raw data into predictive intelligence. We design and deploy machine learning pipelines for forecasting, clustering, and anomaly detection. <br /><br />With clear reporting and visualization, stakeholders get actionable insights that support better decisions, faster iterations, and stronger performance across business units.
                  </p>
                </div> */}
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
