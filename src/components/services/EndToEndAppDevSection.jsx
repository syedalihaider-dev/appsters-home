"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ActionButtons from "@/components/ui/ActionButtons";
import { servicesList } from '@/data/serviceData';

import styles from './EndToEndAppDevSection.module.css';

export default function EndToEndAppDevSection({ data }) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const title = data?.title || 'END-TO-END MOBILE APP DEVELOPMENT <br /> BRIDGING <span class="highlight">THE DIGITAL GAP.</span>';
  const description = data?.description || "Our service stack covers every major platform and framework, ensuring your business and disruptive ideas can move from concept to launch without friction and glitches. Our developers integrate modern frameworks, data layers, and security-first architecture.";
  const items = data?.cards || data?.services || servicesList;

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const CardContent = ({ item }) => {
    const cardHref = item.link || (item.slug ? `/servicedetail/${item.slug}` : (item.buttonHref || "#contactForm"));

    return (
      <Link href={cardHref} className={styles.card}>
        <Image
          src={item.bg || "/images/services/android-app-development.webp"}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <Image src={item.icon || "/images/services/android-icon.webp"} alt={`${item.title} icon`} width={44} height={44} style={{ objectFit: 'contain' }} />
          </div>
          <h5>{item.title}</h5>
          <div className={styles.hoverContent}>
            <p>{item.desc}</p>
            <ActionButtons 
              as="div"
              text={item.buttonText || (item.link ? "View Service" : "Get a Quote")}
            />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section className={styles.endToEndSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p className={styles.desc}>
            {description}
          </p>
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
              576: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <CardContent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.grid}>
            {items.map((item) => (
              <CardContent key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
