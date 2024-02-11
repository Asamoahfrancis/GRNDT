import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SmallZigzagContent = () => {
  return (
    <div className="md:absolute  md:top-[0%] lg:top-[20%]   h-full left-0  w-full  md:px-[50px] ">
      <section className=" text-center max-w-[1444px] mx-auto ">
        <p className="   md:text-sm text-textColor  tracking-widest  translate-y-20 md:translate-y-0 md:mt-20 lg:mt-0 text-xl ">
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

        <div className="grid  px-[10px] md:px-0 bg-gradient-service grid-cols-1 md:grid-cols-2  lg:grid-cols-3   gap-4  md:mt-20 ">
          <section className="flex group md:block gap-2 flex-col items-center justify-center">
            <div className="border border-green-500 rounded-md relative w-[95%]  min-h-[300px] group-hover:bg-green-600 hover:bg-none  p-3   transition-colors duration-500 ease-in-out  group cursor-pointer ">
              <Image
                src="/vau.png"
                alt="Picture of the author"
                sizes="238px"
                fill
                style={{
                  objectFit: "contain",
                }}
                className="lg:group-hover:scale-y-[1.28] lg:group-hover:scale-x-[1.09] md:group-hover:scale-y-[1.6] md:group-hover:scale-x-[1.09] group-hover:scale-x-[1.21] group-hover:scale-y-[1.15] transition-all ease-in-out duration-500 p-2"
              />
            </div>
            <p className="text-xs text-textColor md:mt-3 tracking-widest ">
              WEB & MOBILE PLATFORM
            </p>
            <p>KNVAS Work Experience Platform</p>
          </section>
          <section className="flex md:block gap-2 flex-col items-center justify-center">
            <div className="border border-green-500 rounded-md group relative w-[95%] min-h-[300px] hover:bg-green-600 hover:bg-none  p-3   transition-colors duration-500 ease-in-out  group cursor-pointer ">
              <Image
                src="/black.png"
                alt="Picture of the author"
                sizes="375px"
                fill
                style={{
                  objectFit: "contain",
                }}
                className="group-hover:scale-[1.05] transition-all ease-in-out duration-500 p-4 lg:group-hover:scale-y-[1.25] lg:group-hover:scale-x-[1.06] "
              />
            </div>
            <p className="text-xs  text-textColor mt-3 tracking-widest ">
              WEB PLATFORM
            </p>
            <p>INVACTOR Web Platform</p>
          </section>
          <section className="flex gap-2 md:block flex-col items-center justify-center">
            <div className="border border-green-500 rounded-md w-[95%] relative min-h-[300px] hover:bg-green-600 hover:bg-none  p-3   transition-colors duration-500 ease-in-out  group cursor-pointer ">
              <Image
                src="/thebagshop.png"
                alt="Picture of the author"
                sizes="375px"
                fill
                style={{
                  objectFit: "contain",
                }}
                className="group-hover:scale-[1.05] transition-all ease-in-out duration-500 p-4 lg:group-hover:scale-y-[1.25] lg:group-hover:scale-x-[1.06] "
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
          className="bg-gradient-green px-4 mt-6 md:mt-10 hover:border-lightRadientGreen hover:bg-gradient-inverse text-white transition-all duration-300 ease-in-out"
        >
          ALL SERVICES
        </Button>
      </section>
    </div>
  );
};

export default SmallZigzagContent;
