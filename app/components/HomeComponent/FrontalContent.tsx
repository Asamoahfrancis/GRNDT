import { Button } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const FrontalContent = () => {
  return (
    <div className="flex h-[500px] items-center text-center justify-center">
      <section className="text-white">
        <h1 className="md:text-[82px] text-[50px] leading-6">Elevate Your</h1>
        <h2 className="md:text-[82px] text-[50px] ">
          <span className="text-darkGreen">Digital</span> Presence
        </h2>
        <p className="md:leading-3 md:-mt-2 text-[20px]">
          By transforming Ideas into Exceptional Software Solutions.
        </p>
        <div className=" justify-center gap-4  flex mt-6">
          <Button
            variant="text"
            endIcon={<ArrowRightAltIcon />}
            className="  bg-gradient-green hover:bg-none hover:border-solid hover:border text-white"
          >
            Learn More
          </Button>
          <Button
            variant="text"
            endIcon={<ArrowRightAltIcon />}
            className="border  border-solid hover:bg-gradient-green hover:border-none text-white"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FrontalContent;
