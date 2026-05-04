import HeroSection from '@/components/case-study/HeroSection';
import AwardsSection from '@/components/services/AwardsSection';
import CaseStudiesGridSection from '@/components/case-study/CaseStudiesGridSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import FAQSection from '@/components/home/FAQSection';
import LocationSection from '@/components/home/LocationSection';
import ContactForm from '@/components/home/ContactForm';

import styles from "./page.module.css";

export default function ServicesPage() {
  return (
    <div className={styles.ServicesPage}>
      <HeroSection />
      <AwardsSection />
      <CaseStudiesGridSection />
      <IndustriesSection />
      <FAQSection />
      <LocationSection />
      <ContactForm />
    </div>
  );
}