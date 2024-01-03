import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PortfolioData = () => {
  return (
    <div className=" w-full   px-[50px] ">
      <section className=" text-center my-20 pb-24">
        <p className="text-sm text-textColor ">PORTFOLIO</p>
        <p className="text-[30px]  text-lightRadientGreen">Our Works</p>
        <div className="mt-5">
          <Button
            variant="text"
            size="small"
            className=" mx-3 bg-gradient-green px-8  border-[1px] border-solid bg-white border-lightRadientGreen  text-white"
          >
            All
          </Button>
          <Button
            variant="text"
            size="small"
            className=" mx-3 hover:bg-gradient-green px-8 hover:text-white  bg-white border-[1px] border-solid border-lightRadientGreen  text-lightRadientGreen"
          >
            Branding
          </Button>
          <Button
            variant="text"
            size="small"
            className="mx-3  hover:bg-gradient-green px-8  hover:text-white bg-white border-[1px] border-solid border-lightRadientGreen  text-lightRadientGreen"
          >
            Mobile Dev
          </Button>
          <Button
            variant="text"
            size="small"
            className=" mx-3 hover:bg-gradient-green px-8 hover:text-white bg-white  border-[1px] border-solid border-lightRadientGreen  text-lightRadientGreen"
          >
            Web Dev
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
          <section>
            <div>
              <Image
                src="/mireku one.png"
                width={387}
                height={250}
                alt="Picture of the author"
              />
            </div>
            <p className="text-xs text-textColor mt-3 tracking-widest ">
              BRANDING
            </p>
            <p>Mireku Duker Foundation Branding</p>
          </section>
          <section>
            <div>
              <Image
                src="/kanvas paint.png"
                width={387}
                height={250}
                alt="Picture of the author"
              />
            </div>
            <p className="text-xs text-textColor mt-3 tracking-widest ">
              UI/UX
            </p>
            <p>KNVAS</p>
          </section>
          <section>
            <div>
              <Image
                src="/xtra petro.png"
                width={387}
                height={250}
                alt="Picture of the author"
              />
            </div>
            <p className="text-xs text-textColor mt-3 tracking-widest ">
              BRANDING
            </p>
            <p>Extra Petroleum Logo & Branding</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default PortfolioData;
