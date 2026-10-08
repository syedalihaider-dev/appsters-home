import { readFileSync } from 'node:fs'
import path from 'node:path'
import Script from 'next/script'
import styles from './page.module.css'

const pageMarkup = readFileSync(
    path.join(process.cwd(), 'public/mobile-app-developers/content.html'),
    'utf8',
)
    .replaceAll('assets/', '/mobile-app-developers/assets/')
    .replaceAll('https://www.appsters.io/lp/mobile-app-developers', '/lp/mobile-app-developers')
    .replaceAll(' onsubmit="event.preventDefault()"', '')

export default function MobileAppDevelopersPage() {
    return <>
        <div className={styles.landingPage} dangerouslySetInnerHTML={{ __html: pageMarkup }} />
        <Script src="/mobile-app-developers/interactions.js" strategy="afterInteractive" />
    </>
}
