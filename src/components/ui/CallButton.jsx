"use client";

import Image from "next/image";
import { SITE_PHONE as PHONE_NUMBER } from "@/app/constants";

export default function SingleCallButton() {
  return (
    <a href={`tel:${PHONE_NUMBER}`} className="mybtn btn_1">
      <div className="text">
        <span>Call Now</span>
        <span>Call Now</span>
      </div>
      <div className="icon">
        <Image
          src="/call-icon.png"
          alt="Call Icon"
          width={23}
          height={23}
          className="myImage"
        />
      </div>
    </a>
  );
}