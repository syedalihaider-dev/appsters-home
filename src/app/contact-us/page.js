import styles from "./page.module.css";
import Banner from '@/components/contact-us/Banner';
import ContactForm from '@/components/home/ContactForm';
import LocationSection from '@/components/home/LocationSection';
import FAQSection from '@/components/home/FAQSection';

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
