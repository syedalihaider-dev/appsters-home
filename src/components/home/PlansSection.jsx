"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ChatButton from "@/components/ui/ChatButton";
import styles from "./PlansSection.module.css";

export default function PlansSection() {

    const [hoverCol, setHoverCol] = useState(null);

  const handleHover = (index) => setHoverCol(index);
  const handleLeave = () => setHoverCol(null);

  useEffect(() => {
    const table = document.querySelector(`.${styles.table}`);
    const highlight = document.querySelector(`.${styles.highlight}`);

    if (!table || !highlight) return;

    if (hoverCol === null) {
      highlight.style.opacity = 0;
      return;
    }

    const th = table.querySelectorAll("th")[hoverCol];
    if (!th) return;

    const rect = th.getBoundingClientRect();
    const tableRect = table.getBoundingClientRect();

    highlight.style.setProperty("--col-width", `${rect.width}px`);
    highlight.style.setProperty("--col-left", `${rect.left - tableRect.left}px`);
    highlight.style.opacity = 1;
  }, [hoverCol]);

return (
<section className={styles.plansSection}>
    <div className="container">
        <div className={styles.sec_top}>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <div className={styles.sec_left}>
                        <p className={styles.sub_heading}>Engagement Models</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className={styles.sec_right}>
                        <h2 className={styles.title}>
                            Flexible Engagement Models For Any App <span className="primarytxt">Development Need</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.sec_content}>
            <div className={styles.before}>
                <Image src="/images/plans-before-decor.png" alt="Before Decor Image..." fill sizes="100vw"
                    style={{ objectFit: "contain" }} className={styles.beforeImg} />
            </div>
            <div className={styles.highlight}></div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th></th>
                        <th onMouseEnter={()=> handleHover(1)}
                            onMouseLeave={handleLeave}
                            >
                            DEDICATED TEAM
                        </th>
                        <th onMouseEnter={()=> handleHover(2)}
                            onMouseLeave={handleLeave}
                            >
                            FIXED PRICE
                        </th>

                        <th onMouseEnter={()=> handleHover(3)}
                            onMouseLeave={handleLeave}
                            >
                            HOURLY PRICE
                        </th>

                        <th onMouseEnter={()=> handleHover(4)}
                            onMouseLeave={handleLeave}
                            >
                            ONSITE TEAM
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className={styles.heading}>Flexibility</td>
                        <td>High</td>
                        <td>Low</td>
                        <td>Medium</td>
                        <td>High</td>
                    </tr>

                    <tr>
                        <td className={styles.heading}>Control Over Team</td>
                        <td>Full control</td>
                        <td>Limited control</td>
                        <td>Moderate control</td>
                        <td>Full control</td>
                    </tr>

                    <tr>
                        <td className={styles.heading}>Team Availability</td>
                        <td>Full-time</td>
                        <td>As Needed</td>
                        <td>On-demand</td>
                        <td>Full-time Onsite</td>
                    </tr>

                    <tr>
                        <td className={styles.heading}>Client Involvement</td>
                        <td>High</td>
                        <td>Low</td>
                        <td>Medium</td>
                        <td>High</td>
                    </tr>

                    <tr>
                        <td className={styles.heading}>Best for</td>
                        <td>Long-term Projects</td>
                        <td>Defined Projects</td>
                        <td>Small Tasks</td>
                        <td>Close Collaboration</td>
                    </tr>

                    <tr className={styles.last}>
                        <td></td>
                        <td>
                            <ChatButton />
                        </td>
                        <td>
                            <ChatButton />
                        </td>
                        <td>
                            <ChatButton />
                        </td>
                        <td>
                            <ChatButton />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
);
}
