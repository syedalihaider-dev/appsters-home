"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from './ServicesSection.module.css';

export default function ServicesSection() {

  return (
    <section className={styles.servicesSection}>
      <div className={styles.circle_shape}>
        <Image
          src="/images/circle-shape.png"
          alt="Circle Shape Image"
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className={styles.transparent_heading}>Our Services</p>
      <div className="container">
        <div className={styles.sec_top}>
          <div className="row align-items-start">
            <div className="col-sm-12 col-md-3">
              <span className={styles.sub_heading}>Our Services</span>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_left}>
                <h2>
                  Solutions That Build & Scale
                  <span className="primarytxt"> Digital Products</span>
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className={styles.sec_right}>
                <p>
                  Appsters has engineered platforms that handle millions of users daily, across fintech, e-commerce, and mobility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec_content}>
        <Swiper
          centeredSlides={true}
          slidesPerView={1.5}
          spaceBetween={20}
          loop={false}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 1.5 }
          }}
          onSlideChange={() => { }}
          className={styles.centerSwiper}
        >
          <SwiperSlide>
            <div className={`${styles.box} ${styles.slideBox}`}>
              <div className={styles.box_before}>
                <Image
                  src="/images/file-cap-blue.png"
                  alt="File Cap Blue Image..."
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className={styles.step}>01</p>
              <div className={styles.box_inner}>
                <div className={styles.holding_mobile}>
                  <Image
                    src="/images/hand-holding-mobile-left.png"
                    alt="Mobile"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.box_content}>
                  <h3>Mobile App Development</h3>
                  <p>
                    We build mobile apps designed for performance and growth, including Native iOS and Android app development solutions optimized for speed, usability, and security. Our approach delivers a consistent user experience, even at scale, with an architecture built to support future feature expansion.
                  </p>
                  <div className="combo_btn">
                    <ActionButtons />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.box} ${styles.slideBox}`}>
              <div className={styles.box_before}>
                <Image
                  src="/images/file-cap-blue.png"
                  alt="File Cap Blue Image..."
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className={styles.step}>02</p>
              <div className={styles.box_inner}>
                <div className={styles.holding_mobile}>
                  <Image
                    src="/images/hand-holding-mobile-left.png"
                    alt="Mobile"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.box_content}>
                  <h3>Android App Development</h3>
                  <p>
                    We engineer Android apps built for reach, reliability, and results. Every interface, API, and database call is optimized for speed and security across diverse Android ecosystems. From Kotlin and Java to Jetpack integrations, our Android app development process ensures your product runs brilliantly, no matter the device, screen size, or OS version.
                  </p>
                  <div className="combo_btn">
                    <ActionButtons />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.box} ${styles.slideBox}`}>
              <div className={styles.box_before}>
                <Image
                  src="/images/file-cap-blue.png"
                  alt="File Cap Blue Image..."
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className={styles.step}>03</p>
              <div className={styles.box_inner}>
                <div className={styles.holding_mobile}>
                  <Image
                    src="/images/hand-holding-mobile-left.png"
                    alt="Mobile"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.box_content}>
                  <h3>iOS App Development</h3>
                  <p>
                    Fidelity meets performance in our iOS app development solutions. Built using Swift and Objective-C, our iOS apps are designed for fluidity, responsiveness, and longevity. We follow Apple’s Human Interface Guidelines rigorously, ensuring that every visual element feels intentional and every interaction feels premium, from prototype to post-launch.
                  </p>
                  <div className="combo_btn">
                    <ActionButtons />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.box} ${styles.slideBox}`}>
              <div className={styles.box_before}>
                <Image
                  src="/images/file-cap-blue.png"
                  alt="File Cap Blue Image..."
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className={styles.step}>04</p>
              <div className={styles.box_inner}>
                <div className={styles.holding_mobile}>
                  <Image
                    src="/images/hand-holding-mobile-left.png"
                    alt="Mobile"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.box_content}>
                  <h3>Flutter App Development</h3>
                  <p>
                    We build lightning-fast, scalable apps built on Flutter, combining beautiful interfaces with native performance. Our Flutter engineers leverage a single codebase to deliver visually rich, cross-platform experiences that feel custom-built. From startup MVPs to enterprise apps, Flutter helps you ship faster without compromising quality or control.
                  </p>
                  <div className="combo_btn">
                    <ActionButtons />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.box} ${styles.slideBox}`}>
              <div className={styles.box_before}>
                <Image
                  src="/images/file-cap-blue.png"
                  alt="File Cap Blue Image..."
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className={styles.step}>05</p>
              <div className={styles.box_inner}>
                <div className={styles.holding_mobile}>
                  <Image
                    src="/images/hand-holding-mobile-left.png"
                    alt="Mobile"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.box_content}>
                  <h3>React Native App Development</h3>
                  <p>
                    With apps developed on React Native, we bridge performance and flexibility through modular architecture and real-time data synchronization. Our developers use React hooks, TypeScript, and reusable components to build scalable products that perform like native apps, only faster to launch and simpler to maintain.
                  </p>
                  <div className="combo_btn">
                    <ActionButtons />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.box} ${styles.slideBox}`}>
              <div className={styles.box_before}>
                <Image
                  src="/images/file-cap-blue.png"
                  alt="File Cap Blue Image..."
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className={styles.step}>06</p>
              <div className={styles.box_inner}>
                <div className={styles.holding_mobile}>
                  <Image
                    src="/images/hand-holding-mobile-left.png"
                    alt="Mobile"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.box_content}>
                  <h3>Cross-Platform App Development</h3>
                  <p>
                    One app, every platform without compromise. Our cross-platform mobile apps deliver native-level performance, unified UI, and consistent experiences across iOS, Android, and the web. We architect using Flutter, React Native, and Kotlin Multiplatform to help you cut costs, code smarter, and scale seamlessly.
                  </p>
                  <div className="combo_btn">
                    <ActionButtons />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.box} ${styles.slideBox}`}>
              <div className={styles.box_before}>
                <Image
                  src="/images/file-cap-blue.png"
                  alt="File Cap Blue Image..."
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className={styles.step}>07</p>
              <div className={styles.box_inner}>
                <div className={styles.holding_mobile}>
                  <Image
                    src="/images/hand-holding-mobile-left.png"
                    alt="Mobile"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.box_content}>
                  <h3>Game Development</h3>
                  <p>
                    Game developers at Appsters design interactive, scalable experiences that combine engaging gameplay with rock-solid code for smooth performance. We optimize for responsiveness, multiplayer support, and compatibility across multiple devices and platforms.
                  </p>
                  <div className="combo_btn">
                    <ActionButtons />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
