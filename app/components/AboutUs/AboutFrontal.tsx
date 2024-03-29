import React from "react";
import Image from "next/image";
import AboutFrontalContent from "./AboutFrontalContent";
const AboutFrontal = ({ data }: { data: string }) => {
  return (
    <div className="relative  h-[240px] flex justify-center items-center ">
      <AboutFrontalContent data={data} />
      <Image
        src="/aboutus.png"
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

export default AboutFrontal;
