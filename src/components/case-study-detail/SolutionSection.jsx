import React from 'react';
import Image from 'next/image';
import styles from './SolutionSection.module.css';

export default function SolutionSection({ data }) {
    if (!data) return null;
    return (
        <section className={`sec_padding ${styles.solutionSection}`}>
            <Image
                src="/images/case-study/solution-bg.webp"
                alt="Main Banner Image..."
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className={styles.bannerBg}
            />
            <div className={styles.bgTextLeft}>CREATIVE AGENCY</div>
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.leftContent}>
                            <Image
                                src={data.image}
                                alt={`${data.title} Solution App Screen`}
                                width={582}
                                height={675}
                                className={styles.mockupImage}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.rightContent}>
                            <div className={styles.titleWrapper}>
                                <span className={styles.transparentHeading}>{data.transparentHeading}</span>
                                <h2>{data.title}</h2>
                            </div>
                            <div className={styles.textContent}>
                                <p>
                                    {data.description}
                                </p>
                                <p className={styles.info}>
                                    {data.infoText}
                                </p>
                                <ul>
                                    {data.points && data.points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
