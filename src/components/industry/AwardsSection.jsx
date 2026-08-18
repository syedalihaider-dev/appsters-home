import Image from "next/image";
import styles from "@/components/home/AwardsSection.module.css";

const industryBadges = [
  "/images/industry-award-img-1.png",
  "/images/industry-award-img-2.png",
  "/images/industry-award-img-3.png",
  "/images/industry-award-img-4.png",
  "/images/industry-award-img-5.png",
];

export default function AwardsSection() {
  return (
    <section className={styles.awardsSection}>
      <div className="container">
        <ul className={styles.badges}>
          {industryBadges.map((src, index) => (
            <li key={index}>
              <div className={styles.img}>
                <Image
                  src={src}
                  alt={`Industry Award ${index + 1}`}
                  width={274}
                  height={274}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
