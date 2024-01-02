import React from "react";
import Image from "next/image";
import Zigzagcontent from "../ReuserbleComponents/Zigzagcontent";
import AbotZigContent from "./AbotZigContent";
const AboutServices = () => {
  return (
    <div className=" mt-20 relative z-[50]">
      <Image
        src="/zigRight.png"
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
      />
      <AbotZigContent />
    </div>
  );
};

export default AboutServices;
