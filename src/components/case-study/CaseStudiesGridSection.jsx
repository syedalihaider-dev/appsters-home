"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ActionButtons from '@/components/ui/ActionButtons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './CaseStudiesGridSection.module.css';

const caseStudiesData = [
  {
    id: 1,
    title: "Mic2Money",
    image: "/images/case-study/mic2money.webp",
    desc: "Mic2Money is a live music competition platform built for artists who are tired of waiting for permission. Artists enter contests, perform for a real audience, and earn actual cash based on fan votes: no label, no algorithm, no gatekeepers deciding who gets heard. For fans, it's the first platform that makes discovery feel like participation. You don't just listen. You influence outcomes and get rewarded for spotting talent before the rest of the world catches on.",
    stats: ["Live Contest Engine", "Real Cash Payouts", "Fan-Driven Voting"],
    link: "/case-study/mic-2-money"
  },
  {
    id: 2,
    title: "Global Reflex",
    image: "/images/case-study/global-reflex.webp",
    desc: "Global Reflex is a precision reaction-time game that strips competitive mobile gaming down to its most honest form. A dot appears. The millisecond timer starts. You tap. Your score is verified, ranked, and placed on a global leaderboard against every other player on the planet. No upgrades that buy you an edge. No luck mechanics. Just the speed of your nervous system, measured accurately, compared fairly, and ranked in real time against the world.",
    stats: ["iOS & Android", "Anti-Cheat Verified", "Global Leaderboards"],
    link: "/case-study/global-reflex"
  },
  {
    id: 3,
    title: "My Tank Virtual Live Well",
    image: "/images/case-study/my-tank-virtual.webp",
    desc: "Virtual LiveWell is a fishing app that gives your catch a life after release. Photograph what you reel in, upload it through the app, and watch an animated version of that exact species swim into your personal virtual tank. Your tank grows with every trip, decorates with every milestone, and connects you to a community of anglers whose collections tell the story of every river, lake, and shoreline they have fished. It turns catch-and-release into something you genuinely look forward to logging.",
    stats: ["33 Species at Launch", "Gold Coin Economy", "Daily Retention Loops"],
    link: "/case-study/my-tank"
  },
  {
    id: 4,
    title: "MINDE APP",
    image: "/images/case-study/my-tank-virtual.webp",
    desc: "MINDE is an AI-powered voice companion designed around a simple but powerful idea: Continuity of Self. It allows people to capture thoughts, intentions, reminders, encouragement, and important moments in their own voice, then deliver them back to themselves when they matter most. No typing. No complicated workflows. Just your voice, carried across time.",
    stats: ["Stay Motivated", "Preserve Memories", "Smart Reminders"],
    link: "/case-study/mind-app"
  },
  // {
  //   id: 4,
  //   title: "Where2Map",
  //   image: "/images/case-study/where2map.webp",
  //   desc: "Where2Map is a smart navigation app designed to make travel simple, fast, and accurate. It helps users find the best routes, explore nearby places, and reach destinations with real-time directions and traffic updates. Built for everyday use, it combines precise mapping with intuitive guidance, ensuring a smooth navigation experience.",
  //   stats: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"]
  // },
  // {
  //   id: 5,
  //   title: "Marina Fitness",
  //   image: "/images/case-study/marine-fitness.webp",
  //   desc: "Fitness is an all-in-one mobile app designed to help users build healthier routines through personalized workouts, progress tracking, and goal-driven plans. It offers guided exercises, performance insights, and flexible programs tailored to different fitness levels and lifestyles. Built to keep users motivated, the app combines smart tracking with intuitive design.",
  //   stats: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"]
  // },
  // {
  //   id: 6,
  //   title: "Auto Parts",
  //   image: "/images/case-study/auto-parts.webp",
  //   desc: "Auto Parts is a comprehensive mobile app designed to help users quickly find, browse, and purchase genuine vehicle parts with ease. It connects car owners, mechanics, and workshops to a wide range of auto components, ensuring accurate compatibility and reliable sourcing. Built for speed and convenience, the app simplifies part discovery.",
  //   stats: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"]
  // }
];

export default function CaseStudiesGridSection() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const CardContent = ({ item }) => (
    <div className={styles.card}>
      <div className={styles.caseBadge}>Case</div>
      <div className={styles.imageWrapper}>
        <Image
          src={item.image}
          alt={item.title}
          width={726}
          height={529}
          className={styles.caseImage}
        />
      </div>
      <div className={styles.content}>
        <h3>{item.title}</h3>
        <p className={styles.desc}>{item.desc}</p>
        <div className={styles.stats}>
          {item.stats.map((stat, idx) => (
            <span key={idx} className={styles.statBadge}>{stat}</span>
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <ActionButtons 
            text="View Case Study" 
            href={item.link} 
            className={styles.customBtn}
            textClassName={styles.btnTextBlack}
            iconClassName={styles.btnIconGreen}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.caseStudiesGridSection}>
      <div className="container position-relative">
        <p className={styles.transparent_heading}>CASE STUDIES</p>
        <div className={styles.header}>
          <h2>
            BEYOND THE CODE: <br />REAL STORIES, <span className={styles.highlight}> REAL RESULTS</span>
          </h2>
        </div>
        {mounted && isMobile ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            className={styles.mobileSwiper}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 }
              
            }}
          >
            {caseStudiesData.map((item) => (
              <SwiperSlide key={item.id}>
                <CardContent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.grid}>
            {caseStudiesData.map((item) => (
              <CardContent key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}