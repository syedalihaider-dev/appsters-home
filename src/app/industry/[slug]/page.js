import HeroSection from '@/components/industry/HeroSection';
import DeliveredSolutions from '@/components/industry/DeliveredSolutions';
import MarqueSection from '@/components/home/MarqueSection';
import styles from "./page.module.css";
import EndToEndAppDevSection from '@/components/industry/EndToEndAppDevSection';
import CTASection from '@/components/industry/CTASection';
import VideoTestimonialSection from '@/components/home/VideoTestimonialSection';
import DevelopmentStack from '@/components/home/DevelopmentStack';
import IndustriesSection from '@/components/industry/IndustriesSection';
import SectorsSection from '@/components/industry/SectorsSection';
import PortfolioCTA from '@/components/industry/PortfolioCTA';
import TechStackSection from '@/components/industry/TechStackSection';
import PlansSection from '@/components/home/PlansSection';
import GameCTASection from '@/components/industry/GameCTASection';
import AboutSection from '@/components/industry/AboutSection';
import AwardsSection from '@/components/industry/AwardsSection';
import CTASectionIndustry from '@/components/industry/CTASectionIndustry';
import MapSection from '@/components/industry/MapSection';
import AppDevProcess from '@/components/industry/AppDevProcess';
import BlogSection from '@/components/industry/BlogSection';
import FAQSection from '@/components/home/FAQSection';
import LocationSection from '@/components/home/LocationSection';
import ContactForm from '@/components/home/ContactForm';
import { industryData } from '@/data/industryData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = industryData[slug];

  if (!data) {
    return {};
  }

  const canonicalUrl = `https://www.appsters.io/industry/${slug}`;

  return {
    title: data.seoTitle || `${data.name} App Development Solutions - Appsters`,
    description: data.seoDesc,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const data = industryData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.IndustryPage}>
      <HeroSection data={data.hero} />
      <DeliveredSolutions data={data.deliveredSolutions} />
      <MarqueSection />
      <EndToEndAppDevSection data={data.endToEnd} style={{ padding: "100px 0 100px 0px" }} />
      <CTASection data={data.cta} />
      <VideoTestimonialSection style={{ padding: "80px 0 100px 0px" }} />
      <DevelopmentStack style={{ transform: "translateY(240px)" }} />
      <IndustriesSection data={data.whyChooseUs} />
      <SectorsSection data={data.sectors} />
      <PlansSection style={{ padding: "100px 0 100px 0px" }} />
      <GameCTASection />
      <AboutSection data={data.about} />
      <AwardsSection />
      <CTASectionIndustry data={data.ctaIndustry} />
      <MapSection data={data.map} />
      <PortfolioCTA data={data.portfolioCta} />
      <TechStackSection />
      <AppDevProcess data={data.process} />
      <BlogSection />
      <FAQSection data={data.faqs} />
      <LocationSection />
      <ContactForm />
    </div>
  );
}
