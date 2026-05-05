import Image from "next/image";
import styles from './AwardsSection.module.css';

export default function AwardsSection() {
return (
<section className={styles.awardsSection}>
    <div className="container">
        <ul className={styles.badges}>
            <li>
                <div className={styles.img}>
                    <Image 
                    src="/images/badge-goodfirms.png" 
                    alt="Badges Image..." 
                    width={274} 
                    height={274} 
                    /> 
                </div>
            </li>
            <li>
                <div className={styles.img}>
                    <Image 
                    src="/images/badge-clutch.png" 
                    alt="Badges Image..." 
                    width={274} 
                    height={274} 
                    /> 
                </div>
            </li>
            <li>
                <div className={styles.img}>
                    <Image 
                    src="/images/badge-trustpilot.png" 
                    alt="Badges Image..." 
                    width={274} 
                    height={274} 
                    /> 
                </div>
            </li>
            <li>
                <div className={styles.img}>
                    <Image 
                    src="/images/badge-appfutura.png" 
                    alt="Badges Image..." 
                    width={274} 
                    height={274} 
                    /> 
                </div>
            </li>
            <li>
                <div className={styles.img}>
                    <Image 
                    src="/images/badge-designrush.png" 
                    alt="Badges Image..." 
                    width={274} 
                    height={274} 
                    /> 
                </div>
            </li>
        </ul>
    </div>
</section>
)
}