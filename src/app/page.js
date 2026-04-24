import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import AwardsSection from '@/components/home/AwardsSection';
import DeliveredSolutions from '@/components/home/DeliveredSolutions';
import MarqueSection from '@/components/home/MarqueSection';
import ServicesSection from '@/components/home/ServicesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import TechnologiesSection from '@/components/home/TechnologiesSection';
import ProcessSection from '@/components/home/ProcessSection';
import CTASection from '@/components/home/CTASection';
import VideoTestimonialSection from '@/components/home/VideoTestimonialSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import DevelopmentStack from '@/components/home/DevelopmentStack';
import PlansSection from '@/components/home/PlansSection';
import GameCTASection from '@/components/home/GameCTASection';
import IndustriesSection from '@/components/home/IndustriesSection';
import FAQSection from '@/components/home/FAQSection';
import LocationSection from '@/components/home/LocationSection';
import ContactForm from '@/components/home/ContactForm';
// import TestimonialSection from '@/components/home/TestimonialSection';
// import TopCompaniesSection from '@/components/home/TopCompaniesSection';

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <HeroSection />
      <AboutSection />
      <AwardsSection />
      <DeliveredSolutions />
      <MarqueSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TechnologiesSection />
      <ProcessSection />
      <CTASection />
      <VideoTestimonialSection />
      <FeaturesSection />
      <DevelopmentStack />
      <PlansSection />
      <GameCTASection />
      <IndustriesSection />
      <FAQSection />
      <LocationSection />
      {/* <TopCompaniesSection />
      <TestimonialSection /> */}
      <ContactForm />
    </div>
  );
}
