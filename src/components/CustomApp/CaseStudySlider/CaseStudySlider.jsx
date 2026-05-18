"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './CaseStudySlider.module.css';

const slides = [
  {
    id: 1,
    bgImage: "/images/custom-app/case-study/case-1-bg-img.jpg",
    logo: "/images/custom-app/case-study/case-1-logo.png",
    titleText: "Providing ease to the customers who are looking for therapy services to get the services at their door step.",
    sideImg: "/images/custom-app/case-study/case-1-side-img-1.png",
  },
  {
    id: 2,
    bgImage: "/images/custom-app/case-study/case-2-bg-img.jpg",
    logo: "/images/custom-app/case-study/case-2-logo.png",
    titleText: "Providing a web application to the writers and readers of the literature world.",
    sideImg: "/images/custom-app/case-study/case-2-side-img-1.png",
  },
  {
    id: 3,
    bgImage: "/images/custom-app/case-study/case-3-bg-img.jpg",
    logo: "/images/custom-app/case-study/case-3-logo.png",
    titleText: "Intuitive and user friendly, the app is a resource network for entertainment professionals worldwide to showcase creative talents, socially connect, and collaborate using EO chat and more.",
    sideImg: "/images/custom-app/case-study/case-3-side-img-1.png",
  },
  {
    id: 4,
    bgImage: "/images/custom-app/case-study/case-4-bg-img.jpg",
    logo: "/images/custom-app/case-study/case-4-logo.png",
    titleText: "The goals set by the client were simple yet unique. The client wanted us to develop a system where he was be showcasing all the events",
    sideImg: "/images/custom-app/case-study/case-4-side-img-1.png",
  },
  {
    id: 5,
    bgImage: "/images/custom-app/case-study/case-5-bg-img.jpg",
    logo: "/images/custom-app/case-study/case-5-logo.png",
    titleText: "Our talented and experienced group of developers designed an easy solution for Pond Pros for searching and browsing various pond contractors and their respective locations.",
    sideImg: "/images/custom-app/case-study/case-5-side-img-1.png",
  },
  {
    id: 6,
    bgImage: "/images/custom-app/case-study/case-6-bg-img.jpg",
    logo: "/images/custom-app/case-study/case-6-logo.png",
    titleText: "Providing innovative digital solutions and robust platforms to enhance user engagement and drive business transformation across industries.",
    sideImg: "/images/custom-app/case-study/case-6-side-img-1.png",
  }
];

const CaseStudySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play functionality (optional, can be removed if user wants full control)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.sliderSection}>
      {/* Background Images with Fade Transition */}
      {slides.map((slide, index) => (
        <div
          key={`bg-${slide.id}`}
          className={`${styles.bgLayer} ${index === activeIndex ? styles.activeBg : ''}`}
        >
          <Image
            src={slide.bgImage}
            alt="Background"
            fill
            className={styles.bgImage}
            priority={index === 0}
          />
        </div>
      ))}

      <div className="container position-relative h-100 z-1">
        <div className="row h-100 align-items-center">
          {/* Content Column */}
          <div className="col-12 col-md-5 col-lg-5">
            <div className={styles.contentWrapper}>
              {slides.map((slide, index) => (
                <div
                  key={`content-${slide.id}`}
                  className={`${styles.slideContent} ${index === activeIndex ? styles.activeContent : ''}`}
                >
                  <div className={styles.logoWrapper}>
                    <Image
                      src={slide.logo}
                      alt="Case Study Logo"
                      width={212}
                      height={100}
                      className={styles.logoImg}
                    />
                  </div>
                  <p className={styles.slideText}>{slide.titleText}</p>
                  <a href="#contactSection" className={`${styles.quoteBtn} text-decoration-none`}>
                    Request a Quote
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="col-12 col-md-7 col-lg-7 text-center">
            <div className={styles.imageWrapper}>
              {slides.map((slide, index) => (
                <div
                  key={`img-${slide.id}`}
                  className={`${styles.slideImage} ${index === activeIndex ? styles.activeImage : ''}`}
                >
                  <Image
                    src={slide.sideImg}
                    alt="Project Showcase"
                    width={800}
                    height={600}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudySlider;
