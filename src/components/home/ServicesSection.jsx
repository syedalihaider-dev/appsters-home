"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";
import styles from './ServicesSection.module.css';

const defaultSlides = [
  {
    step: "01",
    image: "/images/services/ecommerce-app-development.webp",
    title: "Mobile App Development",
    desc: "We build mobile apps designed for performance and growth, including Native iOS and Android app development solutions optimized for speed, usability, and security. Our approach delivers a consistent user experience, even at scale, with an architecture built to support future feature expansion."
  },
  {
    step: "02",
    image: "/images/services/android-app-development.webp",
    title: "Android App Development",
    desc: "We engineer Android apps built for reach, reliability, and results. Every interface, API, and database call is optimized for speed and security across diverse Android ecosystems. From Kotlin and Java to Jetpack integrations, our Android app development process ensures your product runs brilliantly, no matter the device, screen size, or OS version."
  },
  {
    step: "03",
    image: "/images/services/ios-app-development.webp",
    title: "iOS App Development",
    desc: "As a leading iOS app development company, we specialize in creating high-performance iPhone and iPad applications that reflect Apple's elegance and precision. We leverage Swift, SwiftUI, and modern iOS architectures to build apps that not only look stunning but also deliver fluid performance, seamless navigation, and enterprise-grade security."
  },
  {
    step: "04",
    image: "/images/services/react-native-app-development.webp",
    title: "React Native App Development",
    desc: "We specialize in React Native app development services that bring your digital vision to life across both iOS and Android platforms from a single, robust codebase. Our expert developers build native-feeling mobile applications with clean architecture, fluid UI transitions, and modular code."
  },
  {
    step: "05",
    image: "/images/services/flutter-app-development.webp",
    title: "Flutter App Development",
    desc: "We deliver cutting-edge Flutter app development solutions that let businesses launch feature-rich mobile apps across iOS, Android, and web from a single codebase. Using Dart and Flutter's expressive UI toolkit, we build custom widgets and smooth animations tailored to your brand identity."
  },
  {
    step: "06",
    image: "/images/services/cross-platform-app-development.webp",
    title: "Cross Platform App Development",
    desc: "We deliver cross-platform mobile app development services that maximize code reuse across iOS and Android while maintaining native responsiveness and design fidelity. Our team uses modern frameworks to build secure, cross-platform apps that deploy faster, reduce time-to-market, and simplify long-term maintenance."
  },
  {
    step: "07",
    image: "/images/services/mobile-game-app-development.webp",
    title: "Game Development",
    desc: "Game developers at Appsters design interactive, scalable experiences that combine engaging gameplay with rock-solid code for smooth performance. We optimize for responsiveness, multiplayer support, and compatibility across multiple devices and platforms."
  }
];

export default function ServicesSection({ data }) {
  const transparentHeading = data?.transparentHeading || "Our Services";
  const subHeading = data?.subHeading || "Our Services";
  const title = data?.title || 'Solutions That Build & Scale <span class="primarytxt"> Digital Products</span>';
  const description = data?.description || data?.desc || "Appsters has engineered platforms that handle millions of users daily, across fintech, e-commerce, and mobility.";
  const slides = data?.slides || defaultSlides;

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
      <p className={styles.transparent_heading}>{transparentHeading}</p>
      <div className="container">
        <div className={styles.sec_top}>
          <div className="row align-items-start">
            <div className="col-sm-12 col-md-3">
              <span className={styles.sub_heading}>{subHeading}</span>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_left}>
                <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className={styles.sec_right}>
                <p>
                  {description}
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
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className={`${styles.box} ${styles.slideBox}`}>
                <div className={styles.box_before}>
                  <Image
                    src={slide.capImage || "/images/file-cap-blue.png"}
                    alt="File Cap Blue Image..."
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className={styles.step}>{slide.step || String(idx + 1).padStart(2, '0')}</p>
                <div className={styles.box_inner}>
                  <div className={styles.holding_mobile}>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={515}
                      height={588}
                    />
                  </div>
                  <div className={styles.box_content}>
                    <h3>{slide.title}</h3>
                    <p>
                      {slide.desc}
                    </p>
                    <div className="combo_btn">
                      <ActionButtons href={slide.btnHref || "#contactForm"} />
                      <ActionButtons text={slide.callBtnText || "Call Us Now"} href={slide.callBtnHref || SITE_PHONE_LINK} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
