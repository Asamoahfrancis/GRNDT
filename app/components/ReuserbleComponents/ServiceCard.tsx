import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ServiceCard = ({
  title,
  data,
  logo,
  links,
}: {
  title: string;
  data: string;
  logo: string;
  links: string;
}) => {
  return (
    <section className=" py-4 px-2 bg-gradient-service  rounded-md">
      <div className=" text-textColor flex flex-col bg-white md:h-[300px] shadow-sm pb-4  rounded-md  px-2">
        <div className="flex justify-center md:mt-4">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <p className="text-lightRadientGreen">{title}</p>
        <p className="mb-auto mt-4 pb-2">{data}</p>
        <div>
          <Button
            variant="text"
            href={links}
            size="small"
            endIcon={<ArrowRightAltIcon />}
            className="px-8 hover:text-white  hover:bg-gradient-green  border-[1px]  border-solid border-darkGreen  text-darkGreen"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
