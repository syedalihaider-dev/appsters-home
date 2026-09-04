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

const defaultTestimonials = [
  {
    name: "Sophia",
    role: "Entrepreneur",
    img: "/images/cclient-review-sophia.webp",
    video: "https://vimeo.com/1184929104?share=copy&fl=sv&fe=ci",
  },
  {
    name: "Daniel",
    role: "Game Developer",
    img: "/images/cclient-review-daniel.webp",
    video: "https://vimeo.com/1184930327?share=copy&fl=sv&fe=ci",
  },
  {
    name: "Mateo",
    role: "Founder Fintech Company",
    img: "/images/cclient-review-mateo.webp",
    video: "https://vimeo.com/1184931603?share=copy&fl=sv&fe=ci",
  },
  {
    name: "Jason",
    role: "Fitness App",
    img: "/images/cclient-review-jason.webp",
    video: "https://vimeo.com/1184931598?share=copy&fl=sv&fe=ci",
  },
  {
    name: "Sophia",
    role: "Entrepreneur",
    img: "/images/cclient-review-sophia.webp",
    video: "https://vimeo.com/1184929104?share=copy&fl=sv&fe=ci",
  },
  {
    name: "Daniel",
    role: "Game Developer",
    img: "/images/cclient-review-daniel.webp",
    video: "https://vimeo.com/1184930327?share=copy&fl=sv&fe=ci",
  },
  {
    name: "Mateo",
    role: "Founder Fintech Company",
    img: "/images/cclient-review-mateo.webp",
    video: "https://vimeo.com/1184931603?share=copy&fl=sv&fe=ci",
  },
  {
    name: "Jason",
    role: "Fitness App",
    img: "/images/cclient-review-jason.webp",
    video: "https://vimeo.com/1184931598?share=copy&fl=sv&fe=ci",
  },
];

export default function VideoTestimonialSection({ data = {}, style = {} }) {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => Fancybox.destroy();
  }, []);

  const title = data.title || '<span class="primarytxt">Real Stories</span> From People Who Wanted <span class="primarytxt">What\'s Next.</span>';
  const testimonials = data.testimonials || defaultTestimonials;

  return (
    <section className={styles.videoTestimonialSection} style={style}>
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
                <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
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
          pagination={{ clickable: false }}
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
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <li>
                <div className={styles.box}>
                  <div className={styles.testimonials_img}>
                    <Image
                      src={item.img || "/images/cclient-review-sophia.webp"}
                      alt={`Client Review ${item.name}...`}
                      fill
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.testimonials_info}>
                    <div className={styles.left}>
                      <h6>{item.name}</h6>
                      <p>{item.role}</p>
                    </div>
                    <div className={styles.right}>
                      <a
                        data-fancybox="testimonial-videos"
                        data-src={item.video || "https://vimeo.com/1184929104?share=copy&fl=sv&fe=ci"}
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
          ))}
        </Swiper>
      </div>
    </section>
  );
}
