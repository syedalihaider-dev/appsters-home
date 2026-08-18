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



export const metadata = {
  title: "Industry Specific Digital & Mobile App Solutions - Appsters",
  description:
    "Empowering healthcare, fintech, education, real estate, automotive, and more with high-performance app solutions.",
};

export default function IndustryPage() {
  return (
    <div className={styles.IndustryPage}>
      <HeroSection />
      <DeliveredSolutions />
      <MarqueSection />
      <EndToEndAppDevSection style={{ padding: "100px 0 100px 0px" }}/>
      <CTASection />
      <VideoTestimonialSection style={{ padding: "80px 0 100px 0px" }}/>
      <DevelopmentStack style={{ transform: "translateY(240px)" }} />
      <IndustriesSection />
      <SectorsSection />
      <PlansSection style={{ padding: "100px 0 100px 0px" }}/>
      <GameCTASection />
      <AboutSection />
      <AwardsSection />
      <CTASectionIndustry />
      <MapSection />
      <PortfolioCTA />
      <TechStackSection />
      <AppDevProcess />
      <BlogSection />
      <FAQSection />
      <LocationSection /> 
      <ContactForm />  
    </div>
  );
}
