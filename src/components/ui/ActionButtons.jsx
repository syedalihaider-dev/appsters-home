import Image from "next/image";

import Link from "next/link";

export default function ActionButtons({ text = "Get a Quote", href = "#contactForm", className = "", textClassName = "", iconClassName = "", as }) {
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

  if (as === "div" || as === "span") {
    return (
      <div className={classes}>
        {InnerContent()}
      </div>
    );
  }

  return (
    <>
      {isLink ? (
        <Link href={href} className={classes}>
          {InnerContent()}
        </Link>
      ) : (
        <a href="#!" className={classes}>
          {InnerContent()}
        </a>
      )}
    </>
  );
}
