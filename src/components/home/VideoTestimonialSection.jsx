"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./VideoTestimonialSection.module.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/navigation";

export default function VideoTestimonialSection() {

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => Fancybox.destroy();
  }, []);

  return (
    <section className={styles.videoTestimonialSection}>
      <p className={styles.transparent_heading}>Trusted Clients</p>
      <div className="container">
        <div className={styles.sec_top}>
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
                  Beyond the Code <br /> Real Stories, Real
                  <span className="primarytxt"> Results</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec_content}>
        <Swiper
          loop={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={5}
          centeredSlides={true}
          centeredSlidesBounds={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
            1601: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.testimonials_img}>
                  <Image
                    src="/images/video-testimonials-01.png"
                    alt="Video Testimonials Image..."
                    fill
                    sizes="100vw"
                  />
                </div>
                <div className={styles.testimonials_info}>
                  <div className={styles.left}>
                    <h6>Financial Services</h6>
                    <p>
                      Transforming Financial Services by Overcoming Legacy Challenges.
                    </p>
                  </div>
                  <div className={styles.right}>
                    <a
                      data-fancybox="testimonial-videos"
                      data-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      className={styles.play_btn}
                    >
                      <Image
                        src="/images/play-btn.png"
                        alt="Play Button Image..."
                        fill
                        sizes="100vw"
                        style={{ objectFit: "contain" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.testimonials_img}>
                  <Image
                    src="/images/video-testimonials-02.png"
                    alt="Video Testimonials Image..."
                    fill
                    sizes="100vw"
                  />
                </div>
                <div className={styles.testimonials_info}>
                  <div className={styles.left}>
                    <h6>Financial Services</h6>
                    <p>
                      Transforming Financial Services by Overcoming Legacy Challenges.
                    </p>
                  </div>
                  <div className={styles.right}>
                    <a
                      data-fancybox="testimonial-videos"
                      data-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      className={styles.play_btn}
                    >
                      <Image
                        src="/images/play-btn.png"
                        alt="Play Button Image..."
                        fill
                        sizes="100vw"
                        style={{ objectFit: "contain" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.testimonials_img}>
                  <Image
                    src="/images/video-testimonials-01.png"
                    alt="Video Testimonials Image..."
                    fill
                    sizes="100vw"
                  />
                </div>
                <div className={styles.testimonials_info}>
                  <div className={styles.left}>
                    <h6>Financial Services</h6>
                    <p>
                      Transforming Financial Services by Overcoming Legacy Challenges.
                    </p>
                  </div>
                  <div className={styles.right}>
                    <a
                      data-fancybox="testimonial-videos"
                      data-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      className={styles.play_btn}
                    >
                      <Image
                        src="/images/play-btn.png"
                        alt="Play Button Image..."
                        fill
                        sizes="100vw"
                        style={{ objectFit: "contain" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.testimonials_img}>
                  <Image
                    src="/images/video-testimonials-02.png"
                    alt="Video Testimonials Image..."
                    fill
                    sizes="100vw"
                  />
                </div>
                <div className={styles.testimonials_info}>
                  <div className={styles.left}>
                    <h6>Financial Services</h6>
                    <p>
                      Transforming Financial Services by Overcoming Legacy Challenges.
                    </p>
                  </div>
                  <div className={styles.right}>
                    <a
                      data-fancybox="testimonial-videos"
                      data-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      className={styles.play_btn}
                    >
                      <Image
                        src="/images/play-btn.png"
                        alt="Play Button Image..."
                        fill
                        sizes="100vw"
                        style={{ objectFit: "contain" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.testimonials_img}>
                  <Image
                    src="/images/video-testimonials-01.png"
                    alt="Video Testimonials Image..."
                    fill
                    sizes="100vw"
                  />
                </div>
                <div className={styles.testimonials_info}>
                  <div className={styles.left}>
                    <h6>Financial Services</h6>
                    <p>
                      Transforming Financial Services by Overcoming Legacy Challenges.
                    </p>
                  </div>
                  <div className={styles.right}>
                    <a
                      data-fancybox="testimonial-videos"
                      data-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      className={styles.play_btn}
                    >
                      <Image
                        src="/images/play-btn.png"
                        alt="Play Button Image..."
                        fill
                        sizes="100vw"
                        style={{ objectFit: "contain" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <div className={styles.testimonials_img}>
                  <Image
                    src="/images/video-testimonials-02.png"
                    alt="Video Testimonials Image..."
                    fill
                    sizes="100vw"
                  />
                </div>
                <div className={styles.testimonials_info}>
                  <div className={styles.left}>
                    <h6>Financial Services</h6>
                    <p>
                      Transforming Financial Services by Overcoming Legacy Challenges.
                    </p>
                  </div>
                  <div className={styles.right}>
                    <a
                      data-fancybox="testimonial-videos"
                      data-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      className={styles.play_btn}
                    >
                      <Image
                        src="/images/play-btn.png"
                        alt="Play Button Image..."
                        fill
                        sizes="100vw"
                        style={{ objectFit: "contain" }}
                      />
                    </a>
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
