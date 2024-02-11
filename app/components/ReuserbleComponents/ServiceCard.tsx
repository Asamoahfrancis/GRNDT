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
    <section className="  bg-gradient-service hover:bg-green-600 hover:bg-none  p-3   transition-colors duration-500 ease-in-out  group cursor-pointer rounded-md flex justify-center items-center">
      <div className=" text-textColor  w-[95%] h-full  flex flex-col  py-10 px-4 bg-white shadow-md rounded-md group-hover:bg-white group-hover:scale-y-105 group-hover:scale-x-110 transition-all ease-in-out duration-500 ">
        <div className="flex group-hover:scale-110 transition-all ease-in-out duration-500 mb-4 justify-center ">
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
