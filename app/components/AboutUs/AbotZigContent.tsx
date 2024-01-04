import React from "react";
import ServiceCard from "../ReuserbleComponents/ServiceCard";
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
const AbotZigContent = () => {
  return (
    <section className="md:px-[50px] md:absolute top-[20%] left-0 text-center mb-20 ">
      <div className="py-10 md:py-0">
        <p className="text-center text-xl md:text-sm text-textColor md:pt-0 tracking-widest md:tracking-normal pt-10 ">
          OUR SERVICES
        </p>
        <p className="text-center text-[25px] md:text-[30px]  text-lightRadientGreen">
          Explore Our Services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-base px-[10px] md:px-0 ">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            logo={service.logo}
            data={service.data}
            links={service.links}
          />
        ))}
      </div>

      <div>
        <Button
          variant="text"
          endIcon={<ArrowRightAltIcon />}
          className="  bg-gradient-green mt-10 hover:border-lightRadientGreen hover:text-lightRadientGreen hover:bg-none hover:border-solid hover:border text-white"
        >
          ALL SERVICES
        </Button>
      </div>
    </section>
  );
};

export default AbotZigContent;
