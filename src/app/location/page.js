import styles from "./page.module.css";
import HeroSection from '@/components/location/HeroSection';
import DeliveredSolutions from '@/components/location/DeliveredSolutions';
import MarqueSection from '@/components/home/MarqueSection';
import IdeasSection from '@/components/location/IdeasSection';
import StoriesSection from '@/components/location/StoriesSection';
import CTASectionIndustry from '@/components/location/CTASectionIndustry';
import ClientsSection from '@/components/location/ClientsSection';
import CTASectionIndustryOne from '@/components/industry/CTASectionIndustry';
import DevProcess from "@/components/location/DevProcess";
import MapSection from "@/components/industry/MapSection";
import VideoTestimonialSection from "@/components/home/VideoTestimonialSection";
import TechStackSection from "@/components/industry/TechStackSection";
import PlansSection from "@/components/home/PlansSection";
import GameCTASection from "@/components/home/GameCTASection";
import IndustriesSection from "@/components/home/IndustriesSection";
import LocationSection from "@/components/home/LocationSection";
import ContactForm from "@/components/home/ContactForm";



export default function LocationPage() {
  return (
    <div className={styles.LocationPage}>
      <HeroSection />
      <DeliveredSolutions />
      <MarqueSection />
      <IdeasSection />
      <StoriesSection />
      <CTASectionIndustry />
      <ClientsSection />
      <DevProcess />
      <MapSection />
      <CTASectionIndustryOne />
      <VideoTestimonialSection />
      <TechStackSection />
      <PlansSection />
      <GameCTASection />
      <IndustriesSection />
      <LocationSection />
      <ContactForm />
    </div>
  );
}
