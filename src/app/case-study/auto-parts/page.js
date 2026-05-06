import HeroSection from '@/components/case-study-detail/HeroSection';
import AwardsSection from '@/components/services/AwardsSection';
import OverviewSection from '@/components/case-study-detail/OverviewSection';
import FeaturesDetailSection from '@/components/case-study-detail/FeaturesDetailSection';
import OverviewTwoSection from '@/components/case-study-detail/OverviewTwoSection';
import SolutionSection from '@/components/case-study-detail/SolutionSection';
import DevelopmentStack from '@/components/home/DevelopmentStack';
import ContactForm from '@/components/home/ContactForm';
import LocationSection from '@/components/home/LocationSection';

import styles from "./page.module.css";

export default function CaseStudyDetailPage() {
  return (
    <div className={styles.CaseStudyDetailPage}>
      <HeroSection />
      <AwardsSection />
      <OverviewSection />
      <FeaturesDetailSection />
      <OverviewTwoSection />
      <SolutionSection />
      <DevelopmentStack/>
      <LocationSection className={styles.customLocationPadding} />
      <ContactForm />
    </div>
  );
}