"use client";
import Image from "next/image";
import styles from "./CaseStudiesSection.module.css";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import ActionButtons from "@/components/ui/ActionButtons";

export default function CaseStudiesSection() {
  return (
    <section className={styles.caseStudiesSection}>
      <p className={styles.transparent_heading}>Case Studies</p>
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

          <p className={styles.sub_heading}>Case Studies</p>

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
                  <span className="primarytxt">Experience the stories.</span> See the results & technology in action.
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
          spaceBetween={20}
          slidesPerView={2}
          //centeredSlides={true}
          //centeredSlidesBounds={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-study/mic2money.webp"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      Mic2Money | <span className={styles.primarytxt}>Music</span> <span className={styles.primarytxt}>Entertainment</span> <span className={styles.primarytxt}>Monetization</span>
                    </h4>
                    {/* <h5>Music · Entertainment · Monetization</h5> */}
                    <p className="scroll_block">
                      Mic2Money is a live music competition platform built for artists who are tired of waiting for permission. Artists enter contests, perform for a real audience, and earn actual cash based on fan votes: no label, no algorithm, no gatekeepers deciding who gets heard. For fans, it's the first platform that makes discovery feel like participation. You don't just listen. You influence outcomes and get rewarded for spotting talent before the rest of the world catches on.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>Live Contest Engine</li>
                  <li>Real Cash Payouts</li>
                  <li>Fan-Driven Voting</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-study/global-reflex.webp"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      Global Reflex | <span className={styles.primarytxt}>Mobile Gaming</span> <span className={styles.primarytxt}>Competitive</span> <span className={styles.primarytxt}>Leaderboards</span>
                    </h4>
                    {/* <h5>Mobile Gaming · Competitive · Leaderboards</h5> */}
                    <p className="scroll_block">
                      Global Reflex is a precision reaction-time game that strips competitive mobile gaming down to its most honest form. A dot appears. The millisecond timer starts. You tap. Your score is verified, ranked, and placed on a global leaderboard against every other player on the planet. No upgrades that buy you an edge. No luck mechanics. Just the speed of your nervous system, measured accurately, compared fairly, and ranked in real time against the world.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>iOS & Android</li>
                  <li>Anti-Cheat Verified</li>
                  <li>Global Leaderboards</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-study/my-tank-virtual.webp"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      My Tank | Virtual LiveWell <span className={styles.primarytxt}>Gamification</span> <span className={styles.primarytxt}>Conservation</span> <span className={styles.primarytxt}>Community</span>
                    </h4>
                    {/* <h5>Sonic architecture for low-bandwidth entertainment and music. </h5> */}
                    <p className="scroll_block">
                      Virtual LiveWell is a fishing app that gives your catch a life after release. Photograph what you reel in, upload it through the app, and watch an animated version of that exact species swim into your personal virtual tank. Your tank grows with every trip, decorates with every milestone, and connects you to a community of anglers whose collections tell the story of every river, lake, and shoreline they have fished. It turns catch-and-release into something you genuinely look forward to logging.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>33 Species at Launch</li>
                  <li>Gold Coin Economy</li>
                  <li>Daily Retention Loops</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-study/where2map.webp"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      Where2Map | <span className={styles.primarytxt}>Navigation</span> <span className={styles.primarytxt}>Location Intelligence</span> <span className={styles.primarytxt}>Utility</span>
                    </h4>
                    {/* <h5>Automating operational intelligence for the workforce.</h5> */}
                    <p className="scroll_block">
                      Where2Map is a location intelligence platform built for people who need more than a blue dot on a screen. It layers contextual information on top of real-time mapping data so users don't just know where something is, and they understand what it means, what's around it, and whether the trip is worth making. Built for decisions, not just navigation, it's the mapping tool that finally treats location data as something worth acting on rather than just something worth displaying.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>Real-Time Mapping</li>
                  <li>Smart Location Layer</li>
                  <li>Cross-Platform</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-study/marine-fitness.webp"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      Marina Fitness |
                      <span className={styles.primarytxt}>Health & Fitness</span> <span className={styles.primarytxt}>Tracking</span> <span className={styles.primarytxt}>Lifestyle</span>
                    </h4>
                    {/* <h5>Streamlining operational automotive marketplace intelligence.</h5> */}
                    <p className="scroll_block">
                      Marina Fitness is an all-in-one fitness platform built around the user who actually exists, not the idealized version who never misses a session and already knows what they're doing. It personalizes from the very first workout, tracks performance in ways that keep motivation alive rather than turning progress into a spreadsheet, and structures programs around real fitness levels, real schedules, and real goals. The result is a fitness app that earns its place on your home screen past the first month, because it stays relevant as you improve.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>Personalized Fitness Programs</li>
                  <li>Gamification</li>
                  <li>Goal-Driven Design</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className={styles.box}>
                <p className={styles.case_heading}>Case</p>
                <div className={styles.case_img}>
                  <Image
                    src="/images/case-study/auto-parts.webp"
                    alt="Case Image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.case_info}>
                  <div className={styles.left}>
                    <h4 className={styles.title}>
                      AutoParts | <span className={styles.primarytxt}>Automotive</span> <span className={styles.primarytxt}>E-Commerce</span> <span className={styles.primarytxt}>On-Demand</span>
                    </h4>
                    {/* <h5>Security-first digital learning through next-generation mobile gaming.</h5> */}
                    <p className="scroll_block">
                      AutoParts is an on-demand automotive parts platform that solves the wrong-fitment problem before it starts. Enter your VIN and the catalog filters instantly to parts confirmed compatible with your exact make, model, year, and trim with no cross-referencing, no guesswork, no return shipping on a part that almost fit. Multiple vendors surface in a single search, pricing is transparent, and the checkout flow was built for urgency, because when your car is off the road, the platform's job is to get it back on as fast as possible.
                    </p>
                  </div>
                  {/* <div className={styles.right}>
                    <p className={styles.rating}>
                      98%
                      <span>Generate Revenue</span>
                    </p>
                  </div> */}
                </div>
                <ul className={styles.case_features}>
                  <li>VIN-Based Search</li>
                  <li>Multi-Vendor Catalog</li>
                  <li>Fitment Guarantee</li>
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
