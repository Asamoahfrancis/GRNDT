import { Button } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const FrontalContent = () => {
  return (
    <div className="flex h-[500px] items-center text-center justify-center">
      <section className="text-white">
        <h1 className="md:text-[82px] text-[30px] leading-6">Elevate Your</h1>
        <h2 className="md:text-[82px] text-[30px] ">
          <span className="text-darkGreen">Digital</span> Presence
        </h2>
        <p className="md:leading-3 md:-mt-2 text-[15px]">
          By transforming Ideas into Exceptional Software Solutions.
        </p>
        <div className=" justify-center gap-4  flex mt-6">
          <Button
            variant="text"
            endIcon={<ArrowRightAltIcon />}
            className=" hover:delay-100 hover:transition-all hover:ease-in-out hover:duration-500 bg-green-600 hover:bg-none hover:border-solid hover:border text-white"
          >
            Learn More
          </Button>
          <Button
            variant="text"
            endIcon={<ArrowRightAltIcon />}
            className="hover:delay-100 hover:transition-all hover:ease-in-out hover:duration-500 border  border-solid hover:bg-green-500 hover:border-none text-white"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FrontalContent;
