import React from "react";
import Image from "next/image";
import Zigzagcontent from "./Zigzagcontent";

const Zigzag = () => {
  return (
    <div className="-mt-40 relative z-[50]">
      <Image
        src="/zig.png"
        alt="Picture of the author"
        sizes="100vw"
        quality={100}
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
      />
      <Zigzagcontent />
    </div>
  );
};

export default Zigzag;
