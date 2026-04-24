"use client";

import Image from "next/image";

export default function SingleChatButton() {
  return (
    <a href="#!" className="mybtn btn_1 chat">
      <div className="text">
        <span>Let’s Talk!</span>
        <span>Let’s Talk!</span>
      </div>
      <div className="icon">
        <Image 
        src="/images/arrow-icon.png" 
        width={16} 
        height={14} 
        alt="Arrow Icon" 
        style={{ objectFit: "contain" }} 
        />
        <Image 
        src="/images/arrow-icon.png" 
        width={16} 
        height={14} 
        style={{ objectFit: "contain" }} 
        alt="Arrow Icon" 
        />
      </div>
    </a>
  );
}