import HeroSection from '@/components/case-study-detail/HeroSection';
import AwardsSection from '@/components/services/AwardsSection';
import OverviewSection from '@/components/case-study-detail/OverviewSection';
import FeaturesDetailSection from '@/components/case-study-detail/FeaturesDetailSection';
import OverviewTwoSection from '@/components/case-study-detail/OverviewTwoSection';
import SolutionSection from '@/components/case-study-detail/SolutionSection';
import DevelopmentStack from '@/components/home/DevelopmentStack';
import ContactForm from '@/components/home/ContactForm';
import LocationSection from '@/components/home/LocationSection';
import { caseStudies } from '@/data/case-studies';

import styles from "./page.module.css";

export default function CaseStudyDetailPage() {
  const data = caseStudies["mic-2-money"];

  return (
    <div className={styles.CaseStudyDetailPage}>
      <HeroSection data={data.hero} />
      <AwardsSection />
      <OverviewSection data={data.overview} />
      <FeaturesDetailSection data={data.features} />
      <OverviewTwoSection data={data.problem} />
      <SolutionSection data={data.solution} />
      <DevelopmentStack/>
      <LocationSection className={styles.customLocationPadding} />
      <ContactForm />
    </div>
  );
}