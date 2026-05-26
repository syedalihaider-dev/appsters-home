"use client"

import React, { useEffect, useState } from 'react'
import NewMobileHeader from '@/components/NewMobileApp/Header/NewMobileHeader';
import Sticky from "@/components/NewMobileApp/MobileSkicky/MobileSkicky"
import Bannerdubai from '@/components/NewMobileApp/Banner/Banner'
import NewAward from '@/components/NewMobileApp/NewAward/NewAward';
import Whowearenew from '@/components/NewMobileApp/WhoWeAre/WhoWeAre';
import FutureReady from '@/components/NewMobileApp/FutureReady/FutureReady';
import AppsLived from '@/components/NewMobileApp/AppsLived/AppsLived';
import AppsJourney from '@/components/NewMobileApp/AppsJourney/AppsJourney';
import Conviced from '@/components/NewMobileApp/Conviced/Conviced';
import NewHouston from '@/components/NewMobileApp/NewHouston/NewHouston';
import Industries from '@/components/NewMobileApp/Industries/Industries';
import Deliver from '@/components/NewMobileApp/Deliver/Deliver';
import LogoSlider from '@/components/NewMobileApp/LogoSlider/LogoSlider';
import JournyForm from '@/components/NewMobileApp/JourneyForm/JournyForm';
import Faqs from '@/components/NewMobileApp/Faqs/Faqs';
// import Location from '@/components/NewMobileApp/Location/Location';
import LpFooter from '@/components/NewMobileApp/LpFooter/LpFooter';

