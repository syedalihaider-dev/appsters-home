"use client";
import Image from "next/image";
import styles from "./CaseStudiesSection.module.css";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import ActionButtons from "@/components/ui/ActionButtons";
import { caseStudiesData } from "@/data/caseStudiesData";

const defaultCases = [
  {
    image: "/images/case-study/mic2money.webp",
    title: 'Mic2Money | <span class="primarytxt">Music</span> <span class="primarytxt">Entertainment</span> <span class="primarytxt">Monetization</span>',
    desc: "Mic2Money is a live music competition platform built for artists who are tired of waiting for permission. Artists enter contests, perform for a real audience, and earn actual cash based on fan votes: no label, no algorithm, no gatekeepers deciding who gets heard. For fans, it's the first platform that makes discovery feel like participation. You don't just listen. You influence outcomes and get rewarded for spotting talent before the rest of the world catches on.",
    features: ["Live Contest Engine", "Real Cash Payouts", "Fan-Driven Voting"],
    link: "/case-study/mic-2-money"
  },
  {
    image: "/images/case-study/global-reflex.webp",
    title: 'Global Reflex | <span class="primarytxt">Gaming</span> <span class="primarytxt">Competitive</span> <span class="primarytxt">Real-Time</span>',
    desc: "Global Reflex is a precision reaction-time game that strips competitive mobile gaming down to its most honest form. A dot appears. The millisecond timer starts. You tap. Your score is verified, ranked, and placed on a global leaderboard against every other player on the planet. No upgrades that buy you an edge. No luck mechanics. Just the speed of your nervous system, measured accurately, compared fairly, and ranked in real time against the world.",
    features: ["iOS & Android", "Anti-Cheat Verified", "Global Leaderboards"],
    link: "/case-study/global-reflex"
  },
  {
    image: "/images/case-study/my-tank-virtual.webp",
    title: 'My Tank | <span class="primarytxt">Gaming</span> <span class="primarytxt">Interactive</span> <span class="primarytxt">Community</span>',
    desc: "Virtual LiveWell is a fishing app that gives your catch a life after release. Photograph what you reel in, upload it through the app, and watch an animated version of that exact species swim into your personal virtual tank. Your tank grows with every trip, decorates with every milestone, and connects you to a community of anglers whose collections tell the story of every river, lake, and shoreline they have fished. It turns catch-and-release into something you genuinely look forward to logging.",
    features: ["33 Species at Launch", "Gold Coin Economy", "Daily Retention Loops"],
    link: "/case-study/my-tank"
  },
  {
    image: "/images/case-study/where2map.webp",
    title: 'Where2Map | <span class="primarytxt">Navigation</span> <span class="primarytxt">Smart Mapping</span>',
    desc: "Where2Map is a smart navigation app designed to make travel simple, fast, and accurate. It helps users find the best routes, explore nearby places, and reach destinations with real-time directions and traffic updates. Built for everyday use, it combines precise mapping with intuitive guidance, ensuring a smooth navigation experience.",
    features: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"],
    link: "/case-study/where-2-map"
  },
  {
    image: "/images/case-study/marine-fitness.webp",
    title: 'Fitness | <span class="primarytxt">Health</span> <span class="primarytxt">Workouts</span>',
    desc: "Fitness is an all-in-one mobile app designed to help users build healthier routines through personalized workouts, progress tracking, and goal-driven plans. It offers guided exercises, performance insights, and flexible programs tailored to different fitness levels and lifestyles. Built to keep users motivated, the app combines smart tracking with intuitive design.",
    features: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"],
    link: "/case-study/marina-fitness"
  },
  {
    image: "/images/case-study/auto-parts.webp",
    title: 'Auto Parts | <span class="primarytxt">Automotive</span> <span class="primarytxt">E-Commerce</span>',
    desc: "Auto Parts is a comprehensive mobile app designed to help users quickly find, browse, and purchase genuine vehicle parts with ease. It connects car owners, mechanics, and workshops to a wide range of auto components, ensuring accurate compatibility and reliable sourcing. Built for speed and convenience, the app simplifies part discovery.",
    features: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"],
    link: "/case-study/auto-parts"
  }
];

export default function CaseStudiesSection({ data, noSwiper }) {
  const transparentHeading = data?.transparentHeading || "Case Studies";
  const subHeading = data?.subHeading || "Case Studies";
  const title = data?.title || '<span class="primarytxt">Experience the stories.</span> See the results & technology in action.';
  const description = data?.description || data?.desc;

  // When noSwiper is true (service detail pages), use real case studies from centralized data
  // Otherwise use data.cases or defaultCases for the homepage Swiper
  const cases = noSwiper ? caseStudiesData : (data?.cases || defaultCases);

  return (
    <section className={styles.caseStudiesSection}>
      <p className={styles.transparent_heading}>{transparentHeading}</p>
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

          <p className={styles.sub_heading}>{subHeading}</p>

          <div className="row align-items-center">
            <div className="col-sm-12 col-md-5">
              <div className={styles.sec_left}>
                {!noSwiper && (
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
                )}
              </div>
            </div>

            <div className="col-sm-12 col-md-7">
              <div className={styles.sec_right}>
                <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                {description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {noSwiper ? (
        /* Grid layout for service detail pages — no Swiper */
        <div className={`${styles.sec_content} ${styles.gridLayout}`}>
          {cases.map((item, idx) => (
            <li key={item.id || idx}>
              <div className={styles.gridCardLink}>
                <div className={styles.box}>
                  <p className={styles.case_heading}>Case</p>
                  <div className={styles.case_img}>
                    <Image
                      src={item.image}
                      alt={item.title || "Case Image"}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className={styles.case_info}>
                    <div className={styles.left}>
                      <h4 className={styles.title}>{item.title}</h4>
                      <p className="scroll_block">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {item.stats && item.stats.length > 0 && (
                    <ul className={styles.case_features}>
                      {item.stats.map((stat, sIdx) => (
                        <li key={sIdx}>{stat}</li>
                      ))}
                    </ul>
                  )}
                  <div className="combo_btn">
                    <ActionButtons text="View Case Study" href={item.link || "#contactForm"} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      ) : (
        /* Swiper layout for homepage */
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
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {cases.map((item, idx) => (
              <SwiperSlide key={idx}>
                <li>
                  <div className={styles.box}>
                    <p className={styles.case_heading}>Case</p>
                    <div className={styles.case_img}>
                      <Image
                        src={item.image}
                        alt={item.title || "Case Image"}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className={styles.case_info}>
                      <div className={styles.left}>
                        <h4 className={styles.title} dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                        <p className="scroll_block">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    {item.features && item.features.length > 0 && (
                      <ul className={styles.case_features}>
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx}>{feat}</li>
                        ))}
                      </ul>
                    )}
                    <div className="combo_btn">
                      <ActionButtons text={item.btnText || "View Case Study"} href={item.link || "#contactForm"} />
                    </div>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
