import React from "react";
import ServiceActualDataCard from "./ServiceActualDataCard";
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
    title: "User Interface Design",
    data: `We thoughtfully apply color theory,
    typography, and visual aesthetics to
    craft high-quality mockups, graphics,
    layouts, wireframes, and
    prototypes.`,
    logo: "/monitor.png",
    links: "/user-interface",
  },

  {
    id: "s5",
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
const ServicesActualSection = () => {
  return (
    <section className="md:px-[50px] text-center mb-20 ">
      <div className="  my-20">
        <p className="text-center text-sm text-textColor ">OUR SERVICES</p>
        <p className="text-center text-[30px]  text-lightRadientGreen">
          Explore Our Services
        </p>
      </div>
      <div className=" md:flex px-[10px] grid grid-cols-1 gap-4 flex-wrap justify-center text-base ">
        {serviceData.map((service: any) => (
          <ServiceActualDataCard
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

export default ServicesActualSection;
