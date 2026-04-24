import Image from "next/image";

export default function ActionButtons() {
  return (
    <>
      <a href="#!" className="mybtn btn_1 popup_btn">
        <div className="text">
          <span>Let’s Build Your App</span>
          <span>Let’s Build Your App</span>
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
      </a>
    </>
  );
}
