import React from "react";
import Image from "next/image";
const AboutFrontalContent = ({ data }: { data: string }) => {
  return (
    <div className=" w-[80%] flex justify-center h-[200px] relative">
      <p className="text-[50px] text-center mt-5 text-lightRadientGreen">
        {data}
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
