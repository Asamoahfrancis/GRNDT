import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SmallZigzagContent = () => {
  return (
    <div className="md:absolute    md:top-[20%]  h-full left-0  w-full   md:px-[50px] ">
      <section className=" text-center ">
        <p className="   md:text-sm text-textColor    translate-y-20 md:translate-y-0  text-xl ">
          PORTFOLIO
        </p>
        <p className=" md:text-[30px] text-[20px] text-4xl  mt-20 md:mt-0  text-lightRadientGreen">
          Our Works
        </p>
        <div className="relative z-20 md:mt-5 my-8 md:my-0  flex gap-2 md:gap-6  justify-center">
          <Button
            variant="text"
            size="small"
            href="/"
            className=" text-[12px]  bg-gradient-green md:px-8  border-[1px] border-solid bg-white border-lightRadientGreen  text-white"
          >
            All
          </Button>
          <Button
            variant="text"
            href="/branding"
            size="small"
            className="  hover:bg-gradient-green md:px-8  hover:text-white  bg-white border-[1px] border-solid border-lightRadientGreen  text-lightRadientGreen"
          >
            Branding
          </Button>
          <Button
            variant="text"
            size="small"
            className=" hover:bg-gradient-green md:px-8   hover:text-white bg-white border-[1px] border-solid border-lightRadientGreen  text-lightRadientGreen"
          >
            Mobile Dev{" "}
          </Button>
          <Button
            variant="text"
            size="small"
            className=" hover:bg-gradient-green md:px-8  hover:text-white bg-white  border-[1px] border-solid border-lightRadientGreen  text-lightRadientGreen"
          >
            Web Dev{" "}
          </Button>
        </div>

        <div className="grid  px-[10px] md:px-0 bg-gradient-service grid-cols-1 md:grid-cols-3 md:gap-4 gap-10  md:mt-20 ">
          <section className="flex md:block gap-2 flex-col items-center justify-center">
            <div>
              <Image
                src="/vau.png"
                width={387}
                height={250}
                alt="Picture of the author"
              />
            </div>
            <p className="text-xs text-textColor md:mt-3 tracking-widest ">
              WEB & MOBILE PLATFORM
            </p>
            <p>KNVAS Work Experience Platform</p>
          </section>
          <section className="flex md:block gap-2 flex-col items-center justify-center">
            <div>
              <Image
                src="/black.png"
                width={387}
                height={250}
                alt="Picture of the author"
              />
            </div>
            <p className="text-xs  text-textColor mt-3 tracking-widest ">
              WEB PLATFORM
            </p>
            <p>INVACTOR Web Platform</p>
          </section>
          <section className="flex gap-2 md:block flex-col items-center justify-center">
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
          className="hover:text-lightRadientGreen my-20   bg-gradient-green mt-10 hover:bg-none hover:border-solid hover:border text-white"
        >
          ALL SERVICES
        </Button>
      </section>
    </div>
  );
};

export default SmallZigzagContent;
