import React from "react";
import Image from "next/image";
const AboutFrontalContent = () => {
  return (
    <div className=" w-[80%] flex justify-center h-[200px] relative">
      <p className="text-[90px] text-center mt-5 text-lightRadientGreen">
        About Us
      </p>
      <Image
        src="/aboutPringles.png"
        alt="Picture of the author"
        sizes="100vw"
        quality={100}
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default AboutFrontalContent;
