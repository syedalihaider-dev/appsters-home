"use client";
import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./GameCTASection.module.css";

export default function GameCTASection() {
    return (
        <section className={styles.gameSection}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_left}>
                            <div className={styles.after}>
                                <Image
                                    src="/images/game-cta-decor.png"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    alt="Arrow Image"
                                />
                            </div>
                            <p className={styles.sub_heading}>Game App Development</p>
                            <h2 className={styles.title}>
                                Into Engaging Mobile <span className="primarytxt">Games</span>
                            </h2>
                            <p className={styles.para}>
                                From thumb-tapping mobile hits or a console-grade spectacle, we build games that move players.
                            </p>
                            <div className="combo_btn">
                                <ActionButtons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sec_right}>
                <video
                    src="/video/game-cta-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.video_bg}
                />
            </div>
        </section>
    );
}
