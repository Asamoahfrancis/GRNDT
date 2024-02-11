import { Button } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const FrontalContent = () => {
  return (
    <div className="flex h-[500px] items-center text-center justify-center">
      <section className="text-white">
        <h1 className="md:text-[60px] text-[40px]  leading-6">Elevate Your</h1>
        <h2 className="md:text-[60px] text-[40px] ">
          <span className="text-darkGreen">Digital</span> Presence
        </h2>
        <p className="md:leading-3  text-[20px] ">
          By transforming Ideas into Exceptional Software Solutions.
        </p>
        <div className=" justify-center gap-4 mt-7  flex">
          <Button
            variant="text"
            href="/services"
            endIcon={<ArrowRightAltIcon />}
            className="bg-gradient-green  px-4 hover:border-lightRadientGreen hover:bg-gradient-inverse text-white transition-all duration-300 ease-in-out"
          >
            Learn More
          </Button>
          <Button
            variant="text"
            href="/contact-us"
            endIcon={<ArrowRightAltIcon />}
            className=" border  border-solid px-4  text-white"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FrontalContent;
