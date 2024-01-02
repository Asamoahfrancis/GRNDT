import React from "react";
import Image from "next/image";
import FrontalContent from "./FrontalContent";
const Frontal = () => {
  return (
    <div
      className="relative  h-[653px]  "
      style={{
        backgroundColor: "rgba(8, 8, 8, 0.50)",
      }}
    >
      <FrontalContent />
      <Image
        src="/FrontalImage.png"
        alt="Picture of the author"
        sizes="100vw"
        quality={100}
        fill
        style={{
          objectFit: "cover",
          zIndex: "-200",
        }}
      />
    </div>
  );
};

export default Frontal;
