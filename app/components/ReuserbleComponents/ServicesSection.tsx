import React from "react";
import ServiceCard from "./ServiceCard";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ServicesSection = () => {
  return (
    <section className="px-[50px] text-center mb-20">
      <div className="  ">
        <p className="text-center text-sm text-textColor ">OUR SERVICES</p>
        <p className="text-center text-[30px]  text-lightRadientGreen">
          Explore Our Services
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

      <div>
        <Button
          variant="text"
          endIcon={<ArrowRightAltIcon />}
          className="  bg-gradient-green mt-10 hover:bg-none hover:border-solid hover:border text-white"
        >
          ALL SERVICES
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;
