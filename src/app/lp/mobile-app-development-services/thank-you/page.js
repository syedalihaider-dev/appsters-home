"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';
import NewMobileHeader from '@/components/NewMobileApp/Header/NewMobileHeader';
import LpFooter from '@/components/NewMobileApp/LpFooter/LpFooter';
import styles from './thank-you.module.css';

export default function ThankYouPage() {
    useEffect(() => {
        // Safe registration of global replaceChat utility
        window.replaceChat = () => {
            if (window.$zopim && window.$zopim.livechat) {
                window.$zopim.livechat.window.show();
            } else if (window.zE) {
                try {
                    window.zE('webWidget', 'open');
                } catch (e) {
                    console.error("Zendesk error:", e);
                }
            } else {
                console.warn("Chat widget is not loaded yet.");
            }
        };
    }, []);

    return (
        <>
            {/* Event snippet for appsters-Sign-up conversion page */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        if (typeof gtag === 'function') {
                            gtag('event', 'conversion', {'send_to': 'AW-16476280714/MD9mCJjo2ZkcEIqvwLA9'});
                        }
                    `
                }}
            />

            <NewMobileHeader />

            <main className={styles.thankYouContainer}>
                <div className={styles.bgGradient}></div>
                
                <div className={styles.thankYouCard}>
                    <div className={styles.successIconWrapper}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <h1>Your Request is <span>Received!</span></h1>
                    <p>
                        Thank you for reaching out to Appsters. Our app development strategists are already analyzing your project details. We will contact you within the next 8 hours.
                    </p>

                    <div className={styles.btnContainer}>
                        <Link href="/lp/mobile-app-development-services" className={styles.homeBtn}>
                            Back To Landing Page
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </main>

            <LpFooter />
        </>
    );
}
