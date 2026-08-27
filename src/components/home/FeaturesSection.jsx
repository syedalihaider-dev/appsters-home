"use client";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const defaultFeatures = [
  {
    icon: "/images/virtual-reality.webp",
    title: "Virtual Reality",
    desc: "We build immersive VR experiences for training, simulation, and entertainment. Our VR apps are designed with performance and accessibility in mind, ensuring smooth rendering and realistic environments. <br /><br />Optimized for multiple headsets and devices, these solutions help businesses engage users in entirely new and measurable ways."
  },
  {
    icon: "/images/image-recognition.webp",
    title: "Image Recognition",
    desc: "Appsters create image recognition apps and solutions that turn raw visual data into insights. From retail inventory scanning to healthcare diagnostics, our models are trained for accuracy and speed. <br /><br />We deploy production-ready AI models that integrate with mobile and enterprise systems, enabling instant detection, classification, and automation at scale."
  },
  {
    icon: "/images/big-data.webp",
    title: "Big Data",
    desc: "Our big data solutions collect, process, and analyze massive datasets in real time. Using distributed architectures and optimized pipelines, we help businesses uncover actionable patterns faster. <br /><br />If your business needs analytics dashboards, predictive models, or scalable storage, we deliver systems that grow with your data without losing performance."
  }
];

export default function FeaturesSection({ data }) {
  const subHeading = data?.subHeading || "Mobile App Development Solutions";
  const title = data?.title || 'That Power Growth For <span class="primarytxt">Next-Generation</span> Experiences';
  const features = data?.features || defaultFeatures;

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
                <p className={styles.sub_heading}>{subHeading}</p>
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
                <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}>
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
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {features.map((item, idx) => (
            <SwiperSlide key={idx}>
              <li>
                <div className={styles.box}>
                  <div className={styles.box_front}>
                    <div className={styles.features_icon}>
                      <Image
                        src={item.icon || "/images/virtual-reality.webp"}
                        width={135}
                        height={135}
                        style={{ objectFit: "contain" }}
                        alt={item.title || "Feature Icon"}
                      />
                    </div>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={`${styles.para} scroll_block`} dangerouslySetInnerHTML={{ __html: item.desc }}>
                    </p>
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
