import Image from "next/image";
import styles from './AboutSection.module.css';

export default function AboutSection({ data = {} }) {
    const mainHeading = data.mainHeading || 'Trango Tech’s <span class="primarytxt">Collabration</span> with Small & Giant Industry <span class="primarytxt">Leaders</span>';
    const paragraph = data.paragraph || "AI ecosystems are shaping the present and defining the future. At Appsters, we create AI App solutions that help businesses grow, simplify decision-making, and automate key operations. Our developers and data specialists design models built for real-world performance, reiterating complex processes into reliable, scalable systems.<br /><br />Every solution integrates with your current applications, reducing friction and accelerating adoption. As a leading IT services provider and mobile app development agency, we focus on outcomes that matter: measurable growth, faster response to market shifts, AI integration into your current ecosystem, and long-term enterprise reliability.";

    return (
        <section className={styles.aboutSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_left}>
                            <h2 className={styles.main_heading} dangerouslySetInnerHTML={{ __html: mainHeading }}></h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_right}>
                            <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
