import Image from "next/image";

import Link from "next/link";

export default function ActionButtons({ text = "Let’s Build Your App", href = "#contactForm", className = "", textClassName = "", iconClassName = "" }) {
  const isLink = Boolean(href);
  const classes = `mybtn btn_1 ${!isLink ? 'popup_btn' : ''} ${className}`.trim();

  const InnerContent = () => (
    <>
      <div className={`text ${textClassName}`.trim()}>
        <span>{text}</span>
        <span>{text}</span>
      </div>
      <div className={`icon ${iconClassName}`.trim()}>
        <Image
          src="/images/arrow-icon.png"
          alt="Arrow Icon"
          width={16}
          height={14}
          style={{ objectFit: "contain" }}
        />
        <Image
          src="/images/arrow-icon.png"
          alt="Arrow Icon"
          width={16}
          height={14}
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );

  return (
    <>
      {isLink ? (
        <Link href={href} className={classes}>
          <InnerContent />
        </Link>
      ) : (
        <a href="#!" className={classes}>
          <InnerContent />
        </a>
      )}
    </>
  );
}
