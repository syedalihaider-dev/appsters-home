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
        if (window.$zopim) {
          window.$zopim.livechat.window.toggle();
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
          window.$zopim || function (a, d) {
            var b = $zopim = function (a) {
                b._.push(a)
            },
            c = b.s = a.createElement(d);
            a = a.getElementsByTagName(d)[0];
            b.set = function (a) {
                b.set._.push(a)
            };
            b._ = [];
            b.set._ = [];
            c.async = !0;
            c.setAttribute("charset", "utf-8");
            c.src = "";
            b.t = +new Date;
            c.type = "text/javascript";
            a.parentNode.insertBefore(c, a)
          }(document, "script");

          $zopim(function () {
              function a(a) {
                  1 <= a && $zopim.livechat.window.show()
              }
              $zopim.livechat.setOnUnreadMsgs(a)
          });
          
          window.setButtonURL = function() {
              $zopim.livechat.window.show();
          };

          window.toggleChat = function() {
              $zopim.livechat.window.toggle();
          };
        `}
      </Script>
      <style jsx global>{`
        :root {
          --font-poppins: 'Poppins', sans-serif;
        }
        html {
          scroll-behavior: smooth;
        }
        .lp-custom-app {
          font-family: var(--font-poppins);
          background: #fff;
          color: #111;
          overflow-x: hidden;
        }
        .lp-custom-app h1, 
        .lp-custom-app h2, 
        .lp-custom-app h3, 
        .lp-custom-app h4, 
        .lp-custom-app h5, 
        .lp-custom-app h6 {
          font-family: var(--font-poppins);
        }
        section {
            position: relative;
        }
      `}</style>
      
      <main className="lp-custom-app">
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
