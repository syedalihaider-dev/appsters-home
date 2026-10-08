import { readFileSync } from 'node:fs'
import path from 'node:path'
import Script from 'next/script'
import styles from './page.module.css'
import VideoTestimonialSection from '@/components/home/VideoTestimonialSection'

const pageMarkup = readFileSync(
    path.join(process.cwd(), 'public/mobile-app-developers/content.html'),
    'utf8',
)
    .replaceAll('assets/', '/mobile-app-developers/assets/')
    .replaceAll('https://www.appsters.io/lp/mobile-app-developers', '/lp/mobile-app-developers')
    .replaceAll(' onsubmit="event.preventDefault()"', '')
const videoSectionInsertionPoint = '<section class="ProcessSection_processSection__CSo00 page-section">'
const videoSectionIndex = pageMarkup.indexOf(videoSectionInsertionPoint)
const pageMarkupBeforeVideoSection = videoSectionIndex >= 0 ? pageMarkup.slice(0, videoSectionIndex) : pageMarkup
const pageMarkupAfterVideoSection = videoSectionIndex >= 0 ? pageMarkup.slice(videoSectionIndex) : ''

export default function MobileAppDevelopersPage() {
    return <>
        <div className={styles.landingPage}>
            <div dangerouslySetInnerHTML={{ __html: pageMarkupBeforeVideoSection }} />
            {videoSectionIndex >= 0 && (
                <VideoTestimonialSection
                    theme="lp"
                    showTrustedHeading={false}
                    data={{ title: '<span class="primarytxt">Real Stories</span><br />From Our Mobile App Clients' }}
                />
            )}
            <div dangerouslySetInnerHTML={{ __html: pageMarkupAfterVideoSection }} />
        </div>
        <Script src="/mobile-app-developers/interactions.js" strategy="afterInteractive" />
    </>
}
