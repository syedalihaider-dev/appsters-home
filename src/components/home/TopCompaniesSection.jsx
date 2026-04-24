"use client";
import Image from "next/image";
import styles from './TopCompaniesSection.module.css';

export default function TopCompaniesSection() {

return (
<section className={styles.topCompaniesSection}>
    <p className={styles.transparent_heading}>Awarded by top companies</p>
    <div className="container">
        <div className={styles.sec_top}>
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-8">
                    <div className={styles.sec_left}>
                        <p className={styles.sub_heading}>Awards</p>
                        <h2><span className="primarytxt">Awarded</span> by top companies</h2>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className={styles.sec_right}>
                        <p className={styles.rating}>4.6</p>
                        <div className={styles.rating_star}>
                            <Image 
                            src="/images/rating-star.png" 
                            alt="Rating Star Image" 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                        </div>
                        <h5>Reviews On Clutch</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.sec_content}>
            <ul>
                <li>
                    <div className={styles.box}>
                        <div className={styles.awarded_hover}>
                            <Image 
                            src="/images/awarded-hover-01.png" 
                            alt="Awarded Company Image..." 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                            </div>
                        <div className={styles.awarded_companies_img}>
                            <Image 
                            src="/images/awarded-company-01.png" 
                            alt="Awarded Company Image..." 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                        </div>
                        <p>
                            Top App Development Company
                            <span>2024</span>
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.box}>
                        <div className={styles.awarded_hover}>
                            <Image 
                            src="/images/awarded-hover-01.png" 
                            alt="Awarded Company Image..." 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                            </div>
                        <div className={styles.awarded_companies_img}>
                            <Image 
                            src="/images/awarded-company-01.png" 
                            alt="Awarded Company Image..." 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                        </div>
                        <p>
                            Top App Development Company
                            <span>2024</span>
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.box}>
                        <div className={styles.awarded_hover}>
                            <Image 
                            src="/images/awarded-hover-01.png" 
                            alt="Awarded Company Image..." 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                            </div>
                        <div className={styles.awarded_companies_img}>
                            <Image 
                            src="/images/awarded-company-01.png" 
                            alt="Awarded Company Image..." 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                        </div>
                        <p>
                            Top App Development Company
                            <span>2024</span>
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.box}>
                        <div className={styles.awarded_hover}>
                            <Image 
                            src="/images/awarded-hover-01.png" 
                            alt="Awarded Company Image..." 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                            </div>
                        <div className={styles.awarded_companies_img}>
                            <Image 
                            src="/images/awarded-company-01.png" 
                            alt="Awarded Company Image..." 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                        </div>
                        <p>
                            Top App Development Company
                            <span>2024</span>
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.box}>
                        <div className={styles.awarded_hover}>
                            <Image 
                            src="/images/awarded-hover-01.png" 
                            alt="Awarded Company Image..." 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                            </div>
                        <div className={styles.awarded_companies_img}>
                            <Image 
                            src="/images/awarded-company-01.png" 
                            alt="Awarded Company Image..." 
                            fill 
                            sizes="100vw"
                            style={{ objectFit: "contain" }} 
                            />
                        </div>
                        <p>
                            Top App Development Company
                            <span>2024</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
);
}