const page = ({ content }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDesktopComponents, setShowDesktopComponents] = useState(false);
  const [showMobileComponents, setShowMobileComponents] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Show desktop components after 1 second
    const desktopTimer = setTimeout(() => {
      setShowDesktopComponents(true);
    }, 300);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(desktopTimer);
    };
  }, []);

  useEffect(() => {
    window.replaceChat = () => {
      if (window.$zopim && window.$zopim.livechat) {
        window.$zopim.livechat.window.show();
      } else if (window.zE) {
        try {
          window.zE('webWidget', 'open');
        } catch (e) {
          console.error("Zendesk error:", e);
        }
      } else {
        console.warn("Chat widget is not loaded yet.");
      }
    };
  }, []);

  useEffect(() => {
    const handleTouchOrScroll = () => {
      setShowMobileComponents(true);
      // Remove event listeners after mobile components are shown
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };

    // Add event listeners for touch and scroll events
    window.addEventListener("scroll", handleTouchOrScroll);
    window.addEventListener("touchstart", handleTouchOrScroll);

    return () => {
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };
  }, []);

  // Skicky
  const [isHovered, setIsHovered] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showStickyThreshold = 700;

      if (scrollPosition > showStickyThreshold) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loc = () => {
    setIsHovered((prev) => !prev);
  };

  const handleAnchorClick = () => {
    loc();
    if (!showSticky) {
      setShowSticky(true);
    }
  };
  // Banner Content
  const Banner = {
    // title: <>Top Mobile App <br /> Development Services</>,
    title: <>Mobile App Development Services for iOS, Android & Cross-Platform</>,
    desc: "From MVP to full-scale launch — we build custom mobile apps that are fast, scalable, and AI-ready. Trusted by 450+ clients across fintech, healthcare, e-commerce, and 37 more industries.",
  }
  // award Content
  const Award = {
    title: <>Your Partner For App Development <span>Services</span></>,
    desc: <>Collaborate with our development team for feature-rich mobile<br className='d-none d-xxl-block' /> apps to stay ahead of the competition.
    </>,

  }
  // Who We Are Content
  const WhoWeAre = {
    title: "This is Us",
    desc: <>As the torch bearer of mobile app development services in US, <span>Appsters</span> offers the best app making services and excels in custom <span>mobile and web applications</span>, focusing on user-centric, innovative solutions. We specialize in healthcare, social media, and enterprise apps and software, enhancing operational efficiency and user engagement while boosting <span>ROI </span>for your business.
    </>,
    subtitleOne: "Soul Scribe ",
    subDescOne: "Soul Scribe is a groundbreaking social networking app which functions as digital diary, and you can enlist your loved ones to be part of you online journal. The app operates by using the freemium subscription model, providing a complimentary family room option that enables users to welcome someone from their circle of friends to share their memories. Users have the privilege to create and share profound moments with their loved ones. This makes Soul Scribe a social media experience that is different and personal.",
    subtitleTwo: "Ready App",
    subDescTwo: "The Ready App is a revolutionary platform invented to revolutionize the hiring process for the transportation industry. It fills the communication gap between drivers and recruiters by having an user-friendly interface along with features like secure messaging, personal meetings and real-time updates. Our platform solve issues such as data security, algorithm revisions, and user interface design among others in order to have a scalable and mutually beneficial solution. ",
    subtitleThree: "Greasy Monkey ",
    subDescThree: "Grease Monkey is a comprehensive automotive innovation system which provides everything ranging from car repairs to oil checkup. Serving as an independent app, Grease Monkey presents users with important factors to consider such as prices and locations and also client ratings for your vehicles. The app takes the convenience to a different level altogether.. With Grease Monkey, car owners can do regular maintenance for their cars in an easy way by just a few taps on their smartphones."
  }
  // Sample content data
  const menus = [
    { label: "Discovery Session", index: 0 },
    { label: "Documentation", index: 1 },
    { label: "Design", index: 2 },
    { label: "Execution", index: 3 },
    { label: "Integration & Testing", index: 4 },
    { label: "Deployment", index: 5 },
    { label: "Maintenance & Updates", index: 6 },
  ];
  const sections = [
    [
      {
        num: "01",
        title: "Discovery Session",
        content: `<p class='fontsfregular'>Understanding and recording what the client needs for the perfect mobile app development services that hit the mark.
        </p>`
      },
    ],
    [
      {
        num: "02",
        title: "Documentation",
        content: `<p class='fontsfregular'>Throughout the development process, creating detailed documentation is crucial for finalizing the Scope of Work, SDLC, and BRD so that the user-experience and features are finalized for the application right from the start. </p>`
      },
    ],
    [
      {
        num: "03",
        title: "Design",
        content: `<p class='fontsfregular'>This involves designing the application's architecture, including defining hardware and system requirements, system layout, and necessary platforms for native or cross-platform app development services.</p>`
      },
    ],
    [
      {
        num: "04",
        title: "Execution",
        content: `<p class='fontsfregular'>Writing code according to the previous design. This stage often involves multiple teams, especially in mobile app development services, focusing on different aspects such as iPhone app development services and Android app development.
        </p>`
      },
    ],
    [
      {
        num: "05",
        title: "Integration & Testing",
        content: `<p class='fontsfregular'> We use automation testing tools to debug your applications before sharing the final version with you. We make sure that the final product is user-friendly across multiple operating systems.</p>`
      },
    ],
    [
      {
        num: "06",
        title: "Deployment",
        content: `<p class='fontsfregular'>We deploy the application on Google Play Store and Apple App Store once the app has been checked for all the bugs and errors. We create all the necessary designs and write app store-friendly descriptions so that your app stands out on the list. </p>`
      },
    ],
    [
      {
        num: "07",
        title: "Maintenance & Updates",
        content: `<p class='fontsfregular'>After deployment, the application needs periodic maintenance to ensure it remains functional and up-to-date with the latest advancements. Our post-app development services help you update the application with the latest features. We update the latest versions of your app on Google Play Store and Apple App Store.  </p>`
      }
    ]
  ];
  const HoustonContent = {
    menus: menus,
    sections: sections,
  };

  return (
    <>
      <NewMobileHeader />
      <Sticky isHovered={isHovered} showSticky={showSticky} loc={loc} />
      <Bannerdubai content={Banner} />
      {isMobile ? (
        showMobileComponents && (
          <>
            <NewAward content={Award} contentTwo={content} onAnchorClick={handleAnchorClick} />
            <Whowearenew content={WhoWeAre} contentTwo={content} onAnchorClick={handleAnchorClick} />
            <FutureReady />
            <AppsLived content={content} onAnchorClick={handleAnchorClick} />
            <AppsJourney content={content} onAnchorClick={handleAnchorClick} />
            <Conviced content={content} onAnchorClick={handleAnchorClick} />
            <NewHouston content={HoustonContent} />
            <Industries />
            <Deliver />
            <LogoSlider />
            <JournyForm />
            <Faqs
              faqsData={[
                {
                  question: "Are mobile app development services expensive?",
                  answer: "The cost of developing a mobile app varies based on several factors, such as complexity, features, platform (iOS, Android, cross-platform), and the mobile app development services you choose. It's advisable to speak with several app developers and agencies to get quotes that are more suitable for you."
                },
                {
                  question: "How much does it cost to develop an app in US?",
                  answer: "The cost varies widely depending on the complexity and features of the app. Best app making services charge more due to their reputation and quality of work. Prices generally range from a few thousand dollars to hundreds of thousands depending on the time and effort."
                },
                {
                  question: "What is the typical timeline for mobile app development?",
                  answer: "Development time varies by app intricacy and features. A simple application can take around 6 months to launch while a complex app with two or multiple interfaces can take 9-12 months."
                },
                {
                  question: "Do hybrid app development services develop apps for both iOS and Android?",
                  answer: "Yes, our hybrid app development services have excelled in creating apps that function on iOS and Android platforms. They often employ frameworks like Flutter and React Native to ensure optimum functionality and visual appeal."
                },
                {
                  question: "What is a typical app development process?",
                  answer: "The process for app development includes ideation, UI/UX design, development, testing, and deployment. Each juncture ensures the app meets client expectations and functions exceptionally well across platforms."
                },
                {
                  question: "Will my app be compatible with all devices?",
                  answer: "Appsters focuses on creating apps that work without fault across various devices and operating systems by employing advanced frameworks and rigorous testing methodologies."
                },
                {
                  question: "Can we update mobile applications after launch?",
                  answer: " Yes, our  app development services typically offer maintenance and updates to refine features and improve the app based on user feedback and technological advancements."
                },
                {
                  question: "What data privacy measures are taken by your company?",
                  answer: "Trailblazers of social media app development services, Appsters prioritizes user data privacy by adhering to legal standards like GDPR and CCPA, ensuring secure data storage and transmission while integrating fail-safe consent mechanisms into the app."
                },
              ]}
            />
            {/* <Location /> */}
            <LpFooter />
          </>
        )
      ) : (
        showDesktopComponents && (
          <>
            <NewAward content={Award} contentTwo={content} onAnchorClick={handleAnchorClick} />
            <Whowearenew content={WhoWeAre} contentTwo={content} onAnchorClick={handleAnchorClick} />
            <FutureReady />
            <AppsLived content={content} onAnchorClick={handleAnchorClick} />
            <AppsJourney content={content} onAnchorClick={handleAnchorClick} />
            <Conviced content={content} onAnchorClick={handleAnchorClick} />
            <NewHouston content={HoustonContent} />
            <Industries />
            <Deliver />
            <LogoSlider />
            <JournyForm />
            <Faqs
              faqsData={[
                {
                  question: "Are mobile app development services expensive?",
                  answer: "The cost of developing a mobile app varies based on several factors, such as complexity, features, platform (iOS, Android, cross-platform), and the mobile app development services you choose. It's advisable to speak with several app developers and agencies to get quotes that are more suitable for you."
                },
                {
                  question: "How much does it cost to develop an app in US?",
                  answer: "The cost varies widely depending on the complexity and features of the app. Best app making services charge more due to their reputation and quality of work. Prices generally range from a few thousand dollars to hundreds of thousands depending on the time and effort."
                },
                {
                  question: "What is the typical timeline for mobile app development?",
                  answer: "Development time varies by app intricacy and features. A simple application can take around 6 months to launch while a complex app with two or multiple interfaces can take 9-12 months."
                },
                {
                  question: "Do hybrid app development services develop apps for both iOS and Android?",
                  answer: "Yes, our hybrid app development services have excelled in creating apps that function on iOS and Android platforms. They often employ frameworks like Flutter and React Native to ensure optimum functionality and visual appeal."
                },
                {
                  question: "What is a typical app development process?",
                  answer: "The process for app development includes ideation, UI/UX design, development, testing, and deployment. Each juncture ensures the app meets client expectations and functions exceptionally well across platforms."
                },
                {
                  question: "Will my app be compatible with all devices?",
                  answer: "Appsters focuses on creating apps that work without fault across various devices and operating systems by employing advanced frameworks and rigorous testing methodologies."
                },
                {
                  question: "Can we update mobile applications after launch?",
                  answer: " Yes, our  app development services typically offer maintenance and updates to refine features and improve the app based on user feedback and technological advancements."
                },
                {
                  question: "What data privacy measures are taken by your company?",
                  answer: "Trailblazers of social media app development services, Appsters prioritizes user data privacy by adhering to legal standards like GDPR and CCPA, ensuring secure data storage and transmission while integrating fail-safe consent mechanisms into the app."
                },
              ]}
            />
            {/* <Location /> */}
            <LpFooter />
          </>
        )
      )}
    </>
  )
}

export default page



