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
    <section className="  bg-gradient-service hover:bg-green-600 hover:bg-none  w-[285px] h-[373px]  transition-colors duration-500 ease-in-out   group cursor-pointer rounded-md flex justify-center items-center">
      <div className=" text-textColor py-6 flex flex-col justify-between items-center w-[245px] h-[333px] bg-white  rounded-md group-hover:bg-white group-hover:w-[275px] group-hover:h-[363px] transition-all ease-in-out duration-500 ">
        <div className="flex group-hover:scale-110 transition-all ease-in-out duration-500 items-center justify-center ">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <p className="text-lightRadientGreen">{title}</p>
        <p className=" pb-2   max-w-[240px]  grid place-items-center   overflow-hidden ">
          {data}
        </p>
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
