"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useWidth from "@/app/hook/useWidth";
const Zigzagcontent = () => {
  const [width] = useWidth(0);

  return (
    <div className="md:absolute   md:top-[0%] lg:top-[20%] left-0  md:px-[90px] w-full   ">
      <div className="w-full relative">
        <section className="grid grid-cols-1  max-w-[1444px] mx-auto lg:-mt-44  md:grid-cols-2">
          <div className="px-8 order-last md:order-first md:px-0 mt-10 md:mt-0 flex flex-col gap-6 md:block">
            <div>
              <p className="md:text-sm tracking-widest md:tracking-normal text-textColor text-[16px] mb-4">
                WHAT WE DO?
              </p>
              <p className="md:text-[30px] mb-2 text-[25px] lg:leading-4 text-lightRadientGreen">
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
                href="/about-us"
                endIcon={<ArrowRightAltIcon />}
                className="  px-8 hover:transition     border-[1px] border-solid   text-darkGreen"
              >
                About Us
              </Button>
            </div>
          </div>
          <div className="flex mt-12 md:mt-0 z-50 justify-end items-center">
            {width >= 768 ? (
              <Image
                src="/happyImage.png"
                alt="Picture of the author"
                sizes="100vw"
                quality={100}
                style={{
                  width: "60%",
                  height: "auto",
                }}
                width={500}
                height={300}
              />
            ) : (
              <Image
                src="/happyImage.png"
                alt="Picture of the author"
                sizes="100vw"
                quality={100}
                style={{
                  width: "90%",
                  height: "auto",
                }}
                width={500}
                height={300}
              />
            )}
          </div>
        </section>
      </div>

      <div className="md:mt-10 max-w-[1444px] mx-auto">
        <section className="text-center ">
          <div className=" grid md:block place-items-center mt-6 md:mt-0">
            <p className="w-[70%] md:w-full text-[14px] tracking-widest md:text-[18px] md:tracking-widest md:text-sm text-textColor md:mb-6">
              Our mission is to foster the growth of your business.
            </p>
          </div>
          <div className="grid  place-items-center py-4 md:py-0">
            <p className="lg:text-[30px] md:text-[20px] md:w-[90%] lg:w-[80%] w-[70%]  md:leading-[20px] md:my-2 lg:my-0 lg:leading-[40px]  text-lightRadientGreen">
              Elevating your visionary solution with a blend of outmost
              professionalism and meticulous care.
            </p>
          </div>
          <div>
            <Button
              variant="text"
              href="/contact-us"
              endIcon={<ArrowRightAltIcon />}
              className="  my-3 px-8 md:mt-[20px] border-[1px] border-solid border-darkGreen  text-darkGreen"
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
