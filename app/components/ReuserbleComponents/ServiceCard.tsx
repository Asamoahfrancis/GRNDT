import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ServiceCard = () => {
  return (
    <section className=" py-4 px-2 bg-gradient-service  rounded-md">
      <div className=" text-textColor flex flex-col bg-white h-[300px] shadow-sm pb-4  rounded-md  px-2">
        <div className="flex justify-center mt-4">
          <Image
            src="/code-circle.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <p className="text-lightRadientGreen">Software Development</p>
        <p className="mb-auto mt-4 pb-2">
          Employing top-tier web and mobile development tools and languages, we
          engineer flawless and user-friendly websites and web applications
          tailored for our clients.
        </p>
        <div>
          <Button
            variant="text"
            size="small"
            endIcon={<ArrowRightAltIcon />}
            className="  hover:bg-gradient-green  border-[1px]  border-solid border-darkGreen  text-darkGreen"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
