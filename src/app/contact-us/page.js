import Banner from '@/components/contact-us/Banner';
import ContactForm from '@/components/home/ContactForm';
import LocationSection from '@/components/home/LocationSection';
import FAQSection from '@/components/home/FAQSection';

import styles from "./page.module.css";

export default function ContactUsPage() {
  return (
    <div className={styles.ContactUsPage}>
      <Banner />
      <LocationSection />
      <FAQSection />
      <ContactForm />
    </div>
  );
}
