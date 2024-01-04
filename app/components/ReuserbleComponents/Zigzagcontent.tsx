"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Zigzagcontent = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="md:absolute  top-[20%] left-0  md:px-[50px] ">
      <section className="grid grid-cols-1  md:grid-cols-2">
        <div className="px-8 order-last md:order-first md:px-0 mt-10 md:mt-0 flex flex-col gap-6 md:block">
          <div>
            <p className="md:text-sm tracking-widest md:tracking-normal text-textColor text-[16px] mb-4">
              WHAT WE DO?
            </p>
            <p className="md:text-[30px] text-[25px] leading-4 text-lightRadientGreen">
              Transform Businesses
            </p>
            <p className="md:text-[30px] text-[25px]  text-lightRadientGreen">
              and Amplify Brand Influence
            </p>
          </div>
          <p className="border-l-[3px] md:my-6 text-textColor border-l-solid border-l-lightRadientGreen pl-6">
            We strive to expedite the adoption of software, enhancing the
            efficiency and profitability of companies and organizations. Our
            commitment lies in promptly and professionally fulfilling their
            software requirements.
          </p>
          <div>
            <Button
              variant="text"
              endIcon={<ArrowRightAltIcon />}
              className=" hover:text-white px-8 hover:bg-gradient-green  border-[1px] border-solid border-darkGreen  text-darkGreen"
            >
              About Us
            </Button>
          </div>
        </div>
        <div className="flex mt-12 md:mt-0 justify-center items-center">
          <Image
            src="/happyImage.png"
            alt="Picture of the author"
            sizes="100vw"
            style={{
              width: "90%",
              height: "auto",
              ...(windowWidth >= 768 && { width: "60%" }),
            }}
            width={500}
            height={300}
          />
        </div>
      </section>

      <div className="md:mt-10 ">
        <section className="text-center">
          <div className=" grid md:block place-items-center mt-6 md:mt-0">
            <p className="w-[70%] md:w-full text-[16px] tracking-widest md:tracking-normal md:text-sm text-textColor md:mb-2">
              Our mission is to foster the growth of your business.
            </p>
          </div>
          <div className="grid  place-items-center py-4 md:py-0">
            <p className="md:text-[30px] md:w-[80%] w-[70%] md:my-2 md:leading-[30px]  text-lightRadientGreen">
              Elevating your visionary solution with a blend of outmost
              professionalism and meticulous care.
            </p>
          </div>
          <div>
            <Button
              variant="text"
              endIcon={<ArrowRightAltIcon />}
              className=" hover:text-white px-8 hover:bg-gradient-green my-3  border-[1px] border-solid border-darkGreen  text-darkGreen"
            >
              CONTACT US
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Zigzagcontent;
