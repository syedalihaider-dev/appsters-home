import Image from "next/image";
import styles from "./ClientsSection.module.css";

const clientLogos = [
  { id: 1, src: "/images/contact/client-logo-1.png", alt: "Audi" },
  { id: 2, src: "/images/contact/client-logo-2.png", alt: "Qonto" },
  { id: 3, src: "/images/contact/client-logo-3.png", alt: "eToro" },
  { id: 4, src: "/images/contact/client-logo-4.png", alt: "Circle Economy" },
  { id: 5, src: "/images/contact/client-logo-5.png", alt: "livingsecurity" },
  { id: 6, src: "/images/contact/client-logo-6.png", alt: "NDAX.IO" },
  { id: 7, src: "/images/contact/client-logo-7.png", alt: "RAI" },
  { id: 8, src: "/images/contact/client-logo-8.png", alt: "combyne" },
  { id: 9, src: "/images/contact/client-logo-9.png", alt: "amenify" },
  { id: 10, src: "/images/contact/client-logo-10.png", alt: "TRUVERIS" },
  { id: 11, src: "/images/contact/client-logo-11.png", alt: "CAPTRIZ" },
  { id: 12, src: "/images/contact/client-logo-12.png", alt: "zilla" },
  { id: 13, src: "/images/contact/client-logo-13.png", alt: "Modern Animal" },
  { id: 14, src: "/images/contact/client-logo-14.png", alt: "Baker Stuart" },
  { id: 15, src: "/images/contact/client-logo-15.png", alt: "WEVOICE" },
  { id: 16, src: "/images/contact/client-logo-16.png", alt: "and +75 more" },
];

export default function ClientsSection() {
  return (
    <section className={styles.clientsSection}>
      <div className="container">
        {/* Section Heading */}
        <div className={styles.titleWrap}>
          <h2 className={styles.mainTitle}>OUR CLIENTS</h2>
        </div>

        {/* 4x4 Logos Grid */}
        <div className="row g-5 justify-content-center align-items-center">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
              <div className={styles.logoItem}>
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={200}
                  height={100}
                  className={styles.logoImg}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
