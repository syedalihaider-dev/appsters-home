import HeroSection from '@/components/about-us/HeroSection';
import AboutSection from '@/components/about-us/AboutSection';
import AwardsSection from '@/components/about-us/AwardsSection';
import MissionVisionSection from '@/components/about-us/MissionVisionSection';
import WhatWeDoSection from '@/components/about-us/WhatWeDoSection';
import ProcessSection from '@/components/about-us/ProcessSection';
import WhyChooseSection from '@/components/about-us/WhyChooseSection';
import CTASection from '@/components/about-us/CTASection';
import VideoTestimonialSection from '@/components/home/VideoTestimonialSection';
import LocationSection from '@/components/home/LocationSection';
import ContactForm from '@/components/home/ContactForm';

import styles from "./page.module.css";

export default function AboutUsPage() {
  return (
    <div className={styles.AboutUsPage}>
      <HeroSection />
      <AboutSection />
      <AwardsSection />
      <MissionVisionSection />
      <WhatWeDoSection />
      <ProcessSection />
      <WhyChooseSection />
      <CTASection />
      <VideoTestimonialSection />
      <LocationSection />
      <ContactForm />
    </div>
  );
}
