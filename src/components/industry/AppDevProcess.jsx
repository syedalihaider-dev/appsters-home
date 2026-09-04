import Image from "next/image";
import styles from './AppDevProcess.module.css';
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";

export default function AppDevProcess({ data = {} }) {
    const subHeading = data.subHeading || "Our Winning";
    const title = data.title || "App Development Process";
    const description = data.description || "Appsters has engineered platforms that handle millions of users daily, across fintech, e-commerce, and mobility.";
    
    const defaultSteps = [
        {
            icon: "/images/industries/app-dev-process-1.png",
            heading: "Project Planning",
            para: "We start with in-depth analysis of your business. Learn about your users’ needs & other business objectives that make your app successful ahead. It helps us identify..",
        },
        {
            icon: "/images/industries/app-dev-process-2.png",
            heading: "UI/UX Design",
            para: "A good design will leave your customers in “wow”. Our great designers create stunning and visually appealing interfaces for iOS, Android, & cross-platform apps..",
        },
        {
            icon: "/images/industries/app-dev-process-3.png",
            heading: "App Development",
            para: "Right after you accept the design for your app, it is time to publish your software. We use the latest tools and frameworks like Flutter, React Native, Swift, or Kotlin..",
        },
        {
            icon: "/images/industries/app-dev-process-4.png",
            heading: "Quality Assurance & Testing",
            para: "Numerous checks on apps are very important to see the responsiveness. Our Quality Assurance team tests your app multiple times to make it safe from serious..",
        },
        {
            icon: "/images/industries/app-dev-process-5.png",
            heading: "App Deployment",
            para: "We develop apps for real estate, including property listings, virtual tours, and clienDeployment is very important and requires careful planning. We manage the whole app release process..",
        },
        {
            icon: "/images/industries/app-dev-process-6.png",
            heading: "App Maintenance",
            para: "Maintenance of your app guarantees your app is free from difficult challenges. We provide ongoing preservation services, so that your app stays updated & secure..",
        },
    ];

    const steps = data.steps || defaultSteps;

    return (
        <section className={styles.deliveredSection}>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-sm-12 col-md-3">
                        <span className={styles.sub_heading}><span className={styles.bullet}></span>{subHeading}</span>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_left}>
                            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className={styles.sec_right}>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.spacer}>
                    <div className="row align-items-center">
                        {steps.map((step, index) => (
                            <div key={index} className="col-sm-12 col-md-4 col-lg-4 my-5">
                                <div className={styles.box}>
                                    <div className={styles.box_before}>
                                        <Image
                                            src="/images/file-cap.png"
                                            alt="Box Cap Image..."
                                            fill
                                            sizes="100vw"
                                            style={{ objectFit: "contain" }}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <Image
                                        src={step.icon}
                                        alt={step.heading}
                                        width={80}
                                        height={80}
                                        className="img-fluid"
                                        style={{ position: "relative", width: "auto", height: "auto" }}
                                    />
                                    <h6 className={styles.heading}>{step.heading}</h6>
                                    <p className={`${styles.para} scroll_block`}>{step.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
