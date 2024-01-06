import React from "react";
import Image from "next/image";
import AbotZigContent from "./AbotZigContent";
const AboutServices = () => {
  return (
    <div className=" mt-20 relative z-[50]  md:min-h-[1100px] lg:min-h-[800px]">
      <Image
        src="/zigRight.png"
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        className="absolute md:static top-0 left-0 -z-30"
        width={500}
        height={300}
      />
      <AbotZigContent />
    </div>
  );
};

export default AboutServices;
