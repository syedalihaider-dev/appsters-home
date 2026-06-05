"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import styles from './NewsletterSection.module.css';
import { FaArrowRight } from 'react-icons/fa';

const newsData = [
  {
    badge: "Branded Content",
    image: "/images/newsletter/smart-apps-are-not-the-future-they-are-the-new-baseline-featured-image.webp",
    heading: "Smart Apps Are Not the Future, They Are the New Baseline",
    para: "The conversation around AI in mobile apps has matured past the hype phase. Two years ago, the founders were debating whether to add AI to their product. Today, they are asking how to do it without building something brittle, expensive to maintain, and impossible to explain to a user. The market has moved. The standard has shifted. And the development teams that understand how to build AI-powered applications with architectural integrity are the ones worth working with.",
    anchor: "Read More",
    link: "https://worldreporter.com/smart-apps-are-not-the-future-they-are-the-new-baseline/"
  },
  {
    badge: "Business",
    image: "/images/newsletter/gamification-is-not-a-gimmick-featured-image.jpg",
    heading: "Gamification Is Not a Gimmick",
    para: "Most apps ask users to do something. The great ones make users want to. That distinction sounds simple, and yet the entire field of gamification exists because getting it right is genuinely hard. Loyalty points that nobody redeems, streaks that feel like chores, leaderboards nobody checks after the first day. Done poorly, gamification is wallpaper. Done well, it is the invisible architecture that makes an experience feel alive.",
    anchor: "Read More",
    link: "https://ceoweekly.com/gamification-is-not-a-gimmick/"
  },
  {
    badge: "Branded Content",
    image: "/images/newsletter/when-your-app-idea-demands-more-than-a-template-and-the-case-for-custom-mobile-app-development-featured-image.webp",
    heading: "When Your App Idea Demands More Than a Template",
    para: "There is a reason most downloaded apps feel forgettable within a week. They were built around what a template could do, not around what the user actually needs. The mobile app market has crossed five billion downloads per month globally, yet the apps people keep returning to are almost always built from scratch with a specific purpose in mind. Custom mobile app development is not a luxury reserved for tech giants. It is a strong choice for any serious startup or scaling business today.",
    anchor: "Read More",
    link: "https://usinsider.com/when-your-app-idea-demands-more-than-a-template-and-the-case-for-custom-mobile-app-development/"
  }
];

const NewsletterSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const Card = ({ item }) => (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.cardBadge}>{item.badge}</div>
        <Image
          src={item.image}
          alt={item.heading}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{item.heading}</h3>
        <p className={styles.cardPara}>{item.para}</p>
        <Link href={item.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {item.anchor} <span><FaArrowRight size={14} /></span>
        </Link>
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>LATEST INSIGHTS</div>
          <h2 className={styles.title}>
            Industry <span className={styles.highlight}>News</span> & Trends
          </h2>
          <p className={styles.subtitle}>
            Stay ahead of the curve with our latest insights, trends, and expert opinions on mobile app development, AI integration, and digital transformation.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className={styles.grid}>
          {newsData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        {/* Tablet & Mobile Slider Layout */}
        <div className={styles.sliderWrapper}>
          <Slider {...sliderSettings}>
            {newsData.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
