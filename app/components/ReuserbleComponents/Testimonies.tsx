import React from "react";
import Image from "next/image";
const Testimonies = () => {
  return (
    <div className="px-[50px] mt-20 flex justify-center">
      <section className="flex items-center gap-20">
        <p>
          <Image
            src="/pushRight.png"
            width={24}
            height={24}
            alt="Picture of the author"
          />
        </p>
        <div className="text-center">
          <p className="text-sm text-textColor ">WHAT OUR CLIENTS SAY</p>
          <p className="text-[30px]  text-lightRadientGreen mb-10">
            Testimonials
          </p>
          <p className="leading-3 -mt-4">
            “You and your team are doing good work.
          </p>
          <p> Ill do everything I can to bring you more clients”</p>
          <p className="text-xs tracking-widest mt-5">Jonathan Kwamegah</p>
          <p className="text-xs">CEO KNVAS</p>
        </div>
        <p>
          <Image
            src="/pushLeft.png"
            width={24}
            height={24}
            alt="Picture of the author"
          />
        </p>
      </section>
    </div>
  );
};

export default Testimonies;
