import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Zigzagcontent = () => {
  return (
    <div className="absolute top-[20%] left-0  px-[50px] ">
      <section className="grid grid-cols-2">
        <div>
          <p className="text-sm text-textColor mb-4">WHAT WE DO?</p>
          <p className="text-[30px] leading-4 text-lightRadientGreen">
            Transform Businesses
          </p>
          <p className="text-[30px]  text-lightRadientGreen">
            and Amplify Brand Influence
          </p>
          <p className="border-l-[3px] my-6 text-textColor border-l-solid border-l-lightRadientGreen pl-6">
            We strive to expedite the adoption of software, enhancing the
            efficiency and profitability of companies and organizations. Our
            commitment lies in promptly and professionally fulfilling their
            software requirements.
          </p>
          <Button
            variant="text"
            endIcon={<ArrowRightAltIcon />}
            className=" hover:text-white px-8 hover:bg-gradient-green  border-[1px] border-solid border-darkGreen  text-darkGreen"
          >
            About Us
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/happyImage.png"
            alt="Picture of the author"
            sizes="100vw"
            style={{
              width: "60%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
      </section>

      <div className="mt-10">
        <section className="text-center">
          <p className="text-sm text-textColor mb-2">
            Our mission is to foster the growth of your business.
          </p>
          <p className="text-[30px] my-2 leading-4 text-lightRadientGreen">
            Elevating your visionary solution with a blend of outmost
          </p>
          <p className="text-[30px] my-2  text-lightRadientGreen">
            professionalism and meticulous care.
          </p>
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
