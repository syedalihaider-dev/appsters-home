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
                  Services That Build & Scale
                  <span className="primarytxt"> Digital Products</span>
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className={styles.sec_right}>
                <p>
                  We cover every stage of the product lifecycle with technical depth and business focus.
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
        </Swiper>
      </div>
    </section>
  );
}
