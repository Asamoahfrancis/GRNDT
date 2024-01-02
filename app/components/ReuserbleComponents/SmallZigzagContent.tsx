import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SmallZigzagContent = () => {
  return (
    <div className="absolute top-[20%] left-0  w-full   px-[50px] ">
      <section className=" text-center">
        <p className="text-sm text-textColor ">PORTFOLIO</p>
        <p className="text-[30px]  text-lightRadientGreen">Our Works</p>
        <div className="mt-5">
          <Button
            variant="text"
            size="small"
            className=" mx-3 bg-gradient-green px-8  border-[1px] border-solid bg-white border-lightRadientGreen  text-white"
          >
            About Us
          </Button>
          <Button
            variant="text"
            size="small"
            className=" mx-3 hover:bg-gradient-green px-8 hover:text-white  bg-white border-[1px] border-solid border-lightRadientGreen  text-lightRadientGreen"
          >
            About Us
          </Button>
          <Button
            variant="text"
            size="small"
            className="mx-3  hover:bg-gradient-green px-8  hover:text-white bg-white border-[1px] border-solid border-lightRadientGreen  text-lightRadientGreen"
          >
            About Us
          </Button>
          <Button
            variant="text"
            size="small"
            className=" mx-3 hover:bg-gradient-green px-8 hover:text-white bg-white  border-[1px] border-solid border-lightRadientGreen  text-lightRadientGreen"
          >
            About Us
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-20 ">
          <section>
            <div>
              <Image
                src="/vau.png"
                width={387}
                height={250}
                alt="Picture of the author"
              />
            </div>
            <p className="text-xs text-textColor mt-3 tracking-widest ">
              WEB & MOBILE PLATFORM
            </p>
            <p>KNVAS Work Experience Platform</p>
          </section>
          <section>
            <div>
              <Image
                src="/black.png"
                width={387}
                height={250}
                alt="Picture of the author"
              />
            </div>
            <p className="text-xs text-textColor mt-3 tracking-widest ">
              WEB PLATFORM
            </p>
            <p>INVACTOR Web Platform</p>
          </section>
          <section>
            <div>
              <Image
                src="/thebagshop.png"
                width={387}
                height={250}
                alt="Picture of the author"
              />
            </div>
            <p className="text-xs text-textColor mt-3 tracking-widest ">
              WEB & MOBILE PLATFORM
            </p>
            <p>THEBAGSHOPGH DASHBOARD</p>
          </section>
        </div>
        <Button
          variant="text"
          endIcon={<ArrowRightAltIcon />}
          className="  bg-gradient-green mt-10 hover:bg-none hover:border-solid hover:border text-white"
        >
          ALL SERVICES
        </Button>
      </section>
    </div>
  );
};

export default SmallZigzagContent;
