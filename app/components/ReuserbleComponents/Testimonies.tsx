"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TestimonialsContext } from "@/app/context/TestimoniesContext/TestimoniesContext";
import { useContext } from "react";
const Testimonies = () => {
  const ctx = useContext(TestimonialsContext);
  const [count, setCount] = useState(1);
  const RightClick = () => {
    setCount((prev) => prev++);
  };
  useEffect(() => {
    RightClick();
  }, [count]);

  return (
    <div className="md:px-[50px]  px-[20px] md:mt-20 md:flex  justify-center">
      <section className="flex items-center flex-col md:flex-row md:gap-20 text-textColor">
        <p
          className="hover:rounded-full hover:p-1 cursor-pointer  hover:bg-lightRadientGreen"
          onClick={() => ctx.LeftClick()}
        >
          <Image
            src="/pushRight.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </p>
        <div className="text-center mt-10 md:mt-0">
          <p className="md:text-sm text-textColor  text-[16px] tracking-widest">
            WHAT OUR CLIENTS SAY
          </p>
          <p className="md:text-[30px] text-[20px] my-3 md:my-0  text-lightRadientGreen md:mb-10">
            Testimonials
          </p>
          <div className="md:grid place-items-center my-6">
            <p className=" md:w-[60%] md:-mt-4">
              “You and your team are doing good work. Ill do everything I can to
              bring you more clients”
            </p>
            <p className="md:text-xs text-base font-[500] tracking-widest md:mt-5">
              Jonathan Kwamegah{" "}
            </p>
            <p className="md:text-xs text-textColor mb-6 md:mb-0">CEO KNVAS</p>
          </div>
        </div>
        <p
          className="hover:rounded-full hover:p-1 cursor-pointer  hover:bg-lightRadientGreen"
          onClick={() => RightClick()}
        >
          <Image
            src="/pushLeft.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </p>
      </section>
    </div>
  );
};

export default Testimonies;
