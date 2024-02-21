import React from "react";
import Image from "next/image";
const AboutFrontalContent = ({ data }: { data: string }) => {
  return (
    <div className=" w-[80%] flex justify-center h-[200px] relative">
      <p className="text-[35px] tracking-widest  md:text-[50px] text-center mt-10 text-lightRadientGreen">
        {data}
      </p>
      <Image
        src="/aboutPringles.png"
        alt="Picture of the author"
        sizes="100vw"
        quality={100}
        fill
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default AboutFrontalContent;
