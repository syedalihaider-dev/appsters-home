"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./LocationSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { SITE_PHONE, SITE_PHONE_LINK, SITE_EMAIL, SITE_EMAIL_LINK } from "@/app/constants";

import "swiper/css";
import "swiper/css/navigation";

export default function LocationSection() {
  const [activeBg, setActiveBg] = useState(0);
  const swiperRef = useRef(null);

  const bgImages = [
    "/images/locations/chicago-bg.png",
    "/images/locations/dubai-bg.png",
    "/images/locations/houston-bg.png",
    "/images/locations/austin-bg.png",
    "/images/locations/los-angeles-bg.png",
    "/images/locations/pierre-bg.png",
    "/images/locations/bahrain-bg.png",
    "/images/locations/qatar-bg.png",
    "/images/locations/washington-bg.png",
    "/images/locations/dallas-bg.png",
    "/images/locations/toronto-bg.png",
    "/images/locations/san-francisco-bg.png",
    "/images/locations/new-york-bg.png",
    "/images/locations/miami-bg.png",
  ];

  const handleSlideChange = (swiper) => {
    setActiveBg(swiper.realIndex); // Active slide ke index se BG change hoga
  };

  return (
    <section className={styles.locationSection}>
      <p className={styles.transparent_heading}>Locations</p>
      {/* BACKGROUND IMAGES */}
      {bgImages.map((bg, i) => (
        <div
          key={i}
          className={`${styles.location_bg} ${activeBg === i ? styles.activeBg : ""
            }`}
        >
          <Image src={bg} fill alt="BG" style={{ objectFit: "cover" }} />
        </div>
      ))}

      <div className="container">
        <div className={styles.sec_top}>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_left}>
                <p className={styles.sub_heading}>Our Locations</p>

                <div className={styles.custom_arrow}>
                  <div className={`swiper-button-prev ${styles.left} ${styles.dots}`}>
                    <Image
                      src="/images/slider-arrow.png"
                      fill
                      alt="Arrow"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <div className={`swiper-button-next ${styles.right} ${styles.dots}`}>
                    <Image
                      src="/images/slider-arrow.png"
                      fill
                      alt="Arrow"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_right}>
                <h2 className={styles.title}>
                  Our Global <span className="primarytxt">Presence</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT SLIDER */}
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
            spaceBetween={20}
            // centeredSlides={true}
            // centeredSlidesBounds={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* --------- CHICAGO --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Chicago</p>
                    <Image
                      src="/images/locations/chicago.png"
                      width={485}
                      height={369}
                      alt="Chicago"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>299 South Main Street Salt Lake City, Utah 84111</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- DUBAI --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Dubai</p>
                    <Image
                      src="/images/locations/dubai.png"
                      width={485}
                      height={369}
                      alt="Dubai"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>2139 Hoora Ave, Manama 973, Bahrain</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- HOUSTAN --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Houston</p>
                    <Image
                      src="/images/locations/houston.png"
                      width={485}
                      height={369}
                      alt="Houston"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>26 Broadway Suite 934, New York, NY 10004</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- AUSTIN --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Austin</p>
                    <Image
                      src="/images/locations/austin.png"
                      width={485}
                      height={369}
                      alt="Austin"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- LOS ANGELES --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Los Angeles</p>
                    <Image
                      src="/images/locations/los-angeles.png"
                      width={485}
                      height={369}
                      alt="Los Angeles"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- PIERRE --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Pierre</p>
                    <Image
                      src="/images/locations/pierre.png"
                      width={485}
                      height={369}
                      alt="Pierre"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- BAHRAIN --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Bahrain</p>
                    <Image
                      src="/images/locations/bahrain.png"
                      width={485}
                      height={369}
                      alt="Bahrain"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- QATAR --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Qatar</p>
                    <Image
                      src="/images/locations/qatar.png"
                      width={485}
                      height={369}
                      alt="Qatar"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- WASHINGTON --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Washington</p>
                    <Image
                      src="/images/locations/washington.png"
                      width={485}
                      height={369}
                      alt="Washington"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- DALLAS --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Dallas</p>
                    <Image
                      src="/images/locations/dallas.png"
                      width={485}
                      height={369}
                      alt="Dallas"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- TORONTO --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Toronto</p>
                    <Image
                      src="/images/locations/toronto.png"
                      width={485}
                      height={369}
                      alt="Toronto"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- SAN FRANCISCO --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>San Francisco</p>
                    <Image
                      src="/images/locations/san-francisco.png"
                      width={485}
                      height={369}
                      alt="San Francisco"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- NEW YORK --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>New York</p>
                    <Image
                      src="/images/locations/new-york.png"
                      width={485}
                      height={369}
                      alt="New York"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* --------- MIAMA --------- */}
            <SwiperSlide>
              <div className={styles.box}>
                <div className={styles.box_inner}>
                  <div className={styles.location_img}>
                    <p className={styles.location_title}>Miami</p>
                    <Image
                      src="/images/locations/miami.png"
                      width={485}
                      height={369}
                      alt="Miami"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <ul className={styles.location_info}>
                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/location.png"
                            fill
                            alt="Loc"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Location
                          <a>Office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/phone.png"
                            fill
                            alt="Phone"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Contact Us
                          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.link}>
                        <div className={styles.img}>
                          <Image
                            src="/images/envelop.png"
                            fill
                            alt="Email"
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        <p className={styles.heading}>
                          Email Us
                          <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
