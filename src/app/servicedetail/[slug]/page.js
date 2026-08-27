import HeroSection from '@/components/services/HeroSection';
import AwardsSection from '@/components/services/AwardsSection';
import EndToEndAppDevSection from '@/components/services/EndToEndAppDevSection';
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
import { serviceData } from '@/data/serviceData';
import { notFound } from 'next/navigation';

import styles from "./page.module.css";

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const data = serviceData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.ServicesDetailPage}>
      <HeroSection data={data.hero} />
      <AwardsSection />
      <EndToEndAppDevSection data={data.endToEndSection} />
      <DeliveredSolutions data={data.deliveredSolutions} />
      <MarqueSection />
      <ServicesSection data={data.servicesOverview} />
      <CaseStudiesSection data={data.caseStudies} noSwiper />
      <TechnologiesSection data={data.technologies} />
      <ProcessSection data={data.process} />
      <CTASection data={data.cta} />
      <VideoTestimonialSection />
      <FeaturesSection data={data.features} />
      <DevelopmentStack />
      <PlansSection />
      <GameCTASection />
      <IndustriesSection data={data.industries} />
      <FAQSection data={data.faq} />
      <LocationSection />
      <ContactForm />
    </div>
  );
}
