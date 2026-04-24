"use client";
import Image from "next/image";
import styles from "./TestimonialSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      {/* <p className={styles.transparent_heading}>Happy Clients</p> */}
      <div className={styles.sec_content}>
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 col-md-5">
                      <div className={styles.sec_left}>
                          <div className={styles.before}>
                              <Image src="/images/case-studies-before.png" fill style={{ objectFit: "contain" }}
                                  alt="Arrow Image" />
                          </div>
                          <p className={`${styles.sub_heading} ${styles.top_heading}`}>Happy Clients</p>
                          <p className={styles.sub_heading}>Why Stakeholders, Entrepreneurs</p>
                          <h2 className={styles.title}>
                              Businesses Love Our App
                              Development <span className="primarytxt">Services</span>
                          </h2>
                          <p className={styles.para}>
                              From founders to CTOs, businesses choose Appsters because every line of code serves a
                              clear
                              business purpose: growth, AI adaptability, and market edge. <br /><br />
                              We measure success by the impact our solutions create, and our clients agree. From
                              startups to
                              global enterprises, clients trust our developers to engineer digital products that deliver
                              progressive results.
                          </p>
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
              </div>
          </div>
      </div>
      <div className={styles.sec_right}>
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
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_cap}>
                  <Image
                    src="/images/box-cap.png"
                    alt="Box Cap Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className={styles.rating}>
                    4.5 
                    <span className={styles.rating_img}>
                        <Image
                        src="/images/rating-star.png"
                        alt="Rating Star Image"
                        fill
                        style={{ objectFit: "contain" }}
                        />
                    </span>
                </p>
                <hr />
                <p className={`${styles.review_para} scroll_block`}>
                    Partnering with the team at Appsters felt like adding a full-scale product team overnight. The developers delivered a production-ready MVP in record time, maintaining high code quality. The overall clarity in communication & sprint-based updates gave our investors confidence at every milestone. The result was a 30% faster go-to-market and zero post-launch bugs.
                </p>
                <div className={styles.info}>
                    <h6>Richard Neeson, <span>Founder & CTO</span></h6>
                    <div className={styles.trustpilot_img}>
                        <Image
                        src="/images/trustpilot.png"
                        fill
                        style={{ objectFit: "contain" }}
                        alt="Trust Pilot Image"
                        />
                    </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_cap}>
                  <Image
                    src="/images/box-cap.png"
                    alt="Box Cap Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className={styles.rating}>
                    4.5 
                    <span className={styles.rating_img}>
                        <Image
                        src="/images/rating-star.png"
                        alt="Rating Star Image"
                        fill
                        style={{ objectFit: "contain" }}
                        />
                    </span>
                </p>
                <hr />
                <p className={`${styles.review_para} scroll_block`}>
                    Partnering with the team at Appsters felt like adding a full-scale product team overnight. The developers delivered a production-ready MVP in record time, maintaining high code quality. The overall clarity in communication & sprint-based updates gave our investors confidence at every milestone. The result was a 30% faster go-to-market and zero post-launch bugs.
                </p>
                <div className={styles.info}>
                    <h6>Richard Neeson, <span>Founder & CTO</span></h6>
                    <div className={styles.trustpilot_img}>
                        <Image
                        src="/images/trustpilot.png"
                        fill
                        style={{ objectFit: "contain" }}
                        alt="Trust Pilot Image"
                        />
                    </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.box_cap}>
                  <Image
                    src="/images/box-cap.png"
                    alt="Box Cap Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className={styles.rating}>
                    4.5 
                    <span className={styles.rating_img}>
                        <Image
                        src="/images/rating-star.png"
                        alt="Rating Star Image"
                        fill
                        style={{ objectFit: "contain" }}
                        />
                    </span>
                </p>
                <hr />
                <p className={`${styles.review_para} scroll_block`}>
                    Partnering with the team at Appsters felt like adding a full-scale product team overnight. The developers delivered a production-ready MVP in record time, maintaining high code quality. The overall clarity in communication & sprint-based updates gave our investors confidence at every milestone. The result was a 30% faster go-to-market and zero post-launch bugs.
                </p>
                <div className={styles.info}>
                    <h6>Richard Neeson, <span>Founder & CTO</span></h6>
                    <div className={styles.trustpilot_img}>
                        <Image
                        src="/images/trustpilot.png"
                        fill
                        style={{ objectFit: "contain" }}
                        alt="Trust Pilot Image"
                        />
                    </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
