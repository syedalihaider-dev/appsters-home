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
                  Beyond the Code:<br /> Real Stories, Real
                  <span className="primarytxt"> Results</span>
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
                    <h5>A design system that enables international growth & ownership</h5>
                    <p>
                      Outdated processes replaced with modern, streamlined systems that cut costs and improve operational efficiency.
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
                  <li>User Research</li>
                  <li>Wireframing</li>
                  <li>Design& Development</li>
                  <li>Testing</li>
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
                    <h5>A design system that enables international growth & ownership</h5>
                    <p>
                      Outdated processes replaced with modern, streamlined systems that cut costs and improve operational efficiency.
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
                  <li>User Research</li>
                  <li>Wireframing</li>
                  <li>Design& Development</li>
                  <li>Testing</li>
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
                    <h5>A design system that enables international growth & ownership</h5>
                    <p>
                      Outdated processes replaced with modern, streamlined systems that cut costs and improve operational efficiency.
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
                  <li>User Research</li>
                  <li>Wireframing</li>
                  <li>Design& Development</li>
                  <li>Testing</li>
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
                    <h5>A design system that enables international growth & ownership</h5>
                    <p>
                      Outdated processes replaced with modern, streamlined systems that cut costs and improve operational efficiency.
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
                  <li>User Research</li>
                  <li>Wireframing</li>
                  <li>Design& Development</li>
                  <li>Testing</li>
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
