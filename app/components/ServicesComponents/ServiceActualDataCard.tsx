import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ServiceActualDataCard = ({
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
    <section className=" basis-[30%]   p-4 bg-gradient-service hover:bg-none hover:bg-green-600 transition-colors duration-500 ease-in-out  group cursor-pointer rounded-md">
      <div className=" text-textColor px-4 h-full flex flex-col  bg-white  pb-4   rounded-md  md:group-hover:scale-y-105  group-hover:bg-white  group-hover:scale-105  transition-all ease-in-out duration-500 ">
        <div className="flex justify-center mt-4 group-hover:scale-110   transition-all ease-in-out duration-600">
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
            size="small"
            href={links}
            endIcon={<ArrowRightAltIcon />}
            className="bg-gradient-green mt-6 px-4 hover:border-lightRadientGreen hover:bg-gradient-inverse text-white transition-all duration-300 ease-in-out"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceActualDataCard;
