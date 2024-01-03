import React from "react";
import Image from "next/image";
import SmallZigzagContent from "./SmallZigzagContent";
const SmallZigzag = () => {
  return (
    <div className="relative z-[50]">
      <Image
        src="/smallzig.png"
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
      />
      <SmallZigzagContent />
    </div>
  );
};

export default SmallZigzag;
