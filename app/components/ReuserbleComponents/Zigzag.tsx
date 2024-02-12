import React from "react";
import Image from "next/image";
import Zigzagcontent from "./Zigzagcontent";

const Zigzag = () => {
  return (
    <div className=" -mt-40 md:-mt-0 bg-gradient-service relative md:min-h-[700px] lg:h-[300px]">
      <Image
        src="/zig.png"
        alt="Picture of the author"
        sizes="100vw"
        priority={true}
        loading="eager"
        quality={100}
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
        className="absolute md:static -translate-y-10 md:-translate-y-24 lg:-translate-y-44 top-0 left-0 z-10"
      />
      <Zigzagcontent />
    </div>
  );
};

export default Zigzag;
