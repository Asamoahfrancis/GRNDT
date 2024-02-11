import React from "react";
import Image from "next/image";
import SmallZigzagContent from "./SmallZigzagContent";
const SmallZigzag = () => {
  return (
    <div className="relative  md:min-h-[1000px] lg:min-h-[800px] md:z-[50]">
      <Image
        src="/smallzig.png"
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
      <SmallZigzagContent />
    </div>
  );
};

export default SmallZigzag;
