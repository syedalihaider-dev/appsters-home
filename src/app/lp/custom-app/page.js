"use client"
import React, { useEffect } from 'react'
import Script from 'next/script'
import styles from './page.module.css'
import Banner from '../../../components/CustomApp/Banner/Banner'
import IndustrySolutions from '../../../components/CustomApp/IndustrySolutions/IndustrySolutions'
import CaseStudySlider from '../../../components/CustomApp/CaseStudySlider/CaseStudySlider'
import ServiceCardsSlider from '../../../components/CustomApp/ServiceCardsSlider/ServiceCardsSlider'
import ClientTestimonials from '../../../components/CustomApp/ClientTestimonials/ClientTestimonials'
import AwardsSection from '../../../components/CustomApp/AwardsSection/AwardsSection'
import RecognitionSection from '../../../components/CustomApp/RecognitionSection/RecognitionSection'
import ContactSection from '../../../components/CustomApp/ContactSection/ContactSection'

const Page = () => {
  useEffect(() => {
    // Import bootstrap JS client-side only if needed for interactive components
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch(err => console.log("Bootstrap JS not needed/found", err));

    const handleChatClick = (e) => {
      // Find if clicked element or its parent has 'chat' class
      const chatBtn = e.target.closest('.chat');
      if (chatBtn) {
        e.preventDefault();
        if (typeof window.toggleChat === 'function') {
          window.toggleChat();
        } else if (typeof zE !== 'undefined') {
          zE('webWidget', 'toggle');
        }
      }
    };

    document.addEventListener('click', handleChatClick);

    return () => {
      document.removeEventListener('click', handleChatClick);
    };
  }, []);

  return (
    <>
      <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10" strategy="lazyOnload" />
      <Script id="zopim-init" strategy="lazyOnload">
        {`
          window.toggleChat = function() {
              if(typeof zE !== 'undefined') {
                zE('webWidget', 'toggle');
              } else if(window.$zopim && window.$zopim.livechat){
                window.$zopim.livechat.window.toggle();
              }
          };
          
          window.setButtonURL = function() {
              window.toggleChat();
          };
        `}
      </Script>
      <main className={styles.lpCustomApp}>
        <Banner />
        <IndustrySolutions />
        <CaseStudySlider />
        <ServiceCardsSlider />
        <ClientTestimonials />
        <AwardsSection />
        <RecognitionSection />
        <ContactSection />
      </main>
    </>
  )
}

export default Page
