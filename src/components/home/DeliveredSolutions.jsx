import Image from "next/image";
import styles from './DeliveredSolutions.module.css';
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";

const defaultBoxes = [
  {
    counter: "40",
    heading: "Industries Served",
    text: "Our experience spans Saas, healthcare, finance, retail, automotive, and more, with solutions adapted to each sector’s demands for security, AI, compliance, and user adoption."
  },
  {
    counter: "3000",
    heading: "Apps and Solutions Delivered",
    text: "Thousands of projects executed with an emphasis on speed, AI-adoption, stability, and clear ROI across both startup and enterprise environments."
  },
  {
    counter: "60",
    heading: "AI Models Deployed",
    text: "Every model is designed for high accuracy, reliable outputs, and performance at scale for mission-critical workflows and more."
  },
  {
    counter: "50K",
    heading: "Legacy Processes Modernized",
    text: "Outdated processes replaced with modern, streamlined systems that cut costs and improve operational efficiency."
  }
];

export default function DeliveredSolutions({ data }) {
  const boxes = data?.boxes || defaultBoxes;

  const RenderBox = ({ box }) => {
    if (!box) return null;
    return (
      <div className={styles.box}>
        <div className={styles.box_before}>
          <Image
            src="/images/file-cap.png"
            alt="Box Cap Image..."
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className={styles.counter}>{box.counter}
          <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
            <path d="M23.7052 4.74091C27.0762 1.983 31.9238 1.983 35.2948 4.74091C36.8995 6.05382 38.9026 6.78287 40.9758 6.80864C45.3308 6.86277 49.0443 9.97875 49.8539 14.2582C50.2393 16.2955 51.3051 18.1415 52.8767 19.4939C56.1781 22.3347 57.0198 27.1087 54.8892 30.9074C53.8749 32.7157 53.5047 34.8149 53.8394 36.8611C54.5423 41.1594 52.1185 45.3576 48.0446 46.898C46.1052 47.6313 44.4723 49.0014 43.4134 50.784C41.189 54.5285 36.6337 56.1865 32.5228 54.7479C30.5658 54.063 28.4342 54.063 26.4772 54.7479C22.3663 56.1865 17.811 54.5285 15.5866 50.784C14.5277 49.0014 12.8948 47.6313 10.9554 46.898C6.88148 45.3576 4.45768 41.1594 5.16062 36.8611C5.49526 34.8149 5.12511 32.7157 4.11081 30.9074C1.98016 27.1087 2.82194 22.3347 6.12331 19.4939C7.69494 18.1415 8.76073 16.2955 9.14612 14.2582C9.95568 9.97875 13.6692 6.86277 18.0242 6.80864C20.0974 6.78287 22.1005 6.05382 23.7052 4.74091Z" fill="#1D1D1D" />
            <g filter="url(#filter0_i_2095_5039)">
              <path d="M26.8249 44V33.208H16V26.792H26.8249V16H33.208V26.792H44V33.208H33.208V44H26.8249Z" fill="#C1EE0D" />
            </g>
            <defs>
              <filter id="filter0_i_2095_5039" x="16" y="16" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2095_5039" />
              </filter>
            </defs>
          </svg>
        </p>
        <h6 className={styles.heading}>{box.heading}</h6>
        <p className={`${styles.para} scroll_block`}>
          {box.text || box.desc}
        </p>
        <div className="combo_btn">
          <ActionButtons href={box.btn1Href || "#contactForm"} />
          <ActionButtons text={box.btn2Text || "Call Us Now"} href={box.btn2Href || SITE_PHONE_LINK} />
        </div>
      </div>
    );
  };

  return (
    <section className={styles.deliveredSection}>
      <div className={styles.hand_holding_mobile_center}>
        <Image
          src="/images/hand-holding-mobile-center.png"
          alt="Hand Holding Mobile Image..."
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.appsters_shape_decor}>
        <Image
          src="/images/appsters-shape-decor.png"
          alt="Appsters Shape Image..."
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className={styles.sec_left}>
              <RenderBox box={boxes[0]} />
              <RenderBox box={boxes[1]} />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className={styles.sec_right}>
              <RenderBox box={boxes[2]} />
              <RenderBox box={boxes[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
