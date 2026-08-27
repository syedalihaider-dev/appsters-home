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

import { caseStudiesData } from '@/data/caseStudiesData';

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