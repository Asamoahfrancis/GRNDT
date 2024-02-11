import React, { FC } from "react";
import ServiceCard from "./ServiceCard";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const serviceData = [
  {
    id: "s1",
    title: "Software Development",
    data: "Employing top-tier web and mobile development tools and languages, we engineer flawless and user-friendly websites and web applications tailored for our clients.",
    logo: "/code-circle.png",
    links: "/software-development",
  },
  {
    id: "s2",
    title: "Branding",
    data: "We create visually striking logos and websites, while executing impactful digital marketing campaigns to unleash the full potential of your business.",
    logo: "/ranking.png",
    links: "/branding",
  },
  {
    id: "s3",
    title: "User Experience Design",
    data: `We engage in user research
    and meticulously synthesize
    the findings, transforming
    them into clear user flows,
    information architectures,
    and interaction prototypes.`,
    logo: "/monitor.png",
    links: "/user-experience",
  },
  {
    id: "s4",
    title: "Web Hosting",
    data: `We provide budget-friendly,
    optimized, secure, and fast web
    hosting services for websites
    and applications, ensuring a
    99% uptime to support the
    growth of your business.`,
    logo: "/cloud-connection.png",
    links: "/web-hosting",
  },
];
const ServicesSection = () => {
  return (
    <div className="w-full md:my-20 lg:my-0">
      <section className="md:px-[50px] px-4  mx-auto max-w-[1444px]  text-center md:mb-20 ">
        <div className="py-6 md:py-0 my-6 md:my-6">
          <p className="text-center text-sm text-textColor my-2 md:my-0">
            OUR SERVICES
          </p>
          <p className="text-center lg:text-[30px]  md:text-[20px]   text-lightRadientGreen">
            Explore Our Services
          </p>
        </div>
        <div className=" grid grid-col-1 md:grid-cols-2  lg:grid-cols-4 gap-4  text-base ">
          {serviceData.map((service: any) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              logo={service.logo}
              data={service.data}
              links={service.links}
            />
          ))}
        </div>

        <div className="my-10 md:my-0">
          <Button
            variant="text"
            endIcon={<ArrowRightAltIcon />}
            className="bg-gradient-green md:mt-10 px-4 hover:border-lightRadientGreen hover:bg-gradient-inverse text-white transition-all duration-300 ease-in-out"
          >
            ALL SERVICES
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
