import Image from "next/image";

import Link from "next/link";

export default function ActionButtons({ text = "Let’s Build Your App", href }) {
  const isLink = Boolean(href);
  const classes = `mybtn btn_1 ${!isLink ? 'popup_btn' : ''}`;

  const InnerContent = () => (
    <>
      <div className="text">
        <span>{text}</span>
        <span>{text}</span>
      </div>
      <div className="icon">
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
